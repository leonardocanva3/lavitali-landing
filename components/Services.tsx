import { Baby, HeartPulse, PersonStanding, Sparkles, Waves } from "lucide-react";
import { Reveal } from "./Reveal";

const services = [
  { id: "osteopatia", icon: Waves, name: "Osteopatia", description: "Avaliação manual para tratar a causa da dor, melhorar mobilidade e restaurar equilíbrio corporal." },
  { id: "pilates", icon: PersonStanding, name: "Pilates", description: "Pilates terapêutico para força, postura, controle corporal e mais qualidade de movimento." },
  { id: "laserterapia", icon: Sparkles, name: "Laserterapia", description: "Recurso complementar para auxiliar no alívio de dores, recuperação tecidual e bem-estar." },
  { id: "adultos", icon: HeartPulse, name: "Adultos", description: "Cuidado individualizado para dores lombares, cervicais, enxaquecas, postura e mobilidade." },
  { id: "gestantes", icon: HeartPulse, name: "Gestantes", description: "Atendimento acolhedor para adaptações do corpo, dores e preparo para uma rotina mais confortável." },
  { id: "criancas", icon: Baby, name: "Crianças", description: "Acompanhamento cuidadoso para desenvolvimento, movimento e bem-estar infantil." },
];

export default function Services() {
  return (
    <section id="osteopatia" className="relative overflow-hidden border-b border-gray-100 bg-white py-20 sm:py-32">
      <div className="pointer-events-none absolute right-[-10rem] top-24 hidden h-80 w-80 rounded-full bg-[#0f6f61]/8 blur-3xl sm:block" />
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <Reveal className="max-w-3xl">
          <span className="text-sm font-medium uppercase tracking-[0.26em] text-[#0f6f61]">Osteopatia, Pilates e Laserterapia</span>
          <h2 className="mt-6 text-4xl font-semibold leading-[1.14] text-[#123d46] sm:text-5xl">
            Cuidado focado em movimento, alívio de dores e bem-estar.
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ id, icon: Icon, name, description }, index) => (
            <Reveal key={name} delay={index * 0.03}>
              <article id={id} className="group h-full scroll-mt-28 rounded-3xl border border-gray-100 bg-white p-8 shadow-sm transition duration-[400ms] ease-out hover:-translate-y-2 hover:border-gray-100 hover:shadow-2xl hover:shadow-[#123d46]/10">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#edf7f3] text-[#0f6f61] shadow-sm transition duration-[400ms] group-hover:scale-105 group-hover:bg-[#123d46] group-hover:text-white">
                  <Icon size={30} />
                </div>
                <h3 className="mt-8 text-xl font-semibold text-[#123d46]">{name}</h3>
                <p className="mt-4 text-sm font-medium leading-7 text-[#64787d]">{description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
