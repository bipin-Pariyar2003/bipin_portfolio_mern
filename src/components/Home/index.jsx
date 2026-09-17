import { useEffect, useRef, useState } from "react";
import { Box, Container, Typography } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import GradientButton from "../../utilities/GradientButton";

const roles = [
  "full-stack engineer",
  "MERN stack builder",
  "react & node.js",
  "API & database glue",
];

function useParallax(speed = 0.12) {
  const ref = useRef(null);
  useEffect(() => {
    let raf;
    const onScroll = () => {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      if (rect.bottom < -200 || rect.top > window.innerHeight + 200) return;
      raf = requestAnimationFrame(() => {
        el.style.transform = `translate3d(0, ${rect.top * speed}px, 0)`;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [speed]);
  return ref;
}

function Typewriter() {
  const [text, setText] = useState("");
  const [index] = useState(0);

  useEffect(() => {
    let word = 0;
    let char = 0;
    let deleting = false;
    let timer;

    const loop = () => {
      const current = roles[word % roles.length];
      if (!deleting) {
        char += 1;
        setText(current.slice(0, char));
        if (char === current.length) {
          deleting = true;
          timer = setTimeout(loop, 2000);
          return;
        }
        timer = setTimeout(loop, 70);
      } else {
        char -= 1;
        setText(current.slice(0, char));
        if (char === 0) {
          deleting = false;
          word += 1;
          timer = setTimeout(loop, 350);
          return;
        }
        timer = setTimeout(loop, 34);
      }
    };

    loop();
    return () => clearTimeout(timer);
  }, [index]);

  return (
    <Typography
      component="span"
      sx={{
        fontFamily: "var(--font-mono)",
        color: "var(--cyan)",
        fontSize: { xs: "0.95rem", md: "1.1rem" },
        letterSpacing: "0.02em",
        lineHeight: 1.4,
        display: "inline-block",
        minHeight: "1.6rem",
        textShadow: "0 0 8px rgba(0, 229, 255, 0.4)",
      }}
    >
      {"// "}
      {text}
      <span className="type-caret" aria-hidden="true" />
    </Typography>
  );
}

function Particles() {
  const canvasRef = useRef(null);
  const rafRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let w = canvas.width;
    let h = canvas.height;
    const particles = [];
    const particleCount = 80;

    const resize = () => {
      const rect = canvas.parentElement?.getBoundingClientRect();
      if (!rect) return;
      w = canvas.width = rect.width;
      h = canvas.height = rect.height;
    };
    resize();
    window.addEventListener("resize", resize);

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 0.5,
        color: Math.random() > 0.5 ? "0, 229, 255" : "123, 97, 255",
      });
    }

    const onMouse = (e) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener("mousemove", onMouse);

    const draw = () => {
      ctx.clearRect(0, 0, w, h);

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;

        const dx = mouseRef.current.x - p.x;
        const dy = mouseRef.current.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 150) {
          p.x -= dx * 0.005;
          p.y -= dy * 0.005;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.color}, 0.6)`;
        ctx.shadowBlur = 8;
        ctx.shadowColor = `rgba(${p.color}, 0.8)`;
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(0, 229, 255, ${0.08 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      rafRef.current = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouse);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        zIndex: 1,
        pointerEvents: "none",
      }}
      aria-hidden="true"
    />
  );
}

export default function Home() {
  const [copied, setCopied] = useState(false);
  const blobRef = useRef(null);
  const parallaxRef = useParallax(0.14);

  const handleCopy = () => {
    navigator.clipboard.writeText("bipin.pariyar2002@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Box
      id="home"
      component="section"
      sx={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        pt: { xs: 16, md: 8 },
        pb: { xs: 9, md: 0 },
      }}
    >
      <Box
        ref={blobRef}
        sx={{ position: "absolute", inset: 0, zIndex: 0, pointerEvents: "none" }}
        aria-hidden="true"
      >
        <div className="neon-blob neon-blob--cyan" style={{ width: 500, height: 500, top: "-10%", right: "-8%", opacity: 0.5 }} />
        <div className="neon-blob neon-blob--violet" style={{ width: 450, height: 450, bottom: "-6%", left: "-8%", opacity: 0.4 }} />
        <div className="neon-blob neon-blob--mint" style={{ width: 350, height: 350, top: "34%", left: "36%", opacity: 0.3 }} />
      </Box>

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1.1fr 0.9fr" },
            gap: { xs: 7, md: 4 },
            alignItems: "center",
          }}
        >
          <Box sx={{ textAlign: { xs: "center", md: "left" } }}>
            <Box
              sx={{
                display: "inline-flex",
                alignItems: "center",
                gap: 1.2,
                px: 1.6,
                py: 0.8,
                borderRadius: "999px",
                background: "rgba(0, 229, 255, 0.06)",
                border: "1px solid rgba(0, 229, 255, 0.2)",
                mb: 3.5,
              }}
            >
              <span className="script" style={{ color: "var(--espresso)" }}>status</span>
              <span
                className="script"
                style={{
                  color: "var(--cyan)",
                  fontWeight: 800,
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                }}
              >
                <span className="scan-pulse" />
                open to work
              </span>
            </Box>

            <Typography
              variant="h1"
              sx={{
                fontFamily: "var(--font-serif)",
                fontWeight: 700,
                fontSize: { xs: "2.6rem", md: "4.2rem" },
                lineHeight: 1.05,
                color: "var(--espresso)",
                letterSpacing: "-0.02em",
                mb: 2.5,
              }}
            >
              Hi, I&apos;m{" "}
              <Typography
                component="span"
                sx={{
                  fontStyle: "italic",
                  color: "var(--cyan)",
                  fontFamily: "var(--font-serif)",
                  fontSize: "inherit",
                  fontWeight: "inherit",
                  textShadow: "0 0 20px rgba(0, 229, 255, 0.4)",
                }}
              >
                Bipin
              </Typography>
              <br />
              I build web apps that ship.*
              <Box
                component="span"
                sx={{
                  display: "block",
                  fontFamily: "var(--font-mono)",
                  fontStyle: "normal",
                  fontWeight: 400,
                  fontSize: { xs: "0.75rem", md: "0.85rem" },
                  color: "var(--mocha)",
                  letterSpacing: "0.02em",
                  mt: 1.5,
                  textTransform: "none",
                }}
              >
                *fast, reliable, and honestly a little warm.
              </Box>
            </Typography>

            <Box sx={{ mb: 3 }}>
              <Typewriter />
            </Box>

            <Typography
              sx={{
                color: "var(--mocha)",
                fontSize: { xs: "1rem", md: "1.08rem" },
                lineHeight: 1.75,
                maxWidth: 520,
                mb: 5,
                mx: { xs: "auto", md: 0 },
              }}
            >
              Full-stack engineer working across the MERN stack — API, database and
              interface — from first commit to deployment. I like the whole loop,
              and I sweat the details in between.
            </Typography>

            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: 2,
                justifyContent: { xs: "center", md: "flex-start" },
                alignItems: "center",
                mb: 4.5,
              }}
            >
              <GradientButton
                onClick={() => {
                  document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
                }}
                variant="neon"
              >
                See my work
              </GradientButton>
              <a
                href="/Bipin_CV.pdf"
                download="Bipin_Resume.pdf"
                style={{ textDecoration: "none" }}
              >
                <GradientButton variant="outline">
                  <DownloadIcon /> Download CV
                </GradientButton>
              </a>
            </Box>

            <Box
              sx={{
                display: "flex",
                gap: 2.5,
                justifyContent: { xs: "center", md: "flex-start" },
                alignItems: "center",
              }}
            >
              <Box
                onClick={handleCopy}
                data-cursor
                sx={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 1,
                  color: "var(--mocha)",
                  cursor: "pointer",
                  borderBottom: "1px dashed var(--border)",
                  pb: 0.3,
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.85rem",
                  "&:hover": { color: "var(--cyan)" },
                  transition: "color 0.3s ease",
                }}
              >
                <MailOutlineIcon fontSize="small" sx={{ color: "var(--violet)" }} />
                bipin.pariyar2002@gmail.com
              </Box>
              <Box sx={{ display: "flex", gap: 1.6 }}>
                <a className="neon-social" href="https://github.com/bipin-Pariyar2003" target="_blank" rel="noreferrer" aria-label="GitHub">
                  <GitHubIcon sx={{ fontSize: 20 }} />
                </a>
                <a className="neon-social" href="https://www.linkedin.com/in/bipin-pariyar-767782208/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                  <LinkedInIcon sx={{ fontSize: 20 }} />
                </a>
              </Box>
            </Box>
          </Box>

          <Box
            ref={parallaxRef}
            className="holo-stage"
            sx={{
              position: "relative",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              px: { xs: 3, md: 0 },
              minHeight: { xs: 340, md: 400 },
            }}
          >
            <Particles />

            <Box className="holo-glow" aria-hidden="true" />

            <Box className="holo holo-float" sx={{ "--rot": "-3deg" }}>
              <span className="holo-ring holo-ring--1" />
              <span className="holo-ring holo-ring--2" />
              <span className="holo-ring holo-ring--3" />
              <span className="holo-hud" />
              <Box className="holo-core" style={{ background: "radial-gradient(circle at 50% 45%, rgba(0, 229, 255, 0.8), rgba(123, 97, 255, 0.5) 55%, rgba(0, 229, 255, 0) 72%)", boxShadow: "0 0 44px rgba(0, 229, 255, 0.6), inset 0 0 32px rgba(0, 229, 255, 0.55)" }}>
                <span className="holo-label" style={{ color: "#0A0A0F" }}>BIPIN</span>
              </Box>
              <span className="holo-dot holo-dot--1" />
              <span className="holo-dot holo-dot--2" />
              <span className="holo-dot holo-dot--3" />
            </Box>

            <Box className="script holo-chip holo-chip--1" sx={{ position: "absolute", top: { xs: "4%", md: "8%" }, left: { xs: "2%", md: "-4%" }, color: "var(--cyan)", background: "var(--surface)", border: "1px solid var(--border)", borderRadius: "999px", px: 1.4, py: 0.6 }}>
              // fullstack
            </Box>
            <Box className="script holo-chip holo-chip--2" sx={{ position: "absolute", bottom: { xs: "2%", md: "6%" }, right: { xs: "2%", md: "-2%" }, color: "var(--espresso)", background: "var(--surface)", border: "1px solid var(--border)", borderRadius: "999px", px: 1.4, py: 0.6 }}>
              portfolio · v2
            </Box>
          </Box>
        </Box>

        <Box sx={{ display: { xs: "none", md: "flex" }, justifyContent: "center", mt: 7 }}>
          <Box
            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            data-cursor
            sx={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              gap: 0.6,
              color: "var(--mocha)",
              fontFamily: "var(--font-mono)",
              fontSize: "0.75rem",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              "&:hover": { color: "var(--cyan)" },
              transition: "color 0.3s ease",
              cursor: "pointer",
            }}
          >
            scroll
            <ArrowDownwardIcon sx={{ animation: "bob 2s ease-in-out infinite", fontSize: 20 }} />
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
