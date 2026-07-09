import { FaWhatsapp, FaInstagram, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { WHATSAPP_URL, PHONE_LINK } from "../../utils/contact";

const FloatingDock = () => {
  return (
    <div className="fixed bottom-20 md:bottom-24 right-4 md:right-6 z-50 flex flex-col gap-2 md:gap-3">
      {/* WhatsApp */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 p-2.5 md:p-3 rounded-full shadow-lg hover:scale-110 transition-all duration-300 hover:shadow-green-500/50"
        aria-label="WhatsApp"
      >
        <FaWhatsapp className="text-white text-xl md:text-2xl" />
      </a>

      {/* Instagram */}
      <a
        href="https://www.instagram.com/the_c2f_?igsh=MWpvMDF4anE5bnA3eQ=="
        target="_blank"
        rel="noopener noreferrer"
        className="bg-gradient-to-tr from-purple-600 to-pink-500 p-2.5 md:p-3 rounded-full shadow-lg hover:scale-110 transition-all duration-300 hover:shadow-pink-500/50"
        aria-label="Instagram"
      >
        <FaInstagram className="text-white text-xl md:text-2xl" />
      </a>

      {/* Call */}
      <a
        href={PHONE_LINK}
        className="bg-blue-500 p-2.5 md:p-3 rounded-full shadow-lg hover:scale-110 transition-all duration-300 hover:shadow-blue-500/50"
        aria-label="Call"
      >
        <FaPhoneAlt className="text-white text-xl md:text-2xl" />
      </a>

      {/* Email */}
      <a
        href="mailto:hr@connect2future.com"
        className="bg-cyan-500 p-2.5 md:p-3 rounded-full shadow-lg hover:scale-110 transition-all duration-300 hover:shadow-cyan-500/50"
        aria-label="Email"
      >
        <FaEnvelope className="text-white text-xl md:text-2xl" />
      </a>
    </div>
  );
};

export default FloatingDock;