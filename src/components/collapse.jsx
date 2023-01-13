import React, { useState } from "react";
import arrow from "../assets/arrow-down.svg";

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
                    <img
                        className={toggleIsClosed ? "arrow_down" : "arrow_up"}
                        src={arrow}
                    />
                </div>
                {/* SI fermé, ALORS texte est caché */}
                <div className="collapse-text ">
                    <div
                        hidden={toggleIsClosed ? false : true}
                        className={
                            toggleIsClosed ? "text-open" : "text-closed"
                        }>
                        {props.text}
                    </div>
                </div>
            </div>
        </>
    );
}
