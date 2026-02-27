"use client";

import { useReducer, useEffect } from "react";
import Link from "next/link";
import useSWR from "swr";
import {
  Play,
  MoreHorizontal,
  TrendingUp,
  Users,
  Star,
  Sparkles,
  Music2,
  Clock,
  Heart,
  type LucideIcon,
} from "lucide-react";

// ─── Cookie Helper ─────────────────────────────────────────────────────────────

function getSpotifyUser() {
  if (typeof document === "undefined") return null;
  const match = document.cookie.match(/spotify_user=([^;]+)/);
  if (!match) return null;
  try {
    return JSON.parse(decodeURIComponent(match[1]));
  } catch {
    return null;
  }
}

// ─── Duration Helper ──────────────────────────────────────────────────────────

function formatDuration(ms: number): string {
  const totalSeconds = Math.floor(ms / 1000);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${minutes}:${seconds.toString().padStart(2, "0")}`;
}

// ─── Color Helper ─────────────────────────────────────────────────────────────

const TRACK_COLORS = ["#f97316", "#3b82f6", "#f59e0b", "#a855f7", "#22c55e"];

function colorFromId(id: string): string {
  let hash = 0;
  for (let i = 0; i < id.length; i++) {
    hash = (hash * 31 + id.charCodeAt(i)) >>> 0;
  }
  return TRACK_COLORS[hash % TRACK_COLORS.length];
}

// ─── Types ────────────────────────────────────────────────────────────────────

interface SpotifyTrack {
  id: string;
  name: string;
  artist: string;
  album: string;
  albumArt: string;
  duration_ms: number;
  played_at: string;
  spotifyUrl: string;
}

interface DisplayTrack {
  id: string;
  title: string;
  artist: string;
  album: string;
  duration: string;
  rating: number | null;
  color: string;
}

// ─── SWR Fetcher ─────────────────────────────────────────────────────────────

async function fetcher(url: string) {
  const res = await fetch(url);
  if (res.status === 401) {
    const err = new Error("Unauthenticated") as Error & { status: number };
    err.status = 401;
    throw err;
  }
  if (!res.ok) throw new Error("Failed to fetch");
  return res.json();
}

// ─── Reducer for UI state ─────────────────────────────────────────────────────

interface UIState {
  displayName: string | null;
}

type UIAction = { type: "SET_DISPLAY_NAME"; payload: string };

function uiReducer(state: UIState, action: UIAction): UIState {
  switch (action.type) {
    case "SET_DISPLAY_NAME":
      return { ...state, displayName: action.payload };
    default:
      return state;
  }
}

// ─── Static Data ─────────────────────────────────────────────────────────────

const topAlbums = [
  {
    id: 1,
    title: "Blonde",
    artist: "Frank Ocean",
    rating: 9.2,
    color: "#f97316",
    plays: 34,
  },
  {
    id: 2,
    title: "Kid A",
    artist: "Radiohead",
    rating: 9.8,
    color: "#3b82f6",
    plays: 28,
  },
  {
    id: 3,
    title: "My Beautiful Dark Twisted Fantasy",
    artist: "Kanye West",
    rating: 9.5,
    color: "#a855f7",
    plays: 21,
  },
  {
    id: 4,
    title: "In Rainbows",
    artist: "Radiohead",
    rating: 9.1,
    color: "#22c55e",
    plays: 17,
  },
  {
    id: 5,
    title: "channel ORANGE",
    artist: "Frank Ocean",
    rating: 8.9,
    color: "#ec4899",
    plays: 14,
  },
];

const friends = [
  {
    id: 1,
    name: "Alex Chen",
    initials: "AC",
    track: "Pyramid Song",
    artist: "Radiohead",
    timeAgo: "2m ago",
    color: "#3b82f6",
  },
  {
    id: 2,
    name: "Maya Patel",
    initials: "MP",
    track: "Nikes",
    artist: "Frank Ocean",
    timeAgo: "8m ago",
    color: "#ec4899",
  },
  {
    id: 3,
    name: "Jordan Lee",
    initials: "JL",
    track: "Lost In The World",
    artist: "Kanye West",
    timeAgo: "15m ago",
    color: "#f97316",
  },
  {
    id: 4,
    name: "Sam Rivera",
    initials: "SR",
    track: "Reckoner",
    artist: "Radiohead",
    timeAgo: "23m ago",
    color: "#22c55e",
  },
];

const trendingAlbums = [
  {
    id: 1,
    title: "Carrie & Lowell",
    artist: "Sufjan Stevens",
    friends: 7,
    color: "#6366f1",
    avgRating: 9.3,
  },
  {
    id: 2,
    title: "To Pimp a Butterfly",
    artist: "Kendrick Lamar",
    friends: 12,
    color: "#f97316",
    avgRating: 9.6,
  },
  {
    id: 3,
    title: "OK Computer",
    artist: "Radiohead",
    friends: 9,
    color: "#3b82f6",
    avgRating: 9.7,
  },
  {
    id: 4,
    title: "Astroworld",
    artist: "Travis Scott",
    friends: 6,
    color: "#f59e0b",
    avgRating: 8.4,
  },
  {
    id: 5,
    title: "good kid, m.A.A.d city",
    artist: "Kendrick Lamar",
    friends: 8,
    color: "#ec4899",
    avgRating: 9.4,
  },
];

const friendAvatarColors = ["#3b82f6", "#ec4899", "#22c55e", "#f97316", "#a855f7"];
const friendInitials = ["AC", "MP", "JL", "SR", "TK"];

// ─── Sub-components ───────────────────────────────────────────────────────────

function StatCard({
  label,
  value,
  trend,
  trendType,
  icon: Icon,
  extra,
}: {
  label: string;
  value: string | number;
  trend?: string;
  trendType?: "up" | "neutral";
  icon?: LucideIcon;
  extra?: React.ReactNode;
}) {
  return (
    <div
      className="glass rounded-2xl p-5 flex flex-col gap-3"
      style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
    >
      <div className="flex items-center justify-between">
        <span style={{ color: "var(--text-muted)", fontSize: "0.8rem", fontWeight: 500, letterSpacing: "0.02em" }}>
          {label}
        </span>
        {Icon && (
          <div
            style={{
              background: "var(--accent-soft)",
              borderRadius: "8px",
              padding: "6px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Icon size={14} style={{ color: "var(--accent)" }} />
          </div>
        )}
      </div>
      {extra ? (
        extra
      ) : (
        <div className="flex items-end gap-2">
          <span style={{ fontSize: "2rem", fontWeight: 700, color: "var(--text-primary)", lineHeight: 1 }}>
            {value}
          </span>
          {trend && (
            <span
              style={{
                fontSize: "0.75rem",
                fontWeight: 600,
                color: trendType === "up" ? "var(--green)" : "var(--text-secondary)",
                marginBottom: "3px",
              }}
            >
              {trend}
            </span>
          )}
        </div>
      )}
    </div>
  );
}

function StarRating({ rating, max = 10 }: { rating: number | null; max?: number }) {
  if (rating === null) return null;
  const filled = Math.round((rating / max) * 5);
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={`star-${i}`}
          size={11}
          style={{
            color: i < filled ? "#f59e0b" : "var(--text-muted)",
            fill: i < filled ? "#f59e0b" : "transparent",
          }}
        />
      ))}
      <span style={{ fontSize: "0.7rem", color: "var(--text-muted)", marginLeft: "4px" }}>
        {rating}/10
      </span>
    </div>
  );
}

function AlbumArtSquare({
  color,
  size = 48,
  title,
}: {
  color: string;
  size?: number;
  title: string;
}) {
  const initials = title
    .split(" ")
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
  return (
    <div
      style={{
        width: size,
        height: size,
        minWidth: size,
        borderRadius: size > 80 ? "12px" : "8px",
        background: `linear-gradient(135deg, ${color}cc 0%, ${color}44 100%)`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: size > 80 ? "1.5rem" : "0.7rem",
        fontWeight: 700,
        color: "rgba(255,255,255,0.9)",
        border: `1px solid ${color}33`,
        flexShrink: 0,
      }}
    >
      {initials}
    </div>
  );
}

// ─── Section Sub-components ───────────────────────────────────────────────────

function RecentlyPlayedSection({ recentTracks, isLoading }: { recentTracks: DisplayTrack[]; isLoading: boolean }) {
  return (
    <div
      style={{
        background: "var(--surface)",
        border: "1px solid var(--border)",
        borderRadius: "20px",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          padding: "1.25rem 1.5rem",
          borderBottom: "1px solid var(--border)",
          display: "flex",
          alignItems: "center",
          justifyContent: "between",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <div style={{ width: 28, height: 28, borderRadius: "8px", background: "var(--accent-soft)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <Clock size={14} style={{ color: "var(--accent)" }} />
            </div>
            <h2 style={{ fontSize: "1rem", fontWeight: 600, color: "var(--text-primary)", letterSpacing: "-0.01em" }}>
              Recently Played
            </h2>
          </div>
          <button style={{ background: "none", border: "none", cursor: "pointer", padding: "4px" }}>
            <MoreHorizontal size={16} style={{ color: "var(--text-muted)" }} />
          </button>
        </div>
      </div>
      <div style={{ padding: "0.5rem 1.5rem", display: "grid", gridTemplateColumns: "28px 1fr auto", gap: "1rem", alignItems: "center" }}>
        <span style={{ fontSize: "0.7rem", color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.06em" }}>#</span>
        <span style={{ fontSize: "0.7rem", color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.06em" }}>Title</span>
        <div style={{ display: "flex", gap: "3rem" }}>
          <span style={{ fontSize: "0.7rem", color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.06em" }}>Rating</span>
          <span style={{ fontSize: "0.7rem", color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.06em" }}>
            <Clock size={11} />
          </span>
        </div>
      </div>
      <div>
        {recentTracks.length === 0 && !isLoading && (
          <div style={{ padding: "2rem 1.5rem", textAlign: "center", fontSize: "0.85rem", color: "var(--text-muted)" }}>
            No recent tracks found.
          </div>
        )}
        {recentTracks.map((track, idx) => (
          <div
            key={track.id}
            style={{
              padding: "0.6rem 1.5rem",
              display: "grid",
              gridTemplateColumns: "28px 44px 1fr auto",
              gap: "0.75rem",
              alignItems: "center",
              borderTop: idx === 0 ? "none" : "1px solid var(--border)",
              transition: "background 0.15s ease",
            }}
            className="group"
          >
            <span style={{ fontSize: "0.8rem", color: "var(--text-muted)", fontVariantNumeric: "tabular-nums", textAlign: "center" }}>
              {idx + 1}
            </span>
            <AlbumArtSquare color={track.color} size={40} title={track.album} />
            <div style={{ display: "flex", flexDirection: "column", gap: "2px", overflow: "hidden" }}>
              <span style={{ fontSize: "0.875rem", fontWeight: 600, color: "var(--text-primary)", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                {track.title}
              </span>
              <span style={{ fontSize: "0.75rem", color: "var(--text-secondary)", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                {track.artist} · {track.album}
              </span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "2.5rem" }}>
              <div style={{ minWidth: "100px", display: "flex", justifyContent: "flex-end" }}>
                {track.rating !== null ? (
                  <StarRating rating={track.rating} />
                ) : (
                  <span style={{ fontSize: "0.7rem", color: "var(--text-muted)" }}>—</span>
                )}
              </div>
              <span style={{ fontSize: "0.8rem", color: "var(--text-muted)", fontVariantNumeric: "tabular-nums", minWidth: "36px", textAlign: "right" }}>
                {track.duration}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function TopAlbumsSection() {
  return (
    <div
      style={{
        background: "var(--surface)",
        border: "1px solid var(--border)",
        borderRadius: "20px",
        overflow: "hidden",
      }}
    >
      <div style={{ padding: "1.25rem 1.5rem", borderBottom: "1px solid var(--border)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <div style={{ width: 28, height: 28, borderRadius: "8px", background: "var(--accent-soft)", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Heart size={14} style={{ color: "var(--accent)" }} />
          </div>
          <h2 style={{ fontSize: "1rem", fontWeight: 600, color: "var(--text-primary)", letterSpacing: "-0.01em" }}>
            Your Top Albums This Month
          </h2>
        </div>
        <span style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>See all</span>
      </div>
      <div style={{ display: "flex", gap: "1rem", padding: "1.25rem 1.5rem", overflowX: "auto", scrollbarWidth: "thin" }}>
        {topAlbums.map((album) => (
          <div key={album.id} style={{ display: "flex", flexDirection: "column", gap: "10px", minWidth: "140px", cursor: "pointer" }}>
            <div style={{ position: "relative" }}>
              <AlbumArtSquare color={album.color} size={140} title={album.title} />
              <div style={{ position: "absolute", top: "8px", right: "8px", background: "rgba(0,0,0,0.7)", backdropFilter: "blur(8px)", borderRadius: "6px", padding: "3px 7px", display: "flex", alignItems: "center", gap: "4px" }}>
                <Star size={10} style={{ color: "#f59e0b", fill: "#f59e0b" }} />
                <span style={{ fontSize: "0.7rem", fontWeight: 700, color: "white" }}>{album.rating}</span>
              </div>
            </div>
            <div>
              <p style={{ fontSize: "0.8rem", fontWeight: 600, color: "var(--text-primary)", lineHeight: 1.3, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", maxWidth: "140px" }}>
                {album.title}
              </p>
              <p style={{ fontSize: "0.7rem", color: "var(--text-secondary)", marginTop: "2px" }}>{album.artist}</p>
              <p style={{ fontSize: "0.65rem", color: "var(--text-muted)", marginTop: "1px" }}>{album.plays} plays</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function RightColumnPanel() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
      {/* Friends Listening Now */}
      <div style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: "20px", overflow: "hidden" }}>
        <div style={{ padding: "1.1rem 1.25rem", borderBottom: "1px solid var(--border)", display: "flex", alignItems: "center", gap: "10px" }}>
          <div style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--green)", boxShadow: "0 0 6px #22c55e88" }} />
          <h2 style={{ fontSize: "0.9rem", fontWeight: 600, color: "var(--text-primary)" }}>Friends Listening Now</h2>
        </div>
        <div style={{ padding: "0.5rem 0" }}>
          {friends.map((friend, idx) => (
            <div
              key={friend.id}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
                padding: "0.65rem 1.25rem",
                borderTop: idx === 0 ? "none" : "1px solid var(--border)",
              }}
            >
              <div
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: "50%",
                  background: friend.color,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "0.7rem",
                  fontWeight: 700,
                  color: "white",
                  flexShrink: 0,
                  position: "relative",
                }}
              >
                {friend.initials}
                <div style={{ position: "absolute", bottom: 0, right: 0, width: 10, height: 10, borderRadius: "50%", background: "var(--green)", border: "2px solid var(--surface)" }} />
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <p style={{ fontSize: "0.82rem", fontWeight: 600, color: "var(--text-primary)", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                  {friend.name}
                </p>
                <p style={{ fontSize: "0.72rem", color: "var(--text-secondary)", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                  {friend.track} · {friend.artist}
                </p>
              </div>
              <span style={{ fontSize: "0.68rem", color: "var(--text-muted)", flexShrink: 0 }}>{friend.timeAgo}</span>
            </div>
          ))}
        </div>
      </div>

      {/* AI Insight of the Day */}
      <div style={{ background: "var(--surface)", border: "1px solid rgba(168, 85, 247, 0.35)", borderRadius: "20px", padding: "1.25rem", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: -20, right: -20, width: 100, height: 100, borderRadius: "50%", background: "radial-gradient(circle, rgba(168,85,247,0.18) 0%, transparent 70%)", pointerEvents: "none" }} />
        <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "0.85rem" }}>
          <div style={{ width: 28, height: 28, borderRadius: "8px", background: "var(--accent-soft)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
            <Sparkles size={14} style={{ color: "var(--accent)" }} />
          </div>
          <div>
            <p style={{ fontSize: "0.78rem", fontWeight: 700, color: "var(--accent)", letterSpacing: "0.04em", textTransform: "uppercase" }}>AI Insight</p>
            <p style={{ fontSize: "0.65rem", color: "var(--text-muted)" }}>Today&apos;s discovery</p>
          </div>
        </div>
        <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)", lineHeight: 1.6 }}>
          You&apos;ve been heavy on{" "}
          <span style={{ color: "var(--text-primary)", fontWeight: 600 }}>&ldquo;emotional&rdquo;</span>{" "}
          tracks this week. You might love Sufjan Stevens&apos;{" "}
          <span style={{ color: "var(--accent)", fontWeight: 600 }}>Carrie &amp; Lowell</span>{" "}
          — 3 of your friends gave it{" "}
          <span style={{ color: "#f59e0b", fontWeight: 700 }}>9/10</span>.
        </p>
        <div style={{ marginTop: "1rem", padding: "0.6rem 1rem", background: "var(--accent-soft)", borderRadius: "10px", display: "flex", alignItems: "center", gap: "8px", cursor: "pointer" }}>
          <Play size={12} style={{ color: "var(--accent)", fill: "var(--accent)" }} />
          <span style={{ fontSize: "0.78rem", fontWeight: 600, color: "var(--accent)" }}>Preview album</span>
        </div>
      </div>

      {/* Quick Rate */}
      <div style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: "20px", padding: "1.25rem" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "0.85rem" }}>
          <AlbumArtSquare color="#a855f7" size={40} title="MBDTF" />
          <div>
            <p style={{ fontSize: "0.85rem", fontWeight: 600, color: "var(--text-primary)" }}>My Beautiful Dark Twisted Fantasy</p>
            <p style={{ fontSize: "0.72rem", color: "var(--text-secondary)" }}>Kanye West · 2010</p>
          </div>
        </div>
        <p style={{ fontSize: "0.78rem", color: "var(--text-secondary)", marginBottom: "0.75rem" }}>
          You haven&apos;t rated this album yet. Add your take?
        </p>
        <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
          {Array.from({ length: 10 }).map((_, i) => (
            <Star
              key={`rate-star-${i}`}
              size={20}
              style={{
                color: i < 3 ? "#f59e0b" : "var(--border)",
                fill: i < 3 ? "#f59e0b" : "transparent",
                cursor: "pointer",
                transition: "color 0.15s, fill 0.15s",
              }}
            />
          ))}
        </div>
        <div style={{ marginTop: "0.85rem", display: "flex", gap: "8px" }}>
          <button style={{ flex: 1, padding: "8px", borderRadius: "10px", background: "var(--accent)", border: "none", fontSize: "0.78rem", fontWeight: 600, color: "white", cursor: "pointer" }}>
            Submit rating
          </button>
          <button style={{ padding: "8px 12px", borderRadius: "10px", background: "transparent", border: "1px solid var(--border)", fontSize: "0.78rem", color: "var(--text-muted)", cursor: "pointer" }}>
            Skip
          </button>
        </div>
      </div>
    </div>
  );
}

function TrendingNetworkSection() {
  return (
    <div style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: "20px", overflow: "hidden" }}>
      <div style={{ padding: "1.25rem 1.5rem", borderBottom: "1px solid var(--border)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <div style={{ width: 28, height: 28, borderRadius: "8px", background: "var(--accent-soft)", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <TrendingUp size={14} style={{ color: "var(--accent)" }} />
          </div>
          <h2 style={{ fontSize: "1rem", fontWeight: 600, color: "var(--text-primary)", letterSpacing: "-0.01em" }}>
            Trending in Your Network
          </h2>
        </div>
        <span style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>See all</span>
      </div>
      <div style={{ display: "flex", gap: "1.25rem", padding: "1.25rem 1.5rem", overflowX: "auto", scrollbarWidth: "thin" }}>
        {trendingAlbums.map((album) => (
          <div key={album.id} style={{ display: "flex", flexDirection: "column", gap: "10px", minWidth: "160px", cursor: "pointer" }}>
            <div style={{ position: "relative" }}>
              <AlbumArtSquare color={album.color} size={160} title={album.title} />
              <div style={{ position: "absolute", bottom: "8px", left: "8px", background: "rgba(0,0,0,0.72)", backdropFilter: "blur(8px)", borderRadius: "6px", padding: "4px 8px", display: "flex", alignItems: "center", gap: "4px" }}>
                <Users size={10} style={{ color: "var(--text-secondary)" }} />
                <span style={{ fontSize: "0.68rem", fontWeight: 600, color: "white" }}>{album.friends} friends</span>
              </div>
              <div style={{ position: "absolute", top: "8px", right: "8px", background: "rgba(0,0,0,0.72)", backdropFilter: "blur(8px)", borderRadius: "6px", padding: "3px 7px", display: "flex", alignItems: "center", gap: "4px" }}>
                <Star size={10} style={{ color: "#f59e0b", fill: "#f59e0b" }} />
                <span style={{ fontSize: "0.7rem", fontWeight: 700, color: "white" }}>{album.avgRating}</span>
              </div>
            </div>
            <div>
              <p style={{ fontSize: "0.82rem", fontWeight: 600, color: "var(--text-primary)", lineHeight: 1.3, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", maxWidth: "160px" }}>
                {album.title}
              </p>
              <p style={{ fontSize: "0.72rem", color: "var(--text-secondary)", marginTop: "2px" }}>{album.artist}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function DashboardPage() {
  const [uiState, dispatch] = useReducer(uiReducer, { displayName: null });

  // Read display name from cookie once on mount (client-side only)
  useEffect(() => {
    const user = getSpotifyUser();
    if (user?.display_name) {
      dispatch({ type: "SET_DISPLAY_NAME", payload: user.display_name });
    }
  }, []);

  const { data, error, isLoading } = useSWR("/api/spotify/recent", fetcher, {
    shouldRetryOnError: false,
  });

  const isUnauthenticated = error?.status === 401;

  const recentTracks: DisplayTrack[] =
    data?.tracks?.map((t: SpotifyTrack) => ({
      id: t.id,
      title: t.name,
      artist: t.artist,
      album: t.album,
      duration: formatDuration(t.duration_ms),
      rating: null,
      color: colorFromId(t.id),
    })) ?? [];

  const greeting = (() => {
    const hour = new Date().getHours();
    if (hour < 12) return "Good morning";
    if (hour < 17) return "Good afternoon";
    return "Good evening";
  })();

  const todayLabel = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });

  if (isUnauthenticated) {
    return (
      <div
        style={{
          padding: "2rem 2.5rem",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "1rem",
        }}
      >
        <Music2 size={48} style={{ color: "var(--text-muted)" }} />
        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--text-primary)" }}>
          Connect Spotify to see your data
        </h2>
        <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem" }}>
          Link your Spotify account to start tracking your listening history.
        </p>
        <Link
          href="/api/auth/spotify"
          style={{
            marginTop: "0.5rem",
            padding: "12px 28px",
            borderRadius: "12px",
            background: "#1db954",
            color: "white",
            fontWeight: 700,
            fontSize: "0.95rem",
            textDecoration: "none",
          }}
        >
          Connect Spotify
        </Link>
      </div>
    );
  }

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
        opacity: isLoading ? 0.5 : 1,
        transition: "opacity 0.3s ease",
      }}
    >
      {/* ── Header Row ── */}
      <div className="flex items-start justify-between">
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
            {greeting}, {uiState.displayName ?? "Joel"}
          </h1>
          <p style={{ fontSize: "0.95rem", color: "var(--text-muted)", fontWeight: 400 }}>
            {todayLabel}
          </p>
        </div>

        <button
          className="glass"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            padding: "10px 18px",
            borderRadius: "12px",
            fontSize: "0.85rem",
            fontWeight: 600,
            color: "var(--text-primary)",
            cursor: "pointer",
            border: "1px solid var(--border)",
            background: "rgba(255,255,255,0.04)",
            backdropFilter: "blur(8px)",
          }}
        >
          <TrendingUp size={15} style={{ color: "var(--accent)" }} />
          Weekly recap
        </button>
      </div>

      {/* ── Stats Row ── */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1rem" }}>
        <StatCard
          label="Tracks this week"
          value={142}
          trend="↑ 12%"
          trendType="up"
          icon={Music2}
        />
        <StatCard
          label="New artists discovered"
          value={8}
          trend="+3 artists"
          trendType="up"
          icon={TrendingUp}
        />
        <StatCard
          label="Friends active now"
          value=""
          icon={Users}
          extra={
            <div style={{ display: "flex", alignItems: "center", gap: "-4px" }}>
              <div style={{ display: "flex" }}>
                {friendAvatarColors.map((color, i) => (
                  <div
                    key={friendInitials[i]}
                    style={{
                      width: 32,
                      height: 32,
                      borderRadius: "50%",
                      background: color,
                      border: "2px solid var(--surface)",
                      marginLeft: i === 0 ? 0 : -8,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "0.6rem",
                      fontWeight: 700,
                      color: "white",
                      zIndex: 5 - i,
                      position: "relative",
                    }}
                  >
                    {friendInitials[i]}
                  </div>
                ))}
              </div>
              <span
                style={{
                  marginLeft: "10px",
                  fontSize: "0.8rem",
                  color: "var(--text-secondary)",
                  fontWeight: 500,
                }}
              >
                5 online
              </span>
            </div>
          }
        />
        <StatCard
          label="Albums rated"
          value={23}
          trend="total"
          trendType="neutral"
          icon={Star}
        />
      </div>

      {/* ── Main Grid ── */}
      <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: "1.5rem" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          <RecentlyPlayedSection recentTracks={recentTracks} isLoading={isLoading} />
          <TopAlbumsSection />
        </div>
        <RightColumnPanel />
      </div>

      <TrendingNetworkSection />

      {/* Bottom spacer */}
      <div style={{ height: "1rem" }} />
    </div>
  );
}
