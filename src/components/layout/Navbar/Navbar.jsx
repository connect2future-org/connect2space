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
          scrolled ? "py-2" : "py-3"
        }`}
      >
        <div className="container">
          <nav
            className={`
              glass
              rounded-full
              border border-white/10
              flex items-center justify-between
              px-6 lg:px-8
              h-[80px] lg:h-[90px]
              transition-all duration-500
              ${scrolled ? "shadow-[0_10px_30px_rgba(0,0,0,0.5)]" : "shadow-none"}
            `}
          >
            <Link to="/" className="flex items-center gap-3 select-none">
              <img
                src={logo}
                alt="Connect2Space"
                className="h-[80px] md:h-[150px] w-auto object-contain"
              />
            </Link>

            <div className="hidden lg:flex items-center">
              <DesktopMenu />
            </div>

            <div className="hidden lg:flex items-center gap-4">
              <Link
                to="/#contact"
                className="btn btn-primary text-sm px-6 py-2"
              >
                Book your Space
              </Link>
            </div>

            <button
              onClick={() => setOpen(!open)}
              className="lg:hidden w-10 h-10 rounded-full glass flex items-center justify-center text-lg transition duration-300 hover:scale-110"
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