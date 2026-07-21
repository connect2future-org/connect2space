import { FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { WHATSAPP_URL } from "../../utils/contact";
import logo from "../../assets/images/logo.png";
import pose1 from "../../assets/images/pose1.png";
import pose2 from "../../assets/images/pose2.png";

const Footer = () => {
  return (
    <>
      {/* Mobile-specific override to remove bottom whitespace */}
      <style>
        {`
          @media (max-width: 767px) {
            .footer-root,
            .footer-root .container,
            .footer-mobile-wrapper,
            .footer-mobile-wrapper > div:last-child {
              padding-bottom: 0 !important;
              margin-bottom: 0 !important;
              min-height: auto !important;
              height: auto !important;
            }
          }
        `}
      </style>

      <footer
        className="footer-root border-t border-white/10 mt-8 bg-black/20 backdrop-blur-sm overflow-visible"
        style={{ paddingBottom: 0, marginBottom: 0 }}
      >
        <div className="container overflow-visible" style={{ paddingBottom: 0, marginBottom: 0 }}>
          {/* ===== DESKTOP LAYOUT (hidden on mobile) ===== */}
          <div className="hidden md:block pt-6 pb-6 overflow-visible">
            <div className="grid grid-cols-5 gap-4 lg:gap-8 xl:gap-10 overflow-visible">
              {/* Column 1: Logo */}
              <div className="flex flex-col items-start gap-1 -mt-8 -ml-4 lg:-ml-8 overflow-visible">
                <img
                  src={logo}
                  alt="Connect2Space"
                  className="h-36 lg:h-44 w-auto object-contain overflow-visible"
                />
                <p className="text-xs text-muted leading-relaxed max-w-xs">
                  Premium Creative Workspace, Podcast Studio, Meeting Rooms and Event Space.
                </p>
                <div className="flex gap-3 text-lg text-muted">
                  <a
                    href="https://www.instagram.com/the_c2f_?igsh=MWpvMDF4anE5bnA3eQ=="
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors duration-300 hover:scale-110 hover:drop-shadow-[0_0_8px_rgba(217,70,239,0.5)]"
                    aria-label="Instagram"
                  >
                    <FaInstagram />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/connect2future/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors duration-300 hover:scale-110 hover:drop-shadow-[0_0_8px_rgba(217,70,239,0.5)]"
                    aria-label="LinkedIn"
                  >
                    <FaLinkedin />
                  </a>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors duration-300 hover:scale-110 hover:drop-shadow-[0_0_8px_rgba(217,70,239,0.5)]"
                    aria-label="WhatsApp"
                  >
                    <FaWhatsapp />
                  </a>
                </div>
              </div>

              {/* Column 2: Quick Links */}
              <div className="flex flex-col items-start gap-3 md:ml-12 md:mt-10">
                <h4 className="text-white font-bold text-xs uppercase tracking-wider">Quick Links</h4>
                <ul className="space-y-2 text-xs text-muted">
                  <li><a href="/#home" className="hover:text-primary transition-colors duration-300">Home</a></li>
                  <li><a href="/#workspace" className="hover:text-primary transition-colors duration-300">Workspace</a></li>
                  <li><a href="/#services" className="hover:text-primary transition-colors duration-300">Services</a></li>
                  <li><a href="/#about" className="hover:text-primary transition-colors duration-300">About</a></li>
                  <li><a href="/#gallery" className="hover:text-primary transition-colors duration-300">Gallery</a></li>
                  <li><a href="/#pricing" className="hover:text-primary transition-colors duration-300">Pricing</a></li>
                </ul>
              </div>

              {/* Column 3: Services */}
              <div className="flex flex-col items-start gap-3 md:ml-2 md:mt-10">
                <h4 className="text-white font-bold text-xs uppercase tracking-wider">Services</h4>
                <ul className="space-y-2 text-xs text-muted">
                  <li><a href="/services/1" className="hover:text-primary transition-colors duration-300">Podcast Studio</a></li>
                  <li><a href="/services/2" className="hover:text-primary transition-colors duration-300">Co-Working Space</a></li>
                  <li><a href="/services/3" className="hover:text-primary transition-colors duration-300">Video Production</a></li>
                  <li><a href="/services/4" className="hover:text-primary transition-colors duration-300">Photography Studio</a></li>
                  <li><a href="/services/5" className="hover:text-primary transition-colors duration-300">Meeting Room</a></li>
                </ul>
              </div>

              {/* Column 4: GET IN TOUCH */}
              <div className="flex flex-col items-start gap-3 md:ml--12 md:mt-10">
                <h4 className="text-white font-bold text-xs uppercase tracking-wider">Get In Touch</h4>
                <ul className="space-y-2 text-xs text-muted">
                  <li>
                    <a href="mailto:Support@connect2future.com" className="hover:text-primary transition-colors duration-300 flex items-center gap-2">
                      <span className="text-green-400">📧</span> Support@connect2future.com
                    </a>
                  </li>
                  <li>
                    <a href="mailto:hr@connect2future.com" className="hover:text-primary transition-colors duration-300 flex items-center gap-2">
                      <span className="text-green-400">📧</span> hr@connect2future.com
                    </a>
                  </li>
                  <li>
                    <a href="tel:+918088980347" className="hover:text-primary transition-colors duration-300 flex items-center gap-2">
                      <span className="text-blue-400">📞</span> +91 80889 80347
                    </a>
                  </li>
                  <li>
                    <a href="tel:+917019436720" className="hover:text-primary transition-colors duration-300 flex items-center gap-2">
                      <span className="text-blue-400">📞</span> +91 70194 36720
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.google.com/maps/search/?api=1&query=Connect2Future+Krishna+Building+Near+Nirmithi+Kendra+Bogadi+2nd+Stage+Mysuru+Karnataka+570006"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary transition-colors duration-300 flex items-center gap-2"
                    >
                      <span className="text-cyan-400">📍</span> Mysuru, Karnataka, India
                    </a>
                  </li>
                </ul>
              </div>

              {/* Column 5: Mascots */}
              <div className="flex flex-col items-start gap-2 overflow-visible -ml-4 lg:-ml-8">
                <div className="flex items-start gap-4 overflow-visible">
                  <img src={pose1} alt="Connect2Space Mascot" className="h-56 lg:h-64 w-auto object-contain" />
                  <img src={pose2} alt="Connect2Space Mascot" className="h-56 lg:h-64 w-auto object-contain -ml-14" />
                </div>
              </div>
            </div>

            {/* Copyright – Desktop */}
            <div className="border-t border-white/10 mt-4 pt-3 text-center text-muted text-xs">
              © {new Date().getFullYear()} Connect2Space. All Rights Reserved.
            </div>
          </div>

          {/* ===== MOBILE LAYOUT (hidden on desktop – whitespace removed) ===== */}
          <div
            className="footer-mobile-wrapper block md:hidden pt-2 pb-0"
            style={{ marginBottom: 0, paddingBottom: 0 }}
          >
            <div className="flex flex-col items-center text-center gap-0.5">
              <img src={logo} alt="Connect2Space" className="h-20 w-auto object-contain" />
              <p className="text-[10px] text-muted max-w-[220px] leading-tight">
                Premium Creative Workspace, Podcast Studio, Meeting Rooms and Event Space.
              </p>
              <div className="flex gap-3 text-base text-muted mt-0">
                <a href="https://www.instagram.com/the_c2f_?igsh=MWpvMDF4anE5bnA3eQ==" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors duration-300" aria-label="Instagram"><FaInstagram /></a>
                <a href="https://www.linkedin.com/company/connect2future/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors duration-300" aria-label="LinkedIn"><FaLinkedin /></a>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors duration-300" aria-label="WhatsApp"><FaWhatsapp /></a>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-3 text-center">
              <div className="flex flex-col items-center gap-1">
                <h4 className="text-white font-bold text-[10px] uppercase tracking-wider">Quick Links</h4>
                <ul className="space-y-1 text-[10px] text-muted">
                  <li><a href="/#home" className="hover:text-primary transition-colors duration-300">Home</a></li>
                  <li><a href="/#workspace" className="hover:text-primary transition-colors duration-300">Workspace</a></li>
                  <li><a href="/#services" className="hover:text-primary transition-colors duration-300">Services</a></li>
                  <li><a href="/#about" className="hover:text-primary transition-colors duration-300">About</a></li>
                  <li><a href="/#gallery" className="hover:text-primary transition-colors duration-300">Gallery</a></li>
                  <li><a href="/#pricing" className="hover:text-primary transition-colors duration-300">Pricing</a></li>
                </ul>
              </div>
              <div className="flex flex-col items-center gap-1">
                <h4 className="text-white font-bold text-[10px] uppercase tracking-wider">Services</h4>
                <ul className="space-y-1 text-[10px] text-muted">
                  <li><a href="/services/1" className="hover:text-primary transition-colors duration-300">Podcast Studio</a></li>
                  <li><a href="/services/2" className="hover:text-primary transition-colors duration-300">Co-Working Space</a></li>
                  <li><a href="/services/3" className="hover:text-primary transition-colors duration-300">Video Production</a></li>
                  <li><a href="/services/4" className="hover:text-primary transition-colors duration-300">Photography Studio</a></li>
                  <li><a href="/services/5" className="hover:text-primary transition-colors duration-300">Meeting Room</a></li>
                </ul>
              </div>
            </div>

            <div className="flex justify-center items-center gap-4 mt-3">
              <img src={pose1} alt="Connect2Space Mascot" className="h-24 w-auto object-contain" />
              <img src={pose2} alt="Connect2Space Mascot" className="h-24 w-auto object-contain" />
            </div>

            {/* Copyright – Mobile – no extra spacing below */}
            <div
              className="border-t border-white/10 mt-3 pt-2 text-center text-muted text-[10px]"
              style={{ marginBottom: 0, paddingBottom: 0 }}
            >
              © {new Date().getFullYear()} Connect2Space. All Rights Reserved.
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;