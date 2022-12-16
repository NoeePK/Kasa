import React from "react";
// Utiliser "tags=" dans Rental.js
// Passer "tags" en paramètre qui sera utilisé dans Rental pour afficher les bons tags

export function Tags(props) {
    const tags = props.tags;
    return (
        <ul className="tags">
            {tags.map((tag) => (
                <li>{tag}</li>
            ))}
        </ul>
    );
}

export default Tags;
