import { useRef } from "react";
import { Box, Container, Grid, Typography, Chip } from "@mui/material";
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
    card.style.transform = `perspective(950px) rotateY(${px * 6}deg) rotateX(${-py * 6}deg) translateY(-6px)`;
  };

  const reset = () => {
    const card = cardRef.current;
    if (card) card.style.transform = "";
  };

  return (
    <FadeIn delay={index * 90} y={30}>
      <Box
        ref={cardRef}
        className="card"
        onMouseMove={handleMove}
        onMouseLeave={reset}
        data-cursor
        sx={{ height: "100%", display: "flex", flexDirection: "column" }}
      >
        <Box className="stack">
          <img src={project.image} alt={project.title} loading="lazy" />
          <Chip
            label={project.tools[0]}
            sx={{
              position: "absolute",
              top: 14,
              left: 14,
              zIndex: 3,
              background: "rgba(20, 16, 11, 0.88)",
              color: "var(--espresso)",
              fontWeight: 700,
              fontSize: "0.75rem",
              fontFamily: "var(--font-mono)",
              border: "1px solid var(--taupe)",
              backdropFilter: "blur(4px)",
            }}
          />
        </Box>

        <Box sx={{ p: { xs: 3, md: 3.5 }, display: "flex", flexDirection: "column", flexGrow: 1 }}>
          <Typography
            variant="h3"
            sx={{
              fontFamily: "var(--font-serif)",
              fontSize: { xs: "1.35rem", md: "1.5rem" },
              color: "var(--espresso)",
              mb: 1.2,
              letterSpacing: "-0.01em",
            }}
          >
            {project.title}
          </Typography>

          <Typography
            sx={{
              color: "var(--mocha)",
              fontSize: "0.95rem",
              lineHeight: 1.75,
              mb: 2.5,
              flexGrow: 1,
            }}
          >
            {project.description}
          </Typography>

          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mb: 3 }}>
            {project.tools.slice(1, 5).map((tool) => (
              <span key={tool} className={`tag ${index % 2 === 0 ? "tag--sage" : "tag--gold"}`}>
                {tool}
              </span>
            ))}
          </Box>

          <a
            href={project.link !== "#" ? project.link : "#"}
            target={project.link !== "#" ? "_blank" : undefined}
            rel="noreferrer"
            className="ink-link"
            style={{ alignSelf: "flex-start", marginTop: "auto" }}
          >
            View project
            <span className="arrow">→</span>
          </a>
        </Box>
      </Box>
    </FadeIn>
  );
}

export default function Projects() {
  return (
    <Box component="section" id="projects" className="section">
      <Box
        sx={{ position: "absolute", inset: 0, zIndex: 0, pointerEvents: "none" }}
        aria-hidden="true"
      >
        <div
          className="blob blob--peach"
          style={{ width: 380, height: 380, top: "-12%", right: "-6%", opacity: 0.4 }}
        />
        <div
          className="blob blob--sage"
          style={{ width: 340, height: 340, bottom: "-10%", left: "-6%", opacity: 0.35 }}
        />
      </Box>

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <FadeIn>
          <Headings kicker="a few things I've built">Projects</Headings>
        </FadeIn>

        <Grid container spacing={{ xs: 3.5, md: 4 }}>
          {projects.map((project, idx) => (
            <Grid item xs={12} sm={6} lg={4} key={project.title} sx={{ display: "flex" }}>
              <ProjectCard project={project} index={idx} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}