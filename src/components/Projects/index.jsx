import { useRef, useState } from "react";
import { Box, Container, Grid, Typography, Chip, TextField } from "@mui/material";
import projects from "../../utilities/projects";
import Headings from "../../utilities/Headings";
import FadeIn from "../../utilities/FadeIn";

function ProjectCard({ project, index }) {
  const cardRef = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMove = (e) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: px * 5, y: -py * 5 });
    card.style.transition = "transform 0.05s linear";
    card.style.transform = `perspective(1000px) rotateY(${px * 5}deg) rotateX(${-py * 5}deg) translateY(-6px)`;
  };

  const reset = () => {
    const card = cardRef.current;
    if (!card) return;
    setTilt({ x: 0, y: 0 });
    card.style.transition = "transform 0.45s cubic-bezier(0.22, 1, 0.36, 1)";
    card.style.transform = "";
  };

  return (
    <FadeIn delay={index * 90} y={30}>
      <Box
        ref={cardRef}
        className="glass-card neon-border-glow"
        onMouseMove={handleMove}
        onMouseLeave={reset}
        data-cursor
        sx={{ height: "100%", display: "flex", flexDirection: "column", background: "rgba(18, 18, 26, 0.7)" }}
      >
        <Box className="stack" sx={{ position: "relative", borderRadius: "20px 20px 0 0", overflow: "hidden", borderBottom: "1px solid var(--border)" }}>
          <img src={project.image} alt={project.title} loading="lazy" style={{ width: "100%", aspectRatio: "16/10", objectFit: "cover", transition: "transform 0.6s ease" }} />
          <Box sx={{ position: "absolute", inset: 0, background: "linear-gradient(150deg, rgba(0, 229, 255, 0.15), rgba(18, 18, 26, 0.4) 70%)", transition: "opacity 0.5s ease" }} />
          <Chip
            label={project.tools[0]}
            sx={{
              position: "absolute", top: 14, left: 14, zIndex: 3,
              background: "rgba(0, 229, 255, 0.12)", color: "var(--cyan)",
              fontWeight: 700, fontSize: "0.72rem", fontFamily: "var(--font-mono)",
              border: "1px solid rgba(0, 229, 255, 0.3)",
              backdropFilter: "blur(6px)",
            }}
          />
        </Box>

        <Box sx={{ p: { xs: 3, md: 3.5 }, display: "flex", flexDirection: "column", flexGrow: 1 }}>
          <Typography variant="h3" sx={{ fontFamily: "var(--font-serif)", fontSize: { xs: "1.35rem", md: "1.5rem" }, color: "var(--espresso)", mb: 1.2, letterSpacing: "-0.01em" }}>
            {project.title}
          </Typography>
          <Typography sx={{ color: "var(--mocha)", fontSize: "0.95rem", lineHeight: 1.75, mb: 2.5, flexGrow: 1 }}>
            {project.description}
          </Typography>
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.8, mb: 3 }}>
            {project.tools.slice(1, 5).map((tool, ti) => (
              <span key={tool} className={`neon-tag neon-tag-${index % 3 === 0 ? "cyan" : index % 3 === 1 ? "violet" : "mint"}`} style={{ "--pop-delay": `${ti * 40}ms` }}>
                {tool}
              </span>
            ))}
            {project.tools.length - 1 > 4 && (
              <span className="neon-tag neon-tag--coral">+{project.tools.length - 5}</span>
            )}
          </Box>
          <a href={project.link !== "#" ? project.link : "#"} target={project.link !== "#" ? "_blank" : undefined} rel="noreferrer" className="ink-link" style={{ alignSelf: "flex-start", marginTop: "auto" }}>
            View project <span className="arrow">→</span>
          </a>
        </Box>
      </Box>
    </FadeIn>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState("all");

  const filtered = filter === "all" ? projects : projects.filter((p) =>
    p.tools.some((t) => t.toLowerCase().includes(filter.toLowerCase()))
  );

  const filters = ["all", "React", "Python", "MERN", "Java"];

  return (
    <Box component="section" id="projects" className="section">
      <Box sx={{ position: "absolute", inset: 0, zIndex: 0, pointerEvents: "none" }} aria-hidden="true">
        <div className="neon-blob neon-blob--mint" style={{ width: 380, height: 380, top: "-12%", right: "-6%", opacity: 0.4 }} />
        <div className="neon-blob neon-blob--violet" style={{ width: 340, height: 340, bottom: "-10%", left: "-6%", opacity: 0.35 }} />
      </Box>

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <FadeIn>
          <Headings kicker="a few things I've built">Projects</Headings>
        </FadeIn>

        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, justifyContent: "center", mb: 5 }}>
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`neon-tag ${filter === f ? "neon-tag--cyan" : "neon-tag--violet"}`}
              style={{ cursor: "pointer", border: filter === f ? "1px solid rgba(0, 229, 255, 0.4)" : undefined }}
            >
              {f === "all" ? "All" : f}
            </button>
          ))}
        </Box>

        <Grid container spacing={{ xs: 3.5, md: 4 }}>
          {filtered.map((project, idx) => (
            <Grid item xs={12} sm={6} lg={4} key={project.title} sx={{ display: "flex" }}>
              <ProjectCard project={project} index={idx} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
