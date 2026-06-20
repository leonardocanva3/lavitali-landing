import { Baby, HeartPulse, MessageCircle, PersonStanding, ShieldCheck, Sparkles } from "lucide-react";
import { buttonVariants, cn } from "@/lib/utils";
import { whatsappUrl } from "@/lib/whatsapp";
import { Reveal } from "./Reveal";

const trustItems = [
  { icon: HeartPulse, label: "Osteopatia" },
  { icon: PersonStanding, label: "Pilates" },
  { icon: Sparkles, label: "Laserterapia" },
  { icon: ShieldCheck, label: "Adultos" },
  { icon: HeartPulse, label: "Gestantes" },
  { icon: Baby, label: "Crianças" },
];

export default function TrustBlock() {
  return (
    <section className="border-b border-gray-100 bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <Reveal>
          <div className="relative grid gap-8 overflow-hidden rounded-3xl border border-gray-100 bg-white p-6 shadow-sm md:grid-cols-[0.95fr_1.05fr] md:p-10">
            <div className="pointer-events-none absolute -right-16 -top-16 hidden h-56 w-56 rounded-full bg-[#0f6f61]/6 blur-3xl sm:block" />
            <div>
              <span className="text-sm font-medium uppercase tracking-[0.26em] text-[#0f6f61]">Confiança no cuidado</span>
              <h2 className="mt-5 text-3xl font-semibold leading-[1.14] text-[#123d46] sm:text-4xl">
                Avaliação completa para entender a causa, não apenas o sintoma.
              </h2>
              <p className="mt-5 text-base font-medium leading-8 text-[#64787d]">
                Atendimento humanizado, integrado e indicado para diferentes fases da vida, com plano de cuidado individual e orientação clara desde o primeiro contato.
              </p>
              <a href={whatsappUrl} target="_blank" rel="noreferrer" className={cn(buttonVariants({ variant: "primary" }), "mt-8")}>
                <MessageCircle size={18} />
                Agendar avaliação pelo WhatsApp
              </a>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {trustItems.map(({ icon: Icon, label }) => (
                <div key={label} className="rounded-3xl border border-gray-100 bg-white p-5 text-center shadow-sm transition duration-[400ms] ease-out hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#123d46]/10">
                  <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#f5faf8] text-[#0f6f61] shadow-sm">
                    <Icon size={22} />
                  </span>
                  <span className="mt-4 block text-sm font-medium text-[#123d46]">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
