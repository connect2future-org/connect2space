import HeroContent from "./HeroContent";
import HeroImages from "./HeroImages";
import HeroBackground from "./HeroBackground";
import ScrollIndicator from "./ScrollIndicator";
import { motion } from "framer-motion";
import mascots from "../../../assets/images/mascots.png";

const Hero = () => {
  return (
    <section id="home" className="hero pt-[120px] lg:pt-[140px] pb-10">
      <HeroBackground />
      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <HeroContent />
          <HeroImages />
        </div>

        {/* Decorative mascot – just below navbar on the left of the banner */}
        <div className="hidden lg:block absolute left-[42%] top-[10px] z-[2] pointer-events-none">
          <motion.img
            src={mascots}
            alt="Connect2Space Mascots"
            className="w-[220px] h-auto object-contain"
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </div>
      <ScrollIndicator />
    </section>
  );
};

export default Hero;