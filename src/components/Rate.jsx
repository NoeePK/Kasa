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
            BOUCLE : comparer chaque valeur dans fullRate avec la valeur de rate  
            SI : la valeur de rate est supérieure ou égale à la valeur dans le tableau
            ALORS (true) : on affiche une icone pleine
            SINON (false) : on affiche une icone vide */}
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
