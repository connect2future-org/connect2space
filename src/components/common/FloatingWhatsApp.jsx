import { FaWhatsapp } from "react-icons/fa";
import { WHATSAPP_URL } from "../../utils/contact";

const FloatingWhatsApp = () => {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-24 right-6 z-50 bg-green-500 p-4 rounded-full shadow-xl hover:scale-110 transition-all duration-300 hover:shadow-green-500/50"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp className="text-white text-3xl" />
    </a>
  );
};

export default FloatingWhatsApp;