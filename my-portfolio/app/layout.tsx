// app/layout.tsx
import type { Metadata, Viewport } from "next";
import "@fontsource-variable/bricolage-grotesque";
import "@fontsource-variable/instrument-sans";
import "@fontsource/ibm-plex-mono/500.css";
import "./globals.css";

const description =
  "Software Developer co-op at Libro Credit Union and Software Engineering student at Western University. C#/.NET services, full-stack web apps, and computer-vision projects.";

export const metadata: Metadata = {
  metadataBase: new URL("https://mohammedowda.com"),
  title: "Mohammed Owda | Software Developer",
  description,
  keywords: [
    "Mohammed Owda",
    "Software Developer",
    "Software Engineering",
    "Western University",
    "C#",
    ".NET",
    "Full Stack Developer",
    "Computer Vision",
  ],
  authors: [{ name: "Mohammed Owda" }],
  openGraph: {
    title: "Mohammed Owda | Software Developer",
    description,
    type: "website",
    url: "https://mohammedowda.com",
    images: [{ url: "/photos/hero-square.jpg", width: 600, height: 600, alt: "Mohammed Owda at Hack Western 13" }],
  },
};

export const viewport: Viewport = {
  themeColor: "#f3f5f9",
  colorScheme: "light",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
