import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

// Style applicable à toute l'application
import "./styles/compiled/index.css";



const root_container = document.getElementById("root");
const root = createRoot(root_container);

root.render(<App />);
