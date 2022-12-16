import React from "react";
import iconFull from "../assets/full-star.svg";
import iconEmpty from "../assets/empty-star.svg";
// Utiliser la rate dans Rental.js
// Utiliser une condition ?

export function Rate(props) {
    const rate = Number(props.rating);
    const range = [1, 2, 3, 4, 5];
    const emptyRate = range - rate;

    console.log("rate :");
    console.log(rate);
    console.log("range :");
    console.log(range);
    console.log("emptyRate :");
    console.log(emptyRate);

    return (
        <div className="rate">
            {/* Version du cours : */}
            {/* {rate.map((el) =>
        range >= el ? <span key={el.toString()}>img</span> : null)} */}

            {/* f = value, e = 5 - value */}
            {/* afficher iconFull x f 
    afficher iconEmpty x e
*/}
        </div>
    );
}

export default Rate;
