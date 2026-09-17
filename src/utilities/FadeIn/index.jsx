import { useEffect, useRef } from "react";

export default function FadeIn({ children, delay = 0, y = 26, className = "", once = true, direction = "left", ...props }) {
  const ref = useRef(null);
  const cls = direction === "right" ? "reveal--slide-right" : direction === "scale" ? "reveal--scale" : "reveal";

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.classList.add("in-view");
            if (once) io.unobserve(el);
          } else if (!once) {
            el.classList.remove("in-view");
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [once]);

  return (
    <div ref={ref} className={`${cls}${className ? ` ${className}` : ""}`} style={{ transitionDelay: `${delay}ms`, "--reveal-y": `${y}px` }} {...props}>
      {children}
    </div>
  );
}
