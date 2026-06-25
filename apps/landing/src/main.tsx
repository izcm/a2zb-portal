import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

document.documentElement.setAttribute("data-theme", "void");

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <main className="flex flex-col min-h-screen">
      <App />
      <footer className="py-6 text-center text-xs text-muted bg-primary/60">
        © {new Date().getFullYear()} a2zblocks
      </footer>
    </main>
  </StrictMode>,
);
