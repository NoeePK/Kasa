import React from "react";
import { Link } from "react-router-dom";
import image from "../assets/logo-error.png";

export function Error() {
    return (
        <section className="error-container">
            <figure>
                <img src={image} alt="404" className="error-logo" />
                <figcaption className="error-text">
                    Oups ! La page que vous demandez n'existe pas.
                </figcaption>
            </figure>
            <Link to="/" className="to-home-link">
                Retourner sur la page d'accueil
            </Link>
        </section>
    );
}

export default Error;
