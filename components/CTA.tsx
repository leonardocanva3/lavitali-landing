import { MessageCircle } from "lucide-react";
import { buttonVariants, cn } from "@/lib/utils";
import { whatsappUrl } from "@/lib/whatsapp";
import { Reveal } from "./Reveal";

export default function CTA() {
  return (
    <section className="border-b border-gray-100 bg-white py-20 sm:py-32">
      <Reveal className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[linear-gradient(135deg,#0d3138_0%,#123d46_54%,#0f6f61_130%)] px-6 py-16 text-center shadow-xl shadow-[#123d46]/18 sm:px-12 sm:py-24">
          <div className="pointer-events-none absolute -left-16 top-12 hidden h-64 w-64 rounded-full bg-white/10 blur-3xl sm:block" />
          <div className="pointer-events-none absolute -right-20 bottom-4 hidden h-72 w-72 rounded-full bg-[#c5a45f]/18 blur-3xl sm:block" />
          <div className="pointer-events-none absolute left-12 top-12 h-2 w-2 rounded-full bg-[#c5a45f]/80" />
          <div className="pointer-events-none absolute right-20 top-20 h-1.5 w-1.5 rounded-full bg-[#c5a45f]/70" />
          <span className="relative text-sm font-medium uppercase tracking-[0.28em] text-[#d8bd7a]">Agende sua avaliação</span>
          <h2 className="relative mx-auto mt-6 max-w-3xl text-4xl font-semibold leading-[1.12] text-white sm:text-6xl">
            Dê o primeiro passo com uma avaliação completa na Lavitali Osteopatia e Pilates.
          </h2>
          <a href={whatsappUrl} target="_blank" rel="noreferrer" className={cn(buttonVariants({ variant: "light" }), "relative mt-10 px-9")}>
            <MessageCircle size={19} />
            Agendar avaliação pelo WhatsApp
          </a>
        </div>
      </Reveal>
    </section>
  );
}
