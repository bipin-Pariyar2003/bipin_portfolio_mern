import { Box, Typography } from "@mui/material";

export default function Headings({ children, kicker, align = "center", ...props }) {
  return (
    <Box
      sx={{
        textAlign: align,
        mb: { xs: 5, md: 7 },
        px: 1,
        position: "relative",
        zIndex: 2,
      }}
      {...props}
    >
      {kicker ? (
        <Typography
          className="script"
          sx={{ display: "block", mb: 1.2 }}
        >
          {kicker}
        </Typography>
      ) : null}

      <Typography
        variant="h2"
        sx={{
          fontFamily: "var(--font-serif)",
          fontWeight: 620,
          color: "var(--espresso)",
          fontSize: { xs: "2rem", md: "3rem" },
          lineHeight: 1.12,
          letterSpacing: "-0.015em",
          display: "inline-block",
        }}
      >
        {children}
      </Typography>

      <Box
        sx={{
          display: "flex",
          justifyContent: align === "center" ? "center" : "flex-start",
          mt: 1.4,
          ml: align === "center" ? 0 : "2px",
        }}
      >
        <Box
          sx={{
            width: 64,
            height: 3,
            borderRadius: "999px",
            background: "linear-gradient(90deg, var(--terracotta), var(--peach))",
          }}
        />
      </Box>
    </Box>
  );
}