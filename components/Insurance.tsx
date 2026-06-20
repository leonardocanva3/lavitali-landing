import { Reveal } from "./Reveal";

const insurances = ["Osteopatia", "Pilates", "Laserterapia", "Adultos", "Gestantes", "Crianças", "Dor lombar", "Dor cervical"];

export default function Insurance() {
  return (
    <section className="border-b border-gray-100 bg-[#f8fbfa] py-20 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <Reveal className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="text-sm font-medium uppercase tracking-[0.26em] text-[#0f6f61]">Cuidado Lavitali</span>
            <h2 className="mt-6 text-4xl font-semibold leading-[1.14] text-[#123d46] sm:text-5xl">Foco em dor, movimento e qualidade de vida.</h2>
          </div>
          <p className="max-w-md text-sm font-medium leading-7 text-[#64787d]">A Lavitali Osteopatia e Pilates combina avaliação, técnica e acolhimento para orientar o melhor cuidado.</p>
        </Reveal>

        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {insurances.map((name, index) => (
            <Reveal key={name} delay={index * 0.025}>
              <div className="flex h-28 items-center justify-center rounded-3xl border border-gray-100 bg-white px-4 text-center text-sm font-medium uppercase tracking-[0.16em] text-[#123d46]/42 grayscale transition duration-[400ms] ease-out hover:-translate-y-2 hover:border-gray-100 hover:text-[#0f6f61] hover:shadow-2xl hover:shadow-[#123d46]/10 hover:grayscale-0">
                {name}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
