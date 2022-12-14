import React from "react";
import { Link } from "react-router-dom";
import Rentals from "../datas/Rentals";

export function Card() {
    return (
        <article className="card-container">
            {Rentals.map((rental) => (
                <Link
                    className="to-rental-link"
                    to={`/Rental/${rental.id}`}
                    key={rental.id}
                >
                    <figure>
                        <img src={rental.cover} alt={`Photo de {rental.title}`} />
                        <figcaption>{rental.title}</figcaption>
                    </figure>
                </Link>
            ))}
        </article>
    );
}

export default Card;
