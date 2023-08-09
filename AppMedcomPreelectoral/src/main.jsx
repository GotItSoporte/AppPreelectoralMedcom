import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { SelectFunctionsProvider } from "./context";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <SelectFunctionsProvider>
      <App />
    </SelectFunctionsProvider>
  </React.StrictMode>
);
