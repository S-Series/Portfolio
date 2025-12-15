import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ProfileProvider } from "./contexts/useProfile";
import { ServerProvider } from "./contexts/useServer";
import App from "./App";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <ServerProvider>
      <ProfileProvider>
        <App />
      </ProfileProvider>
    </ServerProvider>
  </BrowserRouter>
);
