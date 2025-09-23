import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import theme from "./theme.js";
import { ThemeProvider, CssBaseline, Box } from "@mui/material";
import Cursor from "./utilities/Cursor/index.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Cursor />
      <Box
        sx={{
          minHeight: "100vh",
          background: "linear-gradient(135deg, #000000, #434343)", // gradient here
        }}
      >
        <App />
      </Box>
    </ThemeProvider>
  </StrictMode>
);
