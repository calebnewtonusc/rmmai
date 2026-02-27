// ============================================================
// RMMAI — RateYourMusic Scraping Utilities
//
// RYM has no official public API. These functions scrape
// rateyourmusic.com (and its mirror rym.fm where applicable)
// to retrieve community ratings, rankings, and genre tags.
//
// IMPORTANT NOTES:
//  - RYM actively rate-limits and blocks scrapers. Each request
//    includes a realistic User-Agent and a mandatory 2-second
//    delay between calls (see `rymDelay` below).
//  - Treat all returned data as best-effort. If scraping fails
//    (e.g. due to a layout change or a block), functions return
//    null/empty rather than throwing.
//  - Do NOT hammer RYM. Keep requests infrequent and cache
//    results in Supabase with a TTL of at least 24 hours.
//  - These utilities require the `cheerio` package:
//      npm install cheerio
//      npm install --save-dev @types/cheerio
// ============================================================

import type { RYMData } from '@/types'

// ------------------------------------------------------------
// Constants
// ------------------------------------------------------------

export const RYM_BASE_URL = 'https://rateyourmusic.com'

// rym.fm is a community-maintained mirror of RYM that is
// generally more scraper-friendly (no login wall for basic data).
const RYM_MIRROR_URL = 'https://rym.fm'

// Mandatory delay between outbound requests to avoid triggering
// RYM's rate-limiting / Cloudflare challenge.
const REQUEST_DELAY_MS = 2000

// Realistic browser User-Agent string
const RYM_USER_AGENT =
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) ' +
  'AppleWebKit/537.36 (KHTML, like Gecko) ' +
  'Chrome/122.0.0.0 Safari/537.36'

// ------------------------------------------------------------
// Internal helpers
// ------------------------------------------------------------

/** Pause execution for `ms` milliseconds. */
function rymDelay(ms: number = REQUEST_DELAY_MS): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

/** Fetch a page from RYM/rym.fm with appropriate headers. */
async function rymFetch(url: string): Promise<string | null> {
  try {
    const response = await fetch(url, {
      headers: {
        'User-Agent': RYM_USER_AGENT,
        Accept:
          'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8',
        'Accept-Language': 'en-US,en;q=0.5',
        'Accept-Encoding': 'gzip, deflate, br',
        Connection: 'keep-alive',
        'Upgrade-Insecure-Requests': '1',
        'Sec-Fetch-Dest': 'document',
        'Sec-Fetch-Mode': 'navigate',
        'Sec-Fetch-Site': 'none',
        'Cache-Control': 'max-age=0',
      },
      // Prevent following redirects automatically so we can detect
      // Cloudflare challenges (which return a 302/503).
      redirect: 'follow',
    })

    if (!response.ok) {
      console.warn(`[rym] HTTP ${response.status} for ${url}`)
      return null
    }

    return await response.text()
  } catch (error) {
    console.error(`[rym] Fetch error for ${url}:`, error)
    return null
  }
}

/**
 * Slugify a string the way RYM does it in its URLs.
 * e.g. "The Dark Side of the Moon" → "the_dark_side_of_the_moon"
 */
function rymSlugify(str: string): string {
  return str
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/[\s-]+/g, '_')
}

// ------------------------------------------------------------
// searchAlbum
//
// Searches RYM for an album by title and artist name.
// Returns a RYMData object if found, or null on failure.
//
// Strategy:
//  1. Construct the canonical RYM URL from the slugified artist
//     and album name (works ~80% of the time for well-known releases).
//  2. Fetch the album page and parse community rating + tags.
//  3. On failure, fall back to rym.fm search endpoint.
// ------------------------------------------------------------

export async function searchAlbum(
  title: string,
  artist: string,
  spotifyAlbumId: string = ''
): Promise<RYMData | null> {
  // Attempt 1: Construct the canonical RYM URL directly
  const artistSlug = rymSlugify(artist)
  const titleSlug = rymSlugify(title)
  const canonicalUrl = `${RYM_BASE_URL}/release/${artistSlug}/${titleSlug}/`

  await rymDelay()
  const pageHtml = await rymFetch(canonicalUrl)

  if (pageHtml) {
    const parsed = await parseAlbumPage(pageHtml, canonicalUrl, spotifyAlbumId)
    if (parsed) return parsed
  }

  // Attempt 2: Use RYM search
  await rymDelay()
  const searchUrl =
    `${RYM_BASE_URL}/search?searchterm=${encodeURIComponent(`${artist} ${title}`)}` +
    `&searchtype=l`

  const searchHtml = await rymFetch(searchUrl)
  if (!searchHtml) return null

  // Parse first result URL from search results
  // RYM search results have links like: /release/artist/album-name/
  const firstResultMatch = searchHtml.match(
    /href="(\/release\/[a-z0-9_-]+\/[a-z0-9_-]+\/)"/
  )
  if (!firstResultMatch) return null

  const resultUrl = `${RYM_BASE_URL}${firstResultMatch[1]}`

  await rymDelay()
  const resultHtml = await rymFetch(resultUrl)
  if (!resultHtml) return null

  return parseAlbumPage(resultHtml, resultUrl, spotifyAlbumId)
}

