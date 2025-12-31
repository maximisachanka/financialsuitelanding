import { createRoot } from "react-dom/client";
  import { BrowserRouter } from "react-router-dom";
  import App from "./App.tsx";
  import "./index.css";
  import { LocalizationProvider } from "./context/LocalizationContext";

  createRoot(document.getElementById("root")!).render(
    <LocalizationProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </LocalizationProvider>
  );
  