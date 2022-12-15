import React, { useState } from "react";
import arrow_down from "../assets/arrow-down.svg";
import arrow_up from "../assets/arrow-up.svg";

/* utiliser state, Open et isNotOpen ou qqch du genre */
// Destructuration des props pour éviter le nom de l'objet plusieurs fois
export function Collapse({ title, text }) {
    // Par default, le state est false, donc le collapse est fermé
    const [open, setOpen] = useState(false);
    // Modifier la valeur du state lors du clic
    const collapseState = () => {
        // SI le state devient true, ALORS le collapse est ouvert
        setOpen(!open);
    };

    return (
        <div className="collapse">
            <div className="collapse-title" onClick={collapseState}>
                {title}{" "}
                <img src={open ? { arrow_up } : { arrow_down }} alt="Chevron" />
            </div>
            <p hidden={open}>{text}</p>
        </div>
    );
}

export default Collapse;
