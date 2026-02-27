import type { Metadata } from "next";
import { Star, Users, TrendingUp, Calendar, Share2, Edit2, CheckCircle, Music2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Profile — RMM.AI",
  description: "Your music profile, taste DNA, top artists, and recent ratings.",
};

// ─── Static Data ─────────────────────────────────────────────────────────────

const genres = [
  { name: "Alternative R&B", pct: 94, color: "from-purple-500 to-pink-500" },
  { name: "Art Rock", pct: 88, color: "from-pink-500 to-rose-500" },
  { name: "Hip-Hop / Rap", pct: 82, color: "from-violet-500 to-purple-500" },
  { name: "Indie Folk", pct: 76, color: "from-orange-400 to-amber-500" },
  { name: "Experimental", pct: 71, color: "from-cyan-400 to-teal-500" },
  { name: "Post-Rock", pct: 65, color: "from-blue-500 to-indigo-500" },
  { name: "Neo-Soul", pct: 60, color: "from-rose-400 to-pink-500" },
  { name: "Electronic", pct: 54, color: "from-teal-400 to-cyan-500" },
  { name: "Jazz Fusion", pct: 48, color: "from-amber-400 to-orange-500" },
  { name: "Dream Pop", pct: 42, color: "from-purple-400 to-violet-500" },
  { name: "Ambient", pct: 37, color: "from-sky-400 to-blue-500" },
  { name: "Acoustic", pct: 29, color: "from-green-400 to-emerald-500" },
];

const traits = [
  { label: "Emotionally Complex", pct: 87, desc: "Drawn to music with deep emotional layers and nuanced feeling" },
  { label: "Sonically Adventurous", pct: 74, desc: "Embraces challenging textures, unconventional structure" },
  { label: "Lyrically Focused", pct: 91, desc: "Prioritizes storytelling and poetic depth in song writing" },
  { label: "Discovery-Oriented", pct: 83, desc: "Actively seeks new sounds beyond mainstream charts" },
];

const artists = [
  { name: "Frank Ocean", plays: "2,847", gradient: "from-blue-600 via-violet-600 to-purple-700", initials: "FO" },
  { name: "Kanye West", plays: "2,341", gradient: "from-amber-500 via-orange-600 to-red-700", initials: "KW" },
  { name: "Radiohead", plays: "1,923", gradient: "from-slate-600 via-zinc-700 to-gray-800", initials: "RH" },
  { name: "Kendrick Lamar", plays: "1,654", gradient: "from-red-600 via-rose-600 to-pink-700", initials: "KL" },
  { name: "Sufjan Stevens", plays: "1,102", gradient: "from-emerald-500 via-teal-600 to-cyan-700", initials: "SS" },
];

const ratings = [
  { title: "Blonde", artist: "Frank Ocean", rating: 9, date: "Feb 18, 2026", gradient: "from-blue-500 via-violet-600 to-indigo-700", initials: "BL" },
  { title: "My Beautiful Dark Twisted Fantasy", artist: "Kanye West", rating: 10, date: "Feb 14, 2026", gradient: "from-amber-500 via-orange-600 to-red-600", initials: "MF" },
  { title: "Kid A", artist: "Radiohead", rating: 9, date: "Feb 10, 2026", gradient: "from-sky-500 via-blue-600 to-indigo-700", initials: "KA" },
  { title: "To Pimp a Butterfly", artist: "Kendrick Lamar", rating: 10, date: "Feb 6, 2026", gradient: "from-green-500 via-emerald-600 to-teal-700", initials: "TP" },
  { title: "Carrie & Lowell", artist: "Sufjan Stevens", rating: 8, date: "Feb 2, 2026", gradient: "from-rose-400 via-pink-500 to-fuchsia-600", initials: "CL" },
  { title: "In Rainbows", artist: "Radiohead", rating: 9, date: "Jan 29, 2026", gradient: "from-purple-500 via-violet-600 to-indigo-700", initials: "IR" },
];

const timeline = [
  { day: "Monday", track: "Nights", artist: "Frank Ocean", album: "Blonde", gradient: "from-blue-600 to-violet-700" },
  { day: "Tuesday", track: "Runaway", artist: "Kanye West", album: "MBDTF", gradient: "from-amber-500 to-orange-700" },
  { day: "Wednesday", track: "How to Disappear Completely", artist: "Radiohead", album: "Kid A", gradient: "from-slate-600 to-zinc-800" },
  { day: "Thursday", track: "Alright", artist: "Kendrick Lamar", album: "To Pimp a Butterfly", gradient: "from-green-600 to-teal-700" },
  { day: "Friday", track: "Death With Dignity", artist: "Sufjan Stevens", album: "Carrie & Lowell", gradient: "from-rose-500 to-pink-700" },
];

