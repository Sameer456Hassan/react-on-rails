// hello_react.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import HelloWorld from "../components/HelloWorld";

document.addEventListener("DOMContentLoaded", () => {
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(<HelloWorld greeting="Hello from React 18+" />);
});
