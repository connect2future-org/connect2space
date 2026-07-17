import { useMouseGlow } from '../../hooks/useMouseGlow';
import Navbar from "./Navbar/Navbar";
import Footer from './Footer';
import BackgroundGrid from "../common/BackgroundGrid";
import MouseSpotlight from "../common/MouseSpotlight";
import FloatingDock from "../common/FloatingDock";
import CursorGlow from "../common/CursorGlow";
import ScrollProgress from "../common/ScrollProgress";
import PageLoader from "../common/PageLoader";
import BackToTop from "../common/BackToTop";
import CookieConsent from "../common/CookieConsent";
import InstallBanner from "../common/InstallBanner"; // 👈 new import
import { motion } from "framer-motion";

const Layout = ({ children }) => {
  const glowRef = useMouseGlow();

  return (
    <div className="bg-background text-text min-h-screen font-body antialiased relative overflow-x-hidden">
      {/* ... background orbs, etc. ... */}

      <PageLoader />
      <CursorGlow />
      <ScrollProgress />
      <MouseSpotlight />
      <FloatingDock />

      {/* Install banner at the very top */}
      <InstallBanner />

      <Navbar />
      <main>{children}</main>
      <Footer />

      <BackToTop />
      <CookieConsent />
    </div>
  );
};

export default Layout;