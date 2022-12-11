import React from "react";

// Importer les composants
import Carrousel from "../components/Carrousel";
import Collapse from "../components/Collapse";
import Rate from "../components/Rate";
import Tags from "../components/Tags";

import Rentals from "../datas/Rentals.json";

export function Rental() {
    // Récupérer les infos logement dans datas
    // .find ou .map ??
    const rental = Rentals

    return (
        <section className="rental-container">
            <Carrousel />

            <div className="rental-title">
                <h1>{Rental.title}</h1>
                <h2>{Rental.location}</h2>
            </div>

            <div className="rental-host">
                <h2 className="host-name">{Rental.host.name}</h2>
                <img src={Rental.host.picture} alt="" />
            </div>

            <div className="rental-tags">
                <Tags tags={Rental.tags} />
            </div>

            <div className="rental-rating">
                <Rate />
            </div>

            <div className="rental-details">
                <Collapse title="Description" text={Rental.description} />
                {/* Mettre sous forme de liste !! */}
                <Collapse title="Equipements" text={Rental.equipments} />
            </div>
        </section>
    );
}

export default Rental;
