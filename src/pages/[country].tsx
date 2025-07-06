// pages/[country].tsx
import HeroVideo from "@/components/HeroVideo";
import Header from "@/components/Header";

const videoMap: Record<string, string> = {
  france: "517520370",
  argentina: "520938472",
  chile: "747377307",
  croatia: "745140043",
  england: "899542022",
  germany: "https://cdn.pixabay.com/video/2020/01/18/31377-386628887_small.mp4",
  greece: "740126757",
  iceland: "520945179",
  ireland: "899536580",
  italy: "520945849",
  finland: "747679812",
  norway: "520947303",
  portugal: "520953703",
  spain: "520955715",
  scotland: "748071837",
  switzerland: "783411880",
  egypt: "520944141",
  jordan: "533730603",
  morocco: "520946554",
  "south-africa": "520954780",
  "new-zealand": "882117352",
  india: "745419679",
  indonesia:
    "https://cdn.pixabay.com/video/2020/04/24/37088-413229662_medium.mp4",
  japan: "745152628",
  nepal: "748063819",
  "south-korea": "960364683",
  "sri-lanka": "745152272",
  thailand: "778553381",
  philippines: "https://cdn.pixabay.com/video/2024/07/01/219047_medium.mp4",
  turkey: "748131273",
  vietnam: "745440223",
  canada: "888757561",
  usa: "https://cdn.pixabay.com/video/2025/04/17/272513_medium.mp4",
  mexico: "748805834",
  australia: "https://cdn.pixabay.com/video/2024/04/12/207717_medium.mp4",
  russia: "https://cdn.pixabay.com/video/2018/12/25/20254-308335527.mp4",
};

export default function CountryPage({
  country,
  videoSrc,
}: {
  country: string;
  videoSrc: string;
}) {
  return (
    <>
      <HeroVideo country={country} videoSrc={videoSrc} />
    </>
  );
}

export async function getStaticPaths() {
  const slugs = Object.keys(videoMap);
  return {
    paths: slugs.map((slug) => ({ params: { country: slug } })),
    fallback: false,
  };
}

export async function getStaticProps({
  params,
}: {
  params: { country: string };
}) {
  const country = params.country.toLowerCase();
  let raw = videoMap[country];
  if (!raw) {
    return { notFound: true };
  }
  // Determine videoSrc: direct mp4 or Vimeo embed URL
  const videoSrc = raw.endsWith(".mp4")
    ? raw
    : `https://player.vimeo.com/video/${raw}?autoplay=1&loop=1&muted=1&background=1`;
  return {
    props: { country, videoSrc },
  };
}
