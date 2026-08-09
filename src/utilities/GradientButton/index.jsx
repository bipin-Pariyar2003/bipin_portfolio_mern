import { Button } from "@mui/material";

export default function GradientButton({ children, startIcon, sx, variant = "solid", ...props }) {
  const solid = variant === "solid";
  return (
    <Button
      variant="contained"
      startIcon={startIcon}
      sx={{
        borderRadius: "10px",
        px: { xs: 3, md: 4 },
        py: 1.4,
        fontFamily: "var(--font-sans)",
        fontWeight: 700,
        fontSize: { xs: "0.9rem", md: "1rem" },
        letterSpacing: "0.01em",
        transition:
          "transform 0.25s ease, box-shadow 0.3s ease, background 0.25s ease, border-color 0.25s ease, color 0.25s ease",
        ...(solid
          ? {
              color: "#FFF6EC",
              background: "linear-gradient(120deg, #C05E2A, #D27E3E)",
              boxShadow:
                "0 12px 26px -12px rgba(192, 94, 42, 0.5), 0 2px 8px rgba(0,0,0,0.3)",
              "&:hover": {
                background: "linear-gradient(120deg, #D27E3E, #C05E2A)",
                transform: "scale(1.02) translateY(-2px)",
                boxShadow:
                  "0 18px 34px -14px rgba(192, 94, 42, 0.7), 0 4px 12px rgba(0,0,0,0.35)",
              },
            }
          : {
              color: "var(--espresso)",
              background: "var(--input-bg)",
              border: "1px solid var(--taupe)",
              boxShadow: "0 2px 6px rgba(0,0,0,0.25)",
              "&:hover": {
                background: "var(--beige)",
                borderColor: "var(--terracotta)",
                color: "var(--terracotta)",
                transform: "scale(1.02) translateY(-2px)",
                boxShadow: "0 14px 28px -14px rgba(0,0,0,0.6)",
              },
            }),
        ...sx,
      }}
      {...props}
    >
      {children}
    </Button>
  );
}