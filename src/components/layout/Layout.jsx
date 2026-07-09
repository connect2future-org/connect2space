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
import { motion } from "framer-motion";

const Layout = ({ children }) => {
  const glowRef = useMouseGlow();

  return (
    <div className="bg-background text-text min-h-screen font-body antialiased relative overflow-x-hidden">
      {/* Background Orbs */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <motion.div
          className="absolute top-[10%] left-[5%] w-[600px] h-[600px] rounded-full bg-pink-500/25 blur-[140px]"
          animate={{ x: [0, 30, -20, 0], y: [0, -20, 10, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-[10%] right-[5%] w-[700px] h-[700px] rounded-full bg-purple-600/20 blur-[160px]"
          animate={{ x: [0, -40, 20, 0], y: [0, 30, -10, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-[40%] left-[60%] w-[500px] h-[500px] rounded-full bg-cyan-500/15 blur-[120px]"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Background layers */}
      <div className="background-vignette" />
      <BackgroundGrid />
      

      {/* Mouse glow */}
      <div
        ref={glowRef}
        className="fixed pointer-events-none z-40 w-[500px] h-[500px] rounded-full bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-cyan-500/10 blur-3xl mix-blend-screen transform -translate-x-1/2 -translate-y-1/2 transition-opacity duration-300 opacity-0 hover:opacity-100"
        style={{ opacity: 0.4 }}
      />

      <PageLoader />
      <CursorGlow />
      <ScrollProgress />
      <MouseSpotlight />

      <Navbar />
      <main>{children}</main>
      <Footer />

      {/* Floating Dock – contains WhatsApp, Instagram, Call, Mail */}
      <FloatingDock />

      {/* Back to Top button – scroll-to-top arrow */}
      <BackToTop />
    </div>
  );
};

export default Layout;