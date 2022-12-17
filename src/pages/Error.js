import React from "react";
import { Link } from "react-router-dom";
import image from "../assets/logo-error.png";

export function Error() {
    return (
        <section className="error-container">
            <img src={image} alt="404" className="error-logo" />
            <h1 className="error-text">
                Oups ! La page que vous demandez n'existe pas.
            </h1>

            <Link to="/" className="to-home-link">
                Retourner sur la page d'accueil
            </Link>
        </section>
    );
}

export default Error;
