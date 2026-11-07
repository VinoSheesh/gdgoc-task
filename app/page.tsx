import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import DiscoverSection from "./components/DiscoverSection";
import TrackDiscoverySection from "./components/TrackDiscoverySection";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Navbar />
      <main>
        <HeroSection />
        <DiscoverSection />
        <TrackDiscoverySection />
      </main>
    </div>
  );
}
