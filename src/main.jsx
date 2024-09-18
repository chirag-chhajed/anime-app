import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "@fontsource/poppins";
import { BrowserRouter } from "react-router-dom";
import { ReduxProvider } from "./store/StoreProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ReduxProvider>
      <App />
    </ReduxProvider>
  </BrowserRouter>
);
