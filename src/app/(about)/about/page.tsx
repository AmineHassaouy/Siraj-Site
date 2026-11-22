import AboutHero from "@/components/about/AboutHero";
import PhilosophySection from "@/components/about/PhilosophySection";
import ValuesSection from "@/components/about/ValuesSection";
import WhoSection from "@/components/about/WhoSection";
import ContactCta from "@/components/common/ContactCta";
import ScrollReveal from "@/components/common/ScrollReveal";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import WhatsAppButton from "@/components/layout/WhatsAppButton";

export default function AboutPage() {
  return (
    <>
      <Header current="about" />
      <AboutHero />
      <WhoSection />
      <PhilosophySection />
      <ValuesSection />
      <ContactCta />
      <Footer />
      <WhatsAppButton />
      <ScrollReveal />
    </>
  );
}
