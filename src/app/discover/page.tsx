"use client";

import { useState } from "react";
import {
  Sparkles,
  Send,
  Music2,
  TrendingUp,
  Users,
  Zap,
  Brain,
} from "lucide-react";

const GENRE_BARS = [
  { label: "Post-Rock", pct: 87 },
  { label: "Alt R&B", pct: 82 },
  { label: "Indie Folk", pct: 71 },
  { label: "Hip-Hop", pct: 68 },
  { label: "Electronic", pct: 45 },
  { label: "Classical", pct: 23 },
];

const ACTIVE_CONTEXT = [
  { icon: <Music2 size={13} />, label: "Spotify connected" },
  { icon: <TrendingUp size={13} />, label: "Last 90 days: 847 tracks" },
  { icon: <Zap size={13} />, label: "Top artist: Frank Ocean" },
  { icon: <Users size={13} />, label: "Friends synced: 8" },
];

const AI_INSIGHTS = [
  {
    text: "Your late-night listening skews 40% more melancholic than your morning sessions.",
  },
  {
    text: "3 of your friends share your post-rock affinity — none of them overlap.",
  },
  {
    text: "You've discovered 12 artists this month before they hit 50k monthly listeners.",
  },
];

const SUGGESTED_PROMPTS = [
  "Who should I hit up for jazz recs?",
  "What hidden gems match my vibe?",
  "Build me a genre roadmap for jazz",
  "Rate my taste this month",
];

interface Message {
  role: "user" | "ai";
  content: React.ReactNode;
}

const AlbumChip = ({ album, artist }: { album: string; artist: string }) => (
  <span
    className="glass"
    style={{
      display: "inline-flex",
      alignItems: "center",
      gap: "6px",
      padding: "4px 10px",
      borderRadius: "999px",
      fontSize: "12px",
      color: "var(--text-secondary)",
      margin: "2px 4px 2px 0",
      whiteSpace: "nowrap",
    }}
  >
    <Music2 size={11} style={{ color: "var(--accent)", flexShrink: 0 }} />
    <span style={{ color: "var(--text-primary)", fontWeight: 500 }}>
      {album}
    </span>
    <span style={{ color: "var(--text-muted)" }}>·</span>
    <span>{artist}</span>
  </span>
);

