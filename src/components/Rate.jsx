import React from "react";
import fullStarIcon from "../assets/full-star.svg";
import emptyStarIcon from "../assets/empty-star.svg";
// Utiliser la rate dans Rental.js
// Utiliser une condition ?
// voir si NaN est toujours dans console

export function Rate(props) {
    const rate = Number(props.rating);
    const fullRate = [1, 2, 3, 4, 5];

    return (
        <div className="rate">
            {/* Version du cours : */}
            {fullRate.map((score) =>
                rate >= score ? (
                    <img
                        className="full-star-icon"
                        src={fullStarIcon}
                        alt="étoile pleine"
                        key={score.toString()}
                    />
                ) : (
                    <img
                        className="empty-star-icon"
                        src={emptyStarIcon}
                        alt="étoile vide"
                        key={score.toString()}
                    />
                )
            )}
        </div>
    );
}

export default Rate;
