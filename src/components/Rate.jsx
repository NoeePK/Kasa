import React from "react";
import fullStarIcon from "../assets/full-star.svg";
import emptyStarIcon from "../assets/empty-star.svg";

//
export function Rate(props) {
    // Convertir la string rating en nombre
    const rate = Number(props.value);
    // Nombre total d'étoiles
    const fullRate = [1, 2, 3, 4, 5];

    return (
        <div className="rate">
            {/* Récupérer la note dans les props
            SI : le nb d'étoile dans rate est 
            ALORS : on affiche le même nb d'images que la valeur de rate
            SINON : s'il reste des étoiles non-utilisées dans fullRate
            ALORS : on affiche le nb d'étoiles qu'il manque pour atteindre les 5 attendues */}
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
