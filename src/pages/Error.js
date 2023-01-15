import React from "react";
import { Link } from "react-router-dom";
import image from "../assets/logo-error.png";

const Error = () => {
    return (
        <section className="error-container">
            <img src={image} alt="404" className="error-logo" />
            <h1>Oups ! La page que vous demandez n'existe pas.</h1>
            <Link to="/">Retourner sur la page d'accueil</Link>
        </section>
    );
};

export default Error;
