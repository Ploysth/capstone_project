import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import GlobalStyle from "./globalStyles";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <GlobalStyle />
      <App />
    </React.StrictMode>
  </BrowserRouter>
);
