import {
  Star,
  Filter,
  SortAsc,
  Edit2,
  Plus,
  Grid3X3,
} from "lucide-react";

// ─── Static Data ─────────────────────────────────────────────────────────────

const ratedAlbums = [
  {
    id: 1,
    title: "My Beautiful Dark Twisted Fantasy",
    artist: "Kanye West",
    rating: 10,
    genre: "Hip-Hop",
    dateRated: "Feb 12, 2026",
    gradient: "linear-gradient(135deg, #a855f7 0%, #7c3aed 100%)",
    gradientBorder: "rgba(168,85,247,0.3)",
  },
  {
    id: 2,
    title: "To Pimp a Butterfly",
    artist: "Kendrick Lamar",
    rating: 10,
    genre: "Hip-Hop",
    dateRated: "Feb 9, 2026",
    gradient: "linear-gradient(135deg, #f97316 0%, #dc2626 100%)",
    gradientBorder: "rgba(249,115,22,0.3)",
  },
  {
    id: 3,
    title: "Kid A",
    artist: "Radiohead",
    rating: 9,
    genre: "Post-Rock",
    dateRated: "Feb 7, 2026",
    gradient: "linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)",
    gradientBorder: "rgba(59,130,246,0.3)",
  },
  {
    id: 4,
    title: "Blonde",
    artist: "Frank Ocean",
    rating: 9,
    genre: "R&B",
    dateRated: "Feb 5, 2026",
    gradient: "linear-gradient(135deg, #f59e0b 0%, #d97706 100%)",
    gradientBorder: "rgba(245,158,11,0.3)",
  },
  {
    id: 5,
    title: "Carrie & Lowell",
    artist: "Sufjan Stevens",
    rating: 9,
    genre: "Folk",
    dateRated: "Feb 3, 2026",
    gradient: "linear-gradient(135deg, #6366f1 0%, #4338ca 100%)",
    gradientBorder: "rgba(99,102,241,0.3)",
  },
  {
    id: 6,
    title: "In Rainbows",
    artist: "Radiohead",
    rating: 9,
    genre: "Post-Rock",
    dateRated: "Jan 29, 2026",
    gradient: "linear-gradient(135deg, #22c55e 0%, #15803d 100%)",
    gradientBorder: "rgba(34,197,94,0.3)",
  },
  {
    id: 7,
    title: "channel ORANGE",
    artist: "Frank Ocean",
    rating: 9,
    genre: "R&B",
    dateRated: "Jan 25, 2026",
    gradient: "linear-gradient(135deg, #ec4899 0%, #be185d 100%)",
    gradientBorder: "rgba(236,72,153,0.3)",
  },
  {
    id: 8,
    title: "Good Kid M.A.A.D City",
    artist: "Kendrick Lamar",
    rating: 9,
    genre: "Hip-Hop",
    dateRated: "Jan 20, 2026",
    gradient: "linear-gradient(135deg, #ef4444 0%, #991b1b 100%)",
    gradientBorder: "rgba(239,68,68,0.3)",
  },
  {
    id: 9,
    title: "OK Computer",
    artist: "Radiohead",
    rating: 9,
    genre: "Post-Rock",
    dateRated: "Jan 15, 2026",
    gradient: "linear-gradient(135deg, #06b6d4 0%, #0e7490 100%)",
    gradientBorder: "rgba(6,182,212,0.3)",
  },
  {
    id: 10,
    title: "The College Dropout",
    artist: "Kanye West",
    rating: 8,
    genre: "Hip-Hop",
    dateRated: "Jan 11, 2026",
    gradient: "linear-gradient(135deg, #f97316 0%, #9a3412 100%)",
    gradientBorder: "rgba(249,115,22,0.3)",
  },
  {
    id: 11,
    title: "808s & Heartbreak",
    artist: "Kanye West",
    rating: 8,
    genre: "Hip-Hop",
    dateRated: "Jan 8, 2026",
    gradient: "linear-gradient(135deg, #a855f7 0%, #4c1d95 100%)",
    gradientBorder: "rgba(168,85,247,0.3)",
  },
  {
    id: 12,
    title: "Illinois",
    artist: "Sufjan Stevens",
    rating: 8,
    genre: "Folk",
    dateRated: "Jan 4, 2026",
    gradient: "linear-gradient(135deg, #84cc16 0%, #3f6212 100%)",
    gradientBorder: "rgba(132,204,22,0.3)",
  },
];

