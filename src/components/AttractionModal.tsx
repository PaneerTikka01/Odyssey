// src/components/AttractionModal.tsx
import React from "react";
import { Poi } from "./AttractionCard";

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
      {/* Modal panel: prevents backdrop click */}
      <div
        className="
          bg-white rounded-xl p-6 max-w-6xl relative
          max-h-[90vh] overflow-y-auto
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

        {/* Title */}
        <h2 className="text-3xl font-bold mb-4">{poi.title}</h2>

        {/* Hero image */}
        <img src={imageUrl} alt={img.alt} className="w-full rounded-lg mb-4" />

        {/* Full description, preserving line breaks */}
        <p className="text-gray-800 mb-4 whitespace-pre-line">{poi.excerpt}</p>

        {/* Location info */}
        <p className="text-sm text-gray-600">
          Location: {poi.places.map((p) => p.title).join(", ")}
        </p>
      </div>
    </div>
  );
}
