import ScrollReveal from "@/components/common/ScrollReveal";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import ServiceDomains from "@/components/services/ServiceDomains";
import ServicesBackdrop from "@/components/services/ServicesBackdrop";
import ServicesCta from "@/components/services/ServicesCta";
import ServicesIntro from "@/components/services/ServicesIntro";
import ServicesOverview from "@/components/services/ServicesOverview";

export default function ServicesPage() {
  return (
    <>
      <ServicesBackdrop />
      <Header current="services" />
      <main className="relative z-10">
        <ServicesIntro />
        <ServicesOverview />
        <ServiceDomains />
        <ServicesCta />
      </main>
      <Footer />
      <WhatsAppButton />
      <ScrollReveal />
    </>
  );
}
