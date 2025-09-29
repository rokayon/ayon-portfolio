import type React from "react";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Analytics } from "@vercel/analytics/next";
import { Suspense } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rokonozzaman Ayon",
  description:
    "Full-Stack Software Engineer specializing in Python, AI/ML, and scalable web applications. Building production-ready APIs and intelligent solutions.",
  keywords: [
    "Full-Stack Developer",
    "Python",
    "AI/ML",
    "FastAPI",
    "Django",
    "Software Engineer",
    "Bangladesh",
  ],
  authors: [{ name: "Abdullah Al Rahat" }],
  creator: "Abdullah Al Rahat",
  openGraph: {
    title: "Abdullah Al Rahat - Full-Stack Software Engineer",
    description:
      "Full-Stack Software Engineer specializing in Python, AI/ML, and scalable web applications.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abdullah Al Rahat - Full-Stack Software Engineer",
    description:
      "Full-Stack Software Engineer specializing in Python, AI/ML, and scalable web applications.",
  },
  generator: "v0.app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}
      >
        <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  );
}
