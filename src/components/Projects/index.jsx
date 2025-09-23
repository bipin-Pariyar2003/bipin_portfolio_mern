import React from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  CardActionArea,
  Button,
} from "@mui/material";

// Example project data
const projects = [
  {
    title: "Portfolio Website",
    description: "A modern portfolio built with React, MUI, and glassy UI effects.",
    link: "#",
  },
  {
    title: "Image Editor App",
    description: "A Canva-like app using React, Redux, and Konva for image editing.",
    link: "#",
  },
  {
    title: "Attendance Management",
    description: "A MERN stack app to manage staff attendance with reporting features.",
    link: "#",
  },
  {
    title: "UI/UX Design Project",
    description:
      "Designed and developed interactive frontend layouts with Figma and HTML/CSS.",
    link: "#",
  },
];

export default function Projects() {
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
        My Projects
      </Typography>

      <Grid container spacing={4}>
        {projects.map((project, idx) => (
          <Grid item xs={12} sm={6} md={4} key={idx}>
            <Card
              sx={{
                borderRadius: "20px",
                background: "rgba(255,255,255,0.05)", // glassy
                backdropFilter: "blur(15px)",
                WebkitBackdropFilter: "blur(15px)",
                border: "1px solid rgba(255,255,255,0.1)",
                boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                "&:hover": {
                  transform: "translateY(-10px)",
                  boxShadow: "0 16px 48px rgba(0,0,0,0.6)",
                },
              }}
            >
              <CardActionArea href={project.link}>
                <CardContent>
                  <Typography
                    variant="h5"
                    sx={{
                      color: "#fff",
                      fontWeight: 600,
                      mb: 1,
                      textShadow: "0 0 6px #fff, 0 0 12px #00ffff",
                    }}
                  >
                    {project.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#b0b0b0", lineHeight: 1.6 }}>
                    {project.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <Box sx={{ textAlign: "center", pb: 2 }}>
                <Button
                  href={project.link}
                  variant="contained"
                  sx={{
                    mt: 1,
                    background: "linear-gradient(90deg, #00ffff, #ff00ff)",
                    color: "#fff",
                    "&:hover": {
                      boxShadow: "0 0 20px #00ffff, 0 0 40px #ff00ff",
                      transform: "scale(1.05)",
                    },
                    transition: "0.3s ease",
                  }}
                >
                  View Project
                </Button>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
