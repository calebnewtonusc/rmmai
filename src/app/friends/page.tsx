"use client";
import { Users, UserPlus, Music2, Play, Star, TrendingUp, Wifi } from "lucide-react";

// ─── Static Data ────────────────────────────────────────────────────────────

const listeningNowFriends = [
  {
    id: 1,
    name: "Alex Chen",
    handle: "@alexc",
    initials: "AC",
    avatarGradient: "linear-gradient(135deg, #a855f7, #6366f1)",
    track: "Nights",
    artist: "Frank Ocean",
    album: "Blonde",
    albumGradient: "linear-gradient(135deg, #f97316, #eab308)",
    minutesAgo: 2,
    eqDelays: ["0s", "0.15s", "0.3s"],
  },
  {
    id: 2,
    name: "Maya Patel",
    handle: "@mayap",
    initials: "MP",
    avatarGradient: "linear-gradient(135deg, #ec4899, #f97316)",
    track: "Exit Music (For a Film)",
    artist: "Radiohead",
    album: "OK Computer",
    albumGradient: "linear-gradient(135deg, #3b82f6, #06b6d4)",
    minutesAgo: 5,
    eqDelays: ["0.2s", "0s", "0.1s"],
  },
  {
    id: 3,
    name: "Jordan Lee",
    handle: "@jordanl",
    initials: "JL",
    avatarGradient: "linear-gradient(135deg, #22c55e, #06b6d4)",
    track: "Runaway",
    artist: "Kanye West",
    album: "My Beautiful Dark Twisted Fantasy",
    albumGradient: "linear-gradient(135deg, #ef4444, #a855f7)",
    minutesAgo: 8,
    eqDelays: ["0.05s", "0.25s", "0s"],
  },
  {
    id: 4,
    name: "Sam Rivera",
    handle: "@samr",
    initials: "SR",
    avatarGradient: "linear-gradient(135deg, #f97316, #ec4899)",
    track: "Death With Dignity",
    artist: "Sufjan Stevens",
    album: "Carrie & Lowell",
    albumGradient: "linear-gradient(135deg, #a855f7, #22c55e)",
    minutesAgo: 11,
    eqDelays: ["0.1s", "0s", "0.2s"],
  },
  {
    id: 5,
    name: "Chris Wu",
    handle: "@chrisw",
    initials: "CW",
    avatarGradient: "linear-gradient(135deg, #6366f1, #a855f7)",
    track: "Weird Fishes/Arpeggi",
    artist: "Radiohead",
    album: "In Rainbows",
    albumGradient: "linear-gradient(135deg, #ef4444, #f97316)",
    minutesAgo: 14,
    eqDelays: ["0.3s", "0.1s", "0s"],
  },
  {
    id: 6,
    name: "Priya Singh",
    handle: "@priyax",
    initials: "PS",
    avatarGradient: "linear-gradient(135deg, #ec4899, #a855f7)",
    track: "Alright",
    artist: "Kendrick Lamar",
    album: "To Pimp a Butterfly",
    albumGradient: "linear-gradient(135deg, #22c55e, #eab308)",
    minutesAgo: 19,
    eqDelays: ["0s", "0.2s", "0.1s"],
  },
];

