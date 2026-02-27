import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Discover — RMM.AI",
  description: "Ask RMM.AI anything about your music taste. Get AI-powered music recommendations, playlist suggestions, and genre insights.",
};

export default function DiscoverLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
