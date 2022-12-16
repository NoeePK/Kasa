import React, { useState } from "react";

export default function Collapse(props) {
    // Par default, le state est false, donc le collapse est fermé
    const [toggleIsClosed, setToggle] = useState(false);
    // Modifier la valeur du state lors du clic
    const toggleIsOpen = () => {
        // SI le state devient true, ALORS le collapse est ouvert
        setToggle(!toggleIsClosed);
    };

    return (
        <>
            {}
            <div className="collapse">
                <div className="collapse-title" onClick={toggleIsOpen}>
                    <h2>{props.title}</h2>
                    {/* Utiliser style pour changer chevrons selon la classe */}
                    <span
                        className={
                            toggleIsClosed ? "arrow_down" : "arrow_up"
                        }></span>
                </div>
                {/* SI fermé, ALORS aria est caché */}
                <div className="collapse-text">
                    <p hidden={toggleIsClosed ? false : true}>{props.text}</p>
                </div>
            </div>
        </>
    );
}