const topThisWeek = [
  {
    rank: 1,
    track: "Nights",
    artist: "Frank Ocean",
    album: "Blonde",
    albumGradient: "linear-gradient(135deg, #f97316, #eab308)",
    friendCount: 5,
  },
  {
    rank: 2,
    track: "Exit Music (For a Film)",
    artist: "Radiohead",
    album: "OK Computer",
    albumGradient: "linear-gradient(135deg, #3b82f6, #06b6d4)",
    friendCount: 4,
  },
  {
    rank: 3,
    track: "Alright",
    artist: "Kendrick Lamar",
    album: "To Pimp a Butterfly",
    albumGradient: "linear-gradient(135deg, #22c55e, #eab308)",
    friendCount: 4,
  },
  {
    rank: 4,
    track: "Runaway",
    artist: "Kanye West",
    album: "My Beautiful Dark Twisted Fantasy",
    albumGradient: "linear-gradient(135deg, #ef4444, #a855f7)",
    friendCount: 3,
  },
  {
    rank: 5,
    track: "Weird Fishes/Arpeggi",
    artist: "Radiohead",
    album: "In Rainbows",
    albumGradient: "linear-gradient(135deg, #ef4444, #f97316)",
    friendCount: 3,
  },
  {
    rank: 6,
    track: "Death With Dignity",
    artist: "Sufjan Stevens",
    album: "Carrie & Lowell",
    albumGradient: "linear-gradient(135deg, #a855f7, #22c55e)",
    friendCount: 2,
  },
  {
    rank: 7,
    track: "Pyramids",
    artist: "Frank Ocean",
    album: "channel ORANGE",
    albumGradient: "linear-gradient(135deg, #f97316, #ec4899)",
    friendCount: 2,
  },
  {
    rank: 8,
    track: "All I Need",
    artist: "Radiohead",
    album: "In Rainbows",
    albumGradient: "linear-gradient(135deg, #6366f1, #3b82f6)",
    friendCount: 2,
  },
];

const recentlyRated = [
  {
    id: 1,
    friendName: "Alex Chen",
    friendInitials: "AC",
    avatarGradient: "linear-gradient(135deg, #a855f7, #6366f1)",
    albumTitle: "Blonde",
    artist: "Frank Ocean",
    albumGradient: "linear-gradient(135deg, #f97316, #eab308)",
    rating: 9.5,
    dateRated: "Feb 24",
    review: "Timeless. Every listen reveals something new.",
  },
  {
    id: 2,
    friendName: "Maya Patel",
    friendInitials: "MP",
    avatarGradient: "linear-gradient(135deg, #ec4899, #f97316)",
    albumTitle: "OK Computer",
    artist: "Radiohead",
    albumGradient: "linear-gradient(135deg, #3b82f6, #06b6d4)",
    rating: 10,
    dateRated: "Feb 23",
    review: "The album that defined a generation's anxiety.",
  },
  {
    id: 3,
    friendName: "Jordan Lee",
    friendInitials: "JL",
    avatarGradient: "linear-gradient(135deg, #22c55e, #06b6d4)",
    albumTitle: "MBDTF",
    artist: "Kanye West",
    albumGradient: "linear-gradient(135deg, #ef4444, #a855f7)",
    rating: 9,
    dateRated: "Feb 22",
    review: "Peak maximalism. Still unmatched production.",
  },
  {
    id: 4,
    friendName: "Sam Rivera",
    friendInitials: "SR",
    avatarGradient: "linear-gradient(135deg, #f97316, #ec4899)",
    albumTitle: "Carrie & Lowell",
    artist: "Sufjan Stevens",
    albumGradient: "linear-gradient(135deg, #a855f7, #22c55e)",
    rating: 9.2,
    dateRated: "Feb 21",
    review: "Devastating in the best possible way.",
  },
  {
    id: 5,
    friendName: "Chris Wu",
    friendInitials: "CW",
    avatarGradient: "linear-gradient(135deg, #6366f1, #a855f7)",
    albumTitle: "In Rainbows",
    artist: "Radiohead",
    albumGradient: "linear-gradient(135deg, #ef4444, #f97316)",
    rating: 9.8,
    dateRated: "Feb 20",
    review: "Their most human record. Perfection.",
  },
  {
    id: 6,
    friendName: "Priya Singh",
    friendInitials: "PS",
    avatarGradient: "linear-gradient(135deg, #ec4899, #a855f7)",
    albumTitle: "To Pimp a Butterfly",
    artist: "Kendrick Lamar",
    albumGradient: "linear-gradient(135deg, #22c55e, #eab308)",
    rating: 9.7,
    dateRated: "Feb 19",
    review: "Jazz, funk, spoken word — a true masterwork.",
  },
];

