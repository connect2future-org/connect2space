import { motion } from "framer-motion";

const HeroBackground = ({ isTouch }) => {
  return (
    <>
      <div className="absolute inset-0 -z-30 bg-[#0F071C]" />
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.25, 0.4, 0.25] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className={`absolute -top-44 -left-36 w-[700px] h-[700px] rounded-full bg-[#D946EF]/20 blur-[${isTouch ? '80px' : '160px'}] -z-20`}
      />
      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.35, 0.2] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className={`absolute top-1/2 right-[-220px] w-[650px] h-[650px] rounded-full bg-[#A855F7]/20 blur-[${isTouch ? '80px' : '170px'}] -z-20`}
      />
      <motion.div
        animate={{ y: [0, -40, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className={`absolute bottom-[-250px] left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-[#38BDF8]/15 blur-[${isTouch ? '80px' : '170px'}] -z-20`}
      />
      <div className="absolute inset-0 opacity-[0.035] -z-10 pointer-events-none" style={{ backgroundImage: `linear-gradient(rgba(255,255,255,.12) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.12) 1px, transparent 1px)`, backgroundSize: "70px 70px" }} />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0F071C] -z-10" />
    </>
  );
};

export default HeroBackground;