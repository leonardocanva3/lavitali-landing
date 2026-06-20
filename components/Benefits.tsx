import Image from "next/image";
import { CalendarClock, HeartHandshake, MapPin, Medal, PanelsTopLeft } from "lucide-react";
import { Reveal } from "./Reveal";

const benefits = [
  { icon: HeartHandshake, title: "Atendimento Humanizado", text: "Escuta ativa e planos de cuidado alinhados ao momento de cada paciente." },
  { icon: Medal, title: "Mariana Mendes", text: "Atendimento conduzido com técnica, escuta e olhar individual para cada paciente." },
  { icon: PanelsTopLeft, title: "Estrutura Moderna", text: "Ambientes claros, organizados e preparados para Osteopatia, Pilates e Laserterapia." },
  { icon: MapPin, title: "Localização Fácil", text: "Acesso prático em Florianópolis, em espaço pensado para conforto." },
  { icon: CalendarClock, title: "Cuidado Personalizado", text: "Avaliação e plano de cuidado ajustados à sua rotina, dor e objetivo." },
];

export default function Benefits() {
  return (
    <section id="estrutura" className="scroll-mt-28 border-b border-gray-100 bg-white py-20 sm:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-5 sm:px-6 lg:grid-cols-2 lg:px-8">
        <Reveal className="order-2 lg:order-1">
          <span className="text-sm font-medium uppercase tracking-[0.26em] text-[#0f6f61]">Diferenciais</span>
          <h2 className="mt-6 text-4xl font-semibold leading-[1.14] text-[#123d46] sm:text-5xl">
            Estrutura acolhedora para cuidar do seu movimento.
          </h2>
          <div className="mt-12 space-y-4">
            {benefits.map(({ icon: Icon, title, text }) => (
              <div key={title} className="flex gap-5 rounded-3xl border border-gray-100 bg-white p-6 shadow-sm transition duration-[400ms] ease-out hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#123d46]/10">
                <span className="flex h-[3.25rem] w-[3.25rem] shrink-0 items-center justify-center rounded-full bg-[#f1f8f5] text-[#0f6f61] shadow-sm">
                  <Icon size={22} />
                </span>
                <div>
                  <h3 className="font-semibold text-[#123d46]">{title}</h3>
                  <p className="mt-2 text-sm font-medium leading-7 text-[#64787d]">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.1} className="order-1 lg:order-2">
          <div className="grid gap-5 sm:grid-cols-[0.9fr_1.1fr]">
            <div className="relative aspect-[3/4] overflow-hidden rounded-3xl border border-gray-100 bg-[#eef5f3] shadow-xl shadow-[#123d46]/8">
              <Image src="/images/atendimento.jpeg" alt="Atendimento humanizado em osteopatia" fill sizes="(min-width: 1024px) 24vw, 50vw" className="object-cover" />
            </div>
            <div className="relative mt-10 aspect-[3/4] overflow-hidden rounded-3xl border border-gray-100 bg-[#eef5f3] shadow-xl shadow-[#123d46]/8 sm:mt-20">
              <Image src="/images/estrutura-pilates.jpeg" alt="Equipamento moderno de pilates na Lavitali" fill sizes="(min-width: 1024px) 28vw, 50vw" className="object-cover" />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
