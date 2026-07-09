import navLinks from "./NavLinks";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";
import { scrollToSection } from "../../../utils/scroll";

const MobileMenu = ({ open, setOpen }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setOpen(false);
    const sectionId = href.replace('#', '');
    scrollToSection(sectionId, navigate, location.pathname);
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ duration: 0.4 }}
          className="fixed inset-0 bg-[#0F071C]/95 backdrop-blur-xl z-[9999] lg:hidden"
        >
          <div className="flex flex-col justify-center items-center h-full gap-10">
            {navLinks.map((item) => (
              <button
                key={item.name}
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-3xl font-bold text-white hover:text-fuchsia-400 transition"
              >
                {item.name}
              </button>
            ))}
            <button
              onClick={() => {
                setOpen(false);
                scrollToSection('contact', navigate, location.pathname);
              }}
              className="btn btn-primary text-lg px-10 py-4 rounded-full"
            >
              Book a Tour
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;