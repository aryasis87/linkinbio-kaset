import { IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const plex = IBM_Plex_Mono({ subsets: ["latin"], variable: "--font-plex", weight: ["400", "500", "700"] });

const __jsonld = {"@context":"https://schema.org","@type":"Organization","name":"KASET KITA","description":"Kolektif musik & radio komunitas","url":"https://kaset.pintuweb.com"};

export const metadata = {
  metadataBase: new URL("https://kaset.pintuweb.com"),
  title: "KASET KITA — Mixtape & Radio",
  description: "Link in bio kolektif musik & radio komunitas KASET KITA: mixtape bulanan, arsip siaran, dan cara ikut siaran.",
  applicationName: "KASET KITA",
  keywords: ["link in bio", "radio komunitas", "mixtape", "kolektif musik", "podcast"],
  authors: [{ name: "KASET KITA" }],
  creator: "KASET KITA",
  publisher: "KASET KITA",
  alternates: { canonical: "https://kaset.pintuweb.com" },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://kaset.pintuweb.com",
    siteName: "KASET KITA",
    title: "KASET KITA — Mixtape & Radio",
    description: "Link in bio kolektif musik & radio komunitas KASET KITA: mixtape bulanan, arsip siaran, dan cara ikut siaran.",
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "KASET KITA — Mixtape & Radio" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "KASET KITA — Mixtape & Radio",
    description: "Link in bio kolektif musik & radio komunitas KASET KITA: mixtape bulanan, arsip siaran, dan cara ikut siaran.",
    images: ["/og.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className={`${plex.variable} antialiased`}>{children}<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(__jsonld) }} />
        </body>
    </html>
  );
}
