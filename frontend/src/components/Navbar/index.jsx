import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const navItems = ["Home", "Projects", "About", "Contact"];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{
        textAlign: "center",
        background: "rgba(0,0,0,0.95)",
        height: "100%",
      }}
    >
      <Typography variant="h6" sx={{ my: 2, color: "#fff", fontWeight: 600 }}>
        Bipin Pariyar
      </Typography>
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton
              sx={{
                textAlign: "center",
                color: "#fff",
                "&:hover": { color: "#00ffff" },
              }}
            >
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          top: 0,
          left: 0,
          px: 3,
          width: "100%",
          background: "rgba(255, 255, 255, 0.05)", // glassy
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
          borderBottom: "1px solid rgba(255, 255, 255, 0.2)",
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

          {/* Desktop Menu */}
          <Box sx={{ display: { xs: "none", sm: "flex" }, gap: 2 }}>
            {navItems.map((item) => (
              <Button
                key={item}
                color="inherit"
                sx={{
                  "&:hover": { color: "#00ffff" }, // neon hover
                  transition: "0.3s",
                }}
              >
                {item}
              </Button>
            ))}
          </Box>

          {/* Mobile Hamburger */}
          <IconButton
            color="inherit"
            edge="start"
            sx={{ display: { sm: "none" } }}
            onClick={handleDrawerToggle}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Drawer for Mobile */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{
          "& .MuiDrawer-paper": {
            width: 240,
            background: "rgba(0,0,0,0.95)",
            color: "#fff",
          },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
}