const STATIC_MESSAGES: Message[] = [
  {
    role: "user",
    content:
      "My playlist is getting repetitive. What are my friends listening to that I'd love?",
  },
  {
    role: "ai",
    content: (
      <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        <p>
          Based on your taste profile and what your friends have been spinning
          lately, here&apos;s what&apos;s catching my attention:
        </p>
        <p>
          <strong style={{ color: "var(--text-primary)" }}>
            Frank Ocean&apos;s Blonde
          </strong>{" "}
          is trending across{" "}
          <span style={{ color: "var(--accent)" }}>4 of your friends</span>{" "}
          right now — and given your deep Alt R&B affinity at 82%, you&apos;ll
          probably find tracks you missed the first time. Pay attention to
          &ldquo;Nights&rdquo; and &ldquo;Self Control.&rdquo;
        </p>
        <p>
          Beyond that, your Post-Rock percentage suggests you&apos;d connect
          with what your network is discovering:
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", marginTop: "4px" }}>
          <AlbumChip album="Carrie & Lowell" artist="Sufjan Stevens" />
          <AlbumChip album="Bon Iver, Bon Iver" artist="Bon Iver" />
          <AlbumChip album="Blonde" artist="Frank Ocean" />
        </div>
        <p style={{ color: "var(--text-secondary)", fontSize: "13px" }}>
          Sufjan and Bon Iver both sit at the intersection of Indie Folk and
          Post-Rock where your taste profile is strongest. Your friend Marcus
          has been on a Sufjan deep-dive for 3 weeks — worth a message.
        </p>
      </div>
    ),
  },
  {
    role: "user",
    content:
      "Make me 3 playlists for tomorrow. Morning workout, focus work session, and late night drive.",
  },
  {
    role: "ai",
    content: (
      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        <p>Built from your taste profile. Here are three ready to go:</p>

        <div
          className="glass"
          style={{ borderRadius: "12px", padding: "14px 16px" }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              marginBottom: "10px",
            }}
          >
            <Zap size={14} style={{ color: "#f97316" }} />
            <span
              style={{
                fontWeight: 600,
                color: "var(--text-primary)",
                fontSize: "14px",
              }}
            >
              Morning Momentum
            </span>
            <span
              style={{
                fontSize: "11px",
                color: "var(--text-muted)",
                marginLeft: "auto",
              }}
            >
              22 min
            </span>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "6px",
              fontSize: "13px",
              color: "var(--text-secondary)",
            }}
          >
            <span>1. &ldquo;PRIDE.&rdquo; — Kendrick Lamar</span>
            <span>2. &ldquo;Nights&rdquo; — Frank Ocean</span>
            <span>3. &ldquo;DNA.&rdquo; — Kendrick Lamar</span>
            <span>4. &ldquo;Self Control&rdquo; — Frank Ocean</span>
            <span>5. &ldquo;Alright&rdquo; — Kendrick Lamar</span>
          </div>
        </div>

        <div
          className="glass"
          style={{ borderRadius: "12px", padding: "14px 16px" }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              marginBottom: "10px",
            }}
          >
            <Brain size={14} style={{ color: "var(--accent)" }} />
            <span
              style={{
                fontWeight: 600,
                color: "var(--text-primary)",
                fontSize: "14px",
              }}
            >
              Deep Focus
            </span>
            <span
              style={{
                fontSize: "11px",
                color: "var(--text-muted)",
                marginLeft: "auto",
              }}
            >
              38 min
            </span>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "6px",
              fontSize: "13px",
              color: "var(--text-secondary)",
            }}
          >
            <span>1. &ldquo;Re: Stacks&rdquo; — Bon Iver</span>
            <span>2. &ldquo;Death With Dignity&rdquo; — Sufjan Stevens</span>
            <span>3. &ldquo;Holocene&rdquo; — Bon Iver</span>
            <span>4. &ldquo;Fourth of July&rdquo; — Sufjan Stevens</span>
            <span>5. &ldquo;Skinny Love&rdquo; — Bon Iver</span>
          </div>
        </div>

        <div
          className="glass"
          style={{ borderRadius: "12px", padding: "14px 16px" }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              marginBottom: "10px",
            }}
          >
            <Music2 size={14} style={{ color: "#3b82f6" }} />
            <span
              style={{
                fontWeight: 600,
                color: "var(--text-primary)",
                fontSize: "14px",
              }}
            >
              Late Night Drive
            </span>
            <span
              style={{
                fontSize: "11px",
                color: "var(--text-muted)",
                marginLeft: "auto",
              }}
            >
              31 min
            </span>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "6px",
              fontSize: "13px",
              color: "var(--text-secondary)",
            }}
          >
            <span>1. &ldquo;Ivy&rdquo; — Frank Ocean</span>
            <span>2. &ldquo;Motion Picture Soundtrack&rdquo; — Radiohead</span>
            <span>3. &ldquo;White Ferrari&rdquo; — Frank Ocean</span>
            <span>4. &ldquo;The Night Will Always Win&rdquo; — Manchester Orchestra</span>
            <span>5. &ldquo;Videotape&rdquo; — Radiohead</span>
          </div>
        </div>
      </div>
    ),
  },
];