const wantsToRate = [
  {
    id: 1,
    title: "Purple Rain",
    artist: "Prince",
    genre: "R&B",
    gradient: "linear-gradient(135deg, #a855f7 0%, #7c3aed 100%)",
    gradientBorder: "rgba(168,85,247,0.3)",
    friendsRated: 4,
  },
  {
    id: 2,
    title: "Funeral",
    artist: "Arcade Fire",
    genre: "Indie Rock",
    gradient: "linear-gradient(135deg, #ef4444 0%, #7f1d1d 100%)",
    gradientBorder: "rgba(239,68,68,0.3)",
    friendsRated: 6,
  },
  {
    id: 3,
    title: "Tago Mago",
    artist: "Can",
    genre: "Electronic",
    gradient: "linear-gradient(135deg, #06b6d4 0%, #164e63 100%)",
    gradientBorder: "rgba(6,182,212,0.3)",
    friendsRated: 2,
  },
  {
    id: 4,
    title: "Kind of Blue",
    artist: "Miles Davis",
    genre: "Jazz",
    gradient: "linear-gradient(135deg, #3b82f6 0%, #1e3a5f 100%)",
    gradientBorder: "rgba(59,130,246,0.3)",
    friendsRated: 8,
  },
  {
    id: 5,
    title: "Lift Your Skinny Fists",
    artist: "Godspeed You! Black Emperor",
    genre: "Post-Rock",
    gradient: "linear-gradient(135deg, #6366f1 0%, #312e81 100%)",
    gradientBorder: "rgba(99,102,241,0.3)",
    friendsRated: 3,
  },
];

const genreFilters = [
  "All",
  "R&B",
  "Hip-Hop",
  "Indie Rock",
  "Post-Rock",
  "Electronic",
  "Folk",
  "Jazz",
  "Classical",
];

// ─── Sub-components ───────────────────────────────────────────────────────────

function AlbumArtSquare({
  gradient,
  gradientBorder,
  size,
  title,
  artist,
}: {
  gradient: string;
  gradientBorder: string;
  size: number;
  title: string;
  artist: string;
}) {
  const initials = [title, artist]
    .map((s) => s.split(" ").filter(Boolean)[0]?.[0] ?? "")
    .join("")
    .toUpperCase()
    .slice(0, 2);

  return (
    <div
      style={{
        width: size,
        height: size,
        minWidth: size,
        borderRadius: size >= 120 ? "14px" : "10px",
        background: gradient,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: size >= 120 ? "1.6rem" : "0.8rem",
        fontWeight: 800,
        color: "rgba(255,255,255,0.85)",
        border: `1px solid ${gradientBorder}`,
        letterSpacing: "-0.02em",
        flexShrink: 0,
        userSelect: "none",
      }}
    >
      {initials}
    </div>
  );
}

