import React from "react";
import { Button } from "@mui/material";

export default function GradientButton({ children, startIcon, onClick, ...props }) {
  const handleClick = (e) => {
    // Play the click sound
    const audio = new Audio("/click.mp3"); // path inside public folder
    audio.play();

    // Call any custom onClick passed from parent
    if (onClick) {
      onClick(e);
    }
  };

  return (
    <Button
      variant="contained"
      startIcon={startIcon}
      onClick={handleClick}
      sx={{
        background: "linear-gradient(135deg, #1c1c1c, #2e2e2e)",
        color: "#fff",
        px: { xs: 3, md: 4 },
        py: { xs: 1, md: 1.5 },
        fontWeight: 600,
        fontSize: { xs: "0.9rem", md: "1rem" },
        borderRadius: "12px",
        boxShadow: "0 4px 15px rgba(0,0,0,0.8)",
        border: "1px solid rgba(255,255,255,0.2)",
        textTransform: "none",
        transition: "all 0.3s ease",
        "&:hover": {
          background: "linear-gradient(135deg, #2e2e2e, #1c1c1c)",
          boxShadow: "0 6px 25px rgba(0,0,0,0.6)",
          transform: "scale(1.05)",
        },
      }}
      {...props}
    >
      {children}
    </Button>
  );
}
