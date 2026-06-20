"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, MessageCircle, X } from "lucide-react";
import { useEffect, useState } from "react";
import { buttonVariants, cn } from "@/lib/utils";
import { whatsappUrl } from "@/lib/whatsapp";

const links = [
  { href: "#home", label: "Início" },
  { href: "#quem-somos", label: "Sobre" },
  { href: "#osteopatia", label: "Osteopatia" },
  { href: "#pilates", label: "Pilates" },
  { href: "#laserterapia", label: "Laserterapia" },
  { href: "#estrutura", label: "Estrutura" },
  { href: "#contato", label: "Contato" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const updateHeader = () => setScrolled(window.scrollY > 16);
    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });

    return () => window.removeEventListener("scroll", updateHeader);
  }, []);

  return (
    <header className={cn("fixed inset-x-0 top-0 z-50 border-b border-gray-100 bg-white/80 shadow-[0_1px_18px_rgba(18,61,70,0.04)] backdrop-blur-xl transition-all duration-300", scrolled && "bg-white/86 shadow-[0_8px_30px_rgba(18,61,70,0.06)]")}>
      <div className={cn("mx-auto flex w-full max-w-7xl items-center justify-between px-5 transition-all duration-300 sm:px-6 lg:px-8", scrolled ? "h-16" : "h-20")}>
        <Link href="#home" className="flex items-center gap-3" aria-label="Lavitali Osteopatia e Pilates">
          <Image src="/images/lavitali-logo.png" alt="Lavitali Osteopatia e Pilates" width={58} height={58} priority className={cn("object-contain transition-all duration-300", scrolled ? "h-10 w-10" : "h-12 w-12")} />
          <div className="leading-none">
            <span className="block text-lg font-medium tracking-[0.18em] text-[#123d46]">LAVITALI</span>
            <span className="mt-1 block text-[11px] font-medium uppercase tracking-[0.28em] text-[#0f6f61]">Osteopatia e Pilates</span>
          </div>
        </Link>

        <nav className="hidden items-center gap-7 xl:flex" aria-label="Menu principal">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm font-medium text-[#49656b] transition duration-300 hover:text-[#0f6f61]">
              {link.label}
            </Link>
          ))}
        </nav>

        <a href={whatsappUrl} target="_blank" rel="noreferrer" className={cn(buttonVariants({ variant: "primary" }), "hidden xl:inline-flex")}>
          <MessageCircle size={18} />
          Agendar avaliação pelo WhatsApp
        </a>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#123d46]/10 bg-white/60 text-[#123d46] shadow-sm transition duration-300 hover:scale-[1.02] xl:hidden"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <div className={cn("grid border-t border-gray-100 bg-white/92 shadow-sm backdrop-blur-xl transition-all duration-300 xl:hidden", open ? "grid-rows-[1fr]" : "grid-rows-[0fr]")}>
        <div className="overflow-hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-5" aria-label="Menu mobile">
            {links.map((link) => (
              <Link key={link.href} href={link.href} onClick={() => setOpen(false)} className="rounded-full px-4 py-3 text-sm font-medium text-[#49656b] transition hover:bg-[#f3f8f6]">
                {link.label}
              </Link>
            ))}
            <a href={whatsappUrl} target="_blank" rel="noreferrer" className={cn(buttonVariants({ variant: "primary" }), "mt-2")}>
              <MessageCircle size={18} />
              Agendar avaliação pelo WhatsApp
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
