import Image from "next/image";
import { Activity, HeartPulse, ShieldCheck, Sparkles } from "lucide-react";
import { Reveal } from "./Reveal";

const items = [
  { icon: HeartPulse, title: "Equipe especializada" },
  { icon: Activity, title: "Atendimento integrado" },
  { icon: ShieldCheck, title: "Tecnologia" },
  { icon: Sparkles, title: "Conforto" },
];

export default function About() {
  return (
    <section id="quem-somos" className="border-b border-gray-100 bg-[#f8fbfa] py-20 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-16 px-5 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <Reveal className="relative">
          <div className="absolute -left-8 -top-8 hidden h-36 w-36 rounded-full bg-[#0f6f61]/8 blur-3xl sm:block" />
          <div className="aspect-[4/5] overflow-hidden rounded-3xl border border-gray-100 bg-[#eef5f3] shadow-xl shadow-[#123d46]/10">
            <Image src="/images/dra-mariana.jpeg" alt="Mariana Mendes na Lavitali Osteopatia e Pilates" fill={false} width={900} height={1350} sizes="(min-width: 1024px) 42vw, 100vw" className="h-full w-full object-cover" />
          </div>
        </Reveal>

        <Reveal delay={0.08} className="flex flex-col justify-center">
          <span className="text-sm font-medium uppercase tracking-[0.26em] text-[#0f6f61]">Quem Somos</span>
          <h2 className="mt-6 max-w-2xl text-4xl font-semibold leading-[1.14] text-[#123d46] sm:text-5xl">
            Mariana Mendes une técnica, escuta e cuidado para tratar dores e melhorar movimentos.
          </h2>
          <p className="mt-7 max-w-2xl text-lg font-medium leading-9 text-[#5d7378]">
            A Lavitali Osteopatia e Pilates oferece avaliação individualizada, atendimento humanizado e recursos como Osteopatia, Pilates e Laserterapia para adultos, gestantes e crianças.
          </p>
          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {items.map(({ icon: Icon, title }) => (
              <div key={title} className="flex items-center gap-4 rounded-3xl border border-gray-100 bg-white p-6 shadow-sm transition duration-[400ms] ease-out hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#123d46]/10">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#f2faf6] text-[#0f6f61] shadow-sm">
                  <Icon size={20} />
                </span>
                <span className="font-medium text-[#123d46]">{title}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
