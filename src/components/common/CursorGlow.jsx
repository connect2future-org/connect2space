import { useEffect, useRef, useState } from "react";

const CursorGlow = () => {
  const cursor = useRef(null);
  const ring = useRef(null);

  const mouse = useRef({
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
  });

  const pos = useRef({
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
  });

  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const isTouch =
      "ontouchstart" in window || navigator.maxTouchPoints > 0;

    if (isTouch) {
      setVisible(false);
      return;
    }

    const move = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    window.addEventListener("mousemove", move);

    let animationFrame;

    const animate = () => {
      pos.current.x += (mouse.current.x - pos.current.x) * 0.18;
      pos.current.y += (mouse.current.y - pos.current.y) * 0.18;

      if (cursor.current) {
        cursor.current.style.transform = `translate3d(${mouse.current.x}px, ${mouse.current.y}px,0)`;
      }

      if (ring.current) {
        ring.current.style.transform = `translate3d(${pos.current.x}px, ${pos.current.y}px,0)`;
      }

      animationFrame = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("mousemove", move);
    };
  }, []);

  if (!visible) return null;

  return (
    <>
      {/* Main Cursor */}

      <div
        ref={cursor}
        className="fixed left-0 top-0 z-[9999] pointer-events-none"
        style={{
          width: "14px",
          height: "14px",
          marginLeft: "-7px",
          marginTop: "-7px",
          borderRadius: "50%",
          background:
            "linear-gradient(135deg,#D946EF,#A855F7)",
          boxShadow:
            "0 0 20px rgba(217,70,239,.8),0 0 50px rgba(217,70,239,.5)",
          mixBlendMode: "screen",
        }}
      />

      {/* Outer Ring */}

      <div
        ref={ring}
        className="fixed left-0 top-0 z-[9998] pointer-events-none"
        style={{
          width: "70px",
          height: "70px",
          marginLeft: "-35px",
          marginTop: "-35px",
          borderRadius: "50%",
          border: "2px solid rgba(56,189,248,.45)",
          background:
            "radial-gradient(circle,rgba(217,70,239,.18),transparent 70%)",
          backdropFilter: "blur(2px)",
          transition: "border .3s",
        }}
      />
    </>
  );
};

export default CursorGlow;