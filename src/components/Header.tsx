// src/components/Header.tsx
import React from "react";

export default function Header() {
  return (
    <header className="bg-black text-white py-6 shadow-md">
      <div className="container mx-auto px-4 text-center">
        <h1 className="font-outfit font-bold text-6xl md:text-6xl uppercase tracking-widest">
          Odyssey
        </h1>
        <div className="h-1 w-32 bg-white mx-auto mt-2"></div>
      </div>
    </header>
  );
}
