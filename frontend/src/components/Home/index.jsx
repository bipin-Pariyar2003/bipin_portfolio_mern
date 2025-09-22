import React from "react";
import { Box, Typography, Button, Container } from "@mui/material";

export default function Home() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        px: 2,
      }}
    >
      {/* Glassy Home card */}
      <Box
        sx={{
          p: { xs: 4, md: 8 },
          borderRadius: "25px",
          background: "rgba(255,255,255,0.05)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          border: "1px solid rgba(255,255,255,0.15)",
          boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
          maxWidth: "800px",
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
            px: 4,
            py: 1.5,
            fontWeight: 600,
            fontSize: "1rem",
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
    </Box>
  );
}
