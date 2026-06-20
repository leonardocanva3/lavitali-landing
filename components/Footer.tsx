import Image from "next/image";
import Link from "next/link";
import { Phone } from "lucide-react";
import { FaInstagram } from "react-icons/fa";
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

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#123d46] text-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-6 md:grid-cols-[1.2fr_0.8fr_1fr] lg:px-8">
        <div>
          <Image src="/images/lavitali-logo.png" alt="Lavitali Osteopatia e Pilates" width={104} height={104} className="h-24 w-24 rounded-full bg-white object-contain p-1.5 shadow-[0_18px_48px_rgba(0,0,0,0.16)]" />
          <p className="mt-6 max-w-sm text-xs font-medium leading-7 text-white/62">Lavitali Osteopatia e Pilates<br />Mariana Mendes</p>
        </div>
        <nav className="flex flex-col gap-3 border-white/10 md:border-l md:pl-10" aria-label="Links do rodapé">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="text-xs font-medium uppercase tracking-[0.18em] text-white/62 transition duration-300 hover:text-white">
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="space-y-3 border-white/10 text-xs font-medium leading-6 text-white/62 md:border-l md:pl-10">
          <a href={whatsappUrl} target="_blank" rel="noreferrer" className="flex items-center gap-3 transition hover:text-white">
            <Phone size={17} />
            WhatsApp (48) 99623-8779
          </a>
          <a href="https://www.instagram.com/lavitali.osteopatiaepilates/" target="_blank" rel="noreferrer" className="flex items-center gap-3 transition hover:text-white">
            <FaInstagram size={17} />
            @lavitali.osteopatiaepilates
          </a>
          <p>Florianópolis, SC</p>
        </div>
      </div>
      <div className="border-t border-white/10 px-5 py-6 text-center text-[11px] font-medium uppercase tracking-[0.2em] text-white/42">
        © {new Date().getFullYear()} Lavitali Osteopatia e Pilates. Todos os direitos reservados.
      </div>
    </footer>
  );
}