const friendRecs = [
  {
    friend: "Alex M.",
    initials: "AM",
    gradient: "from-blue-500 to-cyan-600",
    album: "Illinois",
    artist: "Sufjan Stevens",
    albumGradient: "from-amber-400 to-orange-600",
    albumInitials: "IL",
    note: "If you loved Carrie & Lowell this will absolutely wreck you in the best possible way.",
  },
  {
    friend: "Sarah K.",
    initials: "SK",
    gradient: "from-pink-500 to-rose-600",
    album: "Channel Orange",
    artist: "Frank Ocean",
    albumGradient: "from-orange-400 to-yellow-500",
    albumInitials: "CO",
    note: "You clearly vibe with Ocean's whole catalog — this one hits different on a late night.",
  },
  {
    friend: "Marcus T.",
    initials: "MT",
    gradient: "from-violet-500 to-purple-700",
    album: "OK Computer",
    artist: "Radiohead",
    albumGradient: "from-sky-500 to-blue-700",
    albumInitials: "OK",
    note: "Given your taste in Kid A and In Rainbows, OKC is the missing piece. Mandatory listen.",
  },
];

// ─── Sub-components ───────────────────────────────────────────────────────────

function StatPill({ value, label, icon }: { value: string; label: string; icon: React.ReactNode }) {
  return (
    <div className="flex items-center gap-1.5">
      <span style={{ color: "var(--text-muted)" }} className="w-4 h-4 flex-shrink-0">{icon}</span>
      <span style={{ color: "var(--text-primary)" }} className="text-sm font-semibold">{value}</span>
      <span style={{ color: "var(--text-muted)" }} className="text-sm">{label}</span>
    </div>
  );
}

function GenreBar({ name, pct, color }: { name: string; pct: number; color: string }) {
  return (
    <div className="flex items-center gap-3">
      <span
        style={{ color: "var(--text-secondary)", minWidth: "10rem" }}
        className="text-sm text-right truncate"
      >
        {name}
      </span>
      <div
        style={{ background: "rgba(255,255,255,0.06)", borderRadius: 999 }}
        className="flex-1 h-2 overflow-hidden"
      >
        <div
          className={`h-full bg-gradient-to-r ${color} rounded-full`}
          style={{ width: `${pct}%`, transition: "width 1s ease" }}
        />
      </div>
      <span style={{ color: "var(--text-muted)", minWidth: "2.5rem" }} className="text-xs text-right">
        {pct}%
      </span>
    </div>
  );
}

function TraitCard({ label, pct, desc }: { label: string; pct: number; desc: string }) {
  return (
    <div
      className="glass rounded-2xl p-5 flex flex-col gap-2"
      style={{ border: "1px solid var(--border)" }}
    >
      <span
        style={{ color: "var(--accent)", fontVariantNumeric: "tabular-nums" }}
        className="text-4xl font-bold tracking-tight"
      >
        {pct}%
      </span>
      <span style={{ color: "var(--text-primary)" }} className="text-sm font-semibold leading-snug">
        {label}
      </span>
      <span style={{ color: "var(--text-muted)" }} className="text-xs leading-relaxed">
        {desc}
      </span>
    </div>
  );
}

function ArtistCard({
  name,
  plays,
  gradient,
  initials,
}: {
  name: string;
  plays: string;
  gradient: string;
  initials: string;
}) {
  return (
    <div className="flex flex-col items-center gap-3 group cursor-pointer">
      <div
        className={`w-full aspect-square rounded-2xl bg-gradient-to-br ${gradient} flex items-center justify-center text-white text-lg font-bold shadow-lg group-hover:scale-105 transition-transform duration-200`}
        style={{ minWidth: 0 }}
      >
        {initials}
      </div>
      <div className="text-center">
        <p style={{ color: "var(--text-primary)" }} className="text-sm font-semibold leading-tight truncate max-w-[7rem]">
          {name}
        </p>
        <p style={{ color: "var(--text-muted)" }} className="text-xs mt-0.5">
          {plays} plays
        </p>
      </div>
    </div>
  );
}

function RatingCard({
  title,
  artist,
  rating,
  date,
  gradient,
  initials,
}: {
  title: string;
  artist: string;
  rating: number;
  date: string;
  gradient: string;
  initials: string;
}) {
  return (
    <div
      className="glass rounded-2xl overflow-hidden group cursor-pointer hover:border-opacity-20 transition-[transform,opacity] duration-200"
      style={{ border: "1px solid var(--border)" }}
    >
      {/* Album art */}
      <div
        className={`w-full aspect-square bg-gradient-to-br ${gradient} flex items-center justify-center text-white text-2xl font-bold relative`}
      >
        <span className="opacity-40 text-5xl font-black">{initials}</span>
        {/* Rating badge */}
        <div
          className="absolute top-2 right-2 rounded-xl px-2.5 py-1"
          style={{ background: "rgba(0,0,0,0.65)", backdropFilter: "blur(8px)" }}
        >
          <span style={{ color: "var(--accent)" }} className="text-sm font-bold">
            {rating}/10
          </span>
        </div>
      </div>
      {/* Info */}
      <div className="p-3">
        <p style={{ color: "var(--text-primary)" }} className="text-sm font-semibold leading-snug line-clamp-1">
          {title}
        </p>
        <p style={{ color: "var(--text-secondary)" }} className="text-xs mt-0.5 line-clamp-1">
          {artist}
        </p>
        <p style={{ color: "var(--text-muted)" }} className="text-xs mt-1.5">
          {date}
        </p>
      </div>
    </div>
  );
}

