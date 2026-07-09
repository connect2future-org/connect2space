import navLinks from "./NavLinks";
import { motion } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";
import { scrollToSection } from "../../../utils/scroll";

const DesktopMenu = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const sectionId = href.replace('#', '');
    scrollToSection(sectionId, navigate, location.pathname);
  };

  return (
    <ul className="hidden lg:flex items-center gap-8">
      {navLinks.map((item) => (
        <li key={item.name} className="relative group">
          <button
            onClick={(e) => handleNavClick(e, item.href)}
            className="text-sm font-medium tracking-wide text-slate-300 hover:text-white transition-all duration-300"
          >
            {item.name}
          </button>
          <motion.span
            layoutId="underline"
            className="absolute left-0 -bottom-1 h-[2px] w-0 bg-gradient-to-r from-fuchsia-500 to-sky-400 group-hover:w-full duration-300"
          />
        </li>
      ))}
    </ul>
  );
};

export default DesktopMenu;