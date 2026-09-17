import { createTheme } from "@mui/material/styles";

const palette = {
  bg: "#0A0A0F",
  surface: "#12121A",
  surfaceElevated: "#1A1A2E",
  cyan: "#00E5FF",
  violet: "#7B61FF",
  mint: "#00FF88",
  coral: "#FF3D71",
  gray: "#6B7280",
  border: "#2A2A3E",
  espresso: "#F0E6D8",
  mocha: "#6B7280",
};

const theme = createTheme({
  breakpoints: {
    values: { xs: 0, sm: 640, md: 900, lg: 1200, xl: 1536 },
  },
  palette: {
    mode: "dark",
    background: {
      default: palette.bg,
      paper: palette.surface,
    },
    text: {
      primary: palette.espresso,
      secondary: palette.mocha,
    },
    primary: {
      main: palette.cyan,
      light: palette.violet,
    },
    secondary: {
      main: palette.mint,
    },
    error: {
      main: palette.coral,
    },
  },
  shape: {
    borderRadius: 16,
  },
  typography: {
    fontFamily: '"Inter", "Space Grotesk", sans-serif',
    h1: { fontFamily: '"Space Grotesk", sans-serif', fontWeight: 700 },
    h2: { fontFamily: '"Space Grotesk", sans-serif', fontWeight: 700 },
    h3: { fontFamily: '"Space Grotesk", sans-serif', fontWeight: 700 },
    h4: { fontFamily: '"Space Grotesk", sans-serif', fontWeight: 700 },
    h5: { fontFamily: '"Space Grotesk", sans-serif', fontWeight: 700 },
    button: { textTransform: "none", fontWeight: 700 },
    overline: { fontFamily: '"JetBrains Mono", monospace' },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: palette.bg,
          color: palette.espresso,
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          "& fieldset": { borderColor: palette.border },
          "&:hover fieldset": { borderColor: palette.violet },
          "&.Mui-focused fieldset": { borderColor: palette.cyan, borderWidth: 2 },
          "&.Mui-focused": { boxShadow: `0 0 0 4px rgba(0, 229, 255, 0.1)` },
        },
        input: {
          color: palette.espresso,
          fontFamily: '"Inter", sans-serif',
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: palette.mocha,
          "&.Mui-focused": { color: palette.cyan },
        },
      },
    },
  },
});

export { palette };
export default theme;
