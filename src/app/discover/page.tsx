"use client";

import type { Metadata } from "next";
import React, { useState, useEffect, useRef, useCallback } from "react";
import {
  Sparkles,
  Send,
  Music2,
  TrendingUp,
  Users,
  Zap,
  Brain,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Discover — RMM.AI",
  description: "AI-powered music discovery. Ask anything about your taste.",
};

interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  content: string;
}

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

function ChatHeader() {
  return (
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
        style={{ fontSize: "18px", fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1 }}
      >
        RMM.AI
      </h1>
      <span
        className="glass"
        style={{ padding: "3px 10px", borderRadius: "999px", fontSize: "11px", color: "var(--text-muted)", letterSpacing: "0.01em" }}
      >
        Powered by Claude
      </span>
    </div>
  );
}

function ChatHistoryPanel({
  messages,
  isLoading,
  messagesEndRef,
}: {
  messages: ChatMessage[];
  isLoading: boolean;
  messagesEndRef: React.RefObject<HTMLDivElement | null>;
}) {
  return (
    <div style={{ flex: 1, overflowY: "auto", padding: "28px", display: "flex", flexDirection: "column", gap: "24px" }}>
      {messages.length === 0 && !isLoading && (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", flex: 1, gap: "12px", color: "var(--text-muted)", fontSize: "14px", paddingTop: "60px" }}>
          <Sparkles size={32} style={{ color: "var(--accent)", opacity: 0.5 }} />
          <p style={{ color: "var(--text-muted)", fontSize: "14px" }}>Ask anything about your music taste...</p>
        </div>
      )}

      {messages.map((msg, i) => (
        <div
          key={msg.id}
          className="animate-fade-in-up"
          style={{ animationDelay: `${i * 0.04}s`, display: "flex", justifyContent: msg.role === "user" ? "flex-end" : "flex-start", gap: "12px", alignItems: "flex-start" }}
        >
          {msg.role === "assistant" && (
            <div style={{ width: "30px", height: "30px", borderRadius: "50%", background: "linear-gradient(135deg, var(--accent), #ec4899)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: "2px" }}>
              <Sparkles size={14} color="white" />
            </div>
          )}
          <div
            className={msg.role === "assistant" ? "glass" : ""}
            style={{
              maxWidth: "78%",
              padding: "14px 18px",
              borderRadius: msg.role === "user" ? "20px 20px 6px 20px" : "6px 20px 20px 20px",
              background: msg.role === "user" ? "linear-gradient(135deg, var(--accent), #9333ea)" : undefined,
              color: msg.role === "user" ? "white" : "var(--text-secondary)",
              fontSize: "14px",
              lineHeight: "1.65",
              whiteSpace: "pre-wrap",
            }}
          >
            {msg.content}
          </div>
          {msg.role === "user" && (
            <div style={{ width: "30px", height: "30px", borderRadius: "50%", background: "rgba(255,255,255,0.08)", border: "1px solid var(--border)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: "2px", fontSize: "13px", fontWeight: 600, color: "var(--text-secondary)" }}>
              J
            </div>
          )}
        </div>
      ))}

      {isLoading && (
        <div style={{ display: "flex", justifyContent: "flex-start", gap: "12px", alignItems: "flex-start" }}>
          <div style={{ width: "30px", height: "30px", borderRadius: "50%", background: "linear-gradient(135deg, var(--accent), #ec4899)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: "2px" }}>
            <Sparkles size={14} color="white" />
          </div>
          <div className="glass" style={{ padding: "14px 18px", borderRadius: "6px 20px 20px 20px", display: "flex", alignItems: "center", gap: "5px" }}>
            {["0s", "0.2s", "0.4s"].map((delay) => (
              <span key={delay} style={{ width: "6px", height: "6px", borderRadius: "50%", background: "var(--accent)", display: "inline-block", animation: "pulse 1.2s ease-in-out infinite", animationDelay: delay }} />
            ))}
          </div>
        </div>
      )}

      <div ref={messagesEndRef} />
    </div>
  );
}

function ChatInputPanel({
  inputValue,
  setInputValue,
  isLoading,
  onSubmit,
  onPromptClick,
}: {
  inputValue: string;
  setInputValue: (v: string) => void;
  isLoading: boolean;
  onSubmit: (e: React.FormEvent) => void;
  onPromptClick: (prompt: string) => void;
}) {
  return (
    <div style={{ flexShrink: 0, padding: "20px 28px 24px", borderTop: "1px solid var(--border)" }}>
      <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginBottom: "14px" }}>
        {SUGGESTED_PROMPTS.map((prompt) => (
          <button
            key={prompt}
            onClick={() => { onPromptClick(prompt); }}
            className="glass"
            style={{ padding: "6px 14px", borderRadius: "999px", fontSize: "12px", color: "var(--text-secondary)", cursor: "pointer", border: "1px solid var(--border)", background: "rgba(255,255,255,0.04)", transition: "border-color 0.15s ease, color 0.15s ease", whiteSpace: "nowrap" }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(168,85,247,0.4)";
              (e.currentTarget as HTMLButtonElement).style.color = "var(--text-primary)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.borderColor = "var(--border)";
              (e.currentTarget as HTMLButtonElement).style.color = "var(--text-secondary)";
            }}
          >
            {prompt}
          </button>
        ))}
      </div>

      <form onSubmit={onSubmit} style={{ display: "flex", gap: "10px", alignItems: "center" }}>
        <div className="glass" style={{ flex: 1, borderRadius: "16px", display: "flex", alignItems: "center", padding: "4px 6px 4px 18px", gap: "10px" }}>
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Ask anything about your music taste..."
            style={{ flex: 1, background: "transparent", border: "none", outline: "none", color: "var(--text-primary)", fontSize: "14px", lineHeight: "1.5", padding: "10px 0", fontFamily: "inherit" }}
          />
          <button
            type="submit"
            disabled={!inputValue.trim() || isLoading}
            style={{ width: "38px", height: "38px", borderRadius: "12px", background: inputValue.trim() && !isLoading ? "linear-gradient(135deg, var(--accent), #9333ea)" : "rgba(255,255,255,0.06)", border: "none", cursor: inputValue.trim() && !isLoading ? "pointer" : "default", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, transition: "background 0.15s ease" }}
          >
            <Send size={16} color={inputValue.trim() && !isLoading ? "white" : "var(--text-muted)"} />
          </button>
        </div>
      </form>
    </div>
  );
}

function TasteProfileCard() {
  return (
    <div className="glass animate-fade-in-up" style={{ borderRadius: "16px", padding: "20px", animationDelay: "0.05s" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "18px" }}>
        <TrendingUp size={15} style={{ color: "var(--accent)" }} />
        <h2 style={{ fontSize: "13px", fontWeight: 600, color: "var(--text-primary)", letterSpacing: "0.02em", textTransform: "uppercase" }}>
          Your Taste Profile
        </h2>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        {GENRE_BARS.map(({ label, pct }) => (
          <div key={label}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "5px" }}>
              <span style={{ fontSize: "12px", color: "var(--text-secondary)", fontWeight: 500 }}>{label}</span>
              <span style={{ fontSize: "11px", color: "var(--text-muted)", fontVariantNumeric: "tabular-nums" }}>{pct}%</span>
            </div>
            <div style={{ height: "4px", borderRadius: "999px", background: "rgba(255,255,255,0.07)", overflow: "hidden" }}>
              <div
                style={{
                  height: "100%",
                  width: `${pct}%`,
                  borderRadius: "999px",
                  background: pct >= 70 ? "linear-gradient(90deg, var(--accent), #ec4899)" : pct >= 45 ? "linear-gradient(90deg, #9333ea, #a855f7)" : "rgba(168,85,247,0.4)",
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ActiveContextCard() {
  return (
    <div className="glass animate-fade-in-up" style={{ borderRadius: "16px", padding: "20px", animationDelay: "0.1s" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "16px" }}>
        <Brain size={15} style={{ color: "var(--accent)" }} />
        <h2 style={{ fontSize: "13px", fontWeight: 600, color: "var(--text-primary)", letterSpacing: "0.02em", textTransform: "uppercase" }}>
          Active Context
        </h2>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        {ACTIVE_CONTEXT.map(({ icon, label }) => (
          <div key={label} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <span style={{ color: "var(--accent)", display: "flex", alignItems: "center", flexShrink: 0 }}>{icon}</span>
            <span style={{ fontSize: "13px", color: "var(--text-secondary)" }}>{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function AiInsightsCard() {
  return (
    <div className="animate-fade-in-up" style={{ animationDelay: "0.15s" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "14px" }}>
        <Sparkles size={15} style={{ color: "var(--accent)" }} />
        <h2 style={{ fontSize: "13px", fontWeight: 600, color: "var(--text-primary)", letterSpacing: "0.02em", textTransform: "uppercase" }}>
          Recent AI Insights
        </h2>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        {AI_INSIGHTS.map(({ text }) => (
          <div key={text} className="glass" style={{ borderRadius: "12px", padding: "13px 15px", display: "flex", gap: "10px", alignItems: "flex-start" }}>
            <Sparkles size={13} style={{ color: "var(--accent)", flexShrink: 0, marginTop: "2px" }} />
            <p style={{ fontSize: "12px", color: "var(--text-secondary)", lineHeight: "1.55" }}>{text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function DiscoverPage() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  const sendMessage = useCallback(async (content: string) => {
    if (!content.trim() || isLoading) return;
    const userMsg: ChatMessage = { id: Date.now().toString(), role: "user", content };
    const allMessages = [...messages, userMsg];
    setMessages(allMessages);
    setIsLoading(true);

    const assistantId = (Date.now() + 1).toString();
    setMessages(prev => [...prev, { id: assistantId, role: "assistant", content: "" }]);

    try {
      const res = await fetch("/api/ai/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: allMessages.map(m => ({ role: m.role, content: m.content })) }),
      });
      if (!res.ok || !res.body) throw new Error("API error");
      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let done = false;
      while (!done) {
        const { value, done: doneReading } = await reader.read();
        done = doneReading;
        if (value) {
          const chunk = decoder.decode(value, { stream: true });
          setMessages(prev => prev.map(m =>
            m.id === assistantId ? { ...m, content: m.content + chunk } : m
          ));
        }
      }
    } catch {
      setMessages(prev => prev.map(m =>
        m.id === assistantId ? { ...m, content: "Sorry, something went wrong. Please try again." } : m
      ));
    } finally {
      setIsLoading(false);
    }
  }, [messages, isLoading]);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    sendMessage(inputValue);
    setInputValue("");
  }

  return (
    <div style={{ display: "flex", height: "100vh", backgroundColor: "var(--background)", overflow: "hidden" }}>
      {/* LEFT — Chat Interface */}
      <div style={{ flex: "0 0 66.666%", display: "flex", flexDirection: "column", borderRight: "1px solid var(--border)", overflow: "hidden" }}>
        <ChatHeader />
        <ChatHistoryPanel messages={messages} isLoading={isLoading} messagesEndRef={messagesEndRef} />
        <ChatInputPanel
          inputValue={inputValue}
          setInputValue={setInputValue}
          isLoading={isLoading}
          onSubmit={handleSubmit}
          onPromptClick={sendMessage}
        />
      </div>

      {/* RIGHT — Context Panel */}
      <div style={{ flex: "0 0 33.333%", overflowY: "auto", padding: "28px 24px", display: "flex", flexDirection: "column", gap: "20px" }}>
        <TasteProfileCard />
        <ActiveContextCard />
        <AiInsightsCard />
      </div>
    </div>
  );
}
