import { Activity, Baby, Brain, Footprints, HeartPulse, MessageCircle, MoveUpRight, PersonStanding, Waves, Zap } from "lucide-react";
import { buttonVariants, cn } from "@/lib/utils";
import { whatsappUrl } from "@/lib/whatsapp";
import { Reveal } from "./Reveal";

const conditions = [
  { icon: Waves, title: "Dor lombar", text: "Desconforto na região baixa das costas, com ou sem irradiação." },
  { icon: PersonStanding, title: "Dor cervical", text: "Rigidez, tensão e limitação de movimento no pescoço." },
  { icon: Brain, title: "Enxaqueca", text: "Crises recorrentes, tensão associada e impacto na rotina." },
  { icon: Zap, title: "Ciatalgia", text: "Dor irradiada, formigamento ou desconforto pelo trajeto do nervo." },
  { icon: Activity, title: "Postura", text: "Avaliação corporal para alinhamento, sobrecargas e hábitos." },
  { icon: Footprints, title: "Mobilidade", text: "Dificuldade para se movimentar, treinar ou realizar tarefas diárias." },
  { icon: HeartPulse, title: "Gestantes", text: "Cuidado acolhedor para dores, adaptações e preparo corporal." },
  { icon: Baby, title: "Crianças", text: "Acompanhamento cuidadoso para desenvolvimento e bem-estar." },
];

export default function WhenToSeek() {
  return (
    <section id="quando-procurar" className="relative overflow-hidden border-b border-gray-100 bg-[#f8fbfa] py-20 sm:py-32">
      <div className="pointer-events-none absolute left-[-8rem] top-24 hidden h-80 w-80 rounded-full bg-[#0f6f61]/8 blur-3xl sm:block" />
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-medium uppercase tracking-[0.26em] text-[#0f6f61]">Quando procurar a Lavitali?</span>
          <h2 className="mt-6 text-4xl font-semibold leading-[1.14] text-[#123d46] sm:text-5xl">
            Procure uma avaliação quando dor, postura ou mobilidade começam a limitar sua rotina.
          </h2>
          <p className="mt-6 text-base font-medium leading-8 text-[#64787d]">
            A avaliação completa ajuda a entender o quadro, orientar o cuidado e indicar o melhor caminho com segurança.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {conditions.map(({ icon: Icon, title, text }, index) => (
            <Reveal key={title} delay={index * 0.025}>
              <article className="group h-full rounded-3xl border border-gray-100 bg-white p-7 shadow-sm transition duration-[400ms] ease-out hover:-translate-y-2 hover:border-gray-100 hover:shadow-2xl hover:shadow-[#123d46]/10">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#edf7f3] text-[#0f6f61] shadow-sm transition duration-[400ms] group-hover:bg-[#123d46] group-hover:text-white">
                  <Icon size={26} />
                </div>
                <h3 className="mt-6 text-lg font-semibold text-[#123d46]">{title}</h3>
                <p className="mt-3 text-sm font-medium leading-7 text-[#64787d]">{text}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12 flex justify-center">
          <a href={whatsappUrl} target="_blank" rel="noreferrer" className={cn(buttonVariants({ variant: "petroleum" }), "px-8")}>
            <MessageCircle size={18} />
            Agendar avaliação pelo WhatsApp
            <MoveUpRight size={17} />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
