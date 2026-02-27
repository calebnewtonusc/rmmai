"use client";
import Link from "next/link";

export default function Home() {
  return (
    <main
      style={{
        background: "var(--background)",
        color: "var(--text-primary)",
        overflowX: "hidden",
      }}
    >
      {/* ─────────────────────────────────────────────────────────────
          SECTION 1: NAV BAR
      ───────────────────────────────────────────────────────────── */}
      <nav
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "24px 32px",
        }}
      >
        {/* Left: Logo + Beta */}
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <span
            className="gradient-text"
            style={{ fontWeight: 700, fontSize: "20px", letterSpacing: "-0.4px" }}
          >
            RMM.AI
          </span>
          <span
            style={{
              background: "rgba(168,85,247,0.18)",
              border: "1px solid rgba(168,85,247,0.35)",
              color: "#a855f7",
              fontSize: "10px",
              fontWeight: 600,
              letterSpacing: "0.5px",
              textTransform: "uppercase",
              padding: "2px 8px",
              borderRadius: "999px",
            }}
          >
            beta
          </span>
        </div>

        {/* Right: Sign in + Connect Spotify */}
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <Link
            href="/api/auth/spotify"
            style={{
              color: "var(--text-secondary)",
              fontSize: "14px",
              fontWeight: 500,
              textDecoration: "none",
              padding: "8px 12px",
              borderRadius: "10px",
              transition: "color 0.2s",
            }}
          >
            Sign in
          </Link>
          <Link
            href="/api/auth/spotify"
            style={{
              background: "#1DB954",
              color: "#fff",
              fontWeight: 600,
              fontSize: "14px",
              padding: "8px 16px",
              borderRadius: "12px",
              textDecoration: "none",
              whiteSpace: "nowrap",
            }}
          >
            Connect Spotify
          </Link>
        </div>
      </nav>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 2: HERO
      ───────────────────────────────────────────────────────────── */}
      <section
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
          padding: "0 24px",
        }}
      >
        {/* Purple glow blob center */}
        <div
          style={{
            position: "absolute",
            width: "600px",
            height: "600px",
            background:
              "radial-gradient(circle, rgba(168,85,247,0.2) 0%, transparent 70%)",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            pointerEvents: "none",
          }}
        />
        {/* Pink offset blob right */}
        <div
          style={{
            position: "absolute",
            width: "400px",
            height: "400px",
            background:
              "radial-gradient(circle, rgba(236,72,153,0.1) 0%, transparent 70%)",
            top: "30%",
            right: "-80px",
            pointerEvents: "none",
          }}
        />
        {/* Orange offset blob left */}
        <div
          style={{
            position: "absolute",
            width: "300px",
            height: "300px",
            background:
              "radial-gradient(circle, rgba(249,115,22,0.07) 0%, transparent 70%)",
            bottom: "20%",
            left: "-40px",
            pointerEvents: "none",
          }}
        />

        {/* Hero content */}
        <div
          className="animate-fade-in-up"
          style={{ position: "relative", zIndex: 10, maxWidth: "900px" }}
        >
          {/* Badge */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              marginBottom: "32px",
            }}
          >
            <span
              className="glass"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                padding: "6px 16px",
                borderRadius: "999px",
                fontSize: "12px",
                color: "var(--accent)",
                fontWeight: 500,
              }}
            >
              ✦ Now with Spotify Live Sync
            </span>
          </div>

          {/* H1 */}
          <h1
            style={{
              fontSize: "clamp(56px, 10vw, 112px)",
              fontWeight: 700,
              letterSpacing: "-3px",
              lineHeight: 0.95,
              margin: 0,
            }}
          >
            <span style={{ display: "block", color: "var(--text-primary)" }}>
              Your music,
            </span>
            <span className="gradient-text" style={{ display: "block" }}>
              understood.
            </span>
          </h1>

          {/* Subheadline */}
          <p
            style={{
              fontSize: "20px",
              color: "var(--text-secondary)",
              maxWidth: "640px",
              margin: "28px auto 0",
              lineHeight: 1.6,
              fontWeight: 400,
            }}
          >
            RMM.AI connects your Spotify history, your friends&apos; taste, and
            Claude AI to surface what you&apos;ll actually love — before you
            even know to look for it.
          </p>

          {/* CTA Buttons */}
          <div
            style={{
              marginTop: "40px",
              display: "flex",
              gap: "16px",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <Link
              href="/api/auth/spotify"
              style={{
                background: "#1DB954",
                color: "#fff",
                fontWeight: 600,
                fontSize: "16px",
                padding: "16px 32px",
                borderRadius: "16px",
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                boxShadow: "0 8px 32px rgba(29,185,84,0.3)",
              }}
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                width="20"
                height="20"
                style={{ flexShrink: 0 }}
              >
                <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
              </svg>
              Connect Spotify
            </Link>
            <button
              style={{
                background: "transparent",
                border: "1px solid rgba(255,255,255,0.2)",
                color: "var(--text-primary)",
                fontWeight: 600,
                fontSize: "16px",
                padding: "16px 32px",
                borderRadius: "16px",
                cursor: "pointer",
              }}
            >
              See how it works
            </button>
          </div>

          {/* Social Proof */}
          <div
            style={{
              marginTop: "32px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "12px",
            }}
          >
            {/* Avatar cluster */}
            <div style={{ display: "flex", alignItems: "center" }}>
              {[
                "linear-gradient(135deg,#a855f7,#ec4899)",
                "linear-gradient(135deg,#ec4899,#f97316)",
                "linear-gradient(135deg,#3b82f6,#a855f7)",
                "linear-gradient(135deg,#22c55e,#3b82f6)",
                "linear-gradient(135deg,#f97316,#ec4899)",
              ].map((grad, i) => (
                <div
                  key={i}
                  style={{
                    width: "28px",
                    height: "28px",
                    borderRadius: "50%",
                    background: grad,
                    border: "2px solid var(--background)",
                    marginLeft: i === 0 ? 0 : "-8px",
                    flexShrink: 0,
                  }}
                />
              ))}
            </div>
            <span style={{ fontSize: "14px", color: "var(--text-muted)" }}>
              10,000+ music fans on RMM.AI
            </span>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 3: FEATURES
      ───────────────────────────────────────────────────────────── */}
      <section
        style={{
          padding: "128px 32px",
          maxWidth: "1152px",
          margin: "0 auto",
        }}
      >
        {/* Section label */}
        <p
          style={{
            fontSize: "11px",
            fontWeight: 600,
            letterSpacing: "3px",
            textTransform: "uppercase",
            color: "var(--accent)",
          }}
        >
          Features
        </p>

        {/* Section heading */}
        <h2
          style={{
            fontSize: "clamp(28px,4vw,40px)",
            fontWeight: 700,
            letterSpacing: "-1px",
            marginTop: "12px",
            color: "var(--text-primary)",
          }}
        >
          Everything your ears deserve
        </h2>

        {/* Cards grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: "24px",
            marginTop: "48px",
          }}
        >
          {[
            {
              icon: "♬",
              title: "Live Spotify Sync",
              desc: "Every track you play is captured automatically. Your listening history is always up to date.",
            },
            {
              icon: "👥",
              title: "Friend Activity",
              desc: "See what your entire network is playing right now. Discover music through people you actually trust.",
            },
            {
              icon: "✦",
              title: "AI Music Assistant",
              desc: "Ask Claude anything about your taste. Get playlists, comparisons, genre deep-dives, and more.",
            },
            {
              icon: "★",
              title: "Rate Everything",
              desc: "Albums, tracks, artists. Build your musical identity the way RateYourMusic intended — but smarter.",
            },
            {
              icon: "🧬",
              title: "Taste DNA",
              desc: "A visual breakdown of your musical personality. Genres, moods, eras — see yourself in the data.",
            },
            {
              icon: "🎯",
              title: "Smart Discovery",
              desc: "Stop searching blindly. RMM.AI recommends based on what your friends love and what your history reveals.",
            },
          ].map((feature) => (
            <div
              key={feature.title}
              className="glass"
              style={{
                borderRadius: "20px",
                padding: "24px",
                transition: "transform 0.25s cubic-bezier(0.16,1,0.3,1), box-shadow 0.25s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.transform =
                  "translateY(-4px)";
                (e.currentTarget as HTMLDivElement).style.boxShadow =
                  "0 16px 48px rgba(168,85,247,0.15)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.transform =
                  "translateY(0)";
                (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
              }}
            >
              {/* Icon */}
              <div
                style={{
                  width: "44px",
                  height: "44px",
                  borderRadius: "12px",
                  background: "rgba(168,85,247,0.12)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "20px",
                  color: "var(--accent)",
                  flexShrink: 0,
                }}
              >
                {feature.icon}
              </div>

              {/* Title */}
              <p
                style={{
                  fontWeight: 600,
                  fontSize: "15px",
                  marginTop: "16px",
                  color: "var(--text-primary)",
                }}
              >
                {feature.title}
              </p>

              {/* Description */}
              <p
                style={{
                  fontSize: "13px",
                  color: "var(--text-secondary)",
                  marginTop: "8px",
                  lineHeight: 1.6,
                }}
              >
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 4: AI DEMO
      ───────────────────────────────────────────────────────────── */}
      <section
        style={{
          padding: "128px 32px",
          background: "var(--surface)",
          borderTop: "1px solid var(--border)",
          borderBottom: "1px solid var(--border)",
        }}
      >
        <div
          style={{
            maxWidth: "1152px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "80px",
            alignItems: "center",
          }}
        >
          {/* Left: Text */}
          <div>
            <p
              style={{
                fontSize: "11px",
                fontWeight: 600,
                letterSpacing: "3px",
                textTransform: "uppercase",
                color: "var(--accent)",
              }}
            >
              AI Assistant
            </p>

            <h2
              style={{
                fontSize: "clamp(28px,3.5vw,40px)",
                fontWeight: 700,
                letterSpacing: "-1px",
                marginTop: "12px",
                lineHeight: 1.15,
                color: "var(--text-primary)",
              }}
            >
              Ask anything about your music taste
            </h2>

            <p
              style={{
                fontSize: "16px",
                color: "var(--text-secondary)",
                marginTop: "20px",
                lineHeight: 1.65,
              }}
            >
              RMM.AI&apos;s AI knows your entire listening history, all your
              ratings, and what your friends are into. Ask it anything.
            </p>

            {/* Example questions */}
            <div
              style={{ display: "flex", flexDirection: "column", gap: "12px", marginTop: "32px" }}
            >
              {[
                "My playlist is stale. What are my friends into that I'd love?",
                "Make me 3 playlists for tomorrow — workout, focus, late night.",
                "Who should I reach out to for jazz recommendations?",
              ].map((q) => (
                <div
                  key={q}
                  className="glass"
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "12px",
                    padding: "14px 16px",
                    borderRadius: "14px",
                    cursor: "pointer",
                    transition: "border-color 0.2s",
                  }}
                >
                  {/* Chat bubble icon */}
                  <span style={{ fontSize: "16px", flexShrink: 0, marginTop: "1px" }}>
                    💬
                  </span>
                  <span
                    style={{
                      fontSize: "14px",
                      color: "var(--text-secondary)",
                      lineHeight: 1.5,
                    }}
                  >
                    {q}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Chat mockup */}
          <div
            className="glass-heavy"
            style={{
              borderRadius: "20px",
              overflow: "hidden",
              boxShadow:
                "0 32px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(168,85,247,0.15)",
            }}
          >
            {/* Chat header bar */}
            <div
              style={{
                background: "rgba(0,0,0,0.4)",
                borderBottom: "1px solid var(--border)",
                padding: "16px 20px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <span style={{ fontSize: "16px" }}>✨</span>
                <span style={{ fontWeight: 600, fontSize: "14px" }}>
                  RMM.AI
                </span>
              </div>
              <span
                style={{
                  background: "rgba(168,85,247,0.15)",
                  border: "1px solid rgba(168,85,247,0.25)",
                  color: "var(--accent)",
                  fontSize: "11px",
                  fontWeight: 500,
                  padding: "3px 10px",
                  borderRadius: "999px",
                }}
              >
                Powered by Claude
              </span>
            </div>

            {/* Chat body */}
            <div
              style={{
                padding: "24px 20px",
                display: "flex",
                flexDirection: "column",
                gap: "16px",
              }}
            >
              {/* User bubble */}
              <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <div
                  style={{
                    background: "rgba(168,85,247,0.2)",
                    border: "1px solid rgba(168,85,247,0.3)",
                    borderRadius: "18px 18px 4px 18px",
                    padding: "12px 16px",
                    maxWidth: "80%",
                    fontSize: "13px",
                    lineHeight: 1.5,
                    color: "var(--text-primary)",
                  }}
                >
                  My playlist is getting repetitive. What should I listen to?
                </div>
              </div>

              {/* AI bubble */}
              <div style={{ display: "flex", justifyContent: "flex-start" }}>
                <div
                  className="glass"
                  style={{
                    borderRadius: "4px 18px 18px 18px",
                    padding: "16px",
                    maxWidth: "92%",
                    fontSize: "13px",
                    lineHeight: 1.65,
                    color: "var(--text-secondary)",
                  }}
                >
                  <p style={{ color: "var(--text-primary)", marginBottom: "12px" }}>
                    Based on your history, you gravitate toward emotionally
                    complex R&amp;B. Your friend{" "}
                    <span style={{ color: "var(--accent)", fontWeight: 600 }}>
                      Alex Chen
                    </span>{" "}
                    has been on a big Bon Iver kick — 4 plays of &ldquo;Holocene&rdquo; this
                    week. Given your rating of{" "}
                    <span style={{ color: "#f97316", fontWeight: 600 }}>
                      Blonde (9/10)
                    </span>
                    , I&apos;d start there. Want me to build a playlist?
                  </p>

                  {/* Album pills */}
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                    {[
                      "Bon Iver / For Emma",
                      "Sufjan Stevens / Carrie & Lowell",
                      "James Blake / Overgrown",
                    ].map((album) => (
                      <span
                        key={album}
                        style={{
                          background: "rgba(168,85,247,0.1)",
                          border: "1px solid rgba(168,85,247,0.2)",
                          color: "var(--accent)",
                          fontSize: "11px",
                          fontWeight: 500,
                          padding: "4px 10px",
                          borderRadius: "999px",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {album}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 5: SOCIAL PROOF / FRIENDS
      ───────────────────────────────────────────────────────────── */}
      <section
        style={{
          padding: "128px 32px",
          maxWidth: "1152px",
          margin: "0 auto",
        }}
      >
        {/* Heading */}
        <h2
          style={{
            fontSize: "clamp(28px,4vw,40px)",
            fontWeight: 700,
            letterSpacing: "-1px",
            textAlign: "center",
            color: "var(--text-primary)",
          }}
        >
          Music is better with friends
        </h2>
        <p
          style={{
            textAlign: "center",
            color: "var(--text-secondary)",
            fontSize: "16px",
            marginTop: "16px",
            lineHeight: 1.6,
          }}
        >
          See what your network is playing in real time — and let the music lead
          you somewhere new.
        </p>

        {/* Friend cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: "20px",
            marginTop: "56px",
          }}
        >
          {[
            {
              name: "Alex Chen",
              handle: "@alexc",
              track: "Holocene",
              artist: "Bon Iver",
              ago: "2 min ago",
              grad: "linear-gradient(135deg,#a855f7,#ec4899)",
              initials: "AC",
            },
            {
              name: "Maya Patel",
              handle: "@mayap",
              track: "Pyramids",
              artist: "Frank Ocean",
              ago: "5 min ago",
              grad: "linear-gradient(135deg,#ec4899,#f97316)",
              initials: "MP",
            },
            {
              name: "Jordan Lee",
              handle: "@jordanl",
              track: "Motion Picture Soundtrack",
              artist: "Radiohead",
              ago: "11 min ago",
              grad: "linear-gradient(135deg,#3b82f6,#a855f7)",
              initials: "JL",
            },
          ].map((friend) => (
            <div
              key={friend.handle}
              className="glass"
              style={{
                borderRadius: "20px",
                padding: "20px",
                transition: "transform 0.25s cubic-bezier(0.16,1,0.3,1), box-shadow 0.25s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.transform =
                  "translateY(-4px)";
                (e.currentTarget as HTMLDivElement).style.boxShadow =
                  "0 16px 48px rgba(168,85,247,0.12)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.transform =
                  "translateY(0)";
                (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
              }}
            >
              {/* Avatar + name row */}
              <div
                style={{ display: "flex", alignItems: "center", gap: "12px" }}
              >
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    background: friend.grad,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "13px",
                    fontWeight: 700,
                    color: "#fff",
                    flexShrink: 0,
                  }}
                >
                  {friend.initials}
                </div>
                <div>
                  <p
                    style={{
                      fontWeight: 600,
                      fontSize: "14px",
                      color: "var(--text-primary)",
                    }}
                  >
                    {friend.name}
                  </p>
                  <p
                    style={{
                      fontSize: "12px",
                      color: "var(--text-muted)",
                    }}
                  >
                    {friend.handle}
                  </p>
                </div>

                {/* Listening now badge */}
                <div
                  style={{
                    marginLeft: "auto",
                    display: "flex",
                    alignItems: "center",
                    gap: "5px",
                  }}
                >
                  <div
                    style={{
                      width: "7px",
                      height: "7px",
                      borderRadius: "50%",
                      background: "#22c55e",
                      boxShadow: "0 0 6px rgba(34,197,94,0.7)",
                    }}
                  />
                  <span
                    style={{
                      fontSize: "11px",
                      color: "#22c55e",
                      fontWeight: 500,
                    }}
                  >
                    listening
                  </span>
                </div>
              </div>

              {/* Divider */}
              <div
                style={{
                  height: "1px",
                  background: "var(--border)",
                  margin: "16px 0",
                }}
              />

              {/* Track info */}
              <div>
                <p
                  style={{
                    fontWeight: 600,
                    fontSize: "14px",
                    color: "var(--text-primary)",
                  }}
                >
                  {friend.track}
                </p>
                <p
                  style={{
                    fontSize: "13px",
                    color: "var(--text-secondary)",
                    marginTop: "3px",
                  }}
                >
                  {friend.artist}
                </p>
                <p
                  style={{
                    fontSize: "11px",
                    color: "var(--text-muted)",
                    marginTop: "8px",
                  }}
                >
                  {friend.ago}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 6: FINAL CTA
      ───────────────────────────────────────────────────────────── */}
      <section
        style={{
          padding: "128px 32px",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
          borderTop: "1px solid var(--border)",
        }}
      >
        {/* Large background glow */}
        <div
          style={{
            position: "absolute",
            width: "700px",
            height: "700px",
            background:
              "radial-gradient(circle, rgba(168,85,247,0.18) 0%, transparent 65%)",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            width: "400px",
            height: "400px",
            background:
              "radial-gradient(circle, rgba(236,72,153,0.1) 0%, transparent 65%)",
            top: "60%",
            right: "10%",
            pointerEvents: "none",
          }}
        />

        {/* Content */}
        <div style={{ position: "relative", zIndex: 10 }}>
          <h2
            style={{
              fontSize: "clamp(36px,5vw,64px)",
              fontWeight: 700,
              letterSpacing: "-2px",
              lineHeight: 1.1,
              color: "var(--text-primary)",
              maxWidth: "800px",
              margin: "0 auto",
            }}
          >
            Ready to hear what you&apos;ve been missing?
          </h2>

          <p
            style={{
              fontSize: "18px",
              color: "var(--text-secondary)",
              marginTop: "20px",
            }}
          >
            Connect your Spotify in 30 seconds. Free forever.
          </p>

          {/* Big CTA button */}
          <div style={{ marginTop: "40px" }}>
            <Link
              href="/api/auth/spotify"
              style={{
                background: "#1DB954",
                color: "#fff",
                fontWeight: 600,
                fontSize: "17px",
                padding: "18px 40px",
                borderRadius: "18px",
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                boxShadow: "0 12px 40px rgba(29,185,84,0.35)",
              }}
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                width="22"
                height="22"
                style={{ flexShrink: 0 }}
              >
                <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
              </svg>
              Connect Spotify
            </Link>
          </div>

          {/* Fine print */}
          <p
            style={{
              fontSize: "13px",
              color: "var(--text-muted)",
              marginTop: "20px",
            }}
          >
            No credit card required · Works with any Spotify plan
          </p>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          FOOTER
      ───────────────────────────────────────────────────────────── */}
      <footer
        style={{
          padding: "48px 32px",
          borderTop: "1px solid var(--border)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "16px",
        }}
      >
        {/* Left */}
        <div
          style={{ display: "flex", alignItems: "center", gap: "10px" }}
        >
          <span
            className="gradient-text"
            style={{ fontWeight: 700, fontSize: "16px", letterSpacing: "-0.3px" }}
          >
            RMM.AI
          </span>
          <span
            style={{
              fontSize: "13px",
              color: "var(--text-muted)",
            }}
          >
            © 2026
          </span>
        </div>

        {/* Right: Links */}
        <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>
          {[
            { label: "Privacy", href: "#" },
            { label: "Terms", href: "#" },
            { label: "GitHub", href: "#" },
          ].map((link) => (
            <Link
              key={link.label}
              href={link.href}
              style={{
                fontSize: "13px",
                color: "var(--text-muted)",
                textDecoration: "none",
                transition: "color 0.15s",
              }}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </footer>
    </main>
  );
}
