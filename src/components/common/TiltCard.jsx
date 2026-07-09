import { motion } from "framer-motion";
import { useState } from "react";

const TiltCard = ({ children, className = "" }) => {

  const [rotate, setRotate] = useState({
    x: 0,
    y: 0,
  });

  const handleMove = (e) => {

    const rect = e.currentTarget.getBoundingClientRect();

    const x = e.clientX - rect.left;

    const y = e.clientY - rect.top;

    const rotateY = ((x / rect.width) - .5) * 18;

    const rotateX = ((y / rect.height) - .5) * -18;

    setRotate({
      x: rotateX,
      y: rotateY,
    });

  };

  return (

    <motion.div

      onMouseMove={handleMove}

      onMouseLeave={() =>
        setRotate({
          x: 0,
          y: 0,
        })
      }

      animate={{
        rotateX: rotate.x,
        rotateY: rotate.y,
      }}

      transition={{
        type: "spring",
        stiffness: 250,
        damping: 20,
      }}

      style={{
        transformStyle: "preserve-3d",
      }}

      className={className}

    >

      {children}

    </motion.div>

  );

};

export default TiltCard;