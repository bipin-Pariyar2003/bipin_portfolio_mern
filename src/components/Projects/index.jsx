import { useRef, useState } from "react";
import { Box, Container, Grid, Typography, Chip, TextField } from "@mui/material";
import projects from "../../utilities/projects";
import Headings from "../../utilities/Headings";
import FadeIn from "../../utilities/FadeIn";

function ProjectCard({ project, index }) {
  const cardRef = useRef(null);

  const handleMove = (e) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    card.style.transition = "transform 0.08s ease-out";
    card.style.transform = `perspective(800px) rotateY(${px * 3}deg) rotateX(${-py * 3}deg) translateY(-4px)`;
  };

  const reset = () => {
    const card = cardRef.current;
    if (!card) return;
    card.style.transition = "transform 0.5s cubic-bezier(0.22, 1, 0.36, 1)";
    card.style.transform = "";
  };

  return (
    <FadeIn delay={index * 80} y={20}>
      <Box
        ref={cardRef}
        className="glass-card neon-border-glow"
        onMouseMove={handleMove}
        onMouseLeave={reset}
        data-cursor
        sx={{
          display: "flex",
          flexDirection: "column",
          background: "rgba(18, 18, 26, 0.65)",
          borderRadius: "16px",
          overflow: "hidden",
          cursor: "pointer",
          maxHeight: "520px",
        }}
      >
<Box sx={{ position: "relative", borderRadius: "16px 16px 0 0", overflow: "hidden", flexShrink: 0, maxHeight: "200px" }}>
           <img
             src={project.image}
             alt={project.title}
             loading="lazy"
             style={{
               width: "100%",
               aspectRatio: "16/9",
               objectFit: "cover",
               display: "block",
               transition: "transform 0.5s ease",
               maxHeight: "200px",
             }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.08)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          />
          <Box
            sx={{
              position: "absolute", inset: 0,
              background: "linear-gradient(to top, rgba(18,18,26,0.9) 0%, transparent 60%)",
              pointerEvents: "none",
            }}
          />
          <Chip
            label={project.tools[0]}
            sx={{
              position: "absolute", top: 10, left: 10, zIndex: 3,
              background: "rgba(0, 229, 255, 0.12)", color: "var(--cyan)",
              fontWeight: 700, fontSize: "0.65rem", fontFamily: "var(--font-mono)",
              border: "1px solid rgba(0, 229, 255, 0.3)",
              backdropFilter: "blur(8px)",
              px: 1.2, py: 0.5,
            }}
          />
        </Box>

        <Box sx={{ p: { xs: 1.5, md: 2 }, display: "flex", flexDirection: "column", flexGrow: 1, gap: 0.5 }}>
          <Typography
            variant="h3"
            sx={{
              fontFamily: "var(--font-serif)",
              fontSize: { xs: "0.9rem", md: "1rem" },
              color: "var(--espresso)",
              mb: 0.25,
              letterSpacing: "-0.01em",
              lineHeight: 1.2,
            }}
          >
            {project.title}
          </Typography>
          <Typography
            sx={{
              color: "var(--mocha)",
              fontSize: "0.72rem",
              lineHeight: 1.4,
              mb: 0.75,
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
            }}
          >
            {project.description}
          </Typography>
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.4, mb: 1 }}>
            {project.tools.slice(1, 4).map((tool, ti) => (
              <span key={tool} className={`neon-tag neon-tag-${index % 3 === 0 ? "cyan" : index % 3 === 1 ? "violet" : "mint"}`} style={{ fontSize: "0.58rem", py: 0.2, px: 0.5, "--pop-delay": `${ti * 40}ms` }}>
                {tool}
              </span>
            ))}
            {project.tools.length - 1 > 4 && (
              <span className="neon-tag neon-tag--coral" style={{ fontSize: "0.58rem", py: 0.2, px: 0.5 }}>+{project.tools.length - 4}</span>
            )}
          </Box>
          <a
            href={project.link !== "#" ? project.link : "#"}
            target={project.link !== "#" ? "_blank" : undefined}
            rel="noreferrer"
            className="ink-link"
            style={{ alignSelf: "flex-start", marginTop: "auto", fontSize: "0.75rem" }}
          >
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
        <div className="neon-blob neon-blob--mint" style={{ width: 380, height: 380, top: "-12%", right: "-6%", opacity: 0.35 }} />
        <div className="neon-blob neon-blob--violet" style={{ width: 340, height: 340, bottom: "-10%", left: "-6%", opacity: 0.3 }} />
      </Box>

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1, py: { xs: 1, md: 2 } }}>
        <FadeIn>
          <Headings kicker="a few things I've built">Projects</Headings>
        </FadeIn>

        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.8, justifyContent: "center", mb: 4 }}>
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`neon-tag ${filter === f ? "neon-tag--cyan" : "neon-tag--violet"}`}
              style={{
                cursor: "pointer",
                border: filter === f ? "1px solid rgba(0, 229, 255, 0.4)" : undefined,
                fontSize: "0.72rem",
                py: 0.4, px: 1,
                background: filter === f ? "rgba(0, 229, 255, 0.1)" : undefined,
              }}
            >
              {f === "all" ? "All" : f}
            </button>
          ))}
        </Box>

        <Grid container spacing={{ xs: 1.5, md: 2 }}>
          {filtered.map((project, idx) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={project.title} sx={{ display: "flex" }}>
              <ProjectCard project={project} index={idx} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
