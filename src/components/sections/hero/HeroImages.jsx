import { motion } from "framer-motion";
import studioBanner from "../../../assets/images/studio_banner.png"; // adjust extension if needed

const HeroImages = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="hero-image relative flex justify-center items-center w-full"
    >
      {/* Background glow */}
      <div className="absolute w-[400px] h-[400px] rounded-full blur-[120px] bg-fuchsia-500/20 -z-10" />

      {/* Main Image – with floating animation */}
      <motion.div
        animate={{
          y: [0, -8, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 5,
          ease: "easeInOut",
        }}
        whileHover={{
          y: -10,
          scale: 1.02,
          boxShadow: "0 20px 60px rgba(184, 77, 255, 0.4)",
        }}
        className="image-box glass p-2 w-full max-w-[440px] rounded-[28px] shadow-pink transition-all duration-300"
      >
        <img
          src={studioBanner}
          alt="Connect2Space Studio"
          className="w-full h-auto object-cover rounded-[24px]"
        />
      </motion.div>

      {/* Floating Card 1 – Trusted by 500+ */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 4, delay: 0.5 }}
        className="absolute top-8 -right-4 lg:-right-8 glass px-4 py-3 rounded-2xl shadow-soft"
      >
        <p className="text-xs text-slate-300">Trusted by</p>
        <h3 className="text-lg font-bold mt-0.5">500+</h3>
        <p className="text-xs text-slate-400">Creators & Startups</p>
      </motion.div>

      {/* Floating Card 2 – Premium Workspace Experience */}
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ repeat: Infinity, duration: 6, delay: 1 }}
        className="absolute bottom-16 right-0 glass rounded-2xl px-4 py-3"
      >
        <h3 className="text-base font-bold">Premium</h3>
        <p className="text-xs mt-0.5">Workspace Experience</p>
      </motion.div>
    </motion.div>
  );
};

export default HeroImages;