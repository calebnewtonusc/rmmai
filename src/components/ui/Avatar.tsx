import { cn } from "@/lib/utils";
import Image from "next/image";

interface AvatarProps {
  src?: string | null;
  name?: string;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  className?: string;
  showRing?: boolean;
  online?: boolean;
}

const sizes = {
  xs: { container: "w-6 h-6", text: "text-xs", ring: "ring-1" },
  sm: { container: "w-8 h-8", text: "text-xs", ring: "ring-1" },
  md: { container: "w-10 h-10", text: "text-sm", ring: "ring-2" },
  lg: { container: "w-14 h-14", text: "text-base", ring: "ring-2" },
  xl: { container: "w-20 h-20", text: "text-xl", ring: "ring-2" },
};

export default function Avatar({ src, name, size = "md", className, showRing, online }: AvatarProps) {
  const { container, text, ring } = sizes[size];
  const initials = name
    ?.split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <div className={cn("relative flex-shrink-0", className)}>
      <div
        className={cn(
          "rounded-full overflow-hidden flex items-center justify-center",
          container,
          showRing && `${ring} ring-[var(--accent)] ring-offset-1 ring-offset-[var(--background)]`
        )}
        style={!src ? { background: "linear-gradient(135deg, #a855f7, #ec4899)" } : undefined}
      >
        {src ? (
          <Image src={src} alt={name || ""} fill className="object-cover" />
        ) : (
          <span className={cn("font-semibold text-white", text)}>{initials || "?"}</span>
        )}
      </div>
      {online !== undefined && (
        <span
          className={cn(
            "absolute bottom-0 right-0 rounded-full border-2 border-[var(--background)] w-2.5 h-2.5",
            online ? "bg-green-500" : "bg-[var(--text-muted)]"
          )}
        />
      )}
    </div>
  );
}
