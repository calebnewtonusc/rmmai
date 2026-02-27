import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "glass" | "elevated" | "gradient-border";
  hover?: boolean;
}

export default function Card({ className, variant = "default", hover = false, children, ...props }: CardProps) {
  const base = "rounded-2xl transition-all duration-200";

  const variants = {
    default: "bg-[var(--surface)] border border-[var(--border)]",
    glass: "glass",
    elevated: "bg-[var(--surface-elevated)] border border-[var(--border)]",
    "gradient-border": "bg-[var(--surface)] gradient-border",
  };

  const hoverStyles = hover
    ? "hover:border-[var(--border-hover)] hover:bg-white/[0.06] cursor-pointer hover:-translate-y-0.5"
    : "";

  return (
    <div className={cn(base, variants[variant], hoverStyles, className)} {...props}>
      {children}
    </div>
  );
}
