import { useEffect, useRef, useState } from "react";
import { Box, Container, Typography, Tooltip } from "@mui/material";
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
        color: "var(--terracotta)",
        fontSize: { xs: "1rem", md: "1.1rem" },
        letterSpacing: "0.02em",
        lineHeight: 1.4,
        display: "inline-block",
        minHeight: "1.6rem",
      }}
    >
      {"// "}
      {text}
      <span className="type-caret" aria-hidden="true" />
    </Typography>
  );
}

export default function Home() {
  const [copied, setCopied] = useState(false);
  const blobRef = useRef(null);
  const parallaxRef = useParallax(0.14);

  useEffect(() => {
    const blobs = blobRef.current?.querySelectorAll(".blob");
    if (!blobs) return;
    let raf;
    const onScroll = () => {
      raf = requestAnimationFrame(() => {
        const { scrollY } = window;
        if (blobs[0]) blobs[0].style.transform = `translate3d(0, ${scrollY * 0.16}px, 0)`;
        if (blobs[1]) blobs[1].style.transform = `translate3d(0, ${scrollY * -0.1}px, 0)`;
        if (blobs[2]) blobs[2].style.transform = `translate3d(0, ${scrollY * 0.06}px, 0)`;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

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
        <div
          className="blob blob--terracotta"
          style={{ width: 440, height: 440, top: "-8%", right: "-6%", opacity: 0.5 }}
        />
        <div
          className="blob blob--sage"
          style={{ width: 400, height: 400, bottom: "-4%", left: "-8%", opacity: 0.42 }}
        />
        <div
          className="blob blob--peach"
          style={{ width: 320, height: 320, top: "34%", left: "36%", opacity: 0.4 }}
        />
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
          {/* left · copy */}
          <Box sx={{ textAlign: { xs: "center", md: "left" } }}>
            <Box
              sx={{
                display: "inline-flex",
                alignItems: "center",
                gap: 1.2,
                px: 1.6,
                py: 0.8,
                borderRadius: "999px",
                background: "rgba(18, 44, 35, 0.25)",
                border: "1px solid var(--taupe)",
                mb: 3.5,
              }}
            >
              <span className="script" style={{ color: "var(--espresso)" }}>
                status
              </span>
              <span
                className="script"
                style={{
                  color: "var(--sage)",
                  fontWeight: 800,
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                }}
              >
                <span
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    background: "var(--sage)",
                    boxShadow: "0 0 0 4px rgba(147,164,110,0.2)",
                  }}
                />
                open to work
              </span>
            </Box>

            <Typography
              variant="h1"
              sx={{
                fontFamily: "var(--font-serif)",
                fontWeight: 630,
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
                  color: "var(--terracotta)",
                  fontFamily: "var(--font-serif)",
                  fontSize: "inherit",
                  fontWeight: "inherit",
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
              >
                See my work
              </GradientButton>
              <a
                href="/Bipin_CV.pdf"
                download="Bipin_Resume.pdf"
                style={{ textDecoration: "none" }}
              >
                <GradientButton variant="outline" startIcon={<DownloadIcon />}>
                  Download CV
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
              <Tooltip title={copied ? "copied" : "click to copy"} arrow>
                <Box
                  onClick={handleCopy}
                  data-cursor
                  sx={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 1,
                    color: "var(--mocha)",
                    cursor: "pointer",
                    borderBottom: "1px dashed var(--taupe)",
                    pb: 0.3,
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.85rem",
                    "&:hover": { color: "var(--terracotta)" },
                    transition: "color 0.3s ease",
                  }}
                >
                  <MailOutlineIcon fontSize="small" sx={{ color: "var(--gold)" }} />
                  bipin.pariyar2002@gmail.com
                </Box>
              </Tooltip>
              <Box sx={{ display: "flex", gap: 1.6 }}>
                <a className="social-btn" href="https://github.com/bipin-Pariyar2003" target="_blank" rel="noreferrer" aria-label="GitHub">
                  <GitHubIcon sx={{ fontSize: 20 }} />
                </a>
                <a className="social-btn" href="https://www.linkedin.com/in/bipin-pariyar-767782208/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                  <LinkedInIcon sx={{ fontSize: 20 }} />
                </a>
              </Box>
            </Box>
          </Box>

          {/* right · holographic projection */}
          <Box
            ref={parallaxRef}
            className="holo-stage"
            sx={{
              position: "relative",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              px: { xs: 3, md: 0 },
            }}
          >
            <Box className="holo-glow" aria-hidden="true" />

            <Box className="holo holo-float" sx={{ "--rot": "-3deg" }}>
              <span className="holo-ring holo-ring--1" />
              <span className="holo-ring holo-ring--2" />
              <span className="holo-ring holo-ring--3" />
              <span className="holo-hud" />
              <Box className="holo-core">
                <span className="holo-label">BIPIN</span>
              </Box>
              <span className="holo-dot holo-dot--1" />
              <span className="holo-dot holo-dot--2" />
              <span className="holo-dot holo-dot--3" />
            </Box>

            <Box
              className="script holo-chip holo-chip--1"
              sx={{
                position: "absolute",
                top: { xs: "4%", md: "8%" },
                left: { xs: "2%", md: "-4%" },
              }}
            >
              // fullstack
            </Box>
            <Box
              className="script holo-chip holo-chip--2"
              sx={{
                position: "absolute",
                bottom: { xs: "2%", md: "6%" },
                right: { xs: "2%", md: "-2%" },
                color: "var(--espresso)",
                background: "var(--input-bg)",
                border: "1px solid var(--taupe)",
                borderRadius: "999px",
                px: 1.4,
                py: 0.6,
              }}
            >
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
              "&:hover": { color: "var(--terracotta)" },
              transition: "color 0.3s ease",
              cursor: "pointer",
            }}
          >
            scroll
            <ArrowDownwardIcon sx={{ animation: "bob 2s ease-in-out infinite", "--rot": "0deg", fontSize: 20 }} />
          </Box>
        </Box>
      </Container>
    </Box>
  );
}