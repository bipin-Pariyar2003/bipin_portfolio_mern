import { Box, Container, Grid, Typography } from "@mui/material";
import Headings from "../../utilities/Headings";
import FadeIn from "../../utilities/FadeIn";

const focuses = [
  "MERN stack",
  "REST API design",
  "clean component code",
  "PWA & offline",
  "auth & sessions",
  "web performance",
  "dev tooling",
  "docs that don't rot",
];

export default function About() {
  return (
    <Box component="section" id="about" className="section">
      <Box sx={{ position: "absolute", inset: 0, zIndex: 0, pointerEvents: "none" }} aria-hidden="true">
        <div className="neon-blob neon-blob--violet" style={{ width: 400, height: 400, bottom: "-14%", right: "-8%", opacity: 0.45 }} />
      </Box>

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <FadeIn>
          <Headings kicker="// about-me.ts">About me</Headings>
        </FadeIn>

        <Grid container spacing={{ xs: 7, md: 9 }} alignItems="center" justifyContent="center">
          <Grid item xs={12} md={5} sx={{ textAlign: "center" }}>
            <FadeIn delay={80}>
              <Box sx={{ position: "relative", display: "inline-block", my: 2 }}>
                <Box sx={{ position: "absolute", inset: "-20px", borderRadius: "999px", border: "1px dashed var(--border)", opacity: 0.5, transform: "rotate(-5deg)" }} />
                <Box
                  className="polaroid"
                  sx={{
                    maxWidth: 320, width: "100%", transform: "rotate(2deg)",
                    "--rot": "2deg", animation: "none",
                    background: "var(--surface)",
                    borderRadius: "20px",
                    overflow: "hidden",
                    boxShadow: "0 0 30px rgba(0, 229, 255, 0.1), 0 20px 60px -20px rgba(0,0,0,0.6)",
                    border: "1px solid var(--border)",
                  }}
                >
                  <Box className="tape" sx={{ top: -11, left: 14, transform: "rotate(-7deg)", background: "var(--surface-elevated)" }} />
                  <Box className="tape" sx={{ top: -10, right: 12, transform: "rotate(6deg)", background: "var(--surface-elevated)" }} />
                  <img src="/bipin-profile.png" alt="Bipin Pariyar" style={{ display: "block", width: "100%" }} />
                  <Box className="polaroid-caption" sx={{ px: 3, pb: 2, color: "var(--mocha)", fontFamily: "var(--font-mono)", fontSize: "0.8rem" }}>
                    working · probably middle of state
                  </Box>
                </Box>
              </Box>
            </FadeIn>
          </Grid>

          <Grid item xs={12} md={7}>
            <FadeIn delay={120}>
              <Typography variant="h3" sx={{ fontFamily: "var(--font-serif)", fontSize: { xs: "1.6rem", md: "2rem" }, color: "var(--espresso)", lineHeight: 1.25, mb: 2.5 }}>
                I&apos;m Bipin — a full-stack engineer who thinks software should be{" "}
                <Typography component="span" sx={{ fontStyle: "italic", color: "var(--cyan)", fontFamily: "var(--font-serif)", fontSize: "inherit", textShadow: "0 0 12px rgba(0, 229, 255, 0.3)" }}>
                  predictable and pleasant.
                </Typography>
              </Typography>

              <Typography sx={{ color: "var(--mocha)", lineHeight: 1.85, fontSize: "1rem", mb: 2 }}>
                I mostly work with the MERN stack, plus a little Python/Django on the side. I care about the unglamorous stuff — predictable state, reasonable bundle sizes, sensible folder structure — because that is what makes a product feel solid.
              </Typography>
              <Typography sx={{ color: "var(--mocha)", lineHeight: 1.85, fontSize: "1rem", mb: 4 }}>
                When I&apos;m not shipping, I&apos;m reading about systems I want to run in production someday, or refactoring a side project for the third time this month.
              </Typography>

              <Box className="script" sx={{ mb: 2.5, color: "var(--cyan)", textShadow: "0 0 8px rgba(0, 229, 255, 0.3)" }}>
                currently focused on
              </Box>
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, maxWidth: 480 }}>
                {focuses.map((skill, si) => (
                  <span key={skill} className="neon-tag neon-tag--cyan" style={{ "--pop-delay": `${si * 60}ms` }}>
                    {skill}
                  </span>
                ))}
              </Box>
            </FadeIn>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
