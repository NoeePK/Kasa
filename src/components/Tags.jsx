import React from "react";
// Pour chaque tag dans props, ajouter un élément li dans la liste

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
