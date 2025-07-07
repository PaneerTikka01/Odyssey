// src/components/AttractionModal.tsx
import React from "react";
import { Poi } from "./AttractionCard";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

type Props = {
  poi: Poi;
  onClose: () => void;
};

export function AttractionModal({ poi, onClose }: Props) {
  const img = poi.images[0];
  const imageUrl = `${img.url}?fit=crop&ar=1:1&w=1200&auto=format&q=75`;

  return (
    // Backdrop: closes when clicked
    <div
      className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50"
      onClick={onClose}
    >
      {/* Fullscreen modal panel: prevents backdrop click */}
      <div
        className="
          bg-white w-full h-full p-4 relative overflow-y-auto
        "
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          className="absolute top-4 right-4 text-2xl text-gray-800 hover:text-gray-600"
          onClick={onClose}
          aria-label="Close"
        >
          ×
        </button>

        {/* Title: blue, bold, larger */}
        <h2 className="text-6xl font-extrabold mb-4 text-black text-center">
          {poi.title}
        </h2>

        {/* Hero image */}
        <img src={imageUrl} alt={img.alt} className="w-full rounded-lg mb-4" />

        {/* Full description */}
        <div className="prose prose-lg text-gray-700 mb-6 leading-relaxed">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {poi.excerpt}
          </ReactMarkdown>
        </div>

        {/* Location info */}
        <p className="text-sm text-gray-500">
          Location:{" "}
          <span className="font-medium text-red-500">
            {poi.places.map((p) => p.title).join(", ")}
          </span>
        </p>
      </div>
    </div>
  );
}
