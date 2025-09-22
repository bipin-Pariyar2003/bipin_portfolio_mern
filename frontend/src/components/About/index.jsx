import React from "react";
import { Box, Typography, Grid, Avatar } from "@mui/material";

export default function About() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        py: 10,
        px: 4,
        background: "linear-gradient(135deg, #000000, #434343)", // dark gradient
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography
        variant="h3"
        sx={{
          color: "#fff",
          mb: 6,
          textShadow: "0 0 8px #fff, 0 0 16px #00ffff",
          fontWeight: 700,
        }}
      >
        About Me
      </Typography>

      <Grid
        container
        spacing={4}
        alignItems="center"
        justifyContent="center"
        sx={{ maxWidth: "900px" }}
      >
        {/* Profile Image */}
        <Grid item xs={12} md={4} sx={{ textAlign: "center" }}>
          <Avatar
            src="/bipin.jpg" // replace with your image
            alt="Bipin Pariyar"
            sx={{
              width: { xs: 150, md: 200 },
              height: { xs: 150, md: 200 },
              margin: "0 auto",
              border: "4px solid rgba(255,255,255,0.3)",
              boxShadow: "0 0 12px rgba(255,255,255,0.2)",
            }}
          />
        </Grid>

        {/* About Text */}
        <Grid item xs={12} md={8}>
          <Box
            sx={{
              p: 4,
              borderRadius: "20px",
              background: "rgba(255,255,255,0.05)",
              backdropFilter: "blur(15px)",
              WebkitBackdropFilter: "blur(15px)",
              border: "1px solid rgba(255,255,255,0.1)",
              boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
            }}
          >
            <Typography
              variant="h5"
              sx={{
                color: "#ffffff",
                mb: 2,
                fontWeight: 600,
                textShadow: "0 0 6px #fff, 0 0 12px #00ffff",
              }}
            >
              Hello, I&apos;m Bipin Pariyar
            </Typography>

            <Typography
              variant="body1"
              sx={{
                color: "#b0b0b0",
                lineHeight: 1.8,
                fontSize: "1rem",
              }}
            >
              I am a passionate software developer with experience in web development,
              UI/UX design, and full-stack applications. I love building modern,
              interactive, and visually appealing web apps that provide smooth user
              experiences.
              <br />
              <br />
              My skills include React, Redux, MUI, JavaScript, Python, and MERN stack
              development. I enjoy learning new technologies and exploring innovative ways
              to create beautiful and functional digital products.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
