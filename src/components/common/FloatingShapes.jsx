import { motion } from 'framer-motion';

const FloatingShapes = () => {
  const shapes = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: 4 + Math.random() * 24,
    duration: 12 + Math.random() * 20,
    delay: Math.random() * 10,
    opacity: 0.04 + Math.random() * 0.12,
  }));

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {shapes.map((s) => (
        <motion.div
          key={s.id}
          className="absolute rounded-full bg-gradient-to-r from-primary via-secondary to-accent"
          style={{
            width: s.size,
            height: s.size,
            left: `${s.x}%`,
            top: `${s.y}%`,
            opacity: s.opacity,
          }}
          animate={{
            x: [0, 40, -30, 20, -10, 0],
            y: [0, -50, 30, -20, 40, 0],
            scale: [1, 1.3, 0.7, 1.1, 0.9, 1],
            rotate: [0, 90, -60, 120, -30, 0],
          }}
          transition={{
            duration: s.duration,
            delay: s.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
};

export default FloatingShapes;