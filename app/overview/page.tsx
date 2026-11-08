import Navbar from "../components/Navbar";
import OverviewIntroSection from "../components/OverviewIntroSection";
import LearningTrackOverviewSection from "../components/LearningTrackOverviewSection";
import LearningOutcomesSection from "../components/LearningOutcomesSection";
import ProgramFormatsSection from "../components/ProgramFormatsSection";
import LearningJourneySection from "../components/LearningJourneySection";
import CommunityInvitationSection from "../components/CommunityInvitationSection";
import Footer from "../components/Footer";

export const metadata = {
  title: "Overview • GDGoC Universitas Gadjah Mada",
  description:
    "Explore how research, creativity, and development connect. Start with one interest. Grow through practice and the people around you.",
};

export default function OverviewPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Navbar />
      <main className="flex-1">
        <OverviewIntroSection />
        <LearningTrackOverviewSection />
        <LearningOutcomesSection />
        <ProgramFormatsSection />
        <LearningJourneySection />
        <CommunityInvitationSection />
      </main>
      <Footer />
    </div>
  );
}

