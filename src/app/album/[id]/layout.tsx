import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Album — RMM.AI",
  description: "View album details, track ratings, friend activity, and community reviews on RMM.AI.",
};

export default function AlbumLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
