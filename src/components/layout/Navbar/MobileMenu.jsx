import { motion, AnimatePresence } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";
import { scrollToSection } from "../../../utils/scroll";
import navLinks from "./NavLinks";
import { useActiveSection } from "../../../hooks/useActiveSection";
import { useEffect, useRef } from "react";

const MobileMenu = ({ open, setOpen }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const activeSection = useActiveSection();
  const menuRef = useRef(null);

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open, setOpen]);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setOpen(false);
    const sectionId = href.replace("#", "");
    scrollToSection(sectionId, navigate, location.pathname);
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          ref={menuRef}
          initial={{ opacity: 0, y: -10, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -10, scale: 0.95 }}
          transition={{ duration: 0.2 }}
          className="absolute top-full right-0 mt-2 z-[9999] w-56 rounded-2xl shadow-2xl border border-white/10 overflow-hidden"
          style={{
            background: 'rgba(20, 8, 40, 0.92)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
          }}
        >
          {/* Colorful accent strip */}
          <div className="h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500" />

          <ul className="space-y-1 p-3">
            {navLinks.map((item) => {
              const isActive = activeSection === item.href.replace("#", "");
              return (
                <li key={item.name}>
                  <button
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
                      isActive
                        ? "bg-gradient-to-r from-pink-500/30 to-purple-500/30 text-white shadow-[inset_0_0_20px_rgba(217,70,239,0.2)] border border-white/10"
                        : "text-gray-300 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    {item.name}
                  </button>
                </li>
              );
            })}
          </ul>

          {/* CTA Button */}
          <div className="p-3 pt-0 border-t border-white/10">
            <button
              onClick={() => {
                setOpen(false);
                scrollToSection("contact", navigate, location.pathname);
              }}
              className="w-full py-2.5 rounded-xl bg-gradient-to-r from-pink-500 to-purple-500 text-white font-bold text-sm shadow-lg shadow-purple-500/20 hover:scale-105 transition-transform duration-300"
            >
              Book Your Space Now
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;