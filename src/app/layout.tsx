import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "RMM.AI — Music Intelligence",
  description: "AI-powered music discovery with Spotify integration",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div
          style={{
            backgroundColor: "var(--background)",
            minHeight: "100vh",
            color: "var(--text-primary)",
          }}
        >
          {children}
        </div>
      </body>
    </html>
  );
}
