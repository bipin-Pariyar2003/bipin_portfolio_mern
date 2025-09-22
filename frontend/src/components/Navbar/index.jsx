import React from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";

export default function Navbar() {
  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        top: 0,
        left: 0,
        px: 3,
        width: "100%",
        background: "rgba(255, 255, 255, 0.05)", // semi-transparent glass
        backdropFilter: "blur(10px)", // frosted blur
        WebkitBackdropFilter: "blur(10px)", // Safari support
        borderBottom: "1px solid rgba(255, 255, 255, 0.2)", // subtle border
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          px: 4,
        }}
      >
        <Typography
          variant="h6"
          component="div"
          sx={{ fontWeight: 600, letterSpacing: 1 }}
        >
          Bipin Pariyar
        </Typography>

        <Box sx={{ display: "flex", gap: 2 }}>
          <Button color="inherit">Home</Button>
          <Button color="inherit">Projects</Button>
          <Button color="inherit">About</Button>
          <Button color="inherit">Contact</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
