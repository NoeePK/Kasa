import React from "react";
import { useParams } from "react-router-dom";
import Rentals from "../datas/Rentals";

// Importer les composants
import Carrousel from "../components/Carrousel";
import Collapse from "../components/Collapse";
import Rate from "../components/Rate";
import Tags from "../components/Tags";

export function Rental() {
    // Récupérer les infos logement dans datas

    // Récupérer id dans URL
    const params = useParams();
    // Récupérer logement associé à l'id
    const Rental = Rentals.find((rental) => rental.id === params.id);

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
                <Collapse
                    className="details"
                    title="Description"
                    text={Rental.description}
                />
                {/* Mettre sous forme de liste !! */}
                <Collapse
                    className="details"
                    title="Equipements"
                    text=<ul>
                        {Rental.equipments.map((index, equipment) => (
                            <li key={index}>{equipment}</li>
                        ))}
                    </ul>
                />
            </div>
        </section>
    );
}

export default Rental;
