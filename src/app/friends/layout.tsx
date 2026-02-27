import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Friends — RMM.AI",
  description: "See what your friends are listening to in real time, top tracks this week, and recent ratings.",
};

export default function FriendsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
