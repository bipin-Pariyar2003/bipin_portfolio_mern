import { createTheme } from "@mui/material/styles";

const palette = {
  cream: "#16110C",
  beige: "#221A12",
  taupe: "#3A2F24",
  espresso: "#F2E6D6",
  mocha: "#A89985",
  terracotta: "#D27E3E",
  peach: "#E9A35E",
  sage: "#93A46E",
  gold: "#C89A4F",
  input: "#1B140E",
};

const theme = createTheme({
  breakpoints: {
    values: { xs: 0, sm: 640, md: 900, lg: 1200, xl: 1536 },
  },
  palette: {
    mode: "dark",
    background: {
      default: palette.cream,
      paper: "#2B2219",
    },
    text: {
      primary: palette.espresso,
      secondary: palette.mocha,
    },
    primary: {
      main: palette.terracotta,
      light: palette.peach,
    },
    secondary: {
      main: "#B47A5A",
    },
  },
  shape: {
    borderRadius: 16,
  },
  typography: {
    fontFamily: '"Manrope", "Inter", sans-serif',
    h1: { fontFamily: '"Fraunces", Georgia, serif', fontWeight: 600 },
    h2: { fontFamily: '"Fraunces", Georgia, serif', fontWeight: 600 },
    h3: { fontFamily: '"Fraunces", Georgia, serif', fontWeight: 600 },
    h4: { fontFamily: '"Fraunces", Georgia, serif', fontWeight: 600 },
    h5: { fontFamily: '"Fraunces", Georgia, serif', fontWeight: 600 },
    button: { textTransform: "none", fontWeight: 700 },
    overline: { fontFamily: '"JetBrains Mono", monospace' },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: palette.cream,
          color: palette.espresso,
        },
      },
    },
  },
});

export { palette };
export default theme;