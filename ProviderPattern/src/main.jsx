import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import ThemeProvider from "./provider/ThemeProvider.jsx";
import AuthProvider from "./provider/AuthProvider.jsx";
import LangProvider from "./provider/LangProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <AuthProvider>
        <LangProvider>
          <App />
        </LangProvider>
      </AuthProvider>
    </ThemeProvider>
  </StrictMode>,
);
