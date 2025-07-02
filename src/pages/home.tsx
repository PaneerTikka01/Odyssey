// src/pages/home.tsx
import { useRouter } from "next/router";
import { useMemo } from "react";
import Header from "@/components/Header";
import Select, { StylesConfig } from "react-select";
import { Search } from "lucide-react";

const COUNTRY_LIST = [
  "france",
  "argentina",
  "chile",
  "croatia",
  "england",
  "germany",
  "greece",
  "iceland",
  "ireland",
  "italy",
  "finland",
  "norway",
  "portugal",
  "spain",
  "scotland",
  "switzerland",
  "egypt",
  "jordan",
  "morocco",
  "south-africa",
  "new-zealand",
  "india",
  "indonesia",
  "japan",
  "nepal",
  "south-korea",
  "sri-lanka",
  "thailand",
  "philippines",
  "turkey",
  "vietnam",
  "canada",
  "usa",
  "mexico",
  "australia",
  "russia",
] as const;

const nice = (s: string) =>
  s
    .split("-")
    .map((w) => w[0].toUpperCase() + w.slice(1))
    .join(" ");

type Option = { value: string; label: string };

export default function HomePage() {
  const router = useRouter();
  const options = useMemo<Option[]>(
    () => COUNTRY_LIST.map((c) => ({ value: c, label: nice(c) })),
    []
  );

  const onSelect = (opt: Option | null) => {
    if (opt) router.push(`/${opt.value}`);
  };

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* HEADER */}
      <div className="relative z-30">
        <Header />
      </div>

      {/* VIDEO BACKGROUND */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
        autoPlay
        loop
        muted
        playsInline
        poster="https://www.elsewhere.io/webflow/videos/hero-home-poster-00001.jpg"
      >
        <source
          src="https://pub-a0aabe76194e4aa8aea91afd2093a9e5.r2.dev/hero-home-transcode.mp4"
          type="video/mp4"
        />
      </video>

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/60 z-0" />

      {/* HERO CONTENT */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full px-4 text-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Explore The Extraordinary
        </h1>
        <h4 className="text-lg md:text-2xl font-light mb-10">
          Get ready for your next Odyssey
        </h4>

        {/*Search Box*/}
        <div className="relative w-full max-w-md mb-10">
          <Search
            size={20}
            className="absolute left-3 top-1/2 transform -translate-y-1/2 stroke-current text-gray-500 z-10 pointer-events-none"
          />

          <Select
            options={options}
            placeholder="Where do you want to go?"
            onChange={onSelect}
            styles={{
              control: (base) => ({
                ...base,
                paddingLeft: "2.5rem",
                minHeight: "3.5rem", // broader
                borderRadius: "9999px", // rounder
              }),
            }}
            className="text-black"
          />
        </div>

        {/* POPULAR NOW CENTERED */}
        <div className="w-full overflow-x-auto">
          <p className="uppercase text-sm mb-3 tracking-wide text-gray-200">
            Popular now
          </p>
          <div className="flex justify-center gap-6 px-1">
            {[
              "india",
              "spain",
              "france",
              "italy",
              "japan",
              "russia",
              "vietnam",
              "scotland",
            ].map((slug) => (
              <button
                key={slug}
                onClick={() => router.push(`/${slug}`)}
                className="whitespace-nowrap bg-white/20 hover:bg-white/30 px-4 py-2 rounded-full shrink-0"
              >
                {nice(slug)}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
