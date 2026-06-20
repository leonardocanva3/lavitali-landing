import About from "@/components/About";
import Benefits from "@/components/Benefits";
import Contact from "@/components/Contact";
import CTA from "@/components/CTA";
import FloatingWhatsapp from "@/components/FloatingWhatsapp";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Insurance from "@/components/Insurance";
import MiniFAQ from "@/components/MiniFAQ";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import TrustBlock from "@/components/TrustBlock";
import WhenToSeek from "@/components/WhenToSeek";

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: "Lavitali Osteopatia e Pilates",
    alternateName: "Lavitali",
    url: "https://lavitali.com.br",
    logo: "https://lavitali.com.br/images/lavitali-logo.png",
    image: "https://lavitali.com.br/images/mariana-mendes-hero.jpeg",
    telephone: "+55 48 99623-8779",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Florianópolis",
      addressRegion: "SC",
      addressCountry: "BR",
    },
    medicalSpecialty: ["Osteopathy"],
    sameAs: ["https://www.instagram.com/lavitali.osteopatiaepilates/"],
  },
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Lavitali Osteopatia e Pilates",
    url: "https://lavitali.com.br",
    logo: "https://lavitali.com.br/images/lavitali-logo.png",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+55 48 99623-8779",
      contactType: "customer service",
      areaServed: "BR",
      availableLanguage: "Portuguese",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "A Lavitali atende adultos, gestantes e crianças?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sim. A Lavitali Osteopatia e Pilates atende adultos, gestantes e crianças com avaliação individual e atendimento humanizado.",
        },
      },
      {
        "@type": "Question",
        name: "Quais atendimentos a Lavitali oferece?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A Lavitali oferece Osteopatia, Pilates e Laserterapia com Mariana Mendes, com foco em mobilidade, bem-estar e alívio de dores.",
        },
      },
      {
        "@type": "Question",
        name: "Como agendar uma avaliação?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "O agendamento pode ser feito pelo WhatsApp da Lavitali.",
        },
      },
    ],
  },
];

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustBlock />
        <About />
        <Services />
        <WhenToSeek />
        <Benefits />
        <Insurance />
        <Testimonials />
        <MiniFAQ />
        <CTA />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsapp />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  );
}
