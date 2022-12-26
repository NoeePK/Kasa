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
            BOUCLE : comparer chaque valeur dans l'array fullRate avec la valeur de rate  
            CONDITION : la valeur de rate est supérieure ou égale à la valeur dans le tableau
            TRUE : on passe à la valeur suivante dans l'array
            On affiche une icone pleine selon la valeur atteinte dans le tableau
            FALSE : (La valeur de rate est inférieure à la valeur dans le tableau)
            On affiche une icone vide */}
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
