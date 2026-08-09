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
      <Box
        sx={{ position: "absolute", inset: 0, zIndex: 0, pointerEvents: "none" }}
        aria-hidden="true"
      >
        <div
          className="blob blob--terracotta"
          style={{ width: 380, height: 380, bottom: "-14%", right: "-8%", opacity: 0.45 }}
        />
      </Box>

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <FadeIn>
          <Headings kicker="// about-me.ts">About me</Headings>
        </FadeIn>

        <Grid
          container
          spacing={{ xs: 7, md: 9 }}
          alignItems="center"
          justifyContent="center"
        >
          {/* photo */}
          <Grid item xs={12} md={5} sx={{ textAlign: "center" }}>
            <FadeIn delay={80}>
              <Box sx={{ position: "relative", display: "inline-block", my: 2 }}>
                <Box
                  sx={{
                    position: "absolute",
                    inset: "-20px",
                    borderRadius: "999px",
                    border: "2px dashed var(--taupe)",
                    opacity: 0.7,
                    transform: "rotate(-5deg)",
                  }}
                />
                <Box
                  className="polaroid"
                  sx={{
                    maxWidth: 320,
                    width: "100%",
                    transform: "rotate(2deg)",
                    "--rot": "2deg",
                    animation: "none",
                  }}
                >
                  <Box className="tape" sx={{ top: -11, left: 14, transform: "rotate(-7deg)" }} />
                  <Box className="tape" sx={{ top: -10, right: 12, transform: "rotate(6deg)" }} />
                  <img src="/bipin-profile.png" alt="Bipin Pariyar" />
                  <Box className="polaroid-caption">working · probably middle of state</Box>
                </Box>
              </Box>
            </FadeIn>
          </Grid>

          {/* bio */}
          <Grid item xs={12} md={7}>
            <FadeIn delay={120}>
              <Typography
                variant="h3"
                sx={{
                  fontFamily: "var(--font-serif)",
                  fontSize: { xs: "1.6rem", md: "2rem" },
                  color: "var(--espresso)",
                  lineHeight: 1.25,
                  mb: 2.5,
                }}
              >
                I&apos;m Bipin — a full-stack engineer who thinks software should be{" "}
                <Typography
                  component="span"
                  sx={{
                    fontStyle: "italic",
                    color: "var(--terracotta)",
                    fontFamily: "var(--font-serif)",
                    fontSize: "inherit",
                  }}
                >
                  predictable and pleasant.
                </Typography>
              </Typography>

              <Typography
                sx={{ color: "var(--mocha)", lineHeight: 1.85, fontSize: "1rem", mb: 2 }}
              >
                I mostly work with the MERN stack, plus a little Python/Django on the
                side. I care about the unglamorous stuff — predictable state,
                reasonable bundle sizes, sensible folder structure — because that is
                what makes a product feel solid.
              </Typography>
              <Typography
                sx={{ color: "var(--mocha)", lineHeight: 1.85, fontSize: "1rem", mb: 4 }}
              >
                When I&apos;m not shipping, I&apos;m reading about systems I want to run
                in production someday, or refactoring a side project for the third
                time this month.
              </Typography>

              <Box className="script" sx={{ mb: 2.5 }}>
                currently focused on
              </Box>
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, maxWidth: 480 }}>
                {focuses.map((skill) => (
                  <span key={skill} className="tag tag--sage">
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