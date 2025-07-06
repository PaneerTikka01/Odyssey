import type { Metadata } from "next";
import { ReactNode } from "react";
import Header from "@/components/Header";

import {
  Geist,
  Geist_Mono,
  Outfit,
  Playfair_Display as Playfair,
} from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Odyssey",
  description: "Travel the world with Odyssey.",
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-outfit",
});

const playfair = Playfair({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-playfair",
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${outfit.variable} ${playfair.variable} antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
