import { useEffect, useState } from "react";

const MouseSpotlight = () => {

  const [mouse, setMouse] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {

    const move = (e) => {

      setMouse({
        x: e.clientX,
        y: e.clientY,
      });

    };

    window.addEventListener("mousemove", move);

    return () =>
      window.removeEventListener("mousemove", move);

  }, []);

  return (

    <div

      className="pointer-events-none fixed inset-0 z-0"

      style={{
        background: `radial-gradient(circle 350px at ${mouse.x}px ${mouse.y}px,
        rgba(217,70,239,.10),
        transparent 70%)`,
      }}

    />

  );

};

export default MouseSpotlight;