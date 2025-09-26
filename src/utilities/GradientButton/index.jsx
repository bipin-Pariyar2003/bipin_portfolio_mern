import React from "react";
import { Button } from "@mui/material";

export default function GradientButton({ children, startIcon, ...props }) {
  return (
    <Button
      variant="contained"
      startIcon={startIcon}
      sx={{
        background: "linear-gradient(135deg, #1c1c1c, #2e2e2e)", // dark gradient
        color: "#fff",
        px: { xs: 3, md: 4 },
        py: { xs: 1, md: 1.5 },
        fontWeight: 600,
        fontSize: { xs: "0.9rem", md: "1rem" },
        borderRadius: "12px",
        boxShadow: "0 4px 15px rgba(0,0,0,0.8)", // subtle shadow
        border: "1px solid rgba(255,255,255,0.2)",
        textTransform: "none",
        transition: "all 0.3s ease",
        "&:hover": {
          background: "linear-gradient(135deg, #2e2e2e, #1c1c1c)", // reverse gradient on hover
          boxShadow: "0 6px 25px rgba(0,0,0,0.6)", // stronger shadow
          transform: "scale(1.05)", // subtle zoom
        },
      }}
      {...props}
    >
      {children}
    </Button>
  );
}
