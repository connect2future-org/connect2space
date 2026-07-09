import { motion } from "framer-motion";

const GlowCard = ({
  children,
  className = "",
  hover = true,
}) => {
  return (
    <motion.div
      whileHover={
        hover
          ? {
              y: -8,
              scale: 1.02,
            }
          : {}
      }
      transition={{
        duration: 0.35,
        ease: "easeOut",
      }}
      className={`group relative overflow-hidden rounded-[30px]
      border border-white/10
      bg-white/[0.04]
      backdrop-blur-2xl
      shadow-[0_8px_32px_rgba(0,0,0,.25)]
      ${className}`}
    >
      {/* Glow */}

      <div
        className="absolute inset-0 opacity-0
        group-hover:opacity-100
        duration-700
        bg-gradient-to-br
        from-fuchsia-500/20
        via-purple-500/10
        to-sky-400/20"
      />

      {/* Reflection */}

      <div
        className="
        absolute
        -left-40
        top-0
        h-full
        w-32
        rotate-12
        bg-white/10
        blur-xl
        opacity-0
        group-hover:translate-x-[500px]
        group-hover:opacity-100
        duration-1000"
      />

      <div className="relative z-10">

        {children}

      </div>

    </motion.div>
  );
};

export default GlowCard;