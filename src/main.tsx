
  import { createRoot } from "react-dom/client";
  import App from "./App.tsx";
  import "./index.css";
  import { LocalizationProvider } from "./context/LocalizationContext";

  createRoot(document.getElementById("root")!).render(
    <LocalizationProvider>
      <App />
    </LocalizationProvider>
  );
  