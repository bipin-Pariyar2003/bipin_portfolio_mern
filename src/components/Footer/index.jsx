import { Box, Typography, Container } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function Footer() {
  return (
    <Box
      component="footer"
      className="footer-glow"
      sx={{
        position: "relative",
        py: { xs: 6, md: 7 },
        borderTop: "1px solid var(--taupe)",
      }}
    >
      <Container maxWidth="md" sx={{ textAlign: "center", position: "relative" }}>
        <Typography
          className="script"
          sx={{ color: "var(--espresso)", mb: 2 }}
        >
          end_of_page
        </Typography>

        <Box sx={{ display: "flex", justifyContent: "center", gap: 2, mb: 3 }}>
          <a className="social-btn" style={{ width: 40, height: 40 }} href="https://github.com/bipin-Pariyar2003" target="_blank" rel="noreferrer" aria-label="GitHub">
            <GitHubIcon sx={{ fontSize: 18 }} />
          </a>
          <a className="social-btn" style={{ width: 40, height: 40 }} href="https://www.linkedin.com/in/bipin-pariyar-767782208/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <LinkedInIcon sx={{ fontSize: 18 }} />
          </a>
        </Box>

        <Typography
          className="script"
          sx={{ color: "var(--mocha)", lineHeight: 1.9, fontWeight: 500 }}
        >
          © {new Date().getFullYear()} bipin pariyar · hand-built with React, coffee &amp; Fraunces
        </Typography>
      </Container>
    </Box>
  );
}