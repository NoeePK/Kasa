import React from 'react';
import ReactDOM from 'react-dom';
import reactRouter from "react-router-dom";
import Home from "./pages/Home"
import About from "./pages/About"
import Header from "./components/Header"
import App from "./App";
import './styles/compiled/index.css';

// WIP : Insérer le router react quelque part

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/About">
        <About />
      </Route>
      <Route path="/ErrorPage">
        <ErrorPage />
      </Route>
      <Route path="/Lodgings">
        <Lodgings />
      </Route>
    </Router>
    <App />
  </React.StrictMode>
);

