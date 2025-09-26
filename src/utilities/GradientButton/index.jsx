// GradientButton.jsx
import React from "react";
import { Button } from "@mui/material";

export default function GradientButton({ children, startIcon, ...props }) {
  return (
    <Button
      variant="contained"
      startIcon={startIcon}
      sx={{
        background:
          "linear-gradient(90deg, rgba(0,255,255,1) 0%, rgba(255,0,255,1) 100%)",
        color: "#fff",
        px: { xs: 3, md: 4 },
        py: { xs: 1, md: 1.5 },
        fontWeight: 600,
        fontSize: { xs: "0.9rem", md: "1rem" },
        borderRadius: "12px",
        boxShadow: "0 0 12px #00ffff44, 0 0 24px #ff00ff33", // softer glow
        textTransform: "none",
        "&:hover": {
          boxShadow: "0 0 24px #00ffff55, 0 0 48px #ff00ff44",
          transform: "scale(1.05)",
        },
        transition: "all 0.3s ease",
      }}
      {...props}
    >
      {children}
    </Button>
  );
}
