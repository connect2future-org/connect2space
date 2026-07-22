import { motion } from "framer-motion";
import wing from "../../assets/images/logo-wing.png";

const isTouch = typeof window !== 'undefined' && ('ontouchstart' in window || navigator.maxTouchPoints > 0);

// Fewer wings – 12 on desktop, 6 on mobile
const wingCount = isTouch ? 6 : 12;
const sparkleCount = isTouch ? 15 : 30; // also reduced sparkles slightly

const wings = Array.from({ length: wingCount }, (_, i) => ({
  x: `${Math.random() * 90 + 5}%`,
  y: `${Math.random() * 90 + 5}%`,
  size: Math.floor(Math.random() * 60 + 30),
  delay: Math.random() * 8,
}));

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-transparent" />

      {/* Soft glows – reduced blur on mobile */}
      <motion.div
        className={`absolute -top-40 -left-40 w-[700px] h-[700px] rounded-full blur-[${isTouch ? '60px' : '140px'}]`}
        style={{
          background:
            "radial-gradient(circle, rgba(217, 70, 239, 0.15) 0%, transparent 70%)",
        }}
        animate={{
          x: [0, 60, -30, 0],
          y: [0, 40, -20, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className={`absolute bottom-0 right-0 w-[650px] h-[650px] rounded-full blur-[${isTouch ? '70px' : '150px'}]`}
        style={{
          background:
            "radial-gradient(circle, rgba(168, 85, 247, 0.12) 0%, transparent 70%)",
        }}
        animate={{
          x: [0, -70, 30, 0],
          y: [0, -50, 20, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Wings – reduced count */}
      {wings.map((w, i) => (
        <motion.img
          key={i}
          src={wing}
          className={`absolute ${isTouch ? 'opacity-20' : 'opacity-40'}`}
          style={{
            left: w.x,
            top: w.y,
            width: w.size,
            filter: isTouch
              ? "brightness(0.8) saturate(1.2) drop-shadow(0 0 15px rgba(128,0,255,0.25))"
              : "brightness(0.7) saturate(1.3) drop-shadow(0 0 25px rgba(128,0,255,0.4))",
          }}
          animate={{
            y: [0, -30, 0],
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            duration: 10 + Math.random() * 5,
            delay: w.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Sparkles – slightly reduced */}
      {[...Array(sparkleCount)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: 3 + Math.random() * 3,
            height: 3 + Math.random() * 3,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            background: "#A855F7",
            opacity: isTouch ? 0.4 : 0.7,
          }}
          animate={{
            opacity: [0.2, 0.8, 0.2],
            scale: [1, 2.5, 1],
          }}
          transition={{
            duration: 4 + Math.random() * 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Bottom Mesh Wave */}
      <svg
        className="absolute bottom-0 w-full"
        height={isTouch ? 120 : 260}
        preserveAspectRatio="none"
        viewBox="0 0 1440 260"
      >
        <path
          fill={`rgba(217, 70, 239, ${isTouch ? '0.04' : '0.08'})`}
          d="M0,160 C260,60 480,240 720,140 C960,40 1180,260 1440,120 L1440,260 L0,260 Z"
        />
        <path
          fill={`rgba(168, 85, 247, ${isTouch ? '0.03' : '0.06'})`}
          d="M0,120 C220,240 480,40 720,180 C960,320 1180,80 1440,180 L1440,260 L0,260 Z"
        />
      </svg>
    </div>
  );
}