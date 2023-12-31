import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createTheme, ThemeProvider } from "@mui/material";

const theme = createTheme({
  palette: { primary: { main: "#eba627" }, secondary: { main: "#2EBBF2" } },
  typography: {
    h1: { fontSize: "2.5rem" },
    h2: { fontSize: "1.25rem" },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
