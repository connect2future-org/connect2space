import navLinks from "./NavLinks";
import { useNavigate, useLocation } from "react-router-dom";
import { useActiveSection } from "../../../hooks/useActiveSection";

const NAVBAR_OFFSET = 100;

const DesktopMenu = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const activeSection = useActiveSection();

  const scrollToTarget = (sectionId) => {
    const element = document.getElementById(sectionId);

    if (!element) {
      console.warn(`Navigation target #${sectionId} was not found.`);
      return;
    }

    const targetPosition =
      element.getBoundingClientRect().top +
      window.scrollY -
      NAVBAR_OFFSET;

    window.scrollTo({
      top: Math.max(0, targetPosition),
      behavior: "smooth",
    });
  };

  const handleNavClick = (e, href) => {
    e.preventDefault();

    const sectionId = href.replace("#", "");

    // Already on the homepage
    if (location.pathname === "/") {
      scrollToTarget(sectionId);
      return;
    }

    // Coming from another route/page
    navigate("/", { replace: false });

    // Wait for the homepage to render, then scroll
    let attempts = 0;

    const findAndScroll = () => {
      const element = document.getElementById(sectionId);

      if (element) {
        const targetPosition =
          element.getBoundingClientRect().top +
          window.scrollY -
          NAVBAR_OFFSET;

        window.scrollTo({
          top: Math.max(0, targetPosition),
          behavior: "smooth",
        });

        return;
      }

      attempts++;

      if (attempts < 30) {
        requestAnimationFrame(findAndScroll);
      } else {
        console.warn(
          `Navigation target #${sectionId} could not be found after route change.`
        );
      }
    };

    requestAnimationFrame(findAndScroll);
  };

  return (
    <ul className="hidden lg:flex items-center gap-8">
      {navLinks.map((item) => {
        const sectionId = item.href.replace("#", "");
        const isActive = activeSection === sectionId;

        return (
          <li key={item.name} className="relative group">
            <button
              type="button"
              onClick={(e) => handleNavClick(e, item.href)}
              className={`text-sm font-medium tracking-wide transition-all duration-300 relative ${
                isActive
                  ? "text-white drop-shadow-[0_0_8px_rgba(217,70,239,0.5)]"
                  : "text-slate-300 hover:text-white"
              }`}
            >
              {item.name}

              <span
                className={`absolute left-0 -bottom-1 h-[2px] transition-all duration-300 ${
                  isActive
                    ? "w-full bg-gradient-to-r from-fuchsia-500 to-sky-400"
                    : "w-0 bg-gradient-to-r from-fuchsia-500 to-sky-400 group-hover:w-full"
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