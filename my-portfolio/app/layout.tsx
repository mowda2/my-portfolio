// app/layout.tsx
import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mohammed Owda | Software Engineer",
  description:
    "Building intelligent systems, designing human-centered interfaces, and shipping production code. AI/ML, Robotics (ROS 2), and Full-Stack Development.",
  keywords: [
    "Mohammed Owda",
    "Software Engineer",
    "AI",
    "Machine Learning",
    "ROS 2",
    "Full Stack Developer",
    "Western University",
  ],
  authors: [{ name: "Mohammed Owda" }],
  openGraph: {
    title: "Mohammed Owda | Software Engineer",
    description: "Building intelligent systems at the intersection of AI, robotics, and full-stack development.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#0D0D0F",
  colorScheme: "dark",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`dark ${spaceGrotesk.variable} ${inter.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
