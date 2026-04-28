import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FourPillars from "@/components/FourPillars";
import VoiceAI from "@/components/VoiceAI";
import Trust from "@/components/Trust";
import Services from "@/components/Services";
import WhoItsFor from "@/components/WhoItsFor";
import HowItWorks from "@/components/HowItWorks";
import WhyAdaptive from "@/components/WhyAdaptive";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import CalendarModal from "@/components/CalendarModal";
import FormPopup from "@/components/FormPopup";
import AnimationInit from "@/components/AnimationInit";

export default function Home() {
  return (
    <>
      <AnimationInit />
      <CalendarModal />
      <FormPopup />
      <Navbar />
      <main>
        <Hero />
        <FourPillars />
        <VoiceAI />
        <Trust />
        <Services />
        <WhoItsFor />
        <HowItWorks />
        <WhyAdaptive />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
