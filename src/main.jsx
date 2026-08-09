import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import theme from "./theme.js";
import { ThemeProvider, CssBaseline } from "@mui/material";
import CustomCursor from "./utilities/CustomCursor/index.jsx";
import ScrollProgress from "./utilities/ScrollProgress/index.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ScrollProgress />
      <CustomCursor />
      <App />
    </ThemeProvider>
  </StrictMode>
);