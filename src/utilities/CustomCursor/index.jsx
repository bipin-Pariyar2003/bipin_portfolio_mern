import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;

    let x = 0, y = 0, rx = 0, ry = 0, raf;

    const onMove = (e) => {
      x = e.clientX; y = e.clientY;
    };

    const onOver = (e) => {
      const hit = e.target.closest("a, button, input, textarea, label, [data-cursor], .neon-tag, .glass-card");
      document.body.classList.toggle("cursor-hover", Boolean(hit));
    };

    const tick = () => {
      rx += (x - rx) * 0.16;
      ry += (y - ry) * 0.16;
      if (dotRef.current) dotRef.current.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
      if (ringRef.current) ringRef.current.style.transform = `translate3d(${rx}px, ${ry}px, 0) translate(-50%, -50%)`;
      raf = requestAnimationFrame(tick);
    };

    const down = () => document.body.classList.add("cursor-down");
    const up = () => document.body.classList.remove("cursor-down");

    document.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseover", onOver, { passive: true });
    document.addEventListener("mousedown", down);
    document.addEventListener("mouseup", up);
    tick();

    return () => {
      cancelAnimationFrame(raf);
      document.body.classList.remove("cursor-hover", "cursor-down");
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mousedown", down);
      document.removeEventListener("mouseup", up);
    };
  }, []);

  return (
    <>
      <div ref={ringRef} className="cursor-ring" aria-hidden="true" />
      <div ref={dotRef} className="cursor-dot" aria-hidden="true" />
    </>
  );
}
