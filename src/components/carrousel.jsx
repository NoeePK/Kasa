import React, { useState } from "react";

import left from "../assets/arrow-left.svg";
import right from "../assets/arrow-right.svg";

function Carrousel(props) {

const pictures = props.pictures;
// Récupérer la longueur de l'array
const length = props.pictures.length;
// Définir l'index de la première slide
const [ current, setCurrent ] = useState(0);

// Avant premier => dernier
// SI la photo est la première,
// SOIT c'est le cas, donc on passe sur la dernière
// SOIT c'est pas le cas, donc on passe à la précédente
    const previousSlide = () => {
        setCurrent(current === 0 ? length - 1 : current -1)
    };
    // Après dernier => premier
    const nextSlide = () => {
        setCurrent(current === -1 ? 0 : current + 1);
    };

    return (
        <section className="carrousel-container">
            <span className="arrow-left" onClick={previousSlide}>
                <img src={left} alt="previous"></img>
            </span>
            <span className="arrow-right" onClick={nextSlide}>
                <img src={right} alt="next"></img>
            </span>

            {pictures.map((index, picture) => (
                <div key={index}>
                    {index === current &&
                    <img src={picture} alt=""></img>}
                </div>
            ))}        </section>
    );
}

export default Carrousel;

