import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard — RMM.AI",
  description: "Your music dashboard. See recently played tracks, top albums, friends listening now, and AI insights.",
};

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