export default function DiscoverPage() {
  const [inputValue, setInputValue] = useState("");

  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        backgroundColor: "var(--background)",
        overflow: "hidden",
      }}
    >
      {/* LEFT — Chat Interface */}
      <div
        style={{
          flex: "0 0 66.666%",
          display: "flex",
          flexDirection: "column",
          borderRight: "1px solid var(--border)",
          overflow: "hidden",
        }}
      >
        {/* Chat Header */}
        <div
          className="glass"
          style={{
            padding: "18px 28px",
            display: "flex",
            alignItems: "center",
            gap: "12px",
            borderBottom: "1px solid var(--border)",
            borderTop: "none",
            borderLeft: "none",
            borderRight: "none",
            borderRadius: 0,
            flexShrink: 0,
          }}
        >
          <Sparkles size={20} style={{ color: "var(--accent)" }} />
          <h1
            className="gradient-text"
            style={{
              fontSize: "18px",
              fontWeight: 700,
              letterSpacing: "-0.02em",
              lineHeight: 1,
            }}
          >
            RMMAI AI
          </h1>
          <span
            className="glass"
            style={{
              padding: "3px 10px",
              borderRadius: "999px",
              fontSize: "11px",
              color: "var(--text-muted)",
              letterSpacing: "0.01em",
            }}
          >
            Powered by Claude
          </span>
        </div>

        {/* Chat History */}
        <div
          style={{
            flex: 1,
            overflowY: "auto",
            padding: "28px",
            display: "flex",
            flexDirection: "column",
            gap: "24px",
          }}
        >
          {STATIC_MESSAGES.map((msg, i) => (
            <div
              key={i}
              className="animate-fade-in-up"
              style={{
                animationDelay: `${i * 0.08}s`,
                display: "flex",
                justifyContent: msg.role === "user" ? "flex-end" : "flex-start",
                gap: "12px",
                alignItems: "flex-start",
              }}
            >
              {msg.role === "ai" && (
                <div
                  style={{
                    width: "30px",
                    height: "30px",
                    borderRadius: "50%",
                    background:
                      "linear-gradient(135deg, var(--accent), #ec4899)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    marginTop: "2px",
                  }}
                >
                  <Sparkles size={14} color="white" />
                </div>
              )}

              <div
                className={msg.role === "ai" ? "glass" : ""}
                style={{
                  maxWidth: "78%",
                  padding: "14px 18px",
                  borderRadius: msg.role === "user" ? "20px 20px 6px 20px" : "6px 20px 20px 20px",
                  background:
                    msg.role === "user"
                      ? "linear-gradient(135deg, var(--accent), #9333ea)"
                      : undefined,
                  color:
                    msg.role === "user"
                      ? "white"
                      : "var(--text-secondary)",
                  fontSize: "14px",
                  lineHeight: "1.65",
                }}
              >
                {msg.content}
              </div>

              {msg.role === "user" && (
                <div
                  style={{
                    width: "30px",
                    height: "30px",
                    borderRadius: "50%",
                    background: "rgba(255,255,255,0.08)",
                    border: "1px solid var(--border)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    marginTop: "2px",
                    fontSize: "13px",
                    fontWeight: 600,
                    color: "var(--text-secondary)",
                  }}
                >
                  J
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Input Area */}
        <div
          style={{
            flexShrink: 0,
            padding: "20px 28px 24px",
            borderTop: "1px solid var(--border)",
          }}
        >
          {/* Suggested Prompts */}
          <div
            style={{
              display: "flex",
              gap: "8px",
              flexWrap: "wrap",
              marginBottom: "14px",
            }}
          >
            {SUGGESTED_PROMPTS.map((prompt) => (
              <button
                key={prompt}
                onClick={() => setInputValue(prompt)}
                className="glass"
                style={{
                  padding: "6px 14px",
                  borderRadius: "999px",
                  fontSize: "12px",
                  color: "var(--text-secondary)",
                  cursor: "pointer",
                  border: "1px solid var(--border)",
                  background: "rgba(255,255,255,0.04)",
                  transition: "all 0.15s ease",
                  whiteSpace: "nowrap",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.borderColor =
                    "rgba(168,85,247,0.4)";
                  (e.currentTarget as HTMLButtonElement).style.color =
                    "var(--text-primary)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.borderColor =
                    "var(--border)";
                  (e.currentTarget as HTMLButtonElement).style.color =
                    "var(--text-secondary)";
                }}
              >
                {prompt}
              </button>
            ))}
          </div>

          {/* Input Row */}
          <div
            style={{
              display: "flex",
              gap: "10px",
              alignItems: "center",
            }}
          >
            <div
              className="glass"
              style={{
                flex: 1,
                borderRadius: "16px",
                display: "flex",
                alignItems: "center",
                padding: "4px 6px 4px 18px",
                gap: "10px",
              }}
            >
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Ask anything about your music taste..."
                style={{
                  flex: 1,
                  background: "transparent",
                  border: "none",
                  outline: "none",
                  color: "var(--text-primary)",
                  fontSize: "14px",
                  lineHeight: "1.5",
                  padding: "10px 0",
                  fontFamily: "inherit",
                }}
              />
              <button
                style={{
                  width: "38px",
                  height: "38px",
                  borderRadius: "12px",
                  background:
                    inputValue.trim()
                      ? "linear-gradient(135deg, var(--accent), #9333ea)"
                      : "rgba(255,255,255,0.06)",
                  border: "none",
                  cursor: inputValue.trim() ? "pointer" : "default",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  transition: "all 0.15s ease",
                }}
              >
                <Send
                  size={16}
                  color={inputValue.trim() ? "white" : "var(--text-muted)"}
                />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT — Context Panel */}
      <div
        style={{
          flex: "0 0 33.333%",
          overflowY: "auto",
          padding: "28px 24px",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        {/* Taste Profile Card */}
        <div
          className="glass animate-fade-in-up"
          style={{
            borderRadius: "16px",
            padding: "20px",
            animationDelay: "0.05s",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              marginBottom: "18px",
            }}
          >
            <TrendingUp size={15} style={{ color: "var(--accent)" }} />
            <h2
              style={{
                fontSize: "13px",
                fontWeight: 600,
                color: "var(--text-primary)",
                letterSpacing: "0.02em",
                textTransform: "uppercase",
              }}
            >
              Your Taste Profile
            </h2>
          </div>

          <div
            style={{ display: "flex", flexDirection: "column", gap: "12px" }}
          >
            {GENRE_BARS.map(({ label, pct }) => (
              <div key={label}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "5px",
                  }}
                >
                  <span
                    style={{
                      fontSize: "12px",
                      color: "var(--text-secondary)",
                      fontWeight: 500,
                    }}
                  >
                    {label}
                  </span>
                  <span
                    style={{
                      fontSize: "11px",
                      color: "var(--text-muted)",
                      fontVariantNumeric: "tabular-nums",
                    }}
                  >
                    {pct}%
                  </span>
                </div>
                <div
                  style={{
                    height: "4px",
                    borderRadius: "999px",
                    background: "rgba(255,255,255,0.07)",
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      height: "100%",
                      width: `${pct}%`,
                      borderRadius: "999px",
                      background:
                        pct >= 70
                          ? "linear-gradient(90deg, var(--accent), #ec4899)"
                          : pct >= 45
                          ? "linear-gradient(90deg, #9333ea, #a855f7)"
                          : "rgba(168,85,247,0.4)",
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Active Context Card */}
        <div
          className="glass animate-fade-in-up"
          style={{
            borderRadius: "16px",
            padding: "20px",
            animationDelay: "0.1s",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              marginBottom: "16px",
            }}
          >
            <Brain size={15} style={{ color: "var(--accent)" }} />
            <h2
              style={{
                fontSize: "13px",
                fontWeight: 600,
                color: "var(--text-primary)",
                letterSpacing: "0.02em",
                textTransform: "uppercase",
              }}
            >
              Active Context
            </h2>
          </div>

          <div
            style={{ display: "flex", flexDirection: "column", gap: "10px" }}
          >
            {ACTIVE_CONTEXT.map(({ icon, label }, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <span
                  style={{
                    color: "var(--accent)",
                    display: "flex",
                    alignItems: "center",
                    flexShrink: 0,
                  }}
                >
                  {icon}
                </span>
                <span
                  style={{
                    fontSize: "13px",
                    color: "var(--text-secondary)",
                  }}
                >
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Recent AI Insights */}
        <div
          className="animate-fade-in-up"
          style={{ animationDelay: "0.15s" }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              marginBottom: "14px",
            }}
          >
            <Sparkles size={15} style={{ color: "var(--accent)" }} />
            <h2
              style={{
                fontSize: "13px",
                fontWeight: 600,
                color: "var(--text-primary)",
                letterSpacing: "0.02em",
                textTransform: "uppercase",
              }}
            >
              Recent AI Insights
            </h2>
          </div>

          <div
            style={{ display: "flex", flexDirection: "column", gap: "10px" }}
          >
            {AI_INSIGHTS.map(({ text }, i) => (
              <div
                key={i}
                className="glass"
                style={{
                  borderRadius: "12px",
                  padding: "13px 15px",
                  display: "flex",
                  gap: "10px",
                  alignItems: "flex-start",
                }}
              >
                <Sparkles
                  size={13}
                  style={{
                    color: "var(--accent)",
                    flexShrink: 0,
                    marginTop: "2px",
                  }}
                />
                <p
                  style={{
                    fontSize: "12px",
                    color: "var(--text-secondary)",
                    lineHeight: "1.55",
                  }}
                >
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
