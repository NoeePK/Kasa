import React from "react";

const Banner = (props) => {
    return (
        <>
            <img src={props.source} alt="Paysage"></img>
            <h1>{props.text}</h1>
        </>
    );
};

export default Banner;
