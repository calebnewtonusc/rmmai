import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

export default function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <Sidebar />
      <main
        style={{
          marginLeft: "240px",
          marginTop: "64px",
          padding: "24px",
          minHeight: "calc(100vh - 64px)",
          backgroundColor: "var(--background)",
        }}
      >
        {children}
      </main>
    </>
  );
}
