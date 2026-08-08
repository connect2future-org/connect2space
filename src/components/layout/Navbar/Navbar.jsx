import { useEffect, useState, useCallback } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useNavigate, useLocation, Link } from "react-router-dom";

import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";

import wingLogo from "../../../assets/images/logo1.png";
import textLogo from "../../../assets/images/logo2.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-[9999] transition-all duration-500 ${
          scrolled ? "py-1" : "py-1.5"
        }`}
      >
        <div className="w-full px-2 sm:px-3 md:px-4">
          <nav
            className={`
              glass
              rounded-full
              border border-white/10
              flex items-center justify-between
              px-4 sm:px-5 md:px-6
              h-[52px] sm:h-[58px] md:h-[68px] lg:h-[78px]
              transition-all duration-500
              ${scrolled ? "shadow-[0_10px_30px_rgba(0,0,0,0.45)]" : "shadow-none"}
              relative
            `}
          >
            {/* Logo */}
            <Link
              to="/"
              onClick={handleLogoClick}
              className="flex items-center flex-shrink-0 select-none overflow-visible"
            >
              <img
                src={wingLogo}
                alt="Connect2Space Wing"
                className="h-[42px] sm:h-[50px] md:h-[58px] lg:h-[66px] w-auto object-contain relative z-10"
              />
              <img
                src={textLogo}
                alt="Connect2Space"
                className="h-[54px] sm:h-[62px] md:h-[70px] lg:h-[78px] w-auto object-contain relative z-20 mt-[4px] sm:mt-[5px] md:mt-[6px] -translate-x-[12px] sm:-translate-x-[15px] md:-translate-x-[18px] lg:-translate-x-[27px]"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center">
              <DesktopMenu />
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center">
              <Link
                to="/#contact"
                className="btn btn-primary text-sm px-5 py-1.5"
              >
                Book Your Space Now
              </Link>
            </div>

            {/* Mobile Hamburger + Dropdown */}
            <div className="lg:hidden flex items-center relative">
              <button
                onClick={() => setOpen(!open)}
                className="w-8 h-8 md:w-9 md:h-9 rounded-full glass flex items-center justify-center text-base md:text-lg transition duration-300 hover:scale-110"
              >
                {open ? <FaTimes /> : <FaBars />}
              </button>

              {/* Dropdown menu – positioned absolutely below the button */}
              <MobileMenu open={open} setOpen={setOpen} />
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;