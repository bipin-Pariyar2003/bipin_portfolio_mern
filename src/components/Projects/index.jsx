import React from "react";
import Navbar from "../../components/Navbar";
import { Box, Typography, Grid, Card, CardContent, CardMedia, Chip } from "@mui/material";

import projects from "../../utilities/projects";
import Headings from "../../utilities/Headings";
import GradientButton from "../../utilities/GradientButton";

const Projects = () => {
  return (
    <>
      <Navbar />
      <Box
        sx={{
          minHeight: "calc(100vh - 64px)",
          px: 4,
          py: 6,
          background: "linear-gradient(135deg, #000000, #434343)", // dark gradient
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Headings>Projects</Headings>

        {/* Project Grid */}
        <Grid container spacing={4} justifyContent="center">
          {projects.map((project, idx) => (
            <Grid item xs={12} sm={6} md={4} key={idx}>
              <Card
                sx={{
                  backgroundColor: "rgba(255, 255, 255, 0.05)",
                  backdropFilter: "blur(12px)",
                  WebkitBackdropFilter: "blur(12px)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: "20px",
                  color: "#f1f1f1",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-10px)",
                    boxShadow: "0 16px 48px rgba(0,0,0,0.6)",
                  },
                }}
              >
                {/* Project Image */}
                <CardMedia
                  component="img"
                  height="180"
                  image={project.image}
                  alt={project.title}
                  sx={{
                    borderTopLeftRadius: "20px",
                    borderTopRightRadius: "20px",
                    objectFit: "cover",
                  }}
                />

                {/* Project Content */}
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography
                    variant="h5"
                    sx={{
                      mb: 1,
                      color: "#fff",
                      fontWeight: 600,
                      textShadow: `
                        0 0 3px rgba(255,255,255,0.5),
                        0 0 6px rgba(0,0,0,0.5)
                      `,
                    }}
                  >
                    {project.title}
                  </Typography>

                  <Typography
                    variant="body2"
                    sx={{ mb: 2, color: "#b0b0b0", lineHeight: 1.6 }}
                  >
                    {project.description}
                  </Typography>

                  {/* Tools/Skills */}
                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mb: 2 }}>
                    {project.tools.map((tool, i) => (
                      <Chip
                        key={i}
                        label={tool}
                        sx={{
                          backgroundColor: "rgba(84, 132, 138, 0.15)",
                          color: "#fefefe",
                          fontWeight: 600,
                          fontSize: "0.8rem",
                        }}
                      />
                    ))}
                  </Box>
                </CardContent>

                {/* Project Button */}
                <Box sx={{ textAlign: "center", pb: 2 }}>
                  <GradientButton href={project.link} target="_blank">
                    View Project
                  </GradientButton>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default Projects;
