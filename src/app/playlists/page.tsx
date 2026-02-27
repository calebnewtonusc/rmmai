import {
  Sparkles,
  Plus,
  ListMusic,
  Play,
  ExternalLink,
  Music2,
  Shuffle,
} from "lucide-react";

// ─── Static Data ─────────────────────────────────────────────────────────────

const aiPlaylists = [
  {
    id: 1,
    name: "Late Night Drive",
    prompt: "late night introspective R&B and indie",
    tracks: 18,
    duration: "1h 12m",
    colors: ["#a855f7", "#ec4899", "#3b82f6", "#f97316"],
    spotifyUrl: "#",
  },
  {
    id: 2,
    name: "Morning Momentum",
    prompt: "morning workout energy, hip-hop and electronic",
    tracks: 22,
    duration: "1h 28m",
    colors: ["#f97316", "#f59e0b", "#22c55e", "#a855f7"],
    spotifyUrl: "#",
  },
  {
    id: 3,
    name: "Deep Focus",
    prompt: "focus work session, post-rock and ambient",
    tracks: 15,
    duration: "1h 45m",
    colors: ["#3b82f6", "#6366f1", "#a855f7", "#0ea5e9"],
    spotifyUrl: "#",
  },
  {
    id: 4,
    name: "Weekend Discoveries",
    prompt: "fresh music my friends are into that I haven't heard",
    tracks: 12,
    duration: "48m",
    colors: ["#22c55e", "#14b8a6", "#ec4899", "#f97316"],
    spotifyUrl: "#",
  },
];

const spotifyPlaylists = [
  {
    id: 1,
    name: "Liked Songs",
    tracks: 847,
    colors: ["#22c55e", "#16a34a", "#15803d", "#14532d"],
  },
  {
    id: 2,
    name: "This Is Frank Ocean",
    tracks: 34,
    colors: ["#f97316", "#ea580c", "#a855f7", "#ec4899"],
  },
  {
    id: 3,
    name: "Chill Vibes",
    tracks: 58,
    colors: ["#3b82f6", "#6366f1", "#8b5cf6", "#0ea5e9"],
  },
  {
    id: 4,
    name: "Gym Mix Vol. 3",
    tracks: 41,
    colors: ["#ef4444", "#f97316", "#f59e0b", "#22c55e"],
  },
  {
    id: 5,
    name: "Late Night Sessions",
    tracks: 27,
    colors: ["#a855f7", "#ec4899", "#3b82f6", "#6366f1"],
  },
  {
    id: 6,
    name: "Road Trip 2025",
    tracks: 63,
    colors: ["#f59e0b", "#f97316", "#22c55e", "#14b8a6"],
  },
];

const friendPlaylists = [
  {
    id: 1,
    name: "Alex Chen",
    initials: "AC",
    avatarColor: "#3b82f6",
    playlistName: "Post-Study Decompression",
    description: "Wind down after a long study session — ambient, jazz, soft indie",
    tracks: 20,
    colors: ["#3b82f6", "#6366f1", "#a855f7", "#0ea5e9"],
  },
  {
    id: 2,
    name: "Maya Patel",
    initials: "MP",
    avatarColor: "#ec4899",
    playlistName: "Y2K Nostalgia Trip",
    description: "Early 2000s pop, R&B, and rap bangers that hit different",
    tracks: 35,
    colors: ["#ec4899", "#f97316", "#f59e0b", "#a855f7"],
  },
  {
    id: 3,
    name: "Jordan Lee",
    initials: "JL",
    avatarColor: "#f97316",
    playlistName: "Rap Essentials 2025",
    description: "The best rap drops from this year, curated weekly",
    tracks: 44,
    colors: ["#f97316", "#f59e0b", "#ef4444", "#a855f7"],
  },
];

const quickPrompts = [
  "Morning workout",
  "Focus & flow",
  "Late night drive",
  "Pre-game hype",
  "Heartbreak healing",
  "Discovery mode",
];

// ─── Sub-components ───────────────────────────────────────────────────────────

function MosaicArt({
  colors,
  size = 120,
  borderRadius = 14,
}: {
  colors: string[];
  size?: number;
  borderRadius?: number;
}) {
  const half = size / 2;
  const gap = 3;
  const squareSize = half - gap * 1.5;

  return (
    <div
      style={{
        width: size,
        height: size,
        minWidth: size,
        borderRadius,
        overflow: "hidden",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: gap,
        padding: gap,
        background: "#0d0d0d",
        flexShrink: 0,
      }}
    >
      {colors.slice(0, 4).map((color, i) => (
        <div
          key={i}
          style={{
            width: squareSize,
            height: squareSize,
            borderRadius: borderRadius / 3,
            background: `linear-gradient(135deg, ${color}dd 0%, ${color}66 100%)`,
          }}
        />
      ))}
    </div>
  );
}

function SmallMosaicArt({
  colors,
  size = 72,
}: {
  colors: string[];
  size?: number;
}) {
  return <MosaicArt colors={colors} size={size} borderRadius={10} />;
}

function SectionHeader({
  icon: Icon,
  title,
  subtitle,
}: {
  icon: React.ElementType;
  title: string;
  subtitle?: string;
}) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
      <div
        style={{
          width: 30,
          height: 30,
          borderRadius: "9px",
          background: "var(--accent-soft)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
        }}
      >
        <Icon size={15} style={{ color: "var(--accent)" }} />
      </div>
      <div>
        <h2
          style={{
            fontSize: "1.1rem",
            fontWeight: 700,
            color: "var(--text-primary)",
            letterSpacing: "-0.02em",
            lineHeight: 1.1,
          }}
        >
          {title}
        </h2>
        {subtitle && (
          <p style={{ fontSize: "0.72rem", color: "var(--text-muted)", marginTop: "1px" }}>
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function PlaylistsPage() {
  return (
    <div
      className="animate-fade-in-up"
      style={{
        padding: "2rem 2.5rem",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        gap: "2.5rem",
        maxWidth: "1400px",
      }}
    >
      {/* ── Header ── */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div>
          <h1
            style={{
              fontSize: "2.25rem",
              fontWeight: 700,
              color: "var(--text-primary)",
              letterSpacing: "-0.03em",
              lineHeight: 1.1,
            }}
          >
            Playlists
          </h1>
          <p style={{ fontSize: "0.9rem", color: "var(--text-muted)", marginTop: "4px", fontWeight: 400 }}>
            AI-curated and synced from Spotify
          </p>
        </div>

        <button
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            padding: "11px 20px",
            borderRadius: "12px",
            background: "var(--accent)",
            border: "none",
            fontSize: "0.875rem",
            fontWeight: 600,
            color: "white",
            cursor: "pointer",
            boxShadow: "0 4px 20px rgba(168, 85, 247, 0.35)",
            transition: "background 0.15s ease, box-shadow 0.15s ease",
          }}
        >
          <Sparkles size={15} />
          Generate with AI
        </button>
      </div>

      {/* ── Generate Prompt Bar ── */}
      <div
        className="glass"
        style={{
          borderRadius: "20px",
          padding: "1.5rem",
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          border: "1px solid rgba(168, 85, 247, 0.2)",
          background: "rgba(168, 85, 247, 0.03)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Subtle glow */}
        <div
          style={{
            position: "absolute",
            top: -40,
            right: -40,
            width: 160,
            height: 160,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(168,85,247,0.12) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />

        {/* Label row */}
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <div
            style={{
              width: 26,
              height: 26,
              borderRadius: "8px",
              background: "var(--accent-soft)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Sparkles size={13} style={{ color: "var(--accent)" }} />
          </div>
          <span
            style={{
              fontSize: "0.8rem",
              fontWeight: 700,
              color: "var(--accent)",
              textTransform: "uppercase",
              letterSpacing: "0.06em",
            }}
          >
            AI Playlist Generator
          </span>
        </div>

        {/* Input + Generate button row */}
        <div style={{ display: "flex", gap: "0.75rem", alignItems: "flex-end" }}>
          <div style={{ flex: 1, position: "relative" }}>
            <textarea
              placeholder="Describe the playlist you want... e.g. 'Late night drive through LA, introspective, 2010s R&B and indie'"
              rows={3}
              style={{
                width: "100%",
                background: "rgba(255,255,255,0.04)",
                border: "1px solid var(--border)",
                borderRadius: "14px",
                padding: "14px 16px",
                fontSize: "0.9rem",
                color: "var(--text-primary)",
                resize: "none",
                outline: "none",
                fontFamily: "inherit",
                lineHeight: 1.6,
                transition: "border-color 0.15s ease",
              }}
            />
          </div>
          <button
            style={{
              padding: "14px 24px",
              borderRadius: "14px",
              background: "var(--accent)",
              border: "none",
              fontSize: "0.9rem",
              fontWeight: 700,
              color: "white",
              cursor: "pointer",
              flexShrink: 0,
              display: "flex",
              alignItems: "center",
              gap: "8px",
              boxShadow: "0 4px 20px rgba(168, 85, 247, 0.3)",
              alignSelf: "flex-end",
            }}
          >
            <Sparkles size={15} />
            Generate
          </button>
        </div>

        {/* Quick prompt chips */}
        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
          {quickPrompts.map((prompt) => (
            <button
              key={prompt}
              style={{
                padding: "7px 14px",
                borderRadius: "999px",
                background: "rgba(255,255,255,0.05)",
                border: "1px solid var(--border)",
                fontSize: "0.78rem",
                fontWeight: 500,
                color: "var(--text-secondary)",
                cursor: "pointer",
                transition: "background 0.15s ease, border-color 0.15s ease, color 0.15s ease",
                whiteSpace: "nowrap",
              }}
            >
              {prompt}
            </button>
          ))}
        </div>
      </div>

      {/* ── AI Generated Playlists ── */}
      <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
        <SectionHeader
          icon={Sparkles}
          title="AI Generated Playlists"
          subtitle="Built from your listening DNA"
        />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "1rem",
          }}
        >
          {aiPlaylists.map((playlist) => (
            <div
              key={playlist.id}
              className="glass"
              style={{
                borderRadius: "18px",
                padding: "1.25rem",
                display: "flex",
                flexDirection: "column",
                gap: "0.875rem",
                border: "1px solid var(--border)",
                cursor: "pointer",
                position: "relative",
                transition: "border-color 0.15s ease",
                overflow: "hidden",
              }}
            >
              {/* Mosaic art + AI badge row */}
              <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between" }}>
                <MosaicArt colors={playlist.colors} size={100} borderRadius={12} />

                {/* AI Generated badge */}
                <span
                  style={{
                    padding: "5px 10px",
                    borderRadius: "999px",
                    background: "var(--accent-soft)",
                    border: "1px solid rgba(168, 85, 247, 0.3)",
                    fontSize: "0.68rem",
                    fontWeight: 700,
                    color: "var(--accent)",
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                    whiteSpace: "nowrap",
                    display: "flex",
                    alignItems: "center",
                    gap: "4px",
                    alignSelf: "flex-start",
                  }}
                >
                  <Sparkles size={10} />
                  AI Generated
                </span>
              </div>

              {/* Playlist info */}
              <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                <h3
                  style={{
                    fontSize: "1rem",
                    fontWeight: 700,
                    color: "var(--text-primary)",
                    letterSpacing: "-0.015em",
                  }}
                >
                  {playlist.name}
                </h3>
                <p
                  style={{
                    fontSize: "0.78rem",
                    color: "var(--text-muted)",
                    fontStyle: "italic",
                    lineHeight: 1.4,
                    display: "-webkit-box",
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: "vertical" as const,
                    overflow: "hidden",
                  }}
                >
                  &ldquo;{playlist.prompt}&rdquo;
                </p>
              </div>

              {/* Track count + duration */}
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                  <Music2 size={12} style={{ color: "var(--text-muted)" }} />
                  <span style={{ fontSize: "0.75rem", color: "var(--text-secondary)", fontWeight: 500 }}>
                    {playlist.tracks} tracks
                  </span>
                </div>
                <div
                  style={{
                    width: 3,
                    height: 3,
                    borderRadius: "50%",
                    background: "var(--text-muted)",
                  }}
                />
                <span style={{ fontSize: "0.75rem", color: "var(--text-secondary)", fontWeight: 500 }}>
                  {playlist.duration}
                </span>
              </div>

              {/* Bottom row: Play + Open in Spotify */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  paddingTop: "0.25rem",
                  borderTop: "1px solid var(--border)",
                  marginTop: "auto",
                }}
              >
                <button
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    padding: "7px 14px",
                    borderRadius: "10px",
                    background: "var(--accent-soft)",
                    border: "1px solid rgba(168, 85, 247, 0.2)",
                    fontSize: "0.78rem",
                    fontWeight: 600,
                    color: "var(--accent)",
                    cursor: "pointer",
                  }}
                >
                  <Play size={12} style={{ fill: "var(--accent)" }} />
                  Play
                </button>

                <a
                  href={playlist.spotifyUrl}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "5px",
                    fontSize: "0.75rem",
                    fontWeight: 600,
                    color: "#22c55e",
                    textDecoration: "none",
                    padding: "7px 12px",
                    borderRadius: "10px",
                    border: "1px solid rgba(34, 197, 94, 0.2)",
                    background: "rgba(34, 197, 94, 0.06)",
                    transition: "background 0.15s ease",
                  }}
                >
                  <ExternalLink size={11} />
                  Open in Spotify
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Your Playlists from Spotify ── */}
      <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <SectionHeader
            icon={ListMusic}
            title="Your Playlists from Spotify"
            subtitle="Synced from Spotify"
          />
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <div
              style={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                background: "#22c55e",
                boxShadow: "0 0 6px rgba(34, 197, 94, 0.6)",
              }}
            />
            <span style={{ fontSize: "0.72rem", color: "var(--text-muted)", fontWeight: 500 }}>
              Synced 3 min ago
            </span>
          </div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "0.875rem",
          }}
        >
          {spotifyPlaylists.map((playlist) => (
            <div
              key={playlist.id}
              className="glass"
              style={{
                borderRadius: "14px",
                padding: "1rem",
                display: "flex",
                alignItems: "center",
                gap: "0.875rem",
                border: "1px solid var(--border)",
                cursor: "pointer",
                transition: "border-color 0.15s ease",
              }}
            >
              <SmallMosaicArt colors={playlist.colors} size={60} />

              <div style={{ flex: 1, minWidth: 0 }}>
                <p
                  style={{
                    fontSize: "0.875rem",
                    fontWeight: 600,
                    color: "var(--text-primary)",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {playlist.name}
                </p>
                <p style={{ fontSize: "0.72rem", color: "var(--text-muted)", marginTop: "3px", fontWeight: 500 }}>
                  {playlist.tracks} tracks
                </p>
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: "8px", flexShrink: 0 }}>
                <button
                  style={{
                    width: 32,
                    height: 32,
                    borderRadius: "50%",
                    background: "var(--accent-soft)",
                    border: "1px solid rgba(168, 85, 247, 0.2)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                  }}
                >
                  <Play size={13} style={{ color: "var(--accent)", fill: "var(--accent)", marginLeft: "2px" }} />
                </button>
                <button
                  style={{
                    width: 32,
                    height: 32,
                    borderRadius: "50%",
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid var(--border)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                  }}
                >
                  <Shuffle size={13} style={{ color: "var(--text-muted)" }} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Friends' Playlists ── */}
      <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
        <SectionHeader
          icon={Music2}
          title="Friends' Playlists"
          subtitle="Shared by friends"
        />

        <div style={{ display: "flex", flexDirection: "column", gap: "0.875rem" }}>
          {friendPlaylists.map((item) => (
            <div
              key={item.id}
              className="glass"
              style={{
                borderRadius: "18px",
                padding: "1.25rem 1.5rem",
                display: "flex",
                alignItems: "center",
                gap: "1.25rem",
                border: "1px solid var(--border)",
                cursor: "pointer",
                transition: "border-color 0.15s ease",
              }}
            >
              {/* Friend avatar */}
              <div
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: "50%",
                  background: item.avatarColor,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  color: "white",
                  flexShrink: 0,
                  boxShadow: `0 0 0 2px var(--surface), 0 0 0 3px ${item.avatarColor}44`,
                }}
              >
                {item.initials}
              </div>

              {/* Mosaic art */}
              <SmallMosaicArt colors={item.colors} size={60} />

              {/* Info */}
              <div style={{ flex: 1, minWidth: 0, display: "flex", flexDirection: "column", gap: "3px" }}>
                <p style={{ fontSize: "0.72rem", color: "var(--text-muted)", fontWeight: 500 }}>
                  From{" "}
                  <span style={{ color: "var(--text-secondary)", fontWeight: 600 }}>
                    {item.name}
                  </span>
                  :
                </p>
                <p
                  style={{
                    fontSize: "0.95rem",
                    fontWeight: 700,
                    color: "var(--text-primary)",
                    letterSpacing: "-0.01em",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  {item.playlistName}
                </p>
                <p
                  style={{
                    fontSize: "0.78rem",
                    color: "var(--text-secondary)",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  {item.description}
                </p>
              </div>

              {/* Track count */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                  flexShrink: 0,
                }}
              >
                <Music2 size={12} style={{ color: "var(--text-muted)" }} />
                <span style={{ fontSize: "0.75rem", color: "var(--text-secondary)", fontWeight: 500 }}>
                  {item.tracks} tracks
                </span>
              </div>

              {/* Save to Spotify button */}
              <button
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "7px",
                  padding: "9px 18px",
                  borderRadius: "12px",
                  background: "rgba(34, 197, 94, 0.08)",
                  border: "1px solid rgba(34, 197, 94, 0.25)",
                  fontSize: "0.8rem",
                  fontWeight: 600,
                  color: "#22c55e",
                  cursor: "pointer",
                  flexShrink: 0,
                  transition: "background 0.15s ease",
                }}
              >
                <Plus size={14} />
                Save to Spotify
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom spacer */}
      <div style={{ height: "1rem" }} />
    </div>
  );
}
