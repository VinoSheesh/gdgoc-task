import Navbar from "../components/Navbar";
import ContactCommunitySection from "../components/ContactCommunitySection";
import BeforeYouSendSection from "../components/BeforeYouSendSection";
import Footer from "../components/Footer";

export const metadata = {
  title: "Contact • GDGoC Universitas Gadjah Mada",
  description:
    "Good things start with hello. A question, a collaboration, or an idea for the community? Tell us what’s on your mind.",
};

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Navbar />
      <main className="flex-1">
        <ContactCommunitySection />
        <BeforeYouSendSection />
      </main>
      <Footer />
    </div>
  );
}