function StatCard({
  label,
  value,
  sub,
  accent,
}: {
  label: string;
  value: string;
  sub?: string;
  accent?: boolean;
}) {
  return (
    <div
      style={{
        background: "var(--surface)",
        border: `1px solid ${accent ? "rgba(168,85,247,0.3)" : "var(--border)"}`,
        borderRadius: "18px",
        padding: "1.1rem 1.3rem",
        display: "flex",
        flexDirection: "column",
        gap: "6px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {accent && (
        <div
          style={{
            position: "absolute",
            top: -30,
            right: -30,
            width: 90,
            height: 90,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(168,85,247,0.14) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />
      )}
      <span
        style={{
          fontSize: "0.72rem",
          color: "var(--text-muted)",
          fontWeight: 500,
          textTransform: "uppercase",
          letterSpacing: "0.06em",
        }}
      >
        {label}
      </span>
      <span
        style={{
          fontSize: "1.6rem",
          fontWeight: 700,
          color: accent ? "var(--accent)" : "var(--text-primary)",
          letterSpacing: "-0.03em",
          lineHeight: 1,
        }}
      >
        {value}
      </span>
      {sub && (
        <span
          style={{
            fontSize: "0.73rem",
            color: "var(--text-secondary)",
            fontWeight: 500,
          }}
        >
          {sub}
        </span>
      )}
    </div>
  );
}

function RatingBadge({ rating }: { rating: number }) {
  const isPerfect = rating === 10;
  return (
    <span
      style={{
        fontSize: isPerfect ? "1.5rem" : "1.4rem",
        fontWeight: 800,
        color: isPerfect ? "#f59e0b" : "var(--accent)",
        letterSpacing: "-0.04em",
        lineHeight: 1,
      }}
    >
      {rating}
      <span
        style={{
          fontSize: "0.75rem",
          fontWeight: 600,
          color: "var(--text-muted)",
          letterSpacing: "0",
        }}
      >
        /10
      </span>
    </span>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function RatingsPage() {
  const selectedGenre = "All";

  return (
    <div
      className="animate-fade-in-up"
      style={{
        padding: "2rem 2.5rem",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
        maxWidth: "1400px",
      }}
    >
      {/* ── Header ── */}
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
          <h1
            style={{
              fontSize: "2.25rem",
              fontWeight: 700,
              color: "var(--text-primary)",
              letterSpacing: "-0.03em",
              lineHeight: 1.1,
            }}
          >
            My Ratings
          </h1>
          <p
            style={{
              fontSize: "0.95rem",
              color: "var(--text-muted)",
              fontWeight: 400,
            }}
          >
            142 albums rated
          </p>
        </div>

        {/* Header actions */}
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          {/* Sort dropdown */}
          <button
            className="glass"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "7px",
              padding: "10px 16px",
              borderRadius: "12px",
              fontSize: "0.84rem",
              fontWeight: 600,
              color: "var(--text-secondary)",
              cursor: "pointer",
              border: "1px solid var(--border)",
              background: "rgba(255,255,255,0.04)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
            }}
          >
            <SortAsc size={14} style={{ color: "var(--text-muted)" }} />
            Sort: Recent
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              style={{ color: "var(--text-muted)", marginLeft: "2px" }}
            >
              <path
                d="M3 4.5L6 7.5L9 4.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          {/* Import from RYM */}
          <button
            style={{
              display: "flex",
              alignItems: "center",
              gap: "7px",
              padding: "10px 16px",
              borderRadius: "12px",
              fontSize: "0.84rem",
              fontWeight: 600,
              color: "var(--accent)",
              cursor: "pointer",
              border: "1px solid rgba(168,85,247,0.4)",
              background: "transparent",
            }}
          >
            <Plus size={14} />
            Import from RYM
          </button>
        </div>
      </div>

      {/* ── Stats Bar ── */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "1rem",
        }}
      >
        <StatCard label="Average Rating" value="8.4" sub="out of 10" accent />
        <StatCard
          label="Most Rated Genre"
          value="Indie Rock"
          sub="34 albums"
        />
        <StatCard
          label="Highest Rated"
          value="MBDTF"
          sub="10/10 — perfect score"
        />
        <StatCard label="This Month" value="6" sub="new ratings added" />
      </div>

      {/* ── Filter Chips ── */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
        }}
      >
        {/* Filter icon */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 34,
            height: 34,
            borderRadius: "10px",
            background: "var(--surface)",
            border: "1px solid var(--border)",
            flexShrink: 0,
          }}
        >
          <Filter size={14} style={{ color: "var(--text-muted)" }} />
        </div>

        {/* Scrollable chip row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            overflowX: "auto",
            scrollbarWidth: "none",
            flex: 1,
            paddingBottom: "2px",
          }}
        >
          {genreFilters.map((genre) => {
            const isSelected = genre === selectedGenre;
            return (
              <button
                key={genre}
                style={{
                  padding: "7px 16px",
                  borderRadius: "999px",
                  fontSize: "0.82rem",
                  fontWeight: isSelected ? 700 : 500,
                  color: isSelected ? "white" : "var(--text-secondary)",
                  cursor: "pointer",
                  border: isSelected
                    ? "1px solid var(--accent)"
                    : "1px solid var(--border)",
                  background: isSelected
                    ? "var(--accent)"
                    : "rgba(255,255,255,0.04)",
                  backdropFilter: "blur(12px)",
                  WebkitBackdropFilter: "blur(12px)",
                  whiteSpace: "nowrap",
                  flexShrink: 0,
                  transition: "all 0.15s ease",
                }}
              >
                {genre}
              </button>
            );
          })}
        </div>

        {/* Grid toggle */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 34,
            height: 34,
            borderRadius: "10px",
            background: "rgba(168,85,247,0.15)",
            border: "1px solid rgba(168,85,247,0.35)",
            flexShrink: 0,
            cursor: "pointer",
          }}
        >
          <Grid3X3 size={14} style={{ color: "var(--accent)" }} />
        </div>
      </div>

      {/* ── Ratings Grid ── */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "1rem",
        }}
      >
        {ratedAlbums.map((album) => (
          <div
            key={album.id}
            className="glass"
            style={{
              borderRadius: "18px",
              overflow: "hidden",
              border: "1px solid var(--border)",
              background: "var(--surface)",
              display: "flex",
              flexDirection: "column",
              cursor: "pointer",
              position: "relative",
              transition: "border-color 0.2s ease, transform 0.2s ease",
            }}
          >
            {/* Album art */}
            <div
              style={{
                width: "100%",
                aspectRatio: "1 / 1",
                background: album.gradient,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
                flexShrink: 0,
              }}
            >
              {/* Initials */}
              <span
                style={{
                  fontSize: "2rem",
                  fontWeight: 800,
                  color: "rgba(255,255,255,0.8)",
                  letterSpacing: "-0.04em",
                  userSelect: "none",
                }}
              >
                {[album.title, album.artist]
                  .map((s) => s.split(" ").filter(Boolean)[0]?.[0] ?? "")
                  .join("")
                  .toUpperCase()
                  .slice(0, 2)}
              </span>

              {/* Hover: edit button overlay */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "rgba(0,0,0,0.5)",
                  backdropFilter: "blur(4px)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  opacity: 0,
                  transition: "opacity 0.2s ease",
                }}
                className="album-hover-overlay"
              >
                <button
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    padding: "9px 18px",
                    borderRadius: "10px",
                    background: "rgba(255,255,255,0.12)",
                    border: "1px solid rgba(255,255,255,0.2)",
                    backdropFilter: "blur(16px)",
                    WebkitBackdropFilter: "blur(16px)",
                    fontSize: "0.8rem",
                    fontWeight: 600,
                    color: "white",
                    cursor: "pointer",
                  }}
                >
                  <Edit2 size={13} />
                  Edit Rating
                </button>
              </div>
            </div>

            {/* Card body */}
            <div
              style={{
                padding: "0.85rem 0.9rem 0.9rem",
                display: "flex",
                flexDirection: "column",
                gap: "6px",
                flex: 1,
              }}
            >
              {/* Title + rating row */}
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  justifyContent: "space-between",
                  gap: "8px",
                }}
              >
                <div style={{ flex: 1, minWidth: 0 }}>
                  <p
                    style={{
                      fontSize: "0.82rem",
                      fontWeight: 700,
                      color: "var(--text-primary)",
                      lineHeight: 1.3,
                      overflow: "hidden",
                      display: "-webkit-box",
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: "vertical",
                    }}
                  >
                    {album.title}
                  </p>
                  <p
                    style={{
                      fontSize: "0.72rem",
                      color: "var(--text-secondary)",
                      marginTop: "2px",
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    {album.artist}
                  </p>
                </div>

                {/* Rating */}
                <div style={{ flexShrink: 0, textAlign: "right" }}>
                  <RatingBadge rating={album.rating} />
                </div>
              </div>

              {/* Date rated */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                  marginTop: "2px",
                }}
              >
                <Star
                  size={10}
                  style={{
                    color: "#f59e0b",
                    fill: "#f59e0b",
                    flexShrink: 0,
                  }}
                />
                <span
                  style={{
                    fontSize: "0.68rem",
                    color: "var(--text-muted)",
                    fontWeight: 500,
                  }}
                >
                  Rated {album.dateRated}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ── Wants to Rate ── */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
        }}
      >
        {/* Section header */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <div
              style={{
                width: 28,
                height: 28,
                borderRadius: "8px",
                background: "rgba(168,85,247,0.15)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Star
                size={14}
                style={{ color: "var(--accent)", fill: "transparent" }}
              />
            </div>
            <div>
              <h2
                style={{
                  fontSize: "1.1rem",
                  fontWeight: 700,
                  color: "var(--text-primary)",
                  letterSpacing: "-0.02em",
                  lineHeight: 1,
                }}
              >
                On your radar
              </h2>
              <p
                style={{
                  fontSize: "0.75rem",
                  color: "var(--text-muted)",
                  marginTop: "2px",
                }}
              >
                Albums you want to rate
              </p>
            </div>
          </div>

          <button
            style={{
              display: "flex",
              alignItems: "center",
              gap: "6px",
              padding: "7px 14px",
              borderRadius: "10px",
              fontSize: "0.78rem",
              fontWeight: 600,
              color: "var(--text-muted)",
              cursor: "pointer",
              border: "1px solid var(--border)",
              background: "transparent",
            }}
          >
            <Plus size={12} />
            Add album
          </button>
        </div>

        {/* Horizontal scroll row */}
        <div
          style={{
            display: "flex",
            gap: "1rem",
            overflowX: "auto",
            scrollbarWidth: "thin",
            paddingBottom: "4px",
          }}
        >
          {wantsToRate.map((album) => (
            <div
              key={album.id}
              className="glass"
              style={{
                minWidth: "220px",
                maxWidth: "220px",
                borderRadius: "18px",
                border: "1px solid var(--border)",
                background: "var(--surface)",
                overflow: "hidden",
                flexShrink: 0,
                display: "flex",
                flexDirection: "column",
              }}
            >
              {/* Art */}
              <div
                style={{
                  height: "120px",
                  background: album.gradient,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  position: "relative",
                  flexShrink: 0,
                }}
              >
                <span
                  style={{
                    fontSize: "1.6rem",
                    fontWeight: 800,
                    color: "rgba(255,255,255,0.8)",
                    letterSpacing: "-0.04em",
                    userSelect: "none",
                  }}
                >
                  {[album.title, album.artist]
                    .map((s) => s.split(" ").filter(Boolean)[0]?.[0] ?? "")
                    .join("")
                    .toUpperCase()
                    .slice(0, 2)}
                </span>

                {/* Friends badge */}
                <div
                  style={{
                    position: "absolute",
                    bottom: "8px",
                    right: "8px",
                    background: "rgba(0,0,0,0.65)",
                    backdropFilter: "blur(8px)",
                    WebkitBackdropFilter: "blur(8px)",
                    borderRadius: "6px",
                    padding: "3px 8px",
                    display: "flex",
                    alignItems: "center",
                    gap: "4px",
                  }}
                >
                  <Star
                    size={9}
                    style={{ color: "#f59e0b", fill: "#f59e0b" }}
                  />
                  <span
                    style={{
                      fontSize: "0.65rem",
                      fontWeight: 600,
                      color: "white",
                    }}
                  >
                    {album.friendsRated} friends rated
                  </span>
                </div>
              </div>

              {/* Body */}
              <div
                style={{
                  padding: "0.85rem 0.9rem",
                  display: "flex",
                  flexDirection: "column",
                  gap: "8px",
                  flex: 1,
                }}
              >
                <div>
                  <p
                    style={{
                      fontSize: "0.82rem",
                      fontWeight: 700,
                      color: "var(--text-primary)",
                      lineHeight: 1.3,
                      overflow: "hidden",
                      display: "-webkit-box",
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: "vertical",
                    }}
                  >
                    {album.title}
                  </p>
                  <p
                    style={{
                      fontSize: "0.72rem",
                      color: "var(--text-secondary)",
                      marginTop: "2px",
                    }}
                  >
                    {album.artist}
                  </p>
                </div>

                {/* Genre chip */}
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    padding: "3px 9px",
                    borderRadius: "999px",
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid var(--border)",
                    fontSize: "0.65rem",
                    fontWeight: 600,
                    color: "var(--text-muted)",
                    width: "fit-content",
                  }}
                >
                  {album.genre}
                </div>

                {/* Rate Now button */}
                <button
                  style={{
                    width: "100%",
                    padding: "9px",
                    borderRadius: "11px",
                    background: "rgba(168,85,247,0.12)",
                    border: "1px solid rgba(168,85,247,0.3)",
                    fontSize: "0.8rem",
                    fontWeight: 700,
                    color: "var(--accent)",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "6px",
                    transition: "background 0.15s ease",
                  }}
                >
                  <Star size={13} style={{ fill: "transparent" }} />
                  Rate Now
                </button>
              </div>
            </div>
          ))}

          {/* Add more card */}
          <div
            style={{
              minWidth: "140px",
              maxWidth: "140px",
              borderRadius: "18px",
              border: "1px dashed rgba(255,255,255,0.1)",
              background: "rgba(255,255,255,0.02)",
              flexShrink: 0,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px",
              cursor: "pointer",
              padding: "1.5rem 1rem",
            }}
          >
            <div
              style={{
                width: 40,
                height: 40,
                borderRadius: "50%",
                background: "rgba(168,85,247,0.1)",
                border: "1px solid rgba(168,85,247,0.25)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Plus size={18} style={{ color: "var(--accent)" }} />
            </div>
            <span
              style={{
                fontSize: "0.75rem",
                fontWeight: 600,
                color: "var(--text-muted)",
                textAlign: "center",
                lineHeight: 1.4,
              }}
            >
              Add to radar
            </span>
          </div>
        </div>
      </div>

      {/* Bottom spacer */}
      <div style={{ height: "1rem" }} />

      {/* Hover overlay CSS */}
      <style>{`
        div:hover .album-hover-overlay {
          opacity: 1 !important;
        }
      `}</style>
    </div>
  );
}
