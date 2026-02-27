"use client";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface StarRatingProps {
  value?: number;
  max?: number;
  size?: "sm" | "md" | "lg";
  interactive?: boolean;
  onChange?: (value: number) => void;
  className?: string;
}

export default function StarRating({
  value = 0,
  max = 10,
  size = "md",
  interactive = false,
  onChange,
  className,
}: StarRatingProps) {
  const [hovered, setHovered] = useState<number | null>(null);
  const stars = 5;
  const displayValue = hovered !== null ? hovered : value;

  const sizes = { sm: "text-sm", md: "text-base", lg: "text-xl" };

  return (
    <div className={cn("flex items-center gap-0.5", sizes[size], className)}>
      {Array.from({ length: stars }).map((_, i) => {
        const starValue = (i + 1) * 2;
        const halfValue = starValue - 1;
        const isFull = displayValue >= starValue;
        const isHalf = !isFull && displayValue >= halfValue;

        return (
          <span
            key={i}
            className={cn(
              "relative transition-transform duration-100",
              interactive && "cursor-pointer hover:scale-110"
            )}
            onMouseEnter={() => interactive && setHovered(starValue)}
            onMouseLeave={() => interactive && setHovered(null)}
            onClick={() => interactive && onChange?.(starValue)}
          >
            {isFull ? (
              <span className="text-yellow-400">★</span>
            ) : isHalf ? (
              <span className="text-yellow-400">½</span>
            ) : (
              <span className="text-[var(--text-muted)]">☆</span>
            )}
          </span>
        );
      })}
      {value > 0 && (
        <span className="ml-1 text-[var(--text-muted)] text-xs">
          {value}/{max}
        </span>
      )}
    </div>
  );
}
