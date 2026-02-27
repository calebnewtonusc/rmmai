"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface NowPlayingProps {
  track?: {
    name: string;
    artist: string;
    album: string;
    albumArt?: string;
    duration?: number;
    progress?: number;
  };
  compact?: boolean;
  className?: string;
}

function EQBars() {
  return (
    <div className="flex items-end gap-[2px] h-4">
      {[1, 2, 3].map((i) => (
        <div
          key={i}
          className="w-[3px] bg-accent rounded-full"
          style={{
            animation: `wave ${0.8 + i * 0.15}s ease-in-out infinite`,
            animationDelay: `${i * 0.1}s`,
            height: "100%",
          }}
        />
      ))}
    </div>
  );
}

export default function NowPlaying({ track, compact = false, className }: NowPlayingProps) {
  if (!track) {
    return (
      <div className={cn("flex items-center gap-3", className)}>
        <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0">
          <span className="text-[var(--text-muted)] text-lg">♪</span>
        </div>
        <div>
          <p className="text-sm text-[var(--text-muted)]">Nothing playing</p>
        </div>
      </div>
    );
  }

  const progressPercent =
    track.duration && track.progress ? (track.progress / track.duration) * 100 : 0;

  return (
    <div className={cn("flex items-center gap-3", className)}>
      <div className="relative flex-shrink-0">
        <div
          className={cn(
            "rounded-lg overflow-hidden bg-white/5 flex items-center justify-center",
            compact ? "w-9 h-9" : "w-12 h-12"
          )}
        >
          {track.albumArt ? (
            <Image src={track.albumArt} alt={track.album} fill className="object-cover" />
          ) : (
            <span className="text-[var(--text-muted)]">♪</span>
          )}
        </div>
        <div className="absolute inset-0 flex items-center justify-center bg-black/40 rounded-lg opacity-0 hover:opacity-100 transition-opacity">
          <EQBars />
        </div>
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2">
          <p className={cn("font-medium truncate", compact ? "text-sm" : "text-base")} style={{ color: "var(--text-primary)" }}>
            {track.name}
          </p>
          <EQBars />
        </div>
        <p className="text-sm truncate" style={{ color: "var(--text-secondary)" }}>
          {track.artist}
          {!compact && <span style={{ color: "var(--text-muted)" }}> · {track.album}</span>}
        </p>
        {!compact && track.duration && (
          <div className="mt-1.5 w-full h-[2px] rounded-full bg-white/10">
            <div
              className="h-full rounded-full bg-accent transition-all duration-1000"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        )}
      </div>
    </div>
  );
}
