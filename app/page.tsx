import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import DiscoverSection from "./components/DiscoverSection";
import TrackDiscoverySection from "./components/TrackDiscoverySection";
import LearningFormatSection from "./components/LearningFormatSection";
import BuildAndBelongSection from "./components/BuildAndBelongSection";
import GettingStartedSection from "./components/GettingStartedSection";
import BelongingStatementSection from "./components/BelongingStatementSection";
import FAQSection from "./components/FAQSection";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Navbar />
      <main>
        <HeroSection />
        <DiscoverSection />
        <TrackDiscoverySection />
        <LearningFormatSection />
        <BuildAndBelongSection />
        <GettingStartedSection />
        <BelongingStatementSection />
        <FAQSection />
      </main>
    </div>
  );
}
