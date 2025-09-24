import React from "react";
import { Box, Typography, Button } from "@mui/material";

export default function Home() {
  return (
    <Box
      sx={{
        minHeight: "calc(100vh - 64px)", // subtract approx navbar height
        display: "flex",
        justifyContent: "center",
        flexDirection: { xs: "column-reverse", md: "row" },
        alignItems: "center",
        px: { xs: 2, md: 9 }, // padding left/right
        pt: { xs: 10, md: 12 }, // padding top for navbar space
        gap: { xs: 4, md: 0 }, // tighter gap on mobile
      }}
    >
      {/* Left: Text */}
      <Box
        sx={{
          flex: 1,

          textAlign: { xs: "center", md: "left" },
        }}
      >
        <Typography
          variant="h2"
          sx={{
            fontWeight: 700,
            color: "#ffffff",
            mb: 2,
            letterSpacing: 1,
            lineHeight: 1.2,
            textShadow: "0 0 8px #ffffff, 0 0 16px #00ffff",
            fontSize: { xs: "1.8rem", md: "3rem" },
          }}
        >
          Hi, I&apos;m Bipin Pariyar
        </Typography>

        <Typography
          variant="h5"
          sx={{
            fontWeight: 400,
            color: "#b0b0b0",
            mb: 4,
            textShadow: "0 0 4px #ffffff",
            fontSize: { xs: "1rem", md: "1.25rem" },
          }}
        >
          I build modern web applications and immersive user experiences.
        </Typography>

        <Button
          variant="contained"
          sx={{
            background:
              "linear-gradient(90deg, rgba(0,255,255,1) 0%, rgba(255,0,255,1) 100%)",
            color: "#fff",
            px: { xs: 3, md: 4 },
            py: { xs: 1, md: 1.5 },
            fontWeight: 600,
            fontSize: { xs: "0.9rem", md: "1rem" },
            borderRadius: "12px",
            boxShadow: "0 0 12px #00ffff, 0 0 24px #ff00ff",
            "&:hover": {
              boxShadow: "0 0 24px #00ffff, 0 0 48px #ff00ff",
              transform: "scale(1.05)",
            },
            transition: "0.3s ease",
          }}
        >
          Explore My Work
        </Button>
      </Box>

      {/* Right: 3D Image */}
      <Box
        component="img"
        src="/cartoon-profile.png"
        alt="Bipin Pariyar"
        sx={{
          mt: { xs: 8, md: 0 },
          width: { xs: "180px", sm: "220px", md: "350px" },
          transform: "perspective(1000px) rotateY(10deg) rotateX(5deg)",
          transition: "transform 0.6s ease, box-shadow 0.6s ease",
          "&:hover": {
            transform: "perspective(1000px) rotateY(0deg) rotateX(0deg) scale(1.05)",
          },
        }}
      />
    </Box>
  );
}
