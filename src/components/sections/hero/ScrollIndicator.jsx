import { motion } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";

const ScrollIndicator = () => {
  return (
    <motion.a
      href="#about"
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        y: [0, 8, 0],
      }}
      transition={{
        delay: 1.4,
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="
        absolute

        bottom-10

        left-1/2

        -translate-x-1/2

        z-30

        flex
        flex-col

        items-center

        gap-3

        group
      "
    >
      <span
        className="
          text-xs

          uppercase

          tracking-[4px]

          text-slate-400

          transition-all

          duration-300

          group-hover:text-fuchsia-400
        "
      >
        Scroll
      </span>

      <div
        className="
          w-11

          h-16

          rounded-full

          border

          border-white/15

          glass

          flex

          justify-center

          pt-3

          transition-all

          duration-300

          group-hover:border-fuchsia-500/60
        "
      >
        <motion.div
          animate={{
            y: [0, 18, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 1.8,
          }}
        >
          <FaChevronDown className="text-fuchsia-400 text-sm" />
        </motion.div>
      </div>
    </motion.a>
  );
};

export default ScrollIndicator;