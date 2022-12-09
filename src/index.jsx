import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Style applicable à toute l'application
import "./styles/compiled/index.css";

// Composants permanents
import Header from "./components/Header";
import Footer from "./components/Footer";

// Différentes pages
import Home from "./pages/Home";
import Error from "./pages/Error";
import About from "./pages/About";
import Rental from "./pages/Rental";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <Router>
            <Header />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/About" component={About} />
                <Route path="/Rental/:id" component={Rental} />
                <Route path="*" component={Error} />
            </Switch>
            <Footer />
        </Router>
    </React.StrictMode>
);
