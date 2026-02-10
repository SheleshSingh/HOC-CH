import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import App from "./App.jsx";
import Counter from "./components/optimaization/Counter.jsx";
import Count from "./components/optimaization/Count.jsx";

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  // <App />,
  // <Counter />,
  <Count />,
  // </StrictMode>,
);
