import Image from "next/image";
import { CheckCircle2, MessageCircle, MoveRight } from "lucide-react";
import { buttonVariants, cn } from "@/lib/utils";
import { whatsappUrl } from "@/lib/whatsapp";
import { Reveal } from "./Reveal";

const cards = ["Avaliação completa", "Atendimento humanizado", "Cuidado para toda a família"];

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden border-b border-gray-100 bg-[linear-gradient(135deg,#ffffff_0%,#fbfdfc_48%,#f5faf8_100%)] pt-28">
      <div className="pointer-events-none absolute left-[-14rem] top-16 hidden h-[28rem] w-[28rem] rounded-full bg-[#0f6f61]/7 blur-3xl sm:block" />
      <div className="pointer-events-none absolute right-[-12rem] top-40 hidden h-[34rem] w-[34rem] rounded-full bg-[#c5a45f]/10 blur-3xl sm:block" />
      <div className="pointer-events-none absolute left-[48%] top-28 hidden h-56 w-80 rounded-[60%_40%_70%_30%] border border-white/80 bg-white/30 blur-sm sm:block" />
      <div className="mx-auto grid min-h-[calc(100svh-5rem)] w-full max-w-7xl items-center gap-20 px-5 py-24 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8 lg:py-36">
        <Reveal className="max-w-2xl">
          <span className="mb-7 inline-flex rounded-full border border-[#c5a45f]/25 bg-white/70 px-5 py-2.5 text-xs font-medium uppercase tracking-[0.26em] text-[#0f6f61] shadow-sm backdrop-blur-xl">
            Lavitali Osteopatia e Pilates
          </span>
          <h1 className="max-w-3xl text-5xl font-semibold leading-[1.06] text-[#123d46] sm:text-6xl lg:text-7xl">
            Recupere seus movimentos, alivie suas dores e viva com mais qualidade de vida.
          </h1>
          <p className="mt-9 max-w-xl text-lg font-medium leading-9 text-[#5d7378]">
            A Lavitali une Osteopatia, Pilates e atendimento humanizado para tratar a causa do problema e proporcionar mais equilíbrio, mobilidade e bem-estar.
          </p>
          <div className="mt-12 flex flex-col gap-3 sm:flex-row">
            <a href={whatsappUrl} target="_blank" rel="noreferrer" className={cn(buttonVariants({ variant: "petroleum" }), "px-8")}>
              <MessageCircle size={18} />
              Agendar avaliação pelo WhatsApp
            </a>
            <a href="#quem-somos" className={cn(buttonVariants({ variant: "outline" }), "px-8")}>
              Conhecer a clínica
              <MoveRight size={18} />
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.12} className="relative">
          <div className="pointer-events-none absolute -inset-8 hidden rounded-[3rem] bg-[#123d46]/10 blur-3xl sm:block" />
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-white/80 bg-white shadow-xl shadow-[#123d46]/14 sm:aspect-[5/4] lg:aspect-[4/5]">
            <Image src="/images/mariana-mendes-hero.jpeg" alt="Mariana Mendes da Lavitali Osteopatia e Pilates segurando livro de osteopatia" fill priority sizes="(min-width: 1024px) 52vw, 100vw" className="scale-[1.015] object-cover transition duration-[1200ms] ease-out" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#123d46]/26 via-transparent to-white/8" />
          </div>
          <div className="absolute -bottom-6 left-4 right-4 grid gap-3 sm:left-8 sm:right-8 md:grid-cols-3">
            {cards.map((card) => (
              <div key={card} className="flex items-center gap-3 rounded-3xl border border-white/80 bg-white/72 p-4 text-sm font-medium text-[#123d46] shadow-sm backdrop-blur-xl transition duration-[400ms] ease-out hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#123d46]/12">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/85 text-[#0f6f61] shadow-sm">
                  <CheckCircle2 size={18} />
                </span>
                {card}
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
