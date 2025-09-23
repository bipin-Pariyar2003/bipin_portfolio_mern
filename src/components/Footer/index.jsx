import React from "react";
import { Box, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Box
      sx={{
        py: 4,
        px: 4,
        mt: 10,
        width: "100%",
        textAlign: "center",
      }}
    >
      <Typography
        variant="body2"
        sx={{
          color: "#fff",
          textShadow: "0 0 4px #fff, 0 0 8px #00ffff",
        }}
      >
        &copy; {new Date().getFullYear()} Bipin Pariyar. All rights reserved.
      </Typography>
    </Box>
  );
}
