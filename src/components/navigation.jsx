import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
    return (
        <nav>
            <Link to="/">Accueil</Link>
            <Link to="/About">À propos</Link>
        </nav>
    );
};

export default Navigation;