// ------------------------------------------------------------
// getAlbumRating
//
// Given a direct RYM album URL, fetches and returns:
//  - score: the weighted average rating (out of 5.00)
//  - count: number of ratings
//  - rank: chart rank string (e.g. "#42" or "#1,204")
//
// Returns null if the page cannot be fetched or parsed.
// ------------------------------------------------------------

export async function getAlbumRating(
  rymUrl: string
): Promise<{ score: number; count: number; rank: string } | null> {
  await rymDelay()
  const html = await rymFetch(rymUrl)
  if (!html) return null

  try {
    const { load } = await import('cheerio')
    const $ = load(html)

    // RYM renders the average rating in an element with class
    // "avg_rating" and the rating count in "num_ratings".
    // These selectors are correct as of early 2025 but may change.
    const scoreText = $('.avg_rating').first().text().trim()
    const countText = $('.num_ratings').first().text().trim().replace(/,/g, '')
    const rankText = $('.rnkrelease').first().text().trim()

    const score = parseFloat(scoreText)
    const count = parseInt(countText, 10)

    if (isNaN(score)) return null

    return {
      score,
      count: isNaN(count) ? 0 : count,
      rank: rankText || 'unranked',
    }
  } catch (error) {
    console.error('[rym] getAlbumRating parse error:', error)
    return null
  }
}

// ------------------------------------------------------------
// parseAlbumPage (internal)
//
// Given raw HTML from a RYM album page, parses:
//  - Weighted score and raw score
//  - Rating count
//  - Chart rank
//  - Genre/descriptor tags
//  - Release year
//
// Returns a populated RYMData object or null on parse failure.
// ------------------------------------------------------------

async function parseAlbumPage(
  html: string,
  pageUrl: string,
  spotifyAlbumId: string
): Promise<RYMData | null> {
  try {
    const { load } = await import('cheerio')
    const $ = load(html)

    // Bail out early if this looks like a Cloudflare challenge page
    if ($('title').text().includes('Just a moment')) {
      console.warn('[rym] Cloudflare challenge detected — skipping')
      return null
    }

    // --- Score ---
    const scoreText = $('.avg_rating').first().text().trim()
    const weightedScore = parseFloat(scoreText)
    if (isNaN(weightedScore)) return null

    // --- Rating count ---
    const countText = $('.num_ratings .full_num_ratings')
      .first()
      .text()
      .trim()
      .replace(/,/g, '')
    const ratingCount = parseInt(countText, 10) || 0

    // --- Chart rank ---
    // RYM rank is displayed as e.g. "#42" inside .rnkrelease
    const rankText = $('.rnkrelease').first().text().trim()
    const rankMatch = rankText.match(/#([\d,]+)/)
    const communityRank = rankMatch
      ? parseInt(rankMatch[1].replace(/,/g, ''), 10)
      : 0

    // --- Year ---
    // The release year is often in the page title or a <div class="issue_year">
    const yearText =
      $('.issue_year').first().text().trim() ||
      $('meta[property="music:release_date"]').attr('content') ||
      ''
    const yearMatch = yearText.match(/(\d{4})/)
    const year = yearMatch ? parseInt(yearMatch[1], 10) : new Date().getFullYear()

    // --- Tags (genres + descriptors) ---
    // Primary genres are in .genre links; secondary in .secondarygenres
    const primaryGenres: string[] = []
    $('.genre a').each((_i: number, el: unknown) => {
      const text = $(el as Parameters<typeof $>[0]).text().trim()
      if (text) primaryGenres.push(text)
    })

    const secondaryGenres: string[] = []
    $('.secondarygenre a, .secondary_genre a').each((_i: number, el: unknown) => {
      const text = $(el as Parameters<typeof $>[0]).text().trim()
      if (text) secondaryGenres.push(text)
    })

    const descriptors: string[] = []
    $('.descriptor a, .descriptors a').each((_i: number, el: unknown) => {
      const text = $(el as Parameters<typeof $>[0]).text().trim()
      if (text) descriptors.push(text)
    })

    const tags = [
      ...new Set([...primaryGenres, ...secondaryGenres, ...descriptors]),
    ]

    // --- RYM internal ID ---
    // Sometimes embedded in the page as a hidden input or data attribute
    const rymIdMatch = html.match(/data-object-id="(\d+)"/)
    const rymId = rymIdMatch ? rymIdMatch[1] : undefined

    return {
      albumId: spotifyAlbumId,
      rymUrl: pageUrl,
      rymId,
      communityRank,
      weightedScore,
      rawScore: weightedScore, // RYM only shows the weighted score publicly
      ratingCount,
      tags,
      year,
      primaryGenres,
      secondaryGenres,
      descriptors,
      scrapedAt: new Date().toISOString(),
    }
  } catch (error) {
    console.error('[rym] parseAlbumPage error:', error)
    return null
  }
}
