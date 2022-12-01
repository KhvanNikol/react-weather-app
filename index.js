import React from "react";

import "./App.css";
import Weather from "./Weather";
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Weather city="Tokyo" />
  </StrictMode>
);
