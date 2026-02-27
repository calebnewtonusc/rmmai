"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Sparkles,
  Users,
  User,
  Star,
  ListMusic,
  Music2,
} from "lucide-react";

const navItems = [
  { label: "Home", icon: LayoutDashboard, href: "/dashboard" },
  { label: "Discover AI", icon: Sparkles, href: "/discover" },
  { label: "Friends", icon: Users, href: "/friends" },
  { label: "My Profile", icon: User, href: "/profile" },
  { label: "My Ratings", icon: Star, href: "/ratings" },
  { label: "Playlists", icon: ListMusic, href: "/playlists" },
];

function EQBars() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "flex-end",
        gap: "2px",
        height: "16px",
      }}
    >
      {[0, 0.2, 0.4, 0.1, 0.3].map((delay, i) => (
        <span
          key={i}
          className="eq-bar"
          style={{
            display: "block",
            width: "3px",
            borderRadius: "1px",
            backgroundColor: "var(--accent)",
            height: "100%",
            animationDelay: `${delay}s`,
            transformOrigin: "bottom",
          }}
        />
      ))}
    </div>
  );
}

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside
      style={{
        position: "fixed",
        top: "64px",
        left: 0,
        bottom: 0,
        width: "240px",
        backgroundColor: "var(--surface)",
        borderRight: "1px solid var(--border)",
        display: "flex",
        flexDirection: "column",
        zIndex: 40,
        overflowY: "auto",
      }}
    >
      {/* Navigation */}
      <nav style={{ padding: "12px 8px", flex: 1 }}>
        <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "2px" }}>
          {navItems.map(({ label, icon: Icon, href }) => {
            const isActive = pathname === href || pathname.startsWith(href + "/");
            return (
              <li key={href}>
                <Link
                  href={href}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    padding: "9px 12px",
                    borderRadius: "8px",
                    fontSize: "13.5px",
                    fontWeight: isActive ? 600 : 500,
                    color: isActive ? "var(--accent)" : "var(--text-secondary)",
                    backgroundColor: isActive ? "rgba(168, 85, 247, 0.12)" : "transparent",
                    textDecoration: "none",
                    transition: "color 0.15s ease, background-color 0.15s ease",
                    letterSpacing: "-0.1px",
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) {
                      const el = e.currentTarget as HTMLAnchorElement;
                      el.style.color = "var(--text-primary)";
                      el.style.backgroundColor = "rgba(255, 255, 255, 0.05)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) {
                      const el = e.currentTarget as HTMLAnchorElement;
                      el.style.color = "var(--text-secondary)";
                      el.style.backgroundColor = "transparent";
                    }
                  }}
                >
                  <Icon
                    size={16}
                    style={{
                      flexShrink: 0,
                      color: isActive ? "var(--accent)" : "inherit",
                      transition: "color 0.15s ease",
                    }}
                  />
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Divider */}
      <div
        style={{
          height: "1px",
          backgroundColor: "var(--border)",
          marginLeft: "16px",
          marginRight: "16px",
        }}
      />

      {/* Now Playing widget */}
      <div style={{ padding: "16px 12px" }}>
        <p
          style={{
            fontSize: "10px",
            fontWeight: 600,
            textTransform: "uppercase",
            letterSpacing: "0.08em",
            color: "var(--text-muted)",
            marginBottom: "10px",
            paddingLeft: "4px",
          }}
        >
          Now Playing
        </p>
        <div
          className="glass"
          style={{
            borderRadius: "10px",
            padding: "12px",
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          {/* Album art placeholder */}
          <div
            style={{
              width: "38px",
              height: "38px",
              borderRadius: "6px",
              background: "linear-gradient(135deg, #a855f7 0%, #ec4899 50%, #f97316 100%)",
              flexShrink: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Music2 size={16} style={{ color: "rgba(255,255,255,0.9)" }} />
          </div>

          {/* Track info */}
          <div style={{ flex: 1, minWidth: 0 }}>
            <p
              style={{
                fontSize: "12.5px",
                fontWeight: 600,
                color: "var(--text-primary)",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
                lineHeight: 1.3,
                marginBottom: "2px",
              }}
            >
              Redbone
            </p>
            <p
              style={{
                fontSize: "11px",
                color: "var(--text-muted)",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
                lineHeight: 1.3,
              }}
            >
              Childish Gambino
            </p>
          </div>

          {/* EQ animation */}
          <EQBars />
        </div>
      </div>
    </aside>
  );
}
