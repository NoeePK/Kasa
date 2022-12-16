import React from "react";
import { Link } from "react-router-dom";
import Rentals from "../datas/Rentals";

export function Card() {
    return (
        <>
            {Rentals.map((rental) => (
                <Link
                    className="to-rental-link"
                    to={`/Rental/${rental.id}`}
                    key={rental.id}
                >
                    <figure>
                        <img src={rental.cover} className="rental-cover" alt="" />
                        <figcaption>{rental.title}</figcaption>
                    </figure>
                </Link>
            ))}
        </>
    );
}

export default Card;
