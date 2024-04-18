import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.scss";
import App from "./App";
import { ParallaxProvider } from "react-scroll-parallax";
import "./i18n.js";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <ParallaxProvider>
      <React.Suspense fallback="loading...">
        <App />
      </React.Suspense>
    </ParallaxProvider>
  </React.StrictMode>
);
