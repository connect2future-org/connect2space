import { useEffect, useRef } from "react";

const MouseSpotlight = () => {
  const spotlightRef = useRef(null);

  useEffect(() => {
    const onMouseMove = (e) => {
      if (spotlightRef.current) {
        spotlightRef.current.style.left = e.clientX + "px";
        spotlightRef.current.style.top = e.clientY + "px";
      }
    };

    document.addEventListener("mousemove", onMouseMove);
    return () => document.removeEventListener("mousemove", onMouseMove);
  }, []);

  return (
    <div
      ref={spotlightRef}
      className="mouse-spotlight fixed pointer-events-none z-0 w-[600px] h-[600px] rounded-full bg-gradient-to-r from-pink-500/5 via-purple-500/5 to-cyan-500/5 blur-3xl transform -translate-x-1/2 -translate-y-1/2"
    />
  );
};

export default MouseSpotlight;