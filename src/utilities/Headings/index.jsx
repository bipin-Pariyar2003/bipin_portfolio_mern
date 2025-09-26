import React from "react";
import { Typography } from "@mui/material";

export default function SoftHeading({ children, ...props }) {
  return (
    <Typography
      variant="h2"
      sx={{
        fontWeight: 700,
        color: "#e0e0e0", // soft off-white
        mb: 2,
        letterSpacing: 1,
        lineHeight: 1.2,
        textShadow: `
          0 0 2px #a0ffff33,  /* very subtle cyan glow */
          0 0 3px #ffb0ff22   /* very subtle purple glow */
        `,
        fontSize: { xs: "1.8rem", md: "3rem" },
        transition: "text-shadow 0.5s ease",
      }}
      {...props}
    >
      {children}
    </Typography>
  );
}
