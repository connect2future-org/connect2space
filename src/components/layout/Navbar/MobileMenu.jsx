import { motion, AnimatePresence } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";
import { scrollToSection } from "../../../utils/scroll";
import navLinks from "./NavLinks";

const MobileMenu = ({ open, setOpen }) => {
  const navigate = useNavigate();
  const location = useLocation();

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
          initial={{ opacity: 0, y: -10, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -10, scale: 0.95 }}
          transition={{ duration: 0.2 }}
          className="absolute top-[76px] right-4 z-[9999] w-[260px] glass rounded-2xl shadow-xl backdrop-blur-xl border border-white/10 p-4"
        >
          <ul className="space-y-3">
            {navLinks.map((item) => (
              <li key={item.name}>
                <button
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="w-full text-left text-sm font-medium text-slate-300 hover:text-white transition-colors duration-200 px-3 py-2 rounded-lg hover:bg-white/5"
                >
                  {item.name}
                </button>
              </li>
            ))}
            <li className="pt-2 border-t border-white/10">
              <button
                onClick={() => {
                  setOpen(false);
                  scrollToSection("contact", navigate, location.pathname);
                }}
                className="w-full btn btn-primary text-sm py-2 px-4 rounded-full"
              >
                Book a Tour
              </button>
            </li>
          </ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;