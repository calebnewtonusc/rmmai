"use client";
import {
  Star,
  Play,
  Plus,
  ExternalLink,
  Users,
  ChevronLeft,
  Heart,
  Share2,
} from "lucide-react";
import Link from "next/link";

// ─────────────────────────────────────────────
// Static data (simulates a DB/API fetch by id)
// ─────────────────────────────────────────────

const album = {
  id: "blonde-frank-ocean",
  title: "Blonde",
  artist: "Frank Ocean",
  year: 2016,
  label: "Boys Don't Cry",
  genres: ["R&B", "Soul", "Experimental"],
  rmmaiRating: 9.2,
  totalRatings: 4821,
  starRating: 4.5,
  rymRank: "#42 in R&B",
  rymScore: "4.21",
  rymYearRank: "5th best album of 2016",
  rymTags: ["neo soul", "art pop", "ambient", "lo-fi", "indie r&b", "avant-garde"],
  tracks: [
    { num: 1, title: "Nikes", duration: "5:14", rating: 9.1 },
    { num: 2, title: "Ivy", duration: "4:09", rating: 9.4 },
    { num: 3, title: "Pink + White", duration: "3:03", rating: 9.6 },
    { num: 4, title: "Be Yourself", duration: "1:28", rating: null },
    { num: 5, title: "Solo", duration: "4:24", rating: 9.2 },
    { num: 6, title: "Skyline To", duration: "3:41", rating: 8.8 },
    { num: 7, title: "Self Control", duration: "4:09", rating: 9.7 },
    { num: 8, title: "Good Guy", duration: "1:57", rating: null },
    { num: 9, title: "Nights", duration: "5:07", rating: 9.8 },
    { num: 10, title: "Solo (Reprise)", duration: "1:09", rating: null },
    { num: 11, title: "Pretty Sweet", duration: "3:27", rating: 8.6 },
    { num: 12, title: "Facebook Story", duration: "1:55", rating: null },
    { num: 13, title: "Close to You", duration: "1:01", rating: null },
    { num: 14, title: "White Ferrari", duration: "4:09", rating: 9.5 },
    { num: 15, title: "Seigfried", duration: "5:28", rating: 9.3 },
    { num: 16, title: "Godspeed", duration: "2:41", rating: 9.4 },
    { num: 17, title: "Futura Free", duration: "9:09", rating: 9.0 },
  ],
  reviews: [
    {
      id: 1,
      username: "melisande_r",
      avatar: "M",
      avatarColor: "#a855f7",
      date: "Nov 14, 2024",
      rating: 10,
      text:
        "Blonde is not an album so much as it is a sustained mood — a liquid, evanescent thing that resists being pinned down by genre or tempo. Frank Ocean crafts vulnerability into architecture here, each track a room in a house you are not sure you are allowed to leave. 'Self Control' alone contains multitudes that most artists spend entire careers chasing.",
    },
    {
      id: 2,
      username: "theo_listens",
      avatar: "T",
      avatarColor: "#3b82f6",
      date: "Jan 3, 2025",
      rating: 9,
      text:
        "There is a looseness to Blonde that initially feels like formlessness, but on repeated listens reveals itself as the most deliberate kind of control. Ocean strips back the maximalism of Channel Orange and arrives somewhere quieter and more honest. The production — half-finished beats, guitar that sounds recorded in a stairwell — is the point.",
    },
    {
      id: 3,
      username: "cass_wren",
      avatar: "C",
      avatarColor: "#ec4899",
      date: "Feb 19, 2025",
      rating: 10,
      text:
        "I have listened to 'Nights' approximately four hundred times and I am no closer to understanding what it does to me. Blonde occupies the rare category of albums that feel biographical without ever being confessional — you learn everything about Frank Ocean by learning nothing provable at all. It is a record about longing that itself seems to long for something just outside its own frame.",
    },
    {
      id: 4,
      username: "august_plays",
      avatar: "A",
      avatarColor: "#f97316",
      date: "Mar 2, 2025",
      rating: 8,
      text:
        "A singular work that essentially invented its own aesthetic language and then refused to explain it. Some tracks feel like sketches where a full painting was warranted, but the overall effect is one of rare emotional precision. Ocean's falsetto has never sounded more like a confession delivered sideways.",
    },
  ],
  friends: [
    {
      id: 1,
      name: "Jordan K.",
      avatar: "J",
      avatarColor: "#22c55e",
      rating: 9.5,
      take: "Nights might be the greatest song of the decade.",
    },
    {
      id: 2,
      name: "Priya S.",
      avatar: "P",
      avatarColor: "#3b82f6",
      rating: 8.0,
      take: "Beautiful but I always get lost around track 10.",
    },
    {
      id: 3,
      name: "Marcus T.",
      avatar: "M",
      avatarColor: "#f97316",
      rating: 10,
      take: "Perfect record. Nothing else needs to be said.",
    },
    {
      id: 4,
      name: "Leila V.",
      avatar: "L",
      avatarColor: "#ec4899",
      rating: 9.0,
      take: "Self Control hits different every single time.",
    },
  ],
  similarAlbums: [
    { id: "1", title: "Channel Orange", artist: "Frank Ocean", rating: 9.0, color: "#f97316" },
    { id: "2", title: "4.44", artist: "JAY-Z", rating: 8.4, color: "#a855f7" },
    { id: "3", title: "Ctrl", artist: "SZA", rating: 8.8, color: "#ec4899" },
    { id: "4", title: "DAMN.", artist: "Kendrick Lamar", rating: 9.1, color: "#3b82f6" },
    { id: "5", title: "Rodeo", artist: "Travis Scott", rating: 8.5, color: "#22c55e" },
    { id: "6", title: "A Seat at the Table", artist: "Solange", rating: 8.7, color: "#ef4444" },
  ],
};

// ─────────────────────────────────────────────
// Helper components
// ─────────────────────────────────────────────

function StarRating({ rating, max = 5 }: { rating: number; max?: number }) {
  return (
    <div style={{ display: "flex", gap: "2px", alignItems: "center" }}>
      {Array.from({ length: max }).map((_, i) => {
        const filled = i + 1 <= Math.floor(rating);
        const half = !filled && i < rating && i + 0.5 <= rating;
        return (
          <Star
            key={i}
            size={16}
            fill={filled || half ? "var(--accent)" : "transparent"}
            color={filled || half ? "var(--accent)" : "var(--text-muted)"}
          />
        );
      })}
    </div>
  );
}

function Avatar({
  char,
  color,
  size = 32,
}: {
  char: string;
  color: string;
  size?: number;
}) {
  return (
    <div
      style={{
        width: size,
        height: size,
        borderRadius: "50%",
        background: `${color}33`,
        border: `1.5px solid ${color}66`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: size * 0.4,
        fontWeight: 600,
        color: color,
        flexShrink: 0,
      }}
    >
      {char}
    </div>
  );
}

// ─────────────────────────────────────────────
// Page
// ─────────────────────────────────────────────

export default function AlbumPage({ params }: { params: { id: string } }) {
  // In production, params.id would be used to fetch the album.
  // Here we use the static Blonde data regardless of id.
  void params;

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "var(--background)",
        color: "var(--text-primary)",
      }}
    >
      {/* ── Nav bar ── */}
      <nav
        className="glass"
        style={{
          position: "sticky",
          top: 0,
          zIndex: 50,
          padding: "0 32px",
          height: 56,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          borderBottom: "1px solid var(--border)",
        }}
      >
        <Link
          href="/discover"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 6,
            color: "var(--text-secondary)",
            textDecoration: "none",
            fontSize: 14,
            fontWeight: 500,
            transition: "color 0.15s",
          }}
        >
          <ChevronLeft size={18} />
          Back
        </Link>

        <span
          className="gradient-text"
          style={{ fontSize: 18, fontWeight: 700, letterSpacing: "-0.02em" }}
        >
          RMM.AI
        </span>

        <div style={{ display: "flex", gap: 8 }}>
          <button
            style={{
              background: "transparent",
              border: "1px solid var(--border)",
              borderRadius: 8,
              padding: "6px 10px",
              color: "var(--text-secondary)",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: 4,
              fontSize: 13,
            }}
          >
            <Heart size={14} />
            Save
          </button>
          <button
            style={{
              background: "transparent",
              border: "1px solid var(--border)",
              borderRadius: 8,
              padding: "6px 10px",
              color: "var(--text-secondary)",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: 4,
              fontSize: 13,
            }}
          >
            <Share2 size={14} />
            Share
          </button>
        </div>
      </nav>

      {/* ═══════════════════════════════════════ */}
      {/* SECTION 1 — Album Hero                 */}
      {/* ═══════════════════════════════════════ */}
      <section
        style={{
          width: "100%",
          background:
            "linear-gradient(180deg, #0d0d1a 0%, #0d0a14 60%, var(--background) 100%)",
          borderBottom: "1px solid var(--border)",
          padding: "48px 0 56px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Ambient glow blob */}
        <div
          aria-hidden
          style={{
            position: "absolute",
            top: -120,
            left: "20%",
            width: 500,
            height: 500,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(168,85,247,0.12) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />

        <div
          style={{
            maxWidth: 1100,
            margin: "0 auto",
            padding: "0 32px",
            display: "flex",
            gap: 40,
            alignItems: "flex-start",
            position: "relative",
            zIndex: 1,
          }}
          className="animate-fade-in-up"
        >
          {/* Album Art */}
          <div
            style={{
              width: 200,
              height: 200,
              borderRadius: 20,
              background:
                "linear-gradient(135deg, #1a1a2e 0%, #a855f7 60%, #ec4899 100%)",
              flexShrink: 0,
              boxShadow:
                "0 32px 64px rgba(168, 85, 247, 0.35), 0 8px 24px rgba(0,0,0,0.6)",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Inner texture layer */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "radial-gradient(ellipse at 30% 30%, rgba(255,255,255,0.08) 0%, transparent 60%)",
              }}
            />
            <div
              style={{
                position: "absolute",
                bottom: 16,
                left: 16,
                right: 16,
                height: 1,
                background: "rgba(255,255,255,0.15)",
              }}
            />
          </div>

          {/* Metadata */}
          <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 14 }}>
            {/* Genre badges */}
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              {album.genres.map((g) => (
                <span
                  key={g}
                  className="glass"
                  style={{
                    fontSize: 11,
                    fontWeight: 600,
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                    color: "var(--text-secondary)",
                    padding: "3px 10px",
                    borderRadius: 999,
                  }}
                >
                  {g}
                </span>
              ))}
            </div>

            {/* Title */}
            <h1
              style={{
                fontSize: 48,
                fontWeight: 700,
                letterSpacing: "-0.03em",
                lineHeight: 1.05,
                color: "var(--text-primary)",
                margin: 0,
              }}
            >
              {album.title}
            </h1>

            {/* Artist row */}
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <Avatar char="F" color="#a855f7" size={28} />
              <span
                style={{
                  fontSize: 22,
                  fontWeight: 500,
                  color: "var(--text-secondary)",
                }}
              >
                {album.artist}
              </span>
            </div>

            {/* Meta info */}
            <div
              style={{
                display: "flex",
                gap: 20,
                fontSize: 13,
                color: "var(--text-muted)",
              }}
            >
              <span>{album.year}</span>
              <span style={{ color: "var(--border)" }}>•</span>
              <span>{album.label}</span>
              <span style={{ color: "var(--border)" }}>•</span>
              <span>{album.tracks.length} tracks</span>
            </div>

            {/* Rating row */}
            <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
              <div>
                <div
                  style={{
                    fontSize: 40,
                    fontWeight: 800,
                    letterSpacing: "-0.03em",
                    color: "var(--accent)",
                    lineHeight: 1,
                  }}
                >
                  {album.rmmaiRating}
                  <span
                    style={{
                      fontSize: 20,
                      fontWeight: 500,
                      color: "var(--text-muted)",
                    }}
                  >
                    /10
                  </span>
                </div>
                <div
                  style={{
                    fontSize: 12,
                    color: "var(--text-muted)",
                    marginTop: 4,
                  }}
                >
                  {album.totalRatings.toLocaleString()} ratings
                </div>
              </div>

              <div style={{ width: 1, height: 48, background: "var(--border)" }} />

              <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                <StarRating rating={album.starRating} />
                <span style={{ fontSize: 12, color: "var(--text-muted)" }}>
                  {album.starRating} / 5.0
                </span>
              </div>
            </div>

            {/* Action buttons */}
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
              <button
                style={{
                  background: "var(--accent)",
                  border: "none",
                  borderRadius: 10,
                  padding: "10px 20px",
                  color: "#fff",
                  fontSize: 14,
                  fontWeight: 600,
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                  boxShadow: "0 4px 16px rgba(168, 85, 247, 0.4)",
                  transition: "opacity 0.15s",
                }}
              >
                <Star size={15} fill="#fff" />
                Rate This Album
              </button>

              <button
                style={{
                  background: "transparent",
                  border: "1px solid var(--border)",
                  borderRadius: 10,
                  padding: "10px 20px",
                  color: "var(--text-primary)",
                  fontSize: 14,
                  fontWeight: 600,
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                  transition: "border-color 0.15s",
                }}
              >
                <Plus size={15} />
                Add to List
              </button>

              <button
                style={{
                  background: "#1DB954",
                  border: "none",
                  borderRadius: 10,
                  padding: "10px 20px",
                  color: "#000",
                  fontSize: 14,
                  fontWeight: 700,
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                }}
              >
                <Play size={14} fill="#000" />
                Open in Spotify
                <ExternalLink size={13} />
              </button>
            </div>

            {/* Friends who rated */}
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <div style={{ display: "flex" }}>
                {album.friends.map((f, i) => (
                  <div
                    key={f.id}
                    title={f.name}
                    style={{
                      width: 28,
                      height: 28,
                      borderRadius: "50%",
                      background: `${f.avatarColor}33`,
                      border: `2px solid var(--background)`,
                      outline: `1.5px solid ${f.avatarColor}55`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 11,
                      fontWeight: 700,
                      color: f.avatarColor,
                      marginLeft: i === 0 ? 0 : -9,
                      zIndex: album.friends.length - i,
                      position: "relative",
                    }}
                  >
                    {f.avatar}
                  </div>
                ))}
                {/* 5th friend placeholder */}
                <div
                  style={{
                    width: 28,
                    height: 28,
                    borderRadius: "50%",
                    background: "rgba(255,255,255,0.06)",
                    border: "2px solid var(--background)",
                    outline: "1.5px solid rgba(255,255,255,0.15)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 11,
                    fontWeight: 700,
                    color: "var(--text-muted)",
                    marginLeft: -9,
                    zIndex: 0,
                    position: "relative",
                  }}
                >
                  K
                </div>
              </div>
              <span style={{ fontSize: 13, color: "var(--text-secondary)" }}>
                <strong style={{ color: "var(--text-primary)" }}>5 friends</strong> rated
                this album
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Main content wrapper ── */}
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "40px 32px" }}>

        {/* ═══════════════════════════════════════ */}
        {/* SECTION 2 — Track List                 */}
        {/* ═══════════════════════════════════════ */}
        <section style={{ marginBottom: 48 }} className="animate-fade-in-up">
          <h2
            style={{
              fontSize: 20,
              fontWeight: 700,
              letterSpacing: "-0.02em",
              marginBottom: 16,
              color: "var(--text-primary)",
            }}
          >
            Tracklist
          </h2>

          <div
            className="glass"
            style={{ borderRadius: 16, overflow: "hidden" }}
          >
            {/* Table header */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "40px 1fr 80px 80px",
                padding: "10px 16px",
                borderBottom: "1px solid var(--border)",
                fontSize: 11,
                fontWeight: 600,
                letterSpacing: "0.07em",
                textTransform: "uppercase",
                color: "var(--text-muted)",
              }}
            >
              <span>#</span>
              <span>Title</span>
              <span style={{ textAlign: "right" }}>Rating</span>
              <span style={{ textAlign: "right" }}>Duration</span>
            </div>

            {album.tracks.map((track, i) => (
              <div
                key={track.num}
                style={{
                  display: "grid",
                  gridTemplateColumns: "40px 1fr 80px 80px",
                  padding: "12px 16px",
                  alignItems: "center",
                  backgroundColor:
                    i % 2 === 0
                      ? "transparent"
                      : "rgba(255,255,255,0.018)",
                  borderBottom:
                    i < album.tracks.length - 1
                      ? "1px solid rgba(255,255,255,0.04)"
                      : "none",
                  cursor: "default",
                  transition: "background 0.12s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.backgroundColor =
                    "rgba(168, 85, 247, 0.07)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.backgroundColor =
                    i % 2 === 0 ? "transparent" : "rgba(255,255,255,0.018)";
                }}
              >
                {/* Track number / play icon on hover */}
                <span
                  style={{
                    fontSize: 13,
                    color: "var(--text-muted)",
                    fontVariantNumeric: "tabular-nums",
                  }}
                >
                  {track.num}
                </span>

                {/* Title */}
                <span
                  style={{
                    fontSize: 14,
                    fontWeight: 500,
                    color: "var(--text-primary)",
                  }}
                >
                  {track.title}
                </span>

                {/* Rating badge */}
                <div style={{ textAlign: "right" }}>
                  {track.rating !== null ? (
                    <span
                      style={{
                        display: "inline-block",
                        fontSize: 11,
                        fontWeight: 700,
                        color: "var(--accent)",
                        background: "rgba(168, 85, 247, 0.12)",
                        border: "1px solid rgba(168, 85, 247, 0.25)",
                        borderRadius: 6,
                        padding: "2px 7px",
                      }}
                    >
                      {track.rating.toFixed(1)}
                    </span>
                  ) : (
                    <span style={{ fontSize: 12, color: "var(--text-muted)" }}>
                      —
                    </span>
                  )}
                </div>

                {/* Duration */}
                <span
                  style={{
                    textAlign: "right",
                    fontSize: 13,
                    color: "var(--text-muted)",
                    fontVariantNumeric: "tabular-nums",
                  }}
                >
                  {track.duration}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* ═══════════════════════════════════════ */}
        {/* SECTION 3 — Reviews + Friends          */}
        {/* ═══════════════════════════════════════ */}
        <section
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 24,
            marginBottom: 48,
            alignItems: "start",
          }}
          className="animate-fade-in-up"
        >
          {/* ── Left: Community Reviews ── */}
          <div>
            <h2
              style={{
                fontSize: 20,
                fontWeight: 700,
                letterSpacing: "-0.02em",
                marginBottom: 16,
                color: "var(--text-primary)",
              }}
            >
              Community Reviews
            </h2>

            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {album.reviews.map((review) => (
                <div
                  key={review.id}
                  className="glass"
                  style={{
                    borderRadius: 14,
                    padding: 18,
                    display: "flex",
                    flexDirection: "column",
                    gap: 10,
                  }}
                >
                  {/* Header row */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                      <Avatar
                        char={review.avatar}
                        color={review.avatarColor}
                        size={34}
                      />
                      <div>
                        <div
                          style={{
                            fontSize: 13,
                            fontWeight: 600,
                            color: "var(--text-primary)",
                          }}
                        >
                          {review.username}
                        </div>
                        <div style={{ fontSize: 11, color: "var(--text-muted)" }}>
                          {review.date}
                        </div>
                      </div>
                    </div>
                    <div
                      style={{
                        fontSize: 24,
                        fontWeight: 800,
                        letterSpacing: "-0.03em",
                        color: "var(--accent)",
                      }}
                    >
                      {review.rating}
                      <span
                        style={{
                          fontSize: 13,
                          fontWeight: 500,
                          color: "var(--text-muted)",
                        }}
                      >
                        /10
                      </span>
                    </div>
                  </div>

                  {/* Review text */}
                  <p
                    style={{
                      fontSize: 13,
                      lineHeight: 1.65,
                      color: "var(--text-secondary)",
                      margin: 0,
                    }}
                  >
                    {review.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: Friends + AI Take ── */}
          <div>
            <h2
              style={{
                fontSize: 20,
                fontWeight: 700,
                letterSpacing: "-0.02em",
                marginBottom: 16,
                color: "var(--text-primary)",
              }}
            >
              Your Friends
            </h2>

            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {/* Friend cards */}
              {album.friends.map((friend) => (
                <div
                  key={friend.id}
                  className="glass"
                  style={{
                    borderRadius: 14,
                    padding: "14px 18px",
                    display: "flex",
                    alignItems: "center",
                    gap: 14,
                  }}
                >
                  <Avatar char={friend.avatar} color={friend.avatarColor} size={40} />

                  <div style={{ flex: 1 }}>
                    <div
                      style={{
                        fontSize: 13,
                        fontWeight: 600,
                        color: "var(--text-primary)",
                        marginBottom: 3,
                      }}
                    >
                      {friend.name}
                    </div>
                    <div
                      style={{
                        fontSize: 12,
                        color: "var(--text-secondary)",
                        lineHeight: 1.4,
                      }}
                    >
                      {friend.take}
                    </div>
                  </div>

                  <div
                    style={{
                      fontSize: 22,
                      fontWeight: 800,
                      letterSpacing: "-0.02em",
                      color: "var(--accent)",
                      flexShrink: 0,
                    }}
                  >
                    {friend.rating % 1 === 0
                      ? friend.rating.toFixed(0)
                      : friend.rating.toFixed(1)}
                    <span
                      style={{
                        fontSize: 11,
                        fontWeight: 500,
                        color: "var(--text-muted)",
                      }}
                    >
                      /10
                    </span>
                  </div>
                </div>
              ))}

              {/* AI Take card */}
              <div
                style={{
                  borderRadius: 14,
                  padding: "18px 20px",
                  background: "rgba(168, 85, 247, 0.07)",
                  border: "1px solid rgba(168, 85, 247, 0.35)",
                  boxShadow: "0 0 24px rgba(168, 85, 247, 0.12)",
                  display: "flex",
                  flexDirection: "column",
                  gap: 10,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                  }}
                >
                  <div
                    style={{
                      width: 28,
                      height: 28,
                      borderRadius: 8,
                      background:
                        "linear-gradient(135deg, #a855f7, #ec4899)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 14,
                    }}
                  >
                    ✦
                  </div>
                  <span
                    style={{
                      fontSize: 13,
                      fontWeight: 700,
                      color: "var(--accent)",
                      letterSpacing: "-0.01em",
                    }}
                  >
                    AI Take
                  </span>
                  <span
                    style={{
                      fontSize: 10,
                      fontWeight: 600,
                      letterSpacing: "0.06em",
                      textTransform: "uppercase",
                      color: "var(--text-muted)",
                      background: "rgba(255,255,255,0.05)",
                      border: "1px solid var(--border)",
                      borderRadius: 5,
                      padding: "2px 6px",
                    }}
                  >
                    Taste Profile
                  </span>
                </div>

                <p
                  style={{
                    fontSize: 13,
                    color: "var(--text-secondary)",
                    lineHeight: 1.65,
                    margin: 0,
                  }}
                >
                  Based on your taste profile, you&apos;ll likely rate this{" "}
                  <strong style={{ color: "var(--accent)" }}>9–10</strong>. You
                  gravitate toward albums that prioritize emotional atmosphere over
                  structural convention, and Blonde is essentially the platonic ideal
                  of that preference. Your affinity for Channel Orange and Sufjan
                  Stevens&apos; <em>Carrie & Lowell</em> suggests this will land as a
                  near-perfect record for you.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════ */}
        {/* SECTION 4 — Similar Albums             */}
        {/* ═══════════════════════════════════════ */}
        <section style={{ marginBottom: 48 }} className="animate-fade-in-up">
          <h2
            style={{
              fontSize: 20,
              fontWeight: 700,
              letterSpacing: "-0.02em",
              marginBottom: 16,
              color: "var(--text-primary)",
            }}
          >
            Similar Albums
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(6, 1fr)",
              gap: 14,
            }}
          >
            {album.similarAlbums.map((sim) => (
              <div
                key={sim.id}
                style={{
                  cursor: "pointer",
                  display: "flex",
                  flexDirection: "column",
                  gap: 8,
                }}
              >
                {/* Art square */}
                <div
                  style={{
                    width: "100%",
                    aspectRatio: "1",
                    borderRadius: 12,
                    background: `linear-gradient(135deg, ${sim.color}22 0%, ${sim.color}88 100%)`,
                    border: `1px solid ${sim.color}33`,
                    boxShadow: `0 4px 16px ${sim.color}22`,
                    transition: "transform 0.15s, box-shadow 0.15s",
                    position: "relative",
                    overflow: "hidden",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLDivElement).style.transform =
                      "scale(1.04)";
                    (e.currentTarget as HTMLDivElement).style.boxShadow =
                      `0 8px 24px ${sim.color}44`;
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLDivElement).style.transform =
                      "scale(1)";
                    (e.currentTarget as HTMLDivElement).style.boxShadow =
                      `0 4px 16px ${sim.color}22`;
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background:
                        "radial-gradient(ellipse at 25% 25%, rgba(255,255,255,0.12) 0%, transparent 55%)",
                    }}
                  />
                </div>

                {/* Info */}
                <div>
                  <div
                    style={{
                      fontSize: 12,
                      fontWeight: 600,
                      color: "var(--text-primary)",
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    {sim.title}
                  </div>
                  <div
                    style={{
                      fontSize: 11,
                      color: "var(--text-muted)",
                      marginTop: 2,
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    {sim.artist}
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 4,
                      marginTop: 4,
                    }}
                  >
                    <Star size={10} fill="var(--accent)" color="var(--accent)" />
                    <span
                      style={{
                        fontSize: 11,
                        fontWeight: 600,
                        color: "var(--accent)",
                      }}
                    >
                      {sim.rating.toFixed(1)}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ═══════════════════════════════════════ */}
        {/* SECTION 5 — RYM Data                   */}
        {/* ═══════════════════════════════════════ */}
        <section style={{ marginBottom: 64 }} className="animate-fade-in-up">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              marginBottom: 16,
            }}
          >
            <h2
              style={{
                fontSize: 20,
                fontWeight: 700,
                letterSpacing: "-0.02em",
                color: "var(--text-primary)",
                margin: 0,
              }}
            >
              RYM Data
            </h2>
            <span
              style={{
                fontSize: 11,
                fontWeight: 600,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                color: "var(--text-muted)",
                background: "rgba(255,255,255,0.05)",
                border: "1px solid var(--border)",
                borderRadius: 6,
                padding: "2px 8px",
              }}
            >
              From RateYourMusic
            </span>
          </div>

          <div
            className="glass"
            style={{
              borderRadius: 16,
              padding: 28,
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr",
              gap: 32,
            }}
          >
            {/* Stat: Community Rank */}
            <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
              <span
                style={{
                  fontSize: 11,
                  fontWeight: 600,
                  letterSpacing: "0.07em",
                  textTransform: "uppercase",
                  color: "var(--text-muted)",
                }}
              >
                Community Rank
              </span>
              <span
                style={{
                  fontSize: 28,
                  fontWeight: 800,
                  letterSpacing: "-0.03em",
                  color: "var(--text-primary)",
                }}
              >
                {album.rymRank}
              </span>
            </div>

            {/* Stat: Weighted Score */}
            <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
              <span
                style={{
                  fontSize: 11,
                  fontWeight: 600,
                  letterSpacing: "0.07em",
                  textTransform: "uppercase",
                  color: "var(--text-muted)",
                }}
              >
                Weighted Score
              </span>
              <span
                style={{
                  fontSize: 28,
                  fontWeight: 800,
                  letterSpacing: "-0.03em",
                  color: "var(--text-primary)",
                }}
              >
                {album.rymScore}
                <span
                  style={{
                    fontSize: 16,
                    fontWeight: 500,
                    color: "var(--text-muted)",
                  }}
                >
                  {" "}
                  / 5.00
                </span>
              </span>
            </div>

            {/* Stat: Year rank */}
            <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
              <span
                style={{
                  fontSize: 11,
                  fontWeight: 600,
                  letterSpacing: "0.07em",
                  textTransform: "uppercase",
                  color: "var(--text-muted)",
                }}
              >
                Year Ranking
              </span>
              <span
                style={{
                  fontSize: 28,
                  fontWeight: 800,
                  letterSpacing: "-0.03em",
                  color: "var(--text-primary)",
                }}
              >
                {album.rymYearRank}
              </span>
            </div>

            {/* Tags — full width row */}
            <div
              style={{
                gridColumn: "1 / -1",
                borderTop: "1px solid var(--border)",
                paddingTop: 20,
              }}
            >
              <div
                style={{
                  fontSize: 11,
                  fontWeight: 600,
                  letterSpacing: "0.07em",
                  textTransform: "uppercase",
                  color: "var(--text-muted)",
                  marginBottom: 12,
                }}
              >
                Top Tags
              </div>
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                {album.rymTags.map((tag, i) => {
                  const tagColors = [
                    "#a855f7",
                    "#3b82f6",
                    "#ec4899",
                    "#f97316",
                    "#22c55e",
                    "#ef4444",
                  ];
                  const c = tagColors[i % tagColors.length];
                  return (
                    <span
                      key={tag}
                      style={{
                        fontSize: 12,
                        fontWeight: 500,
                        color: c,
                        background: `${c}18`,
                        border: `1px solid ${c}33`,
                        borderRadius: 999,
                        padding: "4px 12px",
                      }}
                    >
                      {tag}
                    </span>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer
        style={{
          borderTop: "1px solid var(--border)",
          padding: "24px 32px",
          textAlign: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 6,
            color: "var(--text-muted)",
            fontSize: 13,
          }}
        >
          <Users size={14} />
          <span>
            Data sourced from RateYourMusic community ratings and Spotify API.
          </span>
        </div>
      </footer>
    </div>
  );
}
