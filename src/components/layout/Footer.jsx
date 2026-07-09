import { FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { WHATSAPP_URL } from "../../utils/contact";
import logo from "../../assets/images/logo.png";

const Footer = () => {
  return (
    <footer className="border-t border-white/10 mt-12 pt-8 pb-4 bg-black/20 backdrop-blur-sm">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Brand */}
          <div className="space-y-2">
            <img
              src={logo}
              alt="Connect2Space"
              className="h-20 md:h-24 w-auto object-contain"
            />
            <p className="text-xs text-muted max-w-xs">
              Premium Creative Workspace, Podcast Studio, Meeting Rooms and Event Space.
            </p>
            <div className="flex gap-3 text-lg text-muted">
              <a
                href="https://www.instagram.com/the_c2f_?igsh=MWpvMDF4anE5bnA3eQ=="
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-fuchsia-400 transition-colors duration-300 hover:scale-110 hover:drop-shadow-[0_0_8px_rgba(217,70,239,0.5)]"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.linkedin.com/company/connect2future/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-fuchsia-400 transition-colors duration-300 hover:scale-110 hover:drop-shadow-[0_0_8px_rgba(217,70,239,0.5)]"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-fuchsia-400 transition-colors duration-300 hover:scale-110 hover:drop-shadow-[0_0_8px_rgba(217,70,239,0.5)]"
                aria-label="WhatsApp"
              >
                <FaWhatsapp />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-2 text-xs uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-1 text-xs text-muted">
              <li>
                <a href="/#home" className="hover:text-fuchsia-400 transition-colors duration-300">
                  Home
                </a>
              </li>
              <li>
                <a href="/#workspace" className="hover:text-fuchsia-400 transition-colors duration-300">
                  Workspace
                </a>
              </li>
              <li>
                <a href="/#services" className="hover:text-fuchsia-400 transition-colors duration-300">
                  Services
                </a>
              </li>
              <li>
                <a href="/#about" className="hover:text-fuchsia-400 transition-colors duration-300">
                  About
                </a>
              </li>
              <li>
                <a href="/#gallery" className="hover:text-fuchsia-400 transition-colors duration-300">
                  Gallery
                </a>
              </li>
              <li>
                <a href="/#pricing" className="hover:text-fuchsia-400 transition-colors duration-300">
                  Pricing
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold mb-2 text-xs uppercase tracking-wider">Services</h4>
            <ul className="space-y-1 text-xs text-muted">
              <li>
                <a href="/services/1" className="hover:text-fuchsia-400 transition-colors duration-300">
                  Podcast Studio
                </a>
              </li>
              <li>
                <a href="/services/2" className="hover:text-fuchsia-400 transition-colors duration-300">
                  Co-Working Space
                </a>
              </li>
              <li>
                <a href="/services/3" className="hover:text-fuchsia-400 transition-colors duration-300">
                  Video Production
                </a>
              </li>
              <li>
                <a href="/services/4" className="hover:text-fuchsia-400 transition-colors duration-300">
                  Photography Studio
                </a>
              </li>
              <li>
                <a href="/services/5" className="hover:text-fuchsia-400 transition-colors duration-300">
                  Meeting Room
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-6 pt-4 text-center text-muted text-xs">
          © {new Date().getFullYear()} Connect2Space. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;