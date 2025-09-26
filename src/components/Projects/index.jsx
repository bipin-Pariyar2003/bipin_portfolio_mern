import React from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  CardActionArea,
  Button,
  CardMedia,
} from "@mui/material";

import projects from "../../utilities/projects";
import Headings from "../../utilities/Headings";
import GradientButton from "../../utilities/GradientButton";

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
      <Headings>My Projects</Headings>

      <Grid container spacing={4} sx={{ mt: 2 }}>
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
                {/* Project Image */}
                <CardMedia
                  component="img"
                  height="150"
                  image={project.image}
                  alt={project.title}
                  sx={{
                    borderTopLeftRadius: "20px",
                    borderTopRightRadius: "20px",
                    objectFit: "cover",
                  }}
                />
                <CardContent>
                  <Typography
                    variant="h5"
                    sx={{
                      color: "#fff",
                      fontWeight: 600,
                      mb: 1,
                      textShadow: `
      0 0 3px rgba(255,255,255,0.5),  /* soft white glow */
      0 0 6px rgba(0,0,0,0.5)          /* subtle black shadow */
    `,
                      transition: "text-shadow 0.3s ease",
                      "&:hover": {
                        textShadow: `
        0 0 5px rgba(255,255,255,0.6),
        0 0 10px rgba(0,0,0,0.6)
      ` /* slightly stronger glow on hover */,
                      },
                    }}
                  >
                    {project.title}
                  </Typography>

                  <Typography variant="body2" sx={{ color: "#b0b0b0", lineHeight: 1.6 }}>
                    {project.description}
                  </Typography>
                  <Typography variant="body2" sx={{ mt: 2, color: "#b0b0b0" }}>
                    <strong style={{ color: "#fff" }}>Tools:</strong>{" "}
                    <span style={{ color: "#b0b0b0", fontStyle: "italic" }}>
                      {project.tools.join(", ")}
                    </span>
                  </Typography>
                </CardContent>
              </CardActionArea>
              <Box sx={{ textAlign: "center", pb: 2, mt: 1 }}>
                <GradientButton>View Project</GradientButton>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
