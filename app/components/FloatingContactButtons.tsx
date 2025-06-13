import { Phone } from "lucide-react";
import { WhatsappIcon } from "@/components/ui/WhatsappIcon";

export function FloatingContactButtons() {
  return (
    <>
      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/60142333436?text=Hi%2C%20I%20would%20like%20to%20know%20more%20about%20your%20trading%20academy."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed right-6 bottom-6 z-50 bg-green-600 hover:bg-green-700 text-white rounded-full shadow-lg w-14 h-14 flex items-center justify-center transition-colors duration-200"
        style={{ boxShadow: "0 4px 16px rgba(0,120,80,0.15)" }}
        aria-label="WhatsApp Bursa Trading Academy"
      >
        <WhatsappIcon className="w-7 h-7" />
      </a>
    </>
  );
}
