import React, { useEffect, useState } from "react";

export default function Cursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [trail, setTrail] = useState([]);
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    const move = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setTrail((prev) => [...prev, { x: e.clientX, y: e.clientY, opacity: 1 }]);
      if (trail.length > 12) {
        setTrail((prev) => prev.slice(prev.length - 12));
      }
    };
    const down = () => setClicked(true);
    const up = () => setClicked(false);

    document.addEventListener("mousemove", move);
    document.addEventListener("mousedown", down);
    document.addEventListener("mouseup", up);

    const interval = setInterval(() => {
      setTrail((prev) =>
        prev
          .map((dot) => ({ ...dot, opacity: dot.opacity - 0.04 }))
          .filter((dot) => dot.opacity > 0)
      );
    }, 20);

    return () => {
      document.removeEventListener("mousemove", move);
      document.removeEventListener("mousedown", down);
      document.removeEventListener("mouseup", up);
      clearInterval(interval);
    };
  }, [trail]);

  return (
    <>
      {trail.map((dot, idx) => (
        <div
          key={idx}
          style={{
            position: "fixed",
            top: dot.y,
            left: dot.x,
            width: 6,
            height: 6,
            transform: "translate(-50%, -50%)",
            borderRadius: "50%",
            pointerEvents: "none",
            background: `rgba(0, 229, 255, ${dot.opacity * 0.8})`,
            boxShadow: `0 0 4px rgba(0,229,255,${dot.opacity}), 0 0 8px rgba(0,229,255,${dot.opacity})`,
            zIndex: 9998,
            transition: "all 0.4s ease-out",
          }}
        />
      ))}
      <div
        style={{
          position: "fixed",
          top: position.y,
          left: position.x,
          width: clicked ? 24 : 14,
          height: clicked ? 24 : 14,
          transform: "translate(-50%, -50%)",
          borderRadius: "50%",
          pointerEvents: "none",
          border: "2px solid rgba(0, 229, 255, 0.9)",
          background: "rgba(0, 229, 255, 0.2)",
          transition: "width 0.5s ease, height 0.5s ease, background 0.5s",
          zIndex: 9999,
          mixBlendMode: "difference",
          boxShadow: "0 0 6px rgba(0,229,255,0.5), 0 0 12px rgba(0,229,255,0.3)",
        }}
      />
    </>
  );
}
