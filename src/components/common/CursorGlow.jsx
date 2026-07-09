import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const CursorGlow = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    const onMouseMove = (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = e.clientX + "px";
        cursorRef.current.style.top = e.clientY + "px";
      }
    };

    document.addEventListener("mousemove", onMouseMove);
    return () => document.removeEventListener("mousemove", onMouseMove);
  }, []);

  return (
    <div
      ref={cursorRef}
      className="cursor-glow fixed pointer-events-none z-50 w-8 h-8 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 blur-lg opacity-70 mix-blend-screen transform -translate-x-1/2 -translate-y-1/2"
    />
  );
};

export default CursorGlow;