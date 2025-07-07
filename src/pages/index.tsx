// pages/index.tsx
import Link from "next/link";
import { useEffect, useState } from "react";

const HERO_MP4 = "https://cdn.pixabay.com/video/2018/10/25/18903-297379476.mp4";

export default function Landing() {
  const [fadeIn, setFadeIn] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setFadeIn(true), 1200);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* bg video */}
      <video
        src={HERO_MP4}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* dark overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* header with top-left title and top-right button */}
      <header className="absolute top-4 inset-x-6 z-30 flex justify-between items-center text-white">
        {/* Site title */}
        <h1 className="text-3xl font-extrabold">Odyssey</h1>
        {/* Continue without login */}
        <Link
          href="/home"
          className="px-4 py-2 rounded-full border border-white bg-transparent hover:bg-white/10 font-semibold text-sm"
        >
          Continue without login
        </Link>
      </header>

      {/* center content */}
      <div className="relative z-20 h-full flex flex-col items-center justify-center text-center text-white px-6">
        <h2 className="text-4xl md:text-8xl font-bold mb-6">Odyssey Awaits</h2>

        <div
          className={`flex gap-8 transition-opacity duration-700 ${
            fadeIn ? "opacity-100" : "opacity-0"
          }`}
        >
          <Link
            href="/login"
            className="px-10 py-3 rounded-full bg-gray-800/80 hover:bg-gray-900 font-semibold"
          >
            Log&nbsp;In
          </Link>
          <Link
            href="/signup"
            className="px-8 py-3 rounded-full bg-blue-600 hover:bg-blue-700 font-semibold"
          >
            Sign&nbsp;Up
          </Link>
        </div>
      </div>
    </section>
  );
}
