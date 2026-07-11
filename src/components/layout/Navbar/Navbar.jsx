import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";
import logo from "../../../assets/images/logo.png";

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

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-[9999] transition-all duration-500 ${
          scrolled ? "py-1 md:py-2" : "py-2 md:py-3"
        }`}
      >
        <div className="container">
          <nav
            className={`
              glass
              rounded-full
              border border-white/10
              flex items-center justify-between
              px-4 md:px-6 lg:px-8
              h-[56px] md:h-[80px] lg:h-[90px]
              transition-all duration-500
              ${scrolled ? "shadow-[0_10px_30px_rgba(0,0,0,0.5)]" : "shadow-none"}
            `}
          >
            {/* Logo – smaller on mobile */}
            <Link to="/" className="flex items-center gap-2 md:gap-3 select-none">
              <img
                src={logo}
                alt="Connect2Space"
                className="h-9 md:h-16 lg:h-20 w-auto object-contain"
              />
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center">
              <DesktopMenu />
            </div>

            {/* Right CTA – Book Tour */}
            <div className="hidden lg:flex items-center gap-4">
              <Link
                to="/#contact"
                className="btn btn-primary text-sm px-6 py-2"
              >
                Book a Tour
              </Link>
            </div>

            {/* Mobile toggle – smaller on mobile */}
            <button
              onClick={() => setOpen(!open)}
              className="lg:hidden w-8 h-8 md:w-10 md:h-10 rounded-full glass flex items-center justify-center text-base md:text-lg transition duration-300 hover:scale-110"
            >
              {open ? <FaTimes /> : <FaBars />}
            </button>
          </nav>
        </div>
      </header>

      <MobileMenu open={open} setOpen={setOpen} />
    </>
  );
};

export default Navbar;