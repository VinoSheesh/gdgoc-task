import ArrowLink from "./ui/ArrowLink";
import Container from "./ui/Container";
import SectionBadge from "./ui/SectionBadge";
import SectionDivider from "./ui/SectionDivider";
import TrackCard from "./ui/TrackCard";
import { getTracks, getTrackById, mapTrackToCardProps } from "../lib/tracks";

export default async function TrackDiscoverySection() {
  // Fetch all tracks and specifically get single track data for research-discovery
  const [allTracks, researchTrack] = await Promise.all([
    getTracks(),
    getTrackById("research-discovery"),
  ]);

  // Ensure research-discovery uses the exact data from the single track endpoint
  const tracks = allTracks.map((t) =>
    t.id === "research-discovery" && researchTrack ? researchTrack : t
  );

  return (
    <section className="w-full bg-white">
      {/* Top border separator */}
      <SectionDivider />

      <Container className="py-14 md:py-20">
        {/* ── Header ── */}
        <div className="mb-10 md:mb-12">
          {/* Badge */}
          <SectionBadge label="Find your starting point" className="mb-4" />

          {/* Heading */}
          <h2 className="mb-4 text-[32px] font-extrabold leading-[1.15] tracking-tight text-[#111827] sm:text-[38px] lg:text-[44px]">
            Many interests. One shared
            <br />
            journey.
          </h2>

          {/* Subtitle + Link row */}
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-[15px] leading-relaxed text-gray-500">
              Follow what excites you. Explore a track, then connect the dots with others.
            </p>
            <ArrowLink href="/overview" className="shrink-0">
              See the overview
            </ArrowLink>
          </div>
        </div>

        {/* ── Cards Grid ── */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {tracks.map((track) => {
            const cardProps = mapTrackToCardProps(track);
            return <TrackCard key={track.id} {...cardProps} />;
          })}
        </div>
      </Container>
    </section>
  );
}
