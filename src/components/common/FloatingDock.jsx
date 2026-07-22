import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaWhatsapp,
  FaInstagram,
  FaPhoneAlt,
  FaEnvelope,
  FaComment,
  FaTimes,
} from "react-icons/fa";
import { WHATSAPP_URL, PHONE_LINK } from "../../utils/contact";

const FloatingDock = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    const newState = !isOpen;
    setIsOpen(newState);
    if (newState) {
      document.body.classList.add("fab-open");
    } else {
      document.body.classList.remove("fab-open");
    }
  };

  const closeMenu = () => {
    setIsOpen(false);
    document.body.classList.remove("fab-open");
  };

  // --- DESKTOP / TABLET: original floating circular icons (hidden on mobile) ---
  const DesktopIcons = () => (
    <div className="hidden md:flex flex-col gap-3 fixed bottom-24 right-6 z-50">
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 p-3 rounded-full shadow-lg hover:scale-110 transition-all duration-300 hover:shadow-green-500/50"
        aria-label="WhatsApp"
      >
        <FaWhatsapp className="text-white text-2xl" />
      </a>
      <a
        href="https://www.instagram.com/the_c2f_?igsh=MWpvMDF4anE5bnA3eQ=="
        target="_blank"
        rel="noopener noreferrer"
        className="bg-gradient-to-tr from-purple-600 to-pink-500 p-3 rounded-full shadow-lg hover:scale-110 transition-all duration-300 hover:shadow-pink-500/50"
        aria-label="Instagram"
      >
        <FaInstagram className="text-white text-2xl" />
      </a>
      <a
        href={PHONE_LINK}
        className="bg-blue-500 p-3 rounded-full shadow-lg hover:scale-110 transition-all duration-300 hover:shadow-blue-500/50"
        aria-label="Call"
      >
        <FaPhoneAlt className="text-white text-2xl" />
      </a>
      <a
        href="mailto:hr@connect2future.com"
        className="bg-cyan-500 p-3 rounded-full shadow-lg hover:scale-110 transition-all duration-300 hover:shadow-cyan-500/50"
        aria-label="Email"
      >
        <FaEnvelope className="text-white text-2xl" />
      </a>
    </div>
  );

  // --- MOBILE ONLY: expandable Floating Action Button ---
  const MobileFab = () => (
    <div className="md:hidden fixed z-50 flex flex-col items-end" style={{ bottom: '24px', right: '16px' }}>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            transition={{ duration: 0.2 }}
            className="mb-3 glass rounded-2xl p-3 shadow-xl backdrop-blur-xl border border-white/10 flex flex-col gap-2 min-w-[140px]"
          >
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className="flex items-center gap-3 text-sm font-medium text-slate-300 hover:text-white transition-colors px-3 py-2 rounded-lg hover:bg-white/5"
            >
              <FaWhatsapp className="text-green-400 text-lg" />
              WhatsApp
            </a>
            <a
              href="https://www.instagram.com/the_c2f_?igsh=MWpvMDF4anE5bnA3eQ=="
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className="flex items-center gap-3 text-sm font-medium text-slate-300 hover:text-white transition-colors px-3 py-2 rounded-lg hover:bg-white/5"
            >
              <FaInstagram className="text-pink-400 text-lg" />
              Instagram
            </a>
            <a
              href={PHONE_LINK}
              onClick={closeMenu}
              className="flex items-center gap-3 text-sm font-medium text-slate-300 hover:text-white transition-colors px-3 py-2 rounded-lg hover:bg-white/5"
            >
              <FaPhoneAlt className="text-blue-400 text-lg" />
              Call
            </a>
            <a
              href="mailto:hr@connect2future.com"
              onClick={closeMenu}
              className="flex items-center gap-3 text-sm font-medium text-slate-300 hover:text-white transition-colors px-3 py-2 rounded-lg hover:bg-white/5"
            >
              <FaEnvelope className="text-cyan-400 text-lg" />
              Email
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={toggleMenu}
        className="glass p-3 rounded-full shadow-lg hover:scale-110 transition-all duration-300 border border-white/10 backdrop-blur-xl"
        aria-label="Contact"
      >
        {isOpen ? (
          <FaTimes className="text-white text-2xl" />
        ) : (
          <FaComment className="text-primary text-2xl" />
        )}
      </button>
    </div>
  );

  return (
    <>
      <DesktopIcons />
      <MobileFab />
    </>
  );
};

export default FloatingDock;