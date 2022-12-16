import React from "react";

const Banner = (props) => {
    return (
        <>
            <figure className="banner-image">
                <img src={props.source} alt="Paysage" />
            </figure>
            <figcaption className="banner-text">{props.text}</figcaption>
        </>
    );
};

export default Banner;
