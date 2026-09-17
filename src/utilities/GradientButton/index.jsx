import { Button } from "@mui/material";

export default function GradientButton({ children, startIcon, sx, variant = "solid", ...props }) {
  const isNeon = variant === "neon";
  const isOutline = variant === "outline";
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
        transition: "transform 0.25s ease, box-shadow 0.3s ease, background 0.25s ease",
        ...(isNeon
          ? {
              color: "#0A0A0F",
              background: "linear-gradient(120deg, var(--cyan), var(--violet))",
              boxShadow: "0 12px 26px -12px rgba(0, 229, 255, 0.5), 0 2px 8px rgba(0,0,0,0.3)",
              "&:hover": {
                background: "linear-gradient(120deg, var(--violet), var(--mint))",
                transform: "scale(1.02) translateY(-2px)",
                boxShadow: "0 0 30px rgba(0, 229, 255, 0.4), 0 18px 34px -14px rgba(123, 97, 255, 0.5)",
              },
            }
          : isOutline
          ? {
              color: "var(--cyan)",
              background: "transparent",
              border: "1.5px solid var(--cyan)",
              boxShadow: "none",
              "&:hover": {
                background: "rgba(0, 229, 255, 0.08)",
                boxShadow: "0 0 30px rgba(0, 229, 255, 0.3)",
                transform: "scale(1.02) translateY(-2px)",
                borderColor: "var(--cyan)",
              },
            }
          : {
              color: "var(--espresso)",
              background: "var(--surface)",
              border: "1px solid var(--border)",
              "&:hover": {
                background: "var(--surface-elevated)",
                borderColor: "var(--cyan)",
                color: "var(--cyan)",
                transform: "scale(1.02) translateY(-2px)",
                boxShadow: "0 0 20px rgba(0, 229, 255, 0.15)",
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
