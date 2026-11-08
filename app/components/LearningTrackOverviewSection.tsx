import { Suspense } from "react";
import Container from "./ui/Container";
import SectionBadge from "./ui/SectionBadge";
import TrackCard from "./ui/TrackCard";
import TrackHighlighter from "./TrackHighlighter";
import { getTracks, getTrackById, mapTrackToCardProps } from "../lib/tracks";

export default async function LearningTrackOverviewSection() {
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
    <section id="learning-tracks" className="w-full bg-white py-14 md:py-20 scroll-mt-20">
      <Suspense fallback={null}>
        <TrackHighlighter />
      </Suspense>

      <Container>
        {/* ── Header ── */}
        <div className="mb-10 max-w-3xl md:mb-14">
          <SectionBadge label="EXPLORE YOUR INTERESTS" className="mb-4" />

          <h2 className="text-[32px] font-extrabold leading-[1.15] tracking-tight text-[#111827] sm:text-[38px] lg:text-[44px]">
            Three ways in. Plenty of ways
            <br />
            forward.
          </h2>

          <p className="mt-4 text-[15px] leading-relaxed text-gray-500 sm:text-[16px]">
            These pathways are starting points, not boxes. Follow one deeply or
            bring different skills together.
          </p>
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
