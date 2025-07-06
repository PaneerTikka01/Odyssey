// components/HeroVideo.tsx
import Link from "next/link";
import React, { useEffect, useState } from "react";

interface HeroVideoProps {
  country: string;
  videoSrc: string;
}

const HeroVideo: React.FC<HeroVideoProps> = ({ country, videoSrc }) => {
  const [showButton, setShowButton] = useState(false);
  const displayCountry = country.charAt(0).toUpperCase() + country.slice(1);

  useEffect(() => {
    const timer = setTimeout(() => setShowButton(true), 5000);
    return () => clearTimeout(timer);
  }, []);

  const isMp4 = videoSrc.toLowerCase().endsWith(".mp4");

  return (
    <section className="relative w-full h-screen overflow-hidden ">
      {isMp4 ? (
        <video
          src={videoSrc}
          className="absolute inset-0 w-[200%] h-[110%] -top-[10%] object-cover pointer-events-none "
          autoPlay
          loop
          muted
          playsInline
        />
      ) : (
        <iframe
          src={videoSrc}
          className="absolute inset-0 w-[110%] h-[110%] -top-[5%] -left-[5%] object-cover pointer-events-none "
          frameBorder="0"
          allow="autoplay; fullscreen"
          allowFullScreen
        />
      )}

      <div className="absolute inset-0 bg-black bg-opacity-40 " />

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
          Travel to {displayCountry}
        </h1>
        <div
          className={`transition-opacity duration-1000 ease-in-out ${
            showButton ? "opacity-100" : "opacity-0"
          }`}
        >
          <Link
            href={`/country/${country.toLowerCase()}`}
            className="px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-full shadow-lg mt-4 inline-block"
          >
            Craft Your Trip
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroVideo;