const tasteMatches = [
  {
    id: 1,
    name: "Alex Chen",
    initials: "AC",
    avatarGradient: "linear-gradient(135deg, #a855f7, #6366f1)",
    matchPercent: 87,
  },
  {
    id: 2,
    name: "Maya Patel",
    initials: "MP",
    avatarGradient: "linear-gradient(135deg, #ec4899, #f97316)",
    matchPercent: 81,
  },
  {
    id: 3,
    name: "Jordan Lee",
    initials: "JL",
    avatarGradient: "linear-gradient(135deg, #22c55e, #06b6d4)",
    matchPercent: 74,
  },
  {
    id: 4,
    name: "Priya Singh",
    initials: "PS",
    avatarGradient: "linear-gradient(135deg, #ec4899, #a855f7)",
    matchPercent: 68,
  },
];

// ─── Component ───────────────────────────────────────────────────────────────

export default function FriendsPage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "var(--background)",
        color: "var(--text-primary)",
        padding: "40px 32px 80px",
        maxWidth: "1200px",
        margin: "0 auto",
      }}
    >
      {/* ── Header ──────────────────────────────────────────────────────────── */}
      <div
        className="animate-fade-in-up"
        style={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-between",
          marginBottom: "40px",
          gap: "16px",
          flexWrap: "wrap",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
          <div
            style={{
              width: "42px",
              height: "42px",
              borderRadius: "12px",
              background: "var(--accent-soft)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <Users size={20} color="var(--accent)" />
          </div>
          <div>
            <h1
              style={{
                fontSize: "28px",
                fontWeight: "700",
                letterSpacing: "-0.5px",
                lineHeight: "1.2",
                color: "var(--text-primary)",
              }}
            >
              Friends
            </h1>
            <p
              style={{
                fontSize: "14px",
                color: "var(--text-secondary)",
                marginTop: "4px",
                lineHeight: "1.5",
              }}
            >
              See what your network is listening to in real time
            </p>
          </div>
        </div>

        <button
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            padding: "10px 18px",
            borderRadius: "10px",
            border: "1px solid var(--border)",
            background: "transparent",
            color: "var(--text-primary)",
            fontSize: "14px",
            fontWeight: "500",
            cursor: "pointer",
            transition: "border-color 0.2s, background 0.2s",
            flexShrink: 0,
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLButtonElement).style.borderColor =
              "var(--accent)";
            (e.currentTarget as HTMLButtonElement).style.background =
              "var(--accent-soft)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLButtonElement).style.borderColor =
              "var(--border)";
            (e.currentTarget as HTMLButtonElement).style.background =
              "transparent";
          }}
        >
          <UserPlus size={15} />
          Add friends
        </button>
      </div>

      {/* ── Tabs (static labels) ─────────────────────────────────────────────── */}
      <div
        style={{
          display: "flex",
          gap: "4px",
          marginBottom: "40px",
          borderBottom: "1px solid var(--border)",
          paddingBottom: "0",
        }}
      >
        {["Listening Now", "Top This Week", "Recently Rated"].map(
          (tab, idx) => (
            <div
              key={tab}
              style={{
                padding: "10px 16px",
                fontSize: "14px",
                fontWeight: idx === 0 ? "600" : "400",
                color: idx === 0 ? "var(--accent)" : "var(--text-secondary)",
                borderBottom:
                  idx === 0 ? "2px solid var(--accent)" : "2px solid transparent",
                marginBottom: "-1px",
                cursor: "default",
                letterSpacing: "-0.1px",
              }}
            >
              {tab}
            </div>
          )
        )}
      </div>

      {/* ══════════════════════════════════════════════════════════════════════
          SECTION 1 — Listening Now
      ══════════════════════════════════════════════════════════════════════ */}
      <section style={{ marginBottom: "64px" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            marginBottom: "24px",
          }}
        >
          <Wifi size={16} color="var(--green)" />
          <h2
            style={{
              fontSize: "18px",
              fontWeight: "600",
              letterSpacing: "-0.3px",
              color: "var(--text-primary)",
            }}
          >
            Listening Now
          </h2>
          <span
            style={{
              padding: "2px 8px",
              borderRadius: "20px",
              background: "rgba(34, 197, 94, 0.12)",
              color: "var(--green)",
              fontSize: "11px",
              fontWeight: "600",
              letterSpacing: "0.3px",
            }}
          >
            LIVE
          </span>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "16px",
          }}
        >
          {listeningNowFriends.map((friend, i) => (
            <div
              key={friend.id}
              className="glass animate-fade-in-up"
              style={{
                borderRadius: "16px",
                padding: "18px 20px",
                display: "flex",
                alignItems: "center",
                gap: "16px",
                animationDelay: `${i * 0.07}s`,
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Subtle accent glow on hover area */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "radial-gradient(ellipse at top left, rgba(168,85,247,0.04) 0%, transparent 60%)",
                  pointerEvents: "none",
                }}
              />

              {/* Avatar + online dot */}
              <div style={{ position: "relative", flexShrink: 0 }}>
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "50%",
                    background: friend.avatarGradient,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "14px",
                    fontWeight: "700",
                    color: "#fff",
                    letterSpacing: "0.5px",
                  }}
                >
                  {friend.initials}
                </div>
                {/* Online green dot */}
                <div
                  style={{
                    position: "absolute",
                    bottom: "1px",
                    right: "1px",
                    width: "11px",
                    height: "11px",
                    borderRadius: "50%",
                    background: "var(--green)",
                    border: "2px solid var(--surface)",
                  }}
                />
              </div>

              {/* Friend info */}
              <div style={{ flex: 1, minWidth: 0 }}>
                <div
                  style={{
                    fontSize: "14px",
                    fontWeight: "600",
                    color: "var(--text-primary)",
                    marginBottom: "1px",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  {friend.name}
                </div>
                <div
                  style={{
                    fontSize: "12px",
                    color: "var(--text-muted)",
                    marginBottom: "8px",
                  }}
                >
                  {friend.handle}
                </div>
                {/* Track info */}
                <div
                  style={{
                    fontSize: "12px",
                    fontWeight: "600",
                    color: "var(--text-primary)",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  {friend.track}
                </div>
                <div
                  style={{
                    fontSize: "11px",
                    color: "var(--text-secondary)",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  {friend.artist}
                </div>
                <div
                  style={{
                    fontSize: "11px",
                    color: "var(--text-muted)",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    marginBottom: "6px",
                  }}
                >
                  {friend.album}
                </div>
                {/* Timestamp + EQ */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <span
                    style={{ fontSize: "11px", color: "var(--text-muted)" }}
                  >
                    {friend.minutesAgo} min ago
                  </span>
                  {/* EQ animation bars */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "flex-end",
                      gap: "2px",
                      height: "14px",
                    }}
                  >
                    {friend.eqDelays.map((delay, barIdx) => (
                      <div
                        key={barIdx}
                        className="eq-bar"
                        style={{
                          width: "3px",
                          height: "14px",
                          borderRadius: "2px",
                          background: "var(--accent)",
                          transformOrigin: "bottom",
                          animationDelay: delay,
                          opacity: 0.8,
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Album art placeholder */}
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "8px",
                  background: friend.albumGradient,
                  flexShrink: 0,
                  boxShadow: "0 4px 12px rgba(0,0,0,0.4)",
                }}
              />
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          SECTION 2 — Top This Week
      ══════════════════════════════════════════════════════════════════════ */}
      <section style={{ marginBottom: "64px" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            marginBottom: "6px",
          }}
        >
          <TrendingUp size={16} color="var(--accent)" />
          <h2
            style={{
              fontSize: "18px",
              fontWeight: "600",
              letterSpacing: "-0.3px",
              color: "var(--text-primary)",
            }}
          >
            Top This Week
          </h2>
        </div>
        <p
          style={{
            fontSize: "13px",
            color: "var(--text-muted)",
            marginBottom: "24px",
          }}
        >
          What your friends can&apos;t stop playing
        </p>

        <div
          className="glass"
          style={{ borderRadius: "16px", overflow: "hidden" }}
        >
          {topThisWeek.map((item, i) => (
            <div
              key={item.rank}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "16px",
                padding: "14px 20px",
                borderBottom:
                  i < topThisWeek.length - 1 ? "1px solid var(--border)" : "none",
                transition: "background 0.15s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.background =
                  "rgba(255,255,255,0.03)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.background =
                  "transparent";
              }}
            >
              {/* Rank */}
              <div
                style={{
                  width: "28px",
                  textAlign: "center",
                  fontSize: "13px",
                  fontWeight: "700",
                  color:
                    item.rank === 1
                      ? "var(--accent)"
                      : item.rank <= 3
                      ? "var(--text-secondary)"
                      : "var(--text-muted)",
                  flexShrink: 0,
                }}
              >
                {item.rank}
              </div>

              {/* Album art */}
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "6px",
                  background: item.albumGradient,
                  flexShrink: 0,
                  boxShadow: "0 2px 8px rgba(0,0,0,0.3)",
                }}
              />

              {/* Track info */}
              <div style={{ flex: 1, minWidth: 0 }}>
                <div
                  style={{
                    fontSize: "14px",
                    fontWeight: "600",
                    color: "var(--text-primary)",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  {item.track}
                </div>
                <div
                  style={{
                    fontSize: "12px",
                    color: "var(--text-secondary)",
                  }}
                >
                  {item.artist}
                </div>
              </div>

              {/* Friend count */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  flexShrink: 0,
                }}
              >
                <Users size={12} color="var(--text-muted)" />
                <span style={{ fontSize: "12px", color: "var(--text-muted)" }}>
                  {item.friendCount} friend{item.friendCount !== 1 ? "s" : ""}
                </span>
              </div>

              {/* Play button */}
              <button
                style={{
                  width: "32px",
                  height: "32px",
                  borderRadius: "50%",
                  border: "1px solid var(--border)",
                  background: "transparent",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  flexShrink: 0,
                  transition: "border-color 0.15s, background 0.15s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.borderColor =
                    "var(--accent)";
                  (e.currentTarget as HTMLButtonElement).style.background =
                    "var(--accent-soft)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.borderColor =
                    "var(--border)";
                  (e.currentTarget as HTMLButtonElement).style.background =
                    "transparent";
                }}
              >
                <Play
                  size={12}
                  color="var(--text-secondary)"
                  style={{ marginLeft: "1px" }}
                />
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          SECTION 3 — Recently Rated
      ══════════════════════════════════════════════════════════════════════ */}
      <section style={{ marginBottom: "64px" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            marginBottom: "24px",
          }}
        >
          <Star size={16} color="var(--accent)" />
          <h2
            style={{
              fontSize: "18px",
              fontWeight: "600",
              letterSpacing: "-0.3px",
              color: "var(--text-primary)",
            }}
          >
            Recently Rated
          </h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "16px",
          }}
        >
          {recentlyRated.map((card, i) => (
            <div
              key={card.id}
              className="glass animate-fade-in-up"
              style={{
                borderRadius: "16px",
                overflow: "hidden",
                animationDelay: `${i * 0.06}s`,
                display: "flex",
                flexDirection: "column",
              }}
            >
              {/* Album art banner */}
              <div
                style={{
                  height: "80px",
                  background: card.albumGradient,
                  position: "relative",
                  flexShrink: 0,
                }}
              >
                {/* Rating badge overlapping the banner */}
                <div
                  style={{
                    position: "absolute",
                    bottom: "-18px",
                    right: "16px",
                    background: "var(--surface)",
                    border: "1px solid var(--border)",
                    borderRadius: "10px",
                    padding: "4px 10px",
                    display: "flex",
                    alignItems: "baseline",
                    gap: "2px",
                  }}
                >
                  <span
                    style={{
                      fontSize: "22px",
                      fontWeight: "800",
                      color: "var(--accent)",
                      letterSpacing: "-1px",
                      lineHeight: "1",
                    }}
                  >
                    {card.rating}
                  </span>
                  <span
                    style={{
                      fontSize: "11px",
                      color: "var(--text-muted)",
                      fontWeight: "500",
                    }}
                  >
                    /10
                  </span>
                </div>
              </div>

              {/* Card body */}
              <div style={{ padding: "24px 16px 16px" }}>
                {/* Friend row */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    marginBottom: "12px",
                  }}
                >
                  <div
                    style={{
                      width: "26px",
                      height: "26px",
                      borderRadius: "50%",
                      background: card.avatarGradient,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "9px",
                      fontWeight: "700",
                      color: "#fff",
                      flexShrink: 0,
                    }}
                  >
                    {card.friendInitials}
                  </div>
                  <span
                    style={{
                      fontSize: "12px",
                      fontWeight: "600",
                      color: "var(--text-secondary)",
                    }}
                  >
                    {card.friendName}
                  </span>
                </div>

                {/* Album title + artist */}
                <div
                  style={{
                    fontSize: "15px",
                    fontWeight: "700",
                    color: "var(--text-primary)",
                    marginBottom: "2px",
                    letterSpacing: "-0.2px",
                  }}
                >
                  {card.albumTitle}
                </div>
                <div
                  style={{
                    fontSize: "12px",
                    color: "var(--text-secondary)",
                    marginBottom: "10px",
                  }}
                >
                  {card.artist}
                </div>

                {/* Review quote */}
                {card.review && (
                  <p
                    style={{
                      fontSize: "12px",
                      color: "var(--text-muted)",
                      fontStyle: "italic",
                      lineHeight: "1.5",
                      borderLeft: "2px solid var(--accent)",
                      paddingLeft: "10px",
                      marginBottom: "10px",
                    }}
                  >
                    &ldquo;{card.review}&rdquo;
                  </p>
                )}

                {/* Date */}
                <div style={{ fontSize: "11px", color: "var(--text-muted)" }}>
                  {card.dateRated}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          SECTION 4 — Taste Match
      ══════════════════════════════════════════════════════════════════════ */}
      <section>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            marginBottom: "8px",
          }}
        >
          <Music2 size={16} color="var(--accent)" />
          <h2
            style={{
              fontSize: "18px",
              fontWeight: "600",
              letterSpacing: "-0.3px",
              color: "var(--text-primary)",
            }}
          >
            Taste Match
          </h2>
        </div>
        <p
          style={{
            fontSize: "13px",
            color: "var(--text-muted)",
            marginBottom: "24px",
          }}
        >
          How your taste compares
        </p>

        <div
          className="glass"
          style={{ borderRadius: "16px", padding: "8px 0", overflow: "hidden" }}
        >
          {tasteMatches.map((match, i) => (
            <div
              key={match.id}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "16px",
                padding: "16px 24px",
                borderBottom:
                  i < tasteMatches.length - 1
                    ? "1px solid var(--border)"
                    : "none",
              }}
            >
              {/* Avatar */}
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  background: match.avatarGradient,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "12px",
                  fontWeight: "700",
                  color: "#fff",
                  flexShrink: 0,
                }}
              >
                {match.initials}
              </div>

              {/* Name + bar */}
              <div style={{ flex: 1, minWidth: 0 }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "baseline",
                    marginBottom: "8px",
                  }}
                >
                  <span
                    style={{
                      fontSize: "14px",
                      fontWeight: "600",
                      color: "var(--text-primary)",
                    }}
                  >
                    {match.name}
                  </span>
                  <span
                    style={{
                      fontSize: "14px",
                      fontWeight: "700",
                      color: "var(--accent)",
                      letterSpacing: "-0.3px",
                    }}
                  >
                    {match.matchPercent}% match
                  </span>
                </div>

                {/* Progress bar track */}
                <div
                  style={{
                    height: "5px",
                    borderRadius: "999px",
                    background: "rgba(255,255,255,0.06)",
                    overflow: "hidden",
                  }}
                >
                  {/* Filled portion */}
                  <div
                    style={{
                      height: "100%",
                      width: `${match.matchPercent}%`,
                      borderRadius: "999px",
                      background:
                        "linear-gradient(90deg, var(--accent), #ec4899)",
                      boxShadow: "0 0 8px rgba(168,85,247,0.5)",
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