function TimelineEntry({
  day,
  track,
  artist,
  album,
  gradient,
  isLast,
}: {
  day: string;
  track: string;
  artist: string;
  album: string;
  gradient: string;
  isLast: boolean;
}) {
  return (
    <div className="flex gap-4">
      {/* Timeline line + dot */}
      <div className="flex flex-col items-center" style={{ width: 20 }}>
        <div
          className={`w-3 h-3 rounded-full bg-gradient-to-br ${gradient} flex-shrink-0 mt-1`}
          style={{ boxShadow: "0 0 8px rgba(168,85,247,0.5)" }}
        />
        {!isLast && (
          <div
            className="flex-1 w-px mt-1"
            style={{ background: "var(--border)" }}
          />
        )}
      </div>
      {/* Content */}
      <div className="pb-6 flex items-start gap-3 flex-1">
        <div
          className={`w-10 h-10 rounded-xl bg-gradient-to-br ${gradient} flex-shrink-0 flex items-center justify-center`}
          style={{ fontSize: 10, color: "rgba(255,255,255,0.7)", fontWeight: 700 }}
        >
          {album.slice(0, 2).toUpperCase()}
        </div>
        <div>
          <p style={{ color: "var(--text-muted)" }} className="text-xs font-medium uppercase tracking-widest mb-0.5">
            {day}
          </p>
          <p style={{ color: "var(--text-primary)" }} className="text-sm font-semibold leading-snug">
            {track}
          </p>
          <p style={{ color: "var(--text-secondary)" }} className="text-xs mt-0.5">
            {artist} &middot; <span style={{ color: "var(--text-muted)" }}>{album}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

function FriendRecCard({
  friend,
  initials,
  gradient,
  album,
  artist,
  albumGradient,
  albumInitials,
  note,
}: {
  friend: string;
  initials: string;
  gradient: string;
  album: string;
  artist: string;
  albumGradient: string;
  albumInitials: string;
  note: string;
}) {
  return (
    <div
      className="glass rounded-2xl p-5 flex flex-col gap-4"
      style={{ border: "1px solid var(--border)" }}
    >
      {/* Friend header */}
      <div className="flex items-center gap-2.5">
        <div
          className={`w-9 h-9 rounded-full bg-gradient-to-br ${gradient} flex items-center justify-center text-white text-xs font-bold flex-shrink-0`}
        >
          {initials}
        </div>
        <div>
          <p style={{ color: "var(--text-muted)" }} className="text-xs">
            From <span style={{ color: "var(--text-primary)" }} className="font-semibold">{friend}:</span>
          </p>
        </div>
      </div>
      {/* Album rec */}
      <div className="flex items-center gap-3">
        <div
          className={`w-12 h-12 rounded-xl bg-gradient-to-br ${albumGradient} flex-shrink-0 flex items-center justify-center text-white text-xs font-black`}
        >
          {albumInitials}
        </div>
        <div>
          <p style={{ color: "var(--text-primary)" }} className="text-sm font-semibold leading-snug">
            {album}
          </p>
          <p style={{ color: "var(--text-secondary)" }} className="text-xs mt-0.5">
            {artist}
          </p>
        </div>
      </div>
      {/* Note */}
      <p style={{ color: "var(--text-secondary)", fontStyle: "italic", lineHeight: 1.6 }} className="text-sm">
        &ldquo;{note}&rdquo;
      </p>
    </div>
  );
}

// ─── Section sub-components ───────────────────────────────────────────────────

function ProfileHeader() {
  return (
    <div
      className="relative w-full overflow-hidden"
      style={{
        background: "linear-gradient(160deg, rgba(88,28,135,0.55) 0%, rgba(49,10,80,0.4) 40%, rgba(8,8,8,0) 100%)",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <div style={{ position: "absolute", top: -80, left: -60, width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle, rgba(168,85,247,0.18) 0%, transparent 70%)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", top: 20, right: 80, width: 280, height: 280, borderRadius: "50%", background: "radial-gradient(circle, rgba(236,72,153,0.1) 0%, transparent 70%)", pointerEvents: "none" }} />

      <div className="animate-fade-in-up" style={{ maxWidth: 1100, margin: "0 auto", padding: "48px 24px 40px" }}>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="flex items-end gap-5">
            <div
              style={{
                width: 80,
                height: 80,
                borderRadius: 24,
                background: "linear-gradient(135deg, #a855f7 0%, #ec4899 60%, #f97316 100%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 28,
                fontWeight: 700,
                color: "#fff",
                flexShrink: 0,
                boxShadow: "0 0 0 3px rgba(168,85,247,0.35), 0 12px 40px rgba(168,85,247,0.3)",
              }}
            >
              JN
            </div>
            <div>
              <div className="flex items-center gap-2.5 flex-wrap">
                <h1 style={{ color: "var(--text-primary)", fontSize: 26, fontWeight: 700, letterSpacing: "-0.02em" }}>
                  Joel Newton
                </h1>
                <span className="flex items-center gap-1.5 rounded-full px-2.5 py-1" style={{ background: "rgba(34,197,94,0.15)", border: "1px solid rgba(34,197,94,0.3)", fontSize: 11, fontWeight: 600, color: "#22c55e" }}>
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
                  </svg>
                  Connected
                </span>
              </div>
              <p style={{ color: "var(--text-muted)", fontSize: 14, marginTop: 2 }}>@joeln</p>
              <div className="flex flex-wrap items-center gap-4 mt-3">
                <StatPill value="847" label="scrobbles" icon={<Music2 size={14} />} />
                <div style={{ width: 1, height: 12, background: "var(--border)" }} />
                <StatPill value="142" label="ratings" icon={<Star size={14} />} />
                <div style={{ width: 1, height: 12, background: "var(--border)" }} />
                <StatPill value="23" label="friends" icon={<Users size={14} />} />
                <div style={{ width: 1, height: 12, background: "var(--border)" }} />
                <StatPill value="Jan 2026" label="joined" icon={<Calendar size={14} />} />
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2.5">
            <button className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition-[opacity] duration-150 hover:opacity-80" style={{ border: "1px solid rgba(255,255,255,0.18)", color: "var(--text-primary)", background: "transparent", cursor: "pointer" }}>
              <Edit2 size={14} />
              Edit Profile
            </button>
            <button className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition-[opacity] duration-150 hover:opacity-70" style={{ border: "none", color: "var(--text-secondary)", background: "transparent", cursor: "pointer" }}>
              <Share2 size={14} />
              Share
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function TasteDnaSection() {
  return (
    <section className="animate-fade-in-up" style={{ animationDelay: "0.05s" }}>
      <div className="flex items-center gap-3 mb-6">
        <TrendingUp size={18} style={{ color: "var(--accent)" }} />
        <h2 style={{ color: "var(--text-primary)", fontSize: 20, fontWeight: 700, letterSpacing: "-0.01em" }}>
          Your Taste DNA
        </h2>
        <span className="flex items-center gap-1.5 rounded-full px-2.5 py-0.5" style={{ background: "rgba(168,85,247,0.15)", border: "1px solid rgba(168,85,247,0.25)", fontSize: 11, fontWeight: 600, color: "var(--accent)" }}>
          <CheckCircle size={10} />
          Generated by RMM.AI
        </span>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }} className="max-sm:flex max-sm:flex-col">
        <div className="glass rounded-2xl p-6" style={{ border: "1px solid var(--border)" }}>
          <p style={{ color: "var(--text-muted)", fontSize: 11, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 20 }}>Genre Breakdown</p>
          <div className="flex flex-col gap-3.5">
            {genres.map((g) => <GenreBar key={g.name} name={g.name} pct={g.pct} color={g.color} />)}
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <p style={{ color: "var(--text-muted)", fontSize: 11, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 4 }}>Musical Personality</p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
            {traits.map((t) => <TraitCard key={t.label} label={t.label} pct={t.pct} desc={t.desc} />)}
          </div>
        </div>
      </div>
    </section>
  );
}

function TopArtistsSection() {
  return (
    <section className="animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2.5">
          <Star size={18} style={{ color: "var(--accent)" }} />
          <h2 style={{ color: "var(--text-primary)", fontSize: 20, fontWeight: 700, letterSpacing: "-0.01em" }}>Top Artists</h2>
        </div>
        <span className="rounded-full px-3 py-1" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid var(--border)", fontSize: 12, color: "var(--text-muted)", fontWeight: 500 }}>
          All Time
        </span>
      </div>
      <div className="glass rounded-2xl p-6" style={{ border: "1px solid var(--border)" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 16 }}>
          {artists.map((a) => <ArtistCard key={a.name} name={a.name} plays={a.plays} gradient={a.gradient} initials={a.initials} />)}
        </div>
      </div>
    </section>
  );
}

function RecentRatingsSection() {
  return (
    <section className="animate-fade-in-up" style={{ animationDelay: "0.15s" }}>
      <div className="flex items-center gap-2.5 mb-6">
        <Star size={18} style={{ color: "var(--accent)" }} />
        <h2 style={{ color: "var(--text-primary)", fontSize: 20, fontWeight: 700, letterSpacing: "-0.01em" }}>Recent Ratings</h2>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
        {ratings.map((r) => <RatingCard key={r.title} title={r.title} artist={r.artist} rating={r.rating} date={r.date} gradient={r.gradient} initials={r.initials} />)}
      </div>
    </section>
  );
}

function ListeningHistorySection() {
  return (
    <section className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2.5">
          <Calendar size={18} style={{ color: "var(--accent)" }} />
          <h2 style={{ color: "var(--text-primary)", fontSize: 20, fontWeight: 700, letterSpacing: "-0.01em" }}>Listening History</h2>
        </div>
        <span className="rounded-full px-3 py-1" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid var(--border)", fontSize: 12, color: "var(--text-muted)", fontWeight: 500 }}>
          This Week
        </span>
      </div>
      <div className="glass rounded-2xl p-6" style={{ border: "1px solid var(--border)" }}>
        {timeline.map((entry, i) => (
          <TimelineEntry key={entry.day} day={entry.day} track={entry.track} artist={entry.artist} album={entry.album} gradient={entry.gradient} isLast={i === timeline.length - 1} />
        ))}
      </div>
    </section>
  );
}

function FriendRecsSection() {
  return (
    <section className="animate-fade-in-up" style={{ animationDelay: "0.25s" }}>
      <div className="flex items-center gap-2.5 mb-6">
        <Users size={18} style={{ color: "var(--accent)" }} />
        <h2 style={{ color: "var(--text-primary)", fontSize: 20, fontWeight: 700, letterSpacing: "-0.01em" }}>
          Friends&apos; Recommendations
        </h2>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
        {friendRecs.map((rec) => (
          <FriendRecCard key={rec.friend} friend={rec.friend} initials={rec.initials} gradient={rec.gradient} album={rec.album} artist={rec.artist} albumGradient={rec.albumGradient} albumInitials={rec.albumInitials} note={rec.note} />
        ))}
      </div>
    </section>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function ProfilePage() {
  return (
    <div style={{ background: "var(--background)", minHeight: "100vh" }}>
      <ProfileHeader />
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "40px 24px 80px" }}>
        <div className="flex flex-col gap-12">
          <TasteDnaSection />
          <TopArtistsSection />
          <RecentRatingsSection />
          <ListeningHistorySection />
          <FriendRecsSection />
        </div>
      </div>
    </div>
  );
}
