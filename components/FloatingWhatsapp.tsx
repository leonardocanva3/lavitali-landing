import { FaWhatsapp } from "react-icons/fa";
import { whatsappUrl } from "@/lib/whatsapp";

export default function FloatingWhatsapp() {
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#0f6f61] text-white shadow-[0_16px_42px_rgba(15,111,97,0.28)] transition duration-300 ease-out hover:scale-[1.04] hover:bg-[#0b5d52] hover:shadow-[0_22px_54px_rgba(15,111,97,0.34)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0f6f61]"
      aria-label="Agendar avaliação pelo WhatsApp"
    >
      <FaWhatsapp size={27} />
    </a>
  );
}
