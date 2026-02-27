import Link from "next/link";

export default function Home() {
  return (
    <main style={{ background: "var(--background)", color: "var(--text-primary)", overflowX: "hidden" }}>
      {/* NAV */}
      <nav
        className="glass"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 40px",
          height: "64px",
          borderTop: "none",
          borderLeft: "none",
          borderRight: "none",
          borderBottom: "1px solid var(--border)",
          backdropFilter: "blur(40px)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <div
            style={{
              width: "28px",
              height: "28px",
              borderRadius: "8px",
              background: "linear-gradient(135deg, #a855f7 0%, #ec4899 60%, #f97316 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <circle cx="8" cy="8" r="3" fill="white" opacity="0.9" />
              <circle cx="8" cy="8" r="6.5" stroke="white" strokeWidth="1" opacity="0.4" strokeDasharray="2 2" />
            </svg>
          </div>
          <span style={{ fontWeight: 700, fontSize: "17px", letterSpacing: "-0.3px" }}>RMMAI</span>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "32px" }}>
          <Link href="#features" style={{ color: "var(--text-secondary)", fontSize: "14px", textDecoration: "none" }}>Features</Link>
          <Link href="#ai-demo" style={{ color: "var(--text-secondary)", fontSize: "14px", textDecoration: "none" }}>AI Demo</Link>
          <Link href="#friends" style={{ color: "var(--text-secondary)", fontSize: "14px", textDecoration: "none" }}>Friends</Link>
          <Link
            href="/dashboard"
            style={{
              background: "var(--accent)",
              color: "white",
              padding: "8px 18px",
              borderRadius: "8px",
              fontSize: "14px",
              fontWeight: 600,
              textDecoration: "none",
            }}
          >
            Get Started
          </Link>
        </div>
      </nav>

      {/* HERO */}
      <section
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          overflow: "hidden",
          padding: "120px 24px 80px",
          textAlign: "center",
        }}
      >
        {/* Radial glow background */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "800px",
            height: "800px",
            background: "radial-gradient(ellipse at center, rgba(168,85,247,0.12) 0%, rgba(168,85,247,0.04) 40%, transparent 70%)",
            pointerEvents: "none",
            zIndex: 0,
          }}
        />

        {/* Floating album cover mockups */}
        <div
          className="animate-fade-in-up"
          style={{
            position: "absolute",
            top: "120px",
            left: "6%",
            width: "140px",
            height: "140px",
            borderRadius: "16px",
            background: "linear-gradient(135deg, #a855f7 0%, #ec4899 100%)",
            transform: "rotate(-8deg)",
            opacity: 0.45,
            filter: "blur(2px)",
            boxShadow: "0 20px 60px rgba(168,85,247,0.3)",
            animationDelay: "0.1s",
            animationFillMode: "both",
          }}
        />
        <div
          className="animate-fade-in-up"
          style={{
            position: "absolute",
            top: "280px",
            left: "12%",
            width: "80px",
            height: "80px",
            borderRadius: "12px",
            background: "linear-gradient(135deg, #f97316 0%, #ec4899 100%)",
            transform: "rotate(5deg)",
            opacity: 0.35,
            filter: "blur(1px)",
            boxShadow: "0 12px 40px rgba(249,115,22,0.25)",
            animationDelay: "0.2s",
            animationFillMode: "both",
          }}
        />
        <div
          className="animate-fade-in-up"
          style={{
            position: "absolute",
            top: "140px",
            right: "7%",
            width: "120px",
            height: "120px",
            borderRadius: "16px",
            background: "linear-gradient(135deg, #3b82f6 0%, #a855f7 100%)",
            transform: "rotate(6deg)",
            opacity: 0.4,
            filter: "blur(2px)",
            boxShadow: "0 16px 50px rgba(59,130,246,0.25)",
            animationDelay: "0.15s",
            animationFillMode: "both",
          }}
        />
        <div
          className="animate-fade-in-up"
          style={{
            position: "absolute",
            top: "290px",
            right: "14%",
            width: "72px",
            height: "72px",
            borderRadius: "12px",
            background: "linear-gradient(135deg, #ec4899 0%, #f97316 100%)",
            transform: "rotate(-4deg)",
            opacity: 0.35,
            filter: "blur(1px)",
            boxShadow: "0 10px 35px rgba(236,72,153,0.25)",
            animationDelay: "0.25s",
            animationFillMode: "both",
          }}
        />
        <div
          className="animate-fade-in-up"
          style={{
            position: "absolute",
            bottom: "160px",
            left: "10%",
            width: "96px",
            height: "96px",
            borderRadius: "14px",
            background: "linear-gradient(135deg, #22c55e 0%, #3b82f6 100%)",
            transform: "rotate(10deg)",
            opacity: 0.3,
            filter: "blur(1.5px)",
            animationDelay: "0.3s",
            animationFillMode: "both",
          }}
        />
        <div
          className="animate-fade-in-up"
          style={{
            position: "absolute",
            bottom: "140px",
            right: "9%",
            width: "108px",
            height: "108px",
            borderRadius: "16px",
            background: "linear-gradient(135deg, #f97316 0%, #a855f7 100%)",
            transform: "rotate(-12deg)",
            opacity: 0.35,
            filter: "blur(2px)",
            boxShadow: "0 14px 45px rgba(249,115,22,0.2)",
            animationDelay: "0.2s",
            animationFillMode: "both",
          }}
        />
        <div
          className="animate-fade-in-up"
          style={{
            position: "absolute",
            top: "45%",
            left: "3%",
            width: "60px",
            height: "60px",
            borderRadius: "10px",
            background: "linear-gradient(135deg, #ec4899 0%, #a855f7 100%)",
            transform: "rotate(-3deg)",
            opacity: 0.25,
            filter: "blur(1px)",
            animationDelay: "0.35s",
            animationFillMode: "both",
          }}
        />
        <div
          className="animate-fade-in-up"
          style={{
            position: "absolute",
            top: "42%",
            right: "3%",
            width: "64px",
            height: "64px",
            borderRadius: "10px",
            background: "linear-gradient(135deg, #a855f7 0%, #3b82f6 100%)",
            transform: "rotate(7deg)",
            opacity: 0.25,
            filter: "blur(1px)",
            animationDelay: "0.3s",
            animationFillMode: "both",
          }}
        />

        {/* Hero content */}
        <div style={{ position: "relative", zIndex: 1, maxWidth: "780px" }}>
          <div
            className="animate-fade-in-up"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "6px 14px",
              borderRadius: "999px",
              background: "rgba(168,85,247,0.12)",
              border: "1px solid rgba(168,85,247,0.25)",
              marginBottom: "32px",
              animationFillMode: "both",
            }}
          >
            <span style={{ fontSize: "12px", color: "var(--accent)", fontWeight: 600, letterSpacing: "0.5px", textTransform: "uppercase" }}>
              Now in beta
            </span>
            <span style={{ width: "4px", height: "4px", borderRadius: "50%", background: "var(--accent)", display: "inline-block", opacity: 0.6 }} />
            <span style={{ fontSize: "12px", color: "var(--text-secondary)" }}>10,000+ music fans</span>
          </div>

          <h1
            className="animate-fade-in-up"
            style={{
              fontSize: "clamp(52px, 8vw, 88px)",
              fontWeight: 800,
              lineHeight: 1.0,
              letterSpacing: "-3px",
              marginBottom: "24px",
              animationDelay: "0.1s",
              animationFillMode: "both",
            }}
          >
            Your music,{" "}
            <br />
            <span className="gradient-text">understood.</span>
          </h1>

          <p
            className="animate-fade-in-up"
            style={{
              fontSize: "clamp(17px, 2.2vw, 21px)",
              color: "var(--text-secondary)",
              lineHeight: 1.6,
              maxWidth: "560px",
              margin: "0 auto 44px",
              animationDelay: "0.2s",
              animationFillMode: "both",
            }}
          >
            RMMAI connects your Spotify listening history, your friends&apos; taste,
            and AI to help you discover what you&apos;ll actually love.
          </p>

          <div
            className="animate-fade-in-up"
            style={{
              display: "flex",
              gap: "14px",
              justifyContent: "center",
              flexWrap: "wrap",
              animationDelay: "0.3s",
              animationFillMode: "both",
            }}
          >
            <Link
              href="/dashboard"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                background: "#1DB954",
                color: "white",
                padding: "16px 28px",
                borderRadius: "12px",
                fontSize: "16px",
                fontWeight: 700,
                textDecoration: "none",
                boxShadow: "0 8px 32px rgba(29,185,84,0.35)",
                letterSpacing: "-0.2px",
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
              </svg>
              Connect Spotify
            </Link>

            <Link
              href="#features"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                background: "transparent",
                color: "var(--text-primary)",
                padding: "16px 28px",
                borderRadius: "12px",
                fontSize: "16px",
                fontWeight: 600,
                textDecoration: "none",
                border: "1px solid var(--border)",
                backdropFilter: "blur(10px)",
                letterSpacing: "-0.2px",
              }}
            >
              See how it works
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 8h10M8 3l5 5-5 5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          className="animate-fade-in-up"
          style={{
            position: "absolute",
            bottom: "40px",
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "8px",
            opacity: 0.4,
            animationDelay: "0.6s",
            animationFillMode: "both",
          }}
        >
          <span style={{ fontSize: "11px", color: "var(--text-secondary)", letterSpacing: "1px", textTransform: "uppercase" }}>Scroll</span>
          <div style={{ width: "1px", height: "32px", background: "linear-gradient(to bottom, var(--text-secondary), transparent)" }} />
        </div>
      </section>

      {/* SOCIAL PROOF */}
      <section
        style={{
          padding: "32px 24px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "16px",
          borderTop: "1px solid var(--border)",
          borderBottom: "1px solid var(--border)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "20px", flexWrap: "wrap", justifyContent: "center" }}>
          {/* Overlapping avatars */}
          <div style={{ display: "flex", alignItems: "center" }}>
            {[
              { bg: "linear-gradient(135deg, #a855f7, #ec4899)", letter: "A" },
              { bg: "linear-gradient(135deg, #3b82f6, #a855f7)", letter: "M" },
              { bg: "linear-gradient(135deg, #22c55e, #3b82f6)", letter: "S" },
              { bg: "linear-gradient(135deg, #f97316, #ec4899)", letter: "J" },
              { bg: "linear-gradient(135deg, #ec4899, #a855f7)", letter: "R" },
            ].map((avatar, i) => (
              <div
                key={i}
                style={{
                  width: "36px",
                  height: "36px",
                  borderRadius: "50%",
                  background: avatar.bg,
                  border: "2px solid var(--background)",
                  marginLeft: i === 0 ? 0 : "-10px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "13px",
                  fontWeight: 700,
                  color: "white",
                  zIndex: 5 - i,
                  position: "relative",
                }}
              >
                {avatar.letter}
              </div>
            ))}
          </div>

          <p style={{ fontSize: "15px", color: "var(--text-secondary)", fontWeight: 500 }}>
            Join{" "}
            <span style={{ color: "var(--text-primary)", fontWeight: 700 }}>10,000+</span>{" "}
            music fans already on RMMAI
          </p>

          <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
            {[1, 2, 3, 4, 5].map((star) => (
              <svg key={star} width="14" height="14" viewBox="0 0 14 14" fill="#f97316">
                <path d="M7 1l1.8 3.6 4 .6-2.9 2.8.7 4L7 10.1 3.4 12l.7-4L1.2 5.2l4-.6z" />
              </svg>
            ))}
            <span style={{ fontSize: "13px", color: "var(--text-secondary)", marginLeft: "6px" }}>4.9 / 5 from early users</span>
          </div>
        </div>
      </section>

      {/* FEATURES GRID */}
      <section
        id="features"
        style={{
          padding: "120px 24px",
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: "72px" }}>
          <p
            style={{
              fontSize: "13px",
              fontWeight: 600,
              letterSpacing: "2px",
              textTransform: "uppercase",
              color: "var(--accent)",
              marginBottom: "16px",
            }}
          >
            Everything you need
          </p>
          <h2
            style={{
              fontSize: "clamp(36px, 5vw, 56px)",
              fontWeight: 800,
              letterSpacing: "-2px",
              lineHeight: 1.05,
              marginBottom: "20px",
            }}
          >
            Your complete music{" "}
            <span className="gradient-text">intelligence layer</span>
          </h2>
          <p style={{ fontSize: "18px", color: "var(--text-secondary)", maxWidth: "500px", margin: "0 auto", lineHeight: 1.6 }}>
            Six powerful features that work together to transform how you experience music.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "16px",
          }}
        >
          {[
            {
              icon: (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 18V5l12-2v13" />
                  <circle cx="6" cy="18" r="3" />
                  <circle cx="18" cy="16" r="3" />
                </svg>
              ),
              iconBg: "linear-gradient(135deg, #1DB954, #22c55e)",
              label: "Spotify Live Sync",
              desc: "Your real-time listening, automatically tracked. Every play, skip, and repeat reveals what your taste truly is — no manual logging.",
              tag: "Auto-sync",
            },
            {
              icon: (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              ),
              iconBg: "linear-gradient(135deg, #3b82f6, #a855f7)",
              label: "Friend Activity",
              desc: "See exactly what your friends are obsessed with right now. Real-time plays, recent deep dives, and taste overlap — all in one feed.",
              tag: "Social",
            },
            {
              icon: (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
              ),
              iconBg: "linear-gradient(135deg, #a855f7, #ec4899)",
              label: "AI Music Assistant",
              desc: "Ask anything about your taste, get personalized answers. The AI knows your listening history, your friends' data, and millions of albums.",
              tag: "AI-powered",
            },
            {
              icon: (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="5 3 19 12 5 21 5 3" />
                </svg>
              ),
              iconBg: "linear-gradient(135deg, #f97316, #ec4899)",
              label: "Smart Playlists",
              desc: "AI generates playlists for any mood, moment, or mission. Friday night energy. Study focus. Post-breakup catharsis. The AI gets it.",
              tag: "Generative",
            },
            {
              icon: (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01z" />
                </svg>
              ),
              iconBg: "linear-gradient(135deg, #ec4899, #f97316)",
              label: "Rate Everything",
              desc: "Albums, tracks, artists — build your musical identity. RateYourMusic depth meets a social layer. Your opinions, organized forever.",
              tag: "Community",
            },
            {
              icon: (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 20V10M18 20V4M6 20v-4" />
                </svg>
              ),
              iconBg: "linear-gradient(135deg, #a855f7, #3b82f6)",
              label: "Taste DNA",
              desc: "A visual breakdown of your musical personality across genres, eras, moods, and energy levels. Finally understand what you actually love.",
              tag: "Insights",
            },
          ].map((feature, i) => (
            <div
              key={i}
              className="glass animate-fade-in-up"
              style={{
                borderRadius: "20px",
                padding: "32px 28px",
                display: "flex",
                flexDirection: "column",
                gap: "16px",
                animationDelay: `${0.1 * i}s`,
                animationFillMode: "both",
              }}
            >
              <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between" }}>
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "12px",
                    background: feature.iconBg,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white",
                    flexShrink: 0,
                  }}
                >
                  {feature.icon}
                </div>
                <span
                  style={{
                    fontSize: "11px",
                    fontWeight: 600,
                    letterSpacing: "0.5px",
                    textTransform: "uppercase",
                    color: "var(--text-muted)",
                    padding: "4px 10px",
                    borderRadius: "999px",
                    border: "1px solid var(--border)",
                    background: "rgba(255,255,255,0.03)",
                  }}
                >
                  {feature.tag}
                </span>
              </div>
              <div>
                <h3
                  style={{
                    fontSize: "18px",
                    fontWeight: 700,
                    letterSpacing: "-0.4px",
                    marginBottom: "10px",
                  }}
                >
                  {feature.label}
                </h3>
                <p style={{ fontSize: "14px", color: "var(--text-secondary)", lineHeight: 1.65 }}>
                  {feature.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* AI DEMO SECTION */}
      <section
        id="ai-demo"
        style={{
          padding: "80px 24px 120px",
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: "64px" }}>
          <p
            style={{
              fontSize: "13px",
              fontWeight: 600,
              letterSpacing: "2px",
              textTransform: "uppercase",
              color: "var(--accent)",
              marginBottom: "16px",
            }}
          >
            AI Music Assistant
          </p>
          <h2
            style={{
              fontSize: "clamp(36px, 5vw, 52px)",
              fontWeight: 800,
              letterSpacing: "-2px",
              lineHeight: 1.05,
              marginBottom: "20px",
            }}
          >
            Ask anything.{" "}
            <span className="gradient-text">Discover everything.</span>
          </h2>
          <p style={{ fontSize: "17px", color: "var(--text-secondary)", maxWidth: "460px", margin: "0 auto", lineHeight: 1.6 }}>
            The AI knows your full listening history and your friends&apos; taste. It gives recommendations that actually feel right.
          </p>
        </div>

        <div
          className="glass-heavy gradient-border"
          style={{
            borderRadius: "24px",
            overflow: "hidden",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
          }}
        >
          {/* Left: Chat */}
          <div
            style={{
              padding: "36px",
              borderRight: "1px solid var(--border)",
              display: "flex",
              flexDirection: "column",
              gap: "0",
            }}
          >
            {/* Chat header */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                marginBottom: "28px",
                paddingBottom: "20px",
                borderBottom: "1px solid var(--border)",
              }}
            >
              <div
                style={{
                  width: "32px",
                  height: "32px",
                  borderRadius: "8px",
                  background: "linear-gradient(135deg, #a855f7, #ec4899)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round">
                  <path d="M8 2a6 6 0 1 0 0 12A6 6 0 0 0 8 2z" />
                  <path d="M8 6v2l2 1" />
                </svg>
              </div>
              <div>
                <p style={{ fontSize: "14px", fontWeight: 700, lineHeight: 1 }}>RMMAI AI</p>
                <p style={{ fontSize: "12px", color: "var(--accent)", marginTop: "2px" }}>Online · Ready</p>
              </div>
              <div style={{ marginLeft: "auto", display: "flex", gap: "6px" }}>
                <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "var(--accent)", opacity: 0.8 }} />
                <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "rgba(255,255,255,0.15)" }} />
                <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "rgba(255,255,255,0.15)" }} />
              </div>
            </div>

            {/* User message */}
            <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: "16px" }}>
              <div
                style={{
                  background: "var(--accent)",
                  color: "white",
                  padding: "12px 16px",
                  borderRadius: "16px 16px 4px 16px",
                  fontSize: "14px",
                  lineHeight: 1.5,
                  maxWidth: "85%",
                  fontWeight: 500,
                }}
              >
                My playlist feels stale — what are my friends listening to that I&apos;d love?
              </div>
            </div>

            {/* AI response */}
            <div style={{ display: "flex", gap: "10px", alignItems: "flex-start", marginBottom: "16px" }}>
              <div
                style={{
                  width: "28px",
                  height: "28px",
                  borderRadius: "8px",
                  background: "linear-gradient(135deg, #a855f7, #ec4899)",
                  flexShrink: 0,
                  marginTop: "2px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <svg width="12" height="12" viewBox="0 0 12 12" fill="white" opacity="0.9">
                  <circle cx="6" cy="6" r="2.5" />
                </svg>
              </div>
              <div
                style={{
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid var(--border)",
                  padding: "14px 16px",
                  borderRadius: "4px 16px 16px 16px",
                  fontSize: "14px",
                  lineHeight: 1.65,
                  color: "var(--text-secondary)",
                  maxWidth: "90%",
                }}
              >
                Based on your recent taste — heavy on indie rock and ambient electronic — your friend Alex has been on a{" "}
                <span style={{ color: "var(--text-primary)", fontWeight: 600 }}>Big Thief</span> deep dive, and Jordan just
                discovered{" "}
                <span style={{ color: "var(--text-primary)", fontWeight: 600 }}>Four Tet&apos;s</span> back catalog.
                I think you&apos;d love what Sam&apos;s been spinning too. Here&apos;s where I&apos;d start:
              </div>
            </div>

            {/* Album pills */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", paddingLeft: "38px" }}>
              {[
                { title: "Dragon New Warm Mountain", artist: "Big Thief", color: "#a855f7" },
                { title: "There Is Love In You", artist: "Four Tet", color: "#ec4899" },
                { title: "Titanic Rising", artist: "Weyes Blood", color: "#f97316" },
              ].map((album, i) => (
                <div
                  key={i}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    padding: "6px 12px",
                    borderRadius: "999px",
                    background: `${album.color}18`,
                    border: `1px solid ${album.color}33`,
                    fontSize: "12px",
                  }}
                >
                  <div style={{ width: "16px", height: "16px", borderRadius: "4px", background: `linear-gradient(135deg, ${album.color}, #080808)`, flexShrink: 0 }} />
                  <span style={{ color: "var(--text-primary)", fontWeight: 600 }}>{album.title}</span>
                  <span style={{ color: "var(--text-secondary)" }}>· {album.artist}</span>
                </div>
              ))}
            </div>

            {/* Input bar */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                marginTop: "24px",
                paddingTop: "20px",
                borderTop: "1px solid var(--border)",
              }}
            >
              <div
                style={{
                  flex: 1,
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid var(--border)",
                  borderRadius: "10px",
                  padding: "10px 14px",
                  fontSize: "13px",
                  color: "var(--text-muted)",
                }}
              >
                Ask about your music taste...
              </div>
              <div
                style={{
                  width: "36px",
                  height: "36px",
                  borderRadius: "10px",
                  background: "var(--accent)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 7h10M7 2l5 5-5 5" />
                </svg>
              </div>
            </div>
          </div>

          {/* Right: Album recommendations */}
          <div
            style={{
              padding: "36px",
              display: "flex",
              flexDirection: "column",
              gap: "16px",
            }}
          >
            <p style={{ fontSize: "13px", fontWeight: 600, letterSpacing: "1px", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: "8px" }}>
              Top Picks For You
            </p>

            {[
              {
                bg: "linear-gradient(135deg, #a855f7 0%, #3b82f6 100%)",
                title: "Dragon New Warm Mountain",
                artist: "Big Thief",
                year: "2022",
                match: "97% match",
                matchColor: "#a855f7",
                tags: ["Indie Folk", "Alt-Country"],
                reason: "Alex has listened 40+ times this month. Your indie taste aligns.",
              },
              {
                bg: "linear-gradient(135deg, #ec4899 0%, #f97316 100%)",
                title: "There Is Love In You",
                artist: "Four Tet",
                year: "2010",
                match: "94% match",
                matchColor: "#ec4899",
                tags: ["Electronic", "Ambient"],
                reason: "Jordan just found this. Matches your late-night ambient listening.",
              },
              {
                bg: "linear-gradient(135deg, #f97316 0%, #22c55e 100%)",
                title: "Titanic Rising",
                artist: "Weyes Blood",
                year: "2019",
                match: "91% match",
                matchColor: "#f97316",
                tags: ["Chamber Pop", "Art Rock"],
                reason: "Sam has been playing it daily. You will love the orchestration.",
              },
            ].map((rec, i) => (
              <div
                key={i}
                className="glass"
                style={{
                  borderRadius: "16px",
                  padding: "16px",
                  display: "flex",
                  gap: "14px",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    width: "60px",
                    height: "60px",
                    borderRadius: "10px",
                    background: rec.bg,
                    flexShrink: 0,
                    boxShadow: "0 8px 20px rgba(0,0,0,0.4)",
                  }}
                />
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "8px", marginBottom: "4px" }}>
                    <p style={{ fontSize: "14px", fontWeight: 700, letterSpacing: "-0.2px", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                      {rec.title}
                    </p>
                    <span
                      style={{
                        fontSize: "11px",
                        fontWeight: 700,
                        color: rec.matchColor,
                        background: `${rec.matchColor}18`,
                        padding: "2px 8px",
                        borderRadius: "999px",
                        flexShrink: 0,
                        border: `1px solid ${rec.matchColor}33`,
                      }}
                    >
                      {rec.match}
                    </span>
                  </div>
                  <p style={{ fontSize: "13px", color: "var(--text-secondary)", marginBottom: "6px" }}>
                    {rec.artist} · {rec.year}
                  </p>
                  <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
                    {rec.tags.map((tag) => (
                      <span
                        key={tag}
                        style={{
                          fontSize: "11px",
                          color: "var(--text-muted)",
                          padding: "2px 8px",
                          borderRadius: "999px",
                          border: "1px solid var(--border)",
                          background: "rgba(255,255,255,0.02)",
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FRIENDS SECTION */}
      <section
        id="friends"
        style={{
          padding: "80px 24px 120px",
          maxWidth: "800px",
          margin: "0 auto",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: "64px" }}>
          <p
            style={{
              fontSize: "13px",
              fontWeight: 600,
              letterSpacing: "2px",
              textTransform: "uppercase",
              color: "var(--accent)",
              marginBottom: "16px",
            }}
          >
            Friend Activity
          </p>
          <h2
            style={{
              fontSize: "clamp(36px, 5vw, 52px)",
              fontWeight: 800,
              letterSpacing: "-2px",
              lineHeight: 1.05,
              marginBottom: "20px",
            }}
          >
            Music is better{" "}
            <span className="gradient-text">together.</span>
          </h2>
          <p style={{ fontSize: "17px", color: "var(--text-secondary)", maxWidth: "440px", margin: "0 auto", lineHeight: 1.6 }}>
            See what your friends are listening to in real time. Discover what they&apos;re obsessed with before they even tell you.
          </p>
        </div>

        <div
          className="glass-heavy"
          style={{
            borderRadius: "24px",
            padding: "8px",
            overflow: "hidden",
          }}
        >
          {/* Feed header */}
          <div
            style={{
              padding: "16px 20px",
              borderBottom: "1px solid var(--border)",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <p style={{ fontSize: "14px", fontWeight: 700 }}>Friends · Now Playing</p>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "6px",
                fontSize: "12px",
                color: "var(--accent)",
              }}
            >
              <div
                style={{
                  width: "6px",
                  height: "6px",
                  borderRadius: "50%",
                  background: "var(--accent)",
                }}
              />
              Live
            </div>
          </div>

          {[
            {
              initials: "AL",
              name: "Alex L.",
              bg: "linear-gradient(135deg, #a855f7, #3b82f6)",
              track: "Simulation Swarm",
              artist: "Big Thief",
              album: "Dragon New Warm Mountain",
              albumColor: "linear-gradient(135deg, #a855f7 0%, #3b82f6 100%)",
              time: "now",
              playing: true,
            },
            {
              initials: "JR",
              name: "Jordan R.",
              bg: "linear-gradient(135deg, #22c55e, #3b82f6)",
              track: "Love Cry",
              artist: "Four Tet",
              album: "There Is Love In You",
              albumColor: "linear-gradient(135deg, #ec4899 0%, #f97316 100%)",
              time: "3m ago",
              playing: false,
            },
            {
              initials: "SM",
              name: "Sam M.",
              bg: "linear-gradient(135deg, #f97316, #ec4899)",
              track: "Andromeda",
              artist: "Weyes Blood",
              album: "Titanic Rising",
              albumColor: "linear-gradient(135deg, #f97316 0%, #22c55e 100%)",
              time: "11m ago",
              playing: false,
            },
            {
              initials: "KT",
              name: "Kai T.",
              bg: "linear-gradient(135deg, #ec4899, #a855f7)",
              track: "Heat Waves",
              artist: "Glass Animals",
              album: "Dreamland",
              albumColor: "linear-gradient(135deg, #3b82f6 0%, #ec4899 100%)",
              time: "24m ago",
              playing: false,
            },
          ].map((friend, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "14px",
                padding: "16px 20px",
                borderBottom: i < 3 ? "1px solid var(--border)" : "none",
              }}
            >
              <div style={{ position: "relative", flexShrink: 0 }}>
                <div
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "50%",
                    background: friend.bg,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "14px",
                    fontWeight: 700,
                    color: "white",
                  }}
                >
                  {friend.initials}
                </div>
                {friend.playing && (
                  <div
                    style={{
                      position: "absolute",
                      bottom: "0",
                      right: "0",
                      width: "12px",
                      height: "12px",
                      borderRadius: "50%",
                      background: "#1DB954",
                      border: "2px solid var(--surface)",
                    }}
                  />
                )}
              </div>

              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "3px" }}>
                  <span style={{ fontSize: "14px", fontWeight: 700 }}>{friend.name}</span>
                  {friend.playing && (
                    <div style={{ display: "flex", gap: "2px", alignItems: "flex-end", height: "14px" }}>
                      {[1, 2, 3].map((bar) => (
                        <div
                          key={bar}
                          className="eq-bar"
                          style={{
                            width: "3px",
                            height: `${6 + bar * 3}px`,
                            borderRadius: "2px",
                            background: "#1DB954",
                            animationDelay: `${bar * 0.15}s`,
                          }}
                        />
                      ))}
                    </div>
                  )}
                </div>
                <p style={{ fontSize: "13px", color: "var(--text-secondary)", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                  <span style={{ color: "var(--text-primary)", fontWeight: 500 }}>{friend.track}</span>
                  {" "}by{" "}
                  <span style={{ color: "var(--text-primary)", fontWeight: 500 }}>{friend.artist}</span>
                  <span style={{ color: "var(--text-muted)" }}> · {friend.album}</span>
                </p>
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: "10px", flexShrink: 0 }}>
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "8px",
                    background: friend.albumColor,
                    flexShrink: 0,
                  }}
                />
                <span style={{ fontSize: "12px", color: "var(--text-muted)", minWidth: "50px", textAlign: "right" }}>{friend.time}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* STATS STRIP */}
      <section
        style={{
          borderTop: "1px solid var(--border)",
          borderBottom: "1px solid var(--border)",
          padding: "48px 24px",
        }}
      >
        <div
          style={{
            maxWidth: "900px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "0",
          }}
        >
          {[
            { value: "10K+", label: "Music Fans" },
            { value: "50M+", label: "Tracks Analyzed" },
            { value: "94%", label: "Satisfaction Rate" },
            { value: "inf", label: "Discoveries Waiting" },
          ].map((stat, i) => (
            <div
              key={i}
              style={{
                textAlign: "center",
                padding: "24px 16px",
                borderRight: i < 3 ? "1px solid var(--border)" : "none",
              }}
            >
              <p
                className="gradient-text"
                style={{
                  fontSize: "44px",
                  fontWeight: 800,
                  letterSpacing: "-2px",
                  lineHeight: 1,
                  marginBottom: "8px",
                }}
              >
                {stat.value === "inf" ? "\u221E" : stat.value}
              </p>
              <p style={{ fontSize: "14px", color: "var(--text-secondary)", fontWeight: 500 }}>{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA FOOTER */}
      <section
        style={{
          padding: "140px 24px 160px",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Glow */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "600px",
            height: "600px",
            background: "radial-gradient(ellipse at center, rgba(168,85,247,0.1) 0%, transparent 65%)",
            pointerEvents: "none",
          }}
        />

        <div style={{ position: "relative", zIndex: 1 }}>
          <p
            style={{
              fontSize: "13px",
              fontWeight: 600,
              letterSpacing: "2px",
              textTransform: "uppercase",
              color: "var(--accent)",
              marginBottom: "20px",
            }}
          >
            Get started today — it&apos;s free
          </p>
          <h2
            style={{
              fontSize: "clamp(40px, 6vw, 68px)",
              fontWeight: 800,
              letterSpacing: "-2.5px",
              lineHeight: 1.05,
              marginBottom: "24px",
              maxWidth: "700px",
              margin: "0 auto 24px",
            }}
          >
            Ready to hear what
            <br />
            you&apos;ve been{" "}
            <span className="gradient-text">missing?</span>
          </h2>

          <p
            style={{
              fontSize: "18px",
              color: "var(--text-secondary)",
              maxWidth: "420px",
              margin: "0 auto 48px",
              lineHeight: 1.6,
            }}
          >
            Connect your Spotify account in 30 seconds. No credit card required.
          </p>

          <div style={{ display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap" }}>
            <Link
              href="/dashboard"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                background: "#1DB954",
                color: "white",
                padding: "18px 36px",
                borderRadius: "14px",
                fontSize: "17px",
                fontWeight: 700,
                textDecoration: "none",
                boxShadow: "0 12px 40px rgba(29,185,84,0.4), 0 4px 16px rgba(29,185,84,0.2)",
                letterSpacing: "-0.3px",
              }}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
                <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
              </svg>
              Connect Spotify — it&apos;s free
            </Link>

            <Link
              href="#features"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                background: "transparent",
                color: "var(--text-secondary)",
                padding: "18px 28px",
                borderRadius: "14px",
                fontSize: "16px",
                fontWeight: 600,
                textDecoration: "none",
                border: "1px solid var(--border)",
                letterSpacing: "-0.2px",
              }}
            >
              Learn more
            </Link>
          </div>

          <p style={{ marginTop: "24px", fontSize: "13px", color: "var(--text-muted)" }}>
            Works with any Spotify account &nbsp;·&nbsp; No data sold &nbsp;·&nbsp; Cancel anytime
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        style={{
          borderTop: "1px solid var(--border)",
          padding: "40px 40px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "16px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <div
            style={{
              width: "24px",
              height: "24px",
              borderRadius: "6px",
              background: "linear-gradient(135deg, #a855f7 0%, #ec4899 60%, #f97316 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg width="10" height="10" viewBox="0 0 12 12" fill="white" opacity="0.9">
              <circle cx="6" cy="6" r="2.5" />
            </svg>
          </div>
          <span style={{ fontWeight: 700, fontSize: "15px" }}>RMMAI</span>
          <span style={{ color: "var(--text-muted)", fontSize: "13px", marginLeft: "8px" }}>&copy; 2026 &nbsp;·&nbsp; All rights reserved</span>
        </div>

        <div style={{ display: "flex", gap: "28px" }}>
          {["Privacy", "Terms", "Contact"].map((link) => (
            <Link
              key={link}
              href="#"
              style={{
                color: "var(--text-muted)",
                fontSize: "13px",
                textDecoration: "none",
              }}
            >
              {link}
            </Link>
          ))}
        </div>
      </footer>
    </main>
  );
}
