import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ClippedAI – Turn Long Videos into Viral Clips with AI",
  description:
    "ClippedAI uses AI to turn your long-form videos into short clips ready for channels like TikTok, Instagram, YouTube Shorts, and more.",
  keywords: ["AI", "video editing", "clips", "TikTok", "YouTube Shorts", "viral clips"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="noise-overlay">{children}</body>
    </html>
  );
}
