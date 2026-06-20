import Image from "next/image";
import { Clock, MapPin, MessageCircle, Phone } from "lucide-react";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { whatsappUrl } from "@/lib/whatsapp";
import { Reveal } from "./Reveal";

const contact = [
  { icon: Phone, label: "Agendamento", value: "WhatsApp (48) 99623-8779", href: whatsappUrl },
  { icon: MessageCircle, label: "WhatsApp", value: "(48) 99623-8779", href: whatsappUrl },
  { icon: MapPin, label: "Endereço", value: "Florianópolis, SC", href: "https://www.google.com/maps/search/?api=1&query=Lavitali%20Osteopatia%20e%20Pilates%20Florian%C3%B3polis" },
  { icon: FaInstagram, label: "Instagram", value: "@lavitali.osteopatiaepilates", href: "https://www.instagram.com/lavitali.osteopatiaepilates/" },
  { icon: Clock, label: "Horários", value: "Segunda a sexta, das 8h às 20h", href: "#contato" },
];

export default function Contact() {
  return (
    <section id="contato" className="border-b border-gray-100 bg-[#f8fbfa] py-20 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-16 px-5 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <Reveal className="min-w-0">
          <span className="text-sm font-medium uppercase tracking-[0.26em] text-[#0f6f61]">Contato</span>
          <h2 className="mt-6 text-4xl font-semibold leading-[1.14] text-[#123d46] sm:text-5xl">Estamos prontos para receber você.</h2>
          <p className="mt-7 text-lg font-medium leading-9 text-[#64787d]">
            Fale com a Lavitali Osteopatia e Pilates para agendar sua avaliação com Mariana Mendes.
          </p>

          <div className="mt-12 space-y-4">
            {contact.map(({ icon: Icon, label, value, href }) => (
              <a key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noreferrer" : undefined} className="flex min-w-0 gap-5 rounded-3xl border border-gray-100 bg-white p-6 shadow-sm transition duration-[400ms] ease-out hover:-translate-y-2 hover:border-gray-100 hover:shadow-2xl hover:shadow-[#123d46]/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0f6f61]">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#edf7f3] text-[#0f6f61] shadow-sm">
                  <Icon size={20} />
                </span>
                <span className="min-w-0">
                  <span className="block text-xs font-medium uppercase tracking-[0.22em] text-[#7a8d91]">{label}</span>
                  <span className="mt-1.5 block break-words font-medium text-[#123d46]">{value}</span>
                </span>
              </a>
            ))}
          </div>

          <a href={whatsappUrl} target="_blank" rel="noreferrer" className="mt-9 inline-flex min-h-14 items-center justify-center gap-2 rounded-full bg-[#0f6f61] px-8 py-3.5 text-sm font-medium text-white shadow-[0_12px_30px_rgba(15,111,97,0.16)] transition duration-300 ease-out hover:scale-[1.02] hover:bg-[#0b5d52] hover:shadow-[0_18px_42px_rgba(15,111,97,0.2)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0f6f61]">
            <FaWhatsapp size={19} />
            Agendar avaliação pelo WhatsApp
          </a>
        </Reveal>

        <Reveal delay={0.1} className="grid min-w-0 gap-5">
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-xl shadow-[#123d46]/10">
            <Image src="/images/contato-clinica.jpeg" alt="Ambiente da Lavitali Osteopatia e Pilates" fill sizes="(min-width: 1024px) 52vw, 100vw" className="object-cover" />
          </div>
          <iframe
            title="Mapa da Lavitali Osteopatia e Pilates"
            src="https://www.google.com/maps?q=Lavitali%20Osteopatia%20e%20Pilates%20Florian%C3%B3polis&output=embed"
            className="h-72 w-full rounded-3xl border border-gray-100 grayscale shadow-sm"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </Reveal>
      </div>
    </section>
  );
}
