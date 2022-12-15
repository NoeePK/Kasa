import React, { useState } from "react";

import left from "../assets/arrow-left.svg";
import right from "../assets/arrow-right.svg";
import Rental from "../datas/Rentals";

function Carrousel(props) {

// Récupérer le nombre de photo
const length = props.pictures.length;
// Mettre en place un state pour que l'image présente soit la num 0
const [ current, setCurrent ] = useState(0);


// Avant premier => dernier
    const previousSlide = () => {
        setCurrent(current === 0)
    };
    // Après dernier => premier
    const nextSlide = () => {
        setCurrent(current === 0);
    };

    return (
        <section className="carrousel-container">
            <span className="arrow-left" onClick={previousSlide}>
                <img src={left} alt="previous picture"></img>
            </span>
            <span className="arrow-right" onClick={nextSlide}>
                <img src={right} alt="next picture"></img>
            </span>
        </section>
    );
}

export default Carrousel;

