import React from "react";
// Utiliser "tags=" dans Rental.js
// Passer "tags" en paramètre qui sera utilisé dans Rental pour afficher les bons tags

export function Tags(tags) {
    return (
        <ul className="tags">
            {/* {tags.map((index, tag) => (
                <li key={index}>{tag}</li>
            ))} */}
        </ul>
    );
}

export default Tags;
