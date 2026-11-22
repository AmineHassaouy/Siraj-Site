import ContactForm from "@/components/contact/ContactForm";
import ContactHero from "@/components/contact/ContactHero";
import ContactPanel from "@/components/contact/ContactPanel";
import ContactStage from "@/components/contact/ContactStage";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import WhatsAppButton from "@/components/layout/WhatsAppButton";

export default function ContactPage() {
  return (
    <>
      <Header current="contact" />
      <ContactHero />
      <ContactStage>
        <ContactForm />
        <ContactPanel />
      </ContactStage>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
