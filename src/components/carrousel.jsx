import React, { useState } from "react";
import left from "../assets/arrow-left.svg";
import right from "../assets/arrow-right.svg";

function Carrousel(props) {
    const pictures = props.slides;
    const length = props.slidesNumber;
    // Définir l'index de la première slide
    const [current, setCurrent] = useState(0);

    // SI : la photo est la première (0),
    // On passe à la dernière (lenght -1)
    // SINON : on passe à la précédente (-1)
    const previousSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };

    // SI : la photo est la dernière (lenght -1),
    // On passe à la première (0)
    // SINON : on passe à la prochaine (+1)
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
                    {index === current && <img src={picture} alt=""></img>}
                </div>
            ))}{" "}
        </section>
    );
}

export default Carrousel;
