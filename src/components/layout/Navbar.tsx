"use client";

import { Search, Bell, Music2 } from "lucide-react";

export default function Navbar() {
  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: "64px",
        zIndex: 50,
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        backgroundColor: "rgba(8, 8, 8, 0.8)",
        borderBottom: "1px solid var(--border)",
        display: "flex",
        alignItems: "center",
        paddingLeft: "24px",
        paddingRight: "24px",
        gap: "16px",
      }}
    >
      {/* Left: Logo + Beta badge */}
      <div style={{ display: "flex", alignItems: "center", gap: "8px", flexShrink: 0 }}>
        <Music2
          size={18}
          style={{ color: "var(--accent)", flexShrink: 0 }}
        />
        <span
          className="gradient-text"
          style={{ fontWeight: 700, fontSize: "20px", letterSpacing: "-0.3px" }}
        >
          RMMAI
        </span>
        <span
          style={{
            fontSize: "10px",
            fontWeight: 600,
            letterSpacing: "0.05em",
            textTransform: "uppercase",
            color: "var(--accent)",
            backgroundColor: "rgba(168, 85, 247, 0.15)",
            border: "1px solid rgba(168, 85, 247, 0.3)",
            borderRadius: "999px",
            padding: "2px 7px",
            lineHeight: 1.5,
          }}
        >
          beta
        </span>
      </div>

      {/* Center: Search bar */}
      <div style={{ flex: 1, maxWidth: "480px", margin: "0 auto" }}>
        <div
          className="glass"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            borderRadius: "999px",
            padding: "0 16px",
            height: "38px",
            cursor: "text",
          }}
        >
          <Search size={14} style={{ color: "var(--text-muted)", flexShrink: 0 }} />
          <span
            style={{
              fontSize: "13.5px",
              color: "var(--text-muted)",
              userSelect: "none",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            Search albums, artists, tracks...
          </span>
        </div>
      </div>

      {/* Right: Actions */}
      <div style={{ display: "flex", alignItems: "center", gap: "12px", flexShrink: 0 }}>
        {/* Connect Spotify button */}
        <button
          style={{
            display: "flex",
            alignItems: "center",
            gap: "6px",
            backgroundColor: "#22c55e",
            color: "#000",
            border: "none",
            borderRadius: "999px",
            padding: "6px 14px",
            fontSize: "12.5px",
            fontWeight: 600,
            cursor: "pointer",
            letterSpacing: "-0.1px",
            transition: "opacity 0.15s ease, transform 0.15s ease",
            whiteSpace: "nowrap",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLButtonElement).style.opacity = "0.85";
            (e.currentTarget as HTMLButtonElement).style.transform = "scale(0.97)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLButtonElement).style.opacity = "1";
            (e.currentTarget as HTMLButtonElement).style.transform = "scale(1)";
          }}
        >
          {/* Spotify logo-ish circle */}
          <svg
            width="13"
            height="13"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="12" cy="12" r="12" fill="none" />
            <path
              d="M17.9 10.9C14.7 9 9.35 8.8 6.3 9.75c-.5.15-1-.15-1.15-.6-.15-.5.15-1 .6-1.15 3.55-1.05 9.4-.85 13.1 1.35.45.25.6.85.35 1.3-.25.35-.85.5-1.3.25zm-.1 2.8c-.25.4-.75.5-1.15.25-2.65-1.65-6.7-2.1-9.8-1.15-.4.1-.85-.1-.95-.5-.1-.4.1-.85.5-.95 3.55-1.05 8-.55 11.05 1.35.4.25.5.75.35 1zM16.6 16.6c-.2.35-.65.45-1 .25-2.3-1.4-5.2-1.75-8.65-1-.35.1-.7-.15-.8-.5-.1-.35.15-.7.5-.8 3.75-.85 7-.45 9.6 1.1.35.2.45.65.35 .95z"
              fill="#000"
            />
          </svg>
          Connect Spotify
        </button>

        {/* Notification bell */}
        <button
          style={{
            position: "relative",
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: "6px",
            borderRadius: "8px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "var(--text-secondary)",
            transition: "color 0.15s ease, background 0.15s ease",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLButtonElement).style.color = "var(--text-primary)";
            (e.currentTarget as HTMLButtonElement).style.background = "rgba(255,255,255,0.06)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLButtonElement).style.color = "var(--text-secondary)";
            (e.currentTarget as HTMLButtonElement).style.background = "none";
          }}
        >
          <Bell size={18} />
          {/* Red dot badge */}
          <span
            style={{
              position: "absolute",
              top: "5px",
              right: "5px",
              width: "7px",
              height: "7px",
              backgroundColor: "#ef4444",
              borderRadius: "50%",
              border: "1.5px solid #080808",
            }}
          />
        </button>

        {/* User avatar */}
        <div
          style={{
            width: "32px",
            height: "32px",
            borderRadius: "50%",
            background: "linear-gradient(135deg, #a855f7 0%, #ec4899 50%, #f97316 100%)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "11px",
            fontWeight: 700,
            color: "#fff",
            cursor: "pointer",
            flexShrink: 0,
            letterSpacing: "0.02em",
            userSelect: "none",
          }}
        >
          JN
        </div>
      </div>
    </header>
  );
}
