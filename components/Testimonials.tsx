"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { useEffect, useState } from "react";
import { Reveal } from "./Reveal";

const testimonials = [
  { name: "Ana Paula", text: "A Mariana me acolheu desde a primeira avaliação. O plano foi claro, cuidadoso e muito humano." },
  { name: "Camila R.", text: "Ambiente impecável, atendimento pontual e profissionais que explicam cada etapa do tratamento." },
  { name: "Roberta M.", text: "Senti diferença na postura e nas dores em poucas sessões. O cuidado é realmente integrado." },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActive((current) => (current + 1) % testimonials.length);
    }, 4200);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <section className="border-b border-gray-100 bg-white py-20 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-medium uppercase tracking-[0.26em] text-[#0f6f61]">Depoimentos</span>
          <h2 className="mt-6 text-4xl font-semibold leading-[1.14] text-[#123d46] sm:text-5xl">Experiências que refletem confiança.</h2>
        </Reveal>

        <div className="relative mx-auto mt-16 max-w-5xl overflow-hidden rounded-3xl border border-gray-100 bg-white p-7 shadow-sm transition duration-[400ms] ease-out hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#123d46]/10 sm:p-12">
          <div className="pointer-events-none absolute right-8 top-4 text-8xl font-medium leading-none text-[#c5a45f]/18">“</div>
          <div className="grid items-center gap-10 md:grid-cols-[280px_1fr]">
            <div className="relative mx-auto h-44 w-44 overflow-hidden rounded-full border-8 border-[#f8fbfa] shadow-xl shadow-[#123d46]/12 md:h-60 md:w-60">
              <Image src="/images/depoimento.jpeg" alt="Mariana Mendes em atendimento na Lavitali Osteopatia e Pilates" fill sizes="240px" className="object-cover" />
            </div>
            <motion.div
              key={active}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="text-center md:text-left"
            >
              <div className="flex justify-center gap-1 text-[#c5a45f] md:justify-start">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} size={19} fill="currentColor" />
                ))}
              </div>
              <p className="mt-8 text-2xl font-medium leading-relaxed text-[#123d46] sm:text-3xl">“{testimonials[active].text}”</p>
              <p className="mt-7 text-sm font-medium uppercase tracking-[0.22em] text-[#0f6f61]">{testimonials[active].name}</p>
            </motion.div>
          </div>
          <div className="mt-8 flex justify-center gap-2">
            {testimonials.map((item, index) => (
              <button
                key={item.name}
                type="button"
                onClick={() => setActive(index)}
                className={`h-2.5 rounded-full transition-all ${active === index ? "w-8 bg-[#0f6f61]" : "w-2.5 bg-[#123d46]/20"}`}
                aria-label={`Ver depoimento de ${item.name}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
