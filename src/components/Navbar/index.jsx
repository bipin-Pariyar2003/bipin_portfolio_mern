import { useEffect, useState } from "react";
import {
  AppBar,
  Toolbar,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const navItems = [
  { label: "Home", id: "home" },
  { label: "Projects", id: "projects" },
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Contact", id: "contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      let current = "home";
      for (const item of navItems) {
        const el = document.getElementById(item.id);
        if (el && el.getBoundingClientRect().top <= window.innerHeight * 0.4) {
          current = item.id;
        }
      }
      setActive((prev) => (prev === current ? prev : current));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    setMobileOpen(false);
  };

  const drawer = (
    <Box
      sx={{
        height: "100%",
        background: "var(--cream)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        pt: 4,
      }}
    >
      <Box
        sx={{
          fontFamily: '"Fraunces", serif',
          fontWeight: 600,
          fontSize: "1.5rem",
          color: "var(--espresso)",
          mb: 3,
        }}
      >
        bipin<span style={{ color: "var(--terracotta)" }}>.</span>
      </Box>
      <List sx={{ width: "100%", px: 2 }}>
        {navItems.map((item) => (
          <ListItem key={item.id} disablePadding>
            <ListItemButton
              onClick={() => scrollToSection(item.id)}
              sx={{
                textAlign: "center",
                justifyContent: "center",
                py: 1.2,
                borderRadius: "10px",
                color: "var(--espresso)",
                fontFamily: "var(--font-sans)",
                fontWeight: 600,
                fontSize: "1rem",
                "&:hover": {
                  color: "var(--terracotta)",
                  background: "var(--beige)",
                },
              }}
            >
              <ListItemText primary={item.label} />
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
          width: "100%",
          background: scrolled ? "rgba(20, 16, 12, 0.85)" : "transparent",
          backdropFilter: scrolled ? "blur(14px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(14px)" : "none",
          borderBottom: scrolled ? "1px solid var(--taupe)" : "none",
          boxShadow: scrolled ? "0 8px 28px -18px rgba(0,0,0,0.6)" : "none",
          transition: "background 0.4s ease, box-shadow 0.4s ease",
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            px: { xs: 2.5, md: 5 },
            minHeight: { xs: 60, md: 68 },
          }}
        >
          <Box
            onClick={() => scrollToSection("home")}
            sx={{
              fontFamily: '"Fraunces", serif',
              fontWeight: 600,
              fontSize: { xs: "1.25rem", md: "1.4rem" },
              color: "var(--espresso)",
              cursor: "pointer",
              userSelect: "none",
              letterSpacing: "-0.01em",
            }}
          >
            bipin<span style={{ color: "var(--terracotta)" }}>.</span>
          </Box>

          <Box sx={{ display: { xs: "none", md: "flex" }, gap: { md: 2.5 } }}>
            {navItems.map((item) => (
              <button
                key={item.id}
                type="button"
                className={`nav-link${active === item.id ? " active" : ""}`}
                onClick={() => scrollToSection(item.id)}
              >
                {item.label}
              </button>
            ))}
          </Box>

          <IconButton
            edge="start"
            onClick={() => setMobileOpen(true)}
            sx={{
              display: { md: "none" },
              color: "var(--espresso)",
              background: "var(--beige)",
              border: "1px solid var(--taupe)",
              "&:hover": { background: "var(--beige-deep)" },
            }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        sx={{
          "& .MuiDrawer-paper": { width: 280, background: "var(--cream)" },
          "& .MuiBackdrop-root": {
            background: "rgba(0,0,0,0.55)",
            backdropFilter: "blur(2px)",
          },
        }}
      >
        <Box sx={{ position: "absolute", top: 14, right: 14 }}>
          <IconButton
            onClick={() => setMobileOpen(false)}
            sx={{ color: "var(--espresso)" }}
          >
            <CloseIcon />
          </IconButton>
        </Box>
        {drawer}
      </Drawer>
    </>
  );
}