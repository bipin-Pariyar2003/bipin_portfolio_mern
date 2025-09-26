import React from "react";
import { Box, Typography, Button, Avatar } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import Headings from "../../utilities/Headings";
import GradientButton from "../../utilities/GradientButton";

export default function Home() {
  return (
    <Box
      sx={{
        minHeight: "calc(100vh)",
        display: "flex",
        justifyContent: "center",
        flexDirection: { xs: "column-reverse", md: "row" },
        alignItems: "center",
        px: { xs: 2, md: 9 },
        pt: { xs: 16, md: 12 },
        gap: { xs: 4, md: 0 },
      }}
    >
      {/* Left: Text */}
      <Box
        sx={{
          flex: 1,
          textAlign: { xs: "center", md: "left" },
        }}
      >
        <Headings> Hi, I&apos;m Bipin Pariyar</Headings>

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

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,

            alignItems: { xs: "center", md: "flex-start" },
          }}
        >
          <GradientButton
            onClick={() => {
              const projectsSection = document.getElementById("projects");
              projectsSection?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Explore My Work
          </GradientButton>

          <GradientButton startIcon={<DownloadIcon />}>Download Resume</GradientButton>
        </Box>
      </Box>

      {/* Right: Avatar with 3D effect & chat bubble */}
      <Box
        sx={{
          flex: { xs: "unset", md: 1 },
          display: "flex",
          justifyContent: { xs: "center", md: "center" },
          mt: { xs: 6, md: 0 },
          position: "relative",
        }}
      >
        {/* Avatar */}
        <Avatar
          alt="Bipin Pariyar"
          src="/cartoon-profile.png"
          sx={{
            width: { xs: 180, sm: 220, md: 300 },
            height: { xs: 180, sm: 220, md: 300 },
            border: "4px solid #00ffff",
            transform: "perspective(1000px) rotateY(10deg) rotateX(5deg)",
            transition: "transform 0.6s ease, box-shadow 0.6s ease",
            boxShadow: "0 8px 20px rgba(0, 255, 255, 0.5)",
            animation: "float 3s ease-in-out infinite",
            "&:hover": {
              transform: "perspective(1000px) rotateY(0deg) rotateX(0deg) scale(1.05)",
              boxShadow: "0 12px 40px rgba(255, 0, 255, 0.7)",
            },
            "&:hover + .chat-bubble": {
              opacity: 1,
              transform: "translateY(0)",
            },
          }}
        />

        {/* Chat Bubble */}
        <Box
          className="chat-bubble"
          sx={{
            position: "absolute",
            top: -60,
            background: "rgba(0, 0, 0, 0.8)",
            color: "#fff",
            px: 2,
            py: 1,
            borderRadius: "12px",
            fontSize: "0.9rem",
            whiteSpace: "nowrap",
            boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
            opacity: 0,
            transform: "translateY(10px)",
            transition: "opacity 0.6s ease, transform 0.6s ease",
            "&::after": {
              content: '""',
              position: "absolute",
              bottom: -8,
              left: "50%",
              transform: "translateX(-50%)",
              borderWidth: "8px",
              borderStyle: "solid",
              borderColor: "rgba(0,0,0,0.8) transparent transparent transparent",
            },
          }}
        >
          👋 Hi there!
        </Box>
      </Box>
    </Box>
  );
}
