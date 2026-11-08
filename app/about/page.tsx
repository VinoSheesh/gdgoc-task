import Navbar from "../components/Navbar";
import AboutHeroSection from "../components/AboutHeroSection";
import OurPurposeSection from "../components/OurPurposeSection";
import CommunityValuesSection from "../components/CommunityValuesSection";
import WaysToBelongSection from "../components/WaysToBelongSection";
import Footer from "../components/Footer";

export const metadata = {
  title: "About • GDGoC Universitas Gadjah Mada",
  description:
    "We're a community of learners and makers at Universitas Gadjah Mada, connected by curiosity and the belief that technology can do good.",
};

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Navbar />
      <main className="flex-1">
        <AboutHeroSection />
        <OurPurposeSection />
        <CommunityValuesSection />
        <WaysToBelongSection />
      </main>
      <Footer />
    </div>
  );
}

