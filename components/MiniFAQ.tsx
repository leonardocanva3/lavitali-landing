"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, MessageCircle } from "lucide-react";
import { useState } from "react";
import { buttonVariants, cn } from "@/lib/utils";
import { whatsappUrl } from "@/lib/whatsapp";
import { Reveal } from "./Reveal";

const faqs = [
  {
    question: "A avaliação é indicada mesmo sem diagnóstico fechado?",
    answer: "Sim. A avaliação completa ajuda a entender sintomas, histórico, mobilidade e possíveis sobrecargas para orientar o cuidado com mais clareza.",
  },
  {
    question: "A Lavitali atende gestantes e crianças?",
    answer: "Sim. O atendimento é individualizado e adaptado para adultos, gestantes e crianças, sempre com escuta e segurança.",
  },
  {
    question: "Como faço para agendar?",
    answer: "O caminho mais rápido é pelo WhatsApp. A Lavitali recebe sua mensagem, entende sua necessidade e orienta os próximos horários disponíveis.",
  },
];

export default function MiniFAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section className="border-b border-gray-100 bg-[#f8fbfa] py-20 sm:py-32">
      <div className="mx-auto max-w-5xl px-5 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-medium uppercase tracking-[0.26em] text-[#0f6f61]">Dúvidas rápidas</span>
          <h2 className="mt-6 text-4xl font-semibold leading-[1.14] text-[#123d46] sm:text-5xl">
            Antes de agendar sua avaliação
          </h2>
        </Reveal>

        <motion.div
          className="mt-12 space-y-4"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-96px" }}
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.07,
              },
            },
          }}
        >
          {faqs.map((faq, index) => {
            const isOpen = open === index;

            return (
              <motion.article
                key={faq.question}
                variants={{
                  hidden: { opacity: 0, y: 22, scale: 0.985 },
                  show: { opacity: 1, y: 0, scale: 1 },
                }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm transition duration-[400ms] ease-out hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#123d46]/10"
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? -1 : index)}
                  className="flex w-full items-center justify-between gap-5 p-7 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-inset focus-visible:outline-[#0f6f61]"
                  aria-expanded={isOpen}
                >
                  <span className="text-lg font-semibold leading-snug text-[#123d46]">{faq.question}</span>
                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#f5faf8] text-[#0f6f61] shadow-sm"
                    aria-hidden="true"
                  >
                    <ChevronDown size={20} />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <p className="px-7 pb-7 text-sm font-medium leading-7 text-[#64787d]">{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.article>
            );
          })}
        </motion.div>

        <Reveal className="mt-10 flex justify-center">
          <a href={whatsappUrl} target="_blank" rel="noreferrer" className={cn(buttonVariants({ variant: "primary" }), "px-8")}>
            <MessageCircle size={18} />
            Agendar avaliação pelo WhatsApp
          </a>
        </Reveal>
      </div>
    </section>
  );
}
