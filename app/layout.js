import { IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const plex = IBM_Plex_Mono({ subsets: ["latin"], variable: "--font-plex", weight: ["400", "500", "700"] });

export const metadata = {
  title: "KASET KITA — Mixtape & Radio",
  description: "Kolektif musik & radio komunitas. Mixtape bulanan, arsip siaran, dan cara ikut siaran.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className={`${plex.variable} antialiased`}>{children}</body>
    </html>
  );
}
