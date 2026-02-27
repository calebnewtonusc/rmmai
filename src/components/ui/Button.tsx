"use client";
import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "ghost" | "outline" | "glass" | "danger";
  size?: "sm" | "md" | "lg";
  loading?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", loading, children, disabled, ...props }, ref) => {
    const base =
      "inline-flex items-center justify-center gap-2 font-medium rounded-xl transition-all duration-200 select-none cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed active:scale-[0.97]";

    const variants = {
      primary:
        "bg-accent text-white hover:bg-accent-hover shadow-lg shadow-purple-900/30 hover:shadow-purple-900/50",
      ghost: "text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-white/5",
      outline:
        "border border-[var(--border)] text-[var(--text-primary)] hover:border-[var(--border-hover)] hover:bg-white/5",
      glass:
        "glass text-[var(--text-primary)] hover:bg-white/8",
      danger: "bg-red-500/10 text-red-400 border border-red-500/20 hover:bg-red-500/20",
    };

    const sizes = {
      sm: "px-3 py-1.5 text-sm",
      md: "px-4 py-2 text-sm",
      lg: "px-6 py-3 text-base",
    };

    return (
      <button
        ref={ref}
        disabled={disabled || loading}
        className={cn(base, variants[variant], sizes[size], className)}
        {...props}
      >
        {loading ? (
          <span
            className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin"
            aria-hidden
          />
        ) : null}
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
export default Button;
