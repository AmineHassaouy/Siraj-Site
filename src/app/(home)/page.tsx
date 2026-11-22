import ScrollReveal from "@/components/common/ScrollReveal";
import ContactCta from "@/components/common/ContactCta";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import AboutIntro from "@/components/home/AboutIntro";
import AudiencesSection from "@/components/home/AudiencesSection";
import Hero from "@/components/home/Hero";
import ServicesSection from "@/components/home/ServicesSection";
import WhySection from "@/components/home/WhySection";

export default function HomePage() {
  return (
    <>
      <Header current="home" morph />
      <Hero />
      <AboutIntro />
      <ServicesSection />
      <WhySection />
      <AudiencesSection />
      <ContactCta />
      <Footer />
      <WhatsAppButton />
      <ScrollReveal />
    </>
  );
}
