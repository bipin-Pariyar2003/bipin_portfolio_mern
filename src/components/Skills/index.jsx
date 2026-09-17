import { Box, Container, Typography } from "@mui/material";
import Headings from "../../utilities/Headings";
import FadeIn from "../../utilities/FadeIn";

const skillGroups = [
  {
    label: "Core",
    accent: "cyan",
    skills: ["React", "Redux", "JavaScript", "Python", "Django", "Node.js", "Express", "MongoDB"],
  },
  {
    label: "Frontend craft",
    accent: "violet",
    skills: ["HTML", "CSS", "Tailwind", "Material-UI", "Bootstrap", "Vite", "Figma"],
  },
  {
    label: "Misc & tools",
    accent: "mint",
    skills: ["Git & GitHub", "REST APIs", "Konva", "EmailJS", "PWA", "Linux", "AI-integrated apps"],
  },
];

export default function Skills() {
  return (
    <Box component="section" id="skills" className="section">
      <Box sx={{ position: "absolute", inset: 0, zIndex: 0, pointerEvents: "none" }} aria-hidden="true">
        <div className="neon-blob neon-blob--mint" style={{ width: 400, height: 400, top: "-10%", left: "-10%", opacity: 0.36 }} />
      </Box>

      <Container maxWidth="md" sx={{ position: "relative", zIndex: 1 }}>
        <FadeIn>
          <Headings kicker="// stack">Skills & tools</Headings>
        </FadeIn>

        <Box sx={{ display: "flex", flexDirection: "column", gap: { xs: 6, md: 7 } }}>
          {skillGroups.map((group, gi) => (
            <FadeIn key={group.label} delay={gi * 80} y={22}>
              <Box sx={{ textAlign: "center" }}>
                <Typography variant="h4" sx={{ fontFamily: "var(--font-serif)", fontSize: { xs: "1.25rem", md: "1.4rem" }, color: "var(--espresso)", mb: 2.5, display: "inline-flex", alignItems: "center", gap: 1.2 }}>
                  <span className="script" style={{ fontSize: "0.85rem", color: `var(--${group.accent})`, textShadow: `0 0 8px rgba(${group.accent === "cyan" ? "0, 229, 255" : group.accent === "violet" ? "123, 97, 255" : "0, 255, 136"}, 0.4)` }}>
                    {String(gi + 1).padStart(2, "0")} //
                  </span>
                  {group.label}
                </Typography>
                <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 1.2 }}>
                  {group.skills.map((skill, si) => (
                    <span key={skill} className={`neon-tag neon-tag--${group.accent}`} style={{ "--pop-delay": `${si * 60}ms` }}>
                      {skill}
                    </span>
                  ))}
                </Box>
              </Box>
            </FadeIn>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
