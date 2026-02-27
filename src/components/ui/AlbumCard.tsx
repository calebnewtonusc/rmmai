"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import StarRating from "./StarRating";
import Link from "next/link";

interface AlbumCardProps {
  id?: string;
  title: string;
  artist: string;
  year?: number;
  genre?: string;
  coverUrl?: string;
  rating?: number;
  ratingCount?: number;
  userRating?: number;
  friendsListening?: number;
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
}

export default function AlbumCard({
  id,
  title,
  artist,
  year,
  genre,
  coverUrl,
  rating,
  ratingCount,
  userRating,
  friendsListening,
  size = "md",
  className,
  onClick,
}: AlbumCardProps) {
  const sizes = {
    sm: { cover: "w-full aspect-square", titleClass: "text-sm", artistClass: "text-xs" },
    md: { cover: "w-full aspect-square", titleClass: "text-sm font-semibold", artistClass: "text-xs" },
    lg: { cover: "w-full aspect-square", titleClass: "text-base font-semibold", artistClass: "text-sm" },
  };

  const { cover, titleClass, artistClass } = sizes[size];

  const content = (
    <div
      className={cn(
        "group rounded-2xl overflow-hidden bg-[var(--surface)] border border-[var(--border)] transition-all duration-300 hover:border-[var(--border-hover)] hover:-translate-y-1 hover:shadow-xl hover:shadow-black/50 cursor-pointer",
        className
      )}
      onClick={onClick}
    >
      <div className={cn("relative overflow-hidden bg-white/5", cover)}>
        {coverUrl ? (
          <Image
            src={coverUrl}
            alt={`${title} by ${artist}`}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <span className="text-4xl text-[var(--text-muted)]">♪</span>
          </div>
        )}
        {friendsListening && friendsListening > 0 ? (
          <div className="absolute top-2 right-2 glass rounded-full px-2 py-0.5 text-xs font-medium text-[var(--text-primary)]">
            {friendsListening} friends
          </div>
        ) : null}
        {userRating ? (
          <div className="absolute bottom-2 right-2 bg-accent rounded-full w-7 h-7 flex items-center justify-center text-white text-xs font-bold shadow-lg">
            {userRating}
          </div>
        ) : null}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <button className="w-full py-1.5 rounded-lg bg-accent text-white text-xs font-medium hover:bg-accent-hover transition-colors">
            Rate this album
          </button>
        </div>
      </div>
      <div className="p-3">
        <p className={cn("truncate text-[var(--text-primary)]", titleClass)}>{title}</p>
        <p className={cn("truncate text-[var(--text-secondary)] mt-0.5", artistClass)}>{artist}</p>
        <div className="flex items-center gap-2 mt-2 flex-wrap">
          {rating !== undefined && <StarRating value={rating} size="sm" />}
          {year && <span className="text-xs text-[var(--text-muted)]">{year}</span>}
          {genre && (
            <span className="text-xs px-1.5 py-0.5 rounded-md bg-white/5 text-[var(--text-muted)] border border-[var(--border)]">
              {genre}
            </span>
          )}
        </div>
      </div>
    </div>
  );

  if (id) {
    return <Link href={`/album/${id}`}>{content}</Link>;
  }

  return content;
}
