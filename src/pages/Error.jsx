import React from "react";
import { Link } from "react-router-dom";

export function Error() {
    return (
        <section className="errorPage-container">
            <h1 className="errorNumber">
                404
            </h1>
            <h2 className="errorExplained">
                Oups ! La page que vous demandez n'existe pas.
            </h2>
            <Link to="/">
                Retourner sur la page d'accueil
            </Link>

        </section>

    );
};

export default Error;