import React, { useState } from "react";
import left from "../assets/arrow-left.svg";
import right from "../assets/arrow-right.svg";

const Carrousel = (props) => {
    const pictures = props.source;
    const length = props.slidesNumber;
    const onePicture = length <= 1;

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
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    return (
        <>
            <span
                className={onePicture ? "no-arrow" : "arrow arrow-left"}
                onClick={previousSlide}>
                <img src={left} alt="previous" />
            </span>
            <span
                className={onePicture ? "no-arrow" : "arrow arrow-right"}
                onClick={nextSlide}>
                <img src={right} alt="next" />
            </span>
            <div className="carrousel">
                {pictures.map((picture, index) => (
                    <div key={index} className={index}>
                        {index === current && <img src={picture} alt="" />}
                    </div>
                ))}{" "}
            </div>
            <span className="page-count">
                {current + 1}/{length}
            </span>
        </>
    );
};

export default Carrousel;
