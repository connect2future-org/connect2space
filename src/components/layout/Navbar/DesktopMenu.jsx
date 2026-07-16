import navLinks from "./NavLinks";
import { motion } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";
import { scrollToSection } from "../../../utils/scroll";
import { useActiveSection } from "../../../hooks/useActiveSection";

const DesktopMenu = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const activeSection = useActiveSection();

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const sectionId = href.replace('#', '');
    scrollToSection(sectionId, navigate, location.pathname);
  };

  return (
    <ul className="hidden lg:flex items-center gap-8">
      {navLinks.map((item) => {
        const isActive = activeSection === item.href.replace('#', '');
        return (
          <li key={item.name} className="relative group">
            <button
              onClick={(e) => handleNavClick(e, item.href)}
              className={`text-sm font-medium tracking-wide transition-all duration-300 relative ${
                isActive
                  ? 'text-white drop-shadow-[0_0_8px_rgba(217,70,239,0.5)]'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              {item.name}
              <span
                className={`absolute left-0 -bottom-1 h-[2px] transition-all duration-300 ${
                  isActive
                    ? 'w-full bg-gradient-to-r from-fuchsia-500 to-sky-400'
                    : 'w-0 bg-gradient-to-r from-fuchsia-500 to-sky-400 group-hover:w-full'
                }`}
              />
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default DesktopMenu;