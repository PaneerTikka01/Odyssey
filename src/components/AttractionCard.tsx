// src/components/AttractionCard.tsx
import React from "react";

export type Poi = {
  esid: string;
  title: string;
  excerpt: string;
  places: { title: string }[];
  images: { url: string; alt: string }[];
};

type Props = {
  poi: Poi;
  onClick: () => void;
};

export default function AttractionCard({ poi, onClick }: Props) {
  const img = poi.images[0];
  const imageUrl = `${img.url}?fit=crop&ar=1:1&w=1200&auto=format&q=75`;

  return (
    <li className="col-span-1 md:col-span-3">
      <article
        className="rounded overflow-hidden cursor-pointer"
        onClick={onClick}
      >
        <img
          src={imageUrl}
          alt={img.alt}
          className="aspect-square object-cover rounded-lg"
        />
        <div className="p-4 space-y-2">
          <h2 className="font-semibold text-2xl">{poi.title}</h2>
          <p className="text-sm uppercase text-gray-1000 font-bold">
            {poi.places.map((p) => p.title).join(", ")}
          </p>
          <p className="line-clamp-3 text-gray-700">{poi.excerpt}</p>
        </div>
      </article>
    </li>
  );
}
