import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

document.documentElement.setAttribute("data-theme", "void");

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <main className="flex bg-black/60">
      <App />
    </main>
  </StrictMode>,
);
