import React from 'react';
import ReactDOM from 'react-dom/client';
import reactRouter from "react-router-dom";
import App from "./App";
import './styles/compiled/index.css';

// WIP : Insérer le router react quelque part

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

