// src/pages/country/[code].tsx
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import AttractionCard, { Poi } from "@/components/AttractionCard";
import { AttractionModal } from "@/components/AttractionModal";
import Header from '@/components/Header'

export default function CountryPage() {
  const { query } = useRouter();
  const code = Array.isArray(query.code) ? query.code[0] : query.code;
  const [pois, setPois] = useState<Poi[]>([]);
  const [selected, setSelected] = useState<Poi | null>(null);

  useEffect(() => {
    if (!code) return;
    fetch(`/api/attractions/${code}`)
      .then((r) => r.json())
      .then(setPois);
  }, [code]);

  if (!code) return null;

  return (
    <div className="bg-white min-h-screen">
     <Header />
      <header className="container mx-auto px-2 py-2 border-b border-transparent">
        <h1
          className="text-5xl md:text-6xl font-display leading-tight font-bold my-8"
          data-testid="page-heading"
        >
          Must‑see attractions in {code.charAt(0).toUpperCase() + code.slice(1)}
        </h1>
      </header>

      {/* Attraction Cards */}
      <main className="container mx-auto px-4">
        <div className="mt-8 mb-12 lg:mb-16">
          <ul className="md:grid md:grid-cols-12 gap-x-6 gap-y-14 space-y-14 md:space-y-0 list-none p-0 m-0">
            {pois.map((poi) => (
              <AttractionCard
                key={poi.esid}
                poi={poi}
                onClick={() => setSelected(poi)}
              />
            ))}
          </ul>
        </div>
      </main>

      {/* Modal */}
      {selected && (
        <AttractionModal poi={selected} onClose={() => setSelected(null)} />
      )}
    </div>
  );
}
