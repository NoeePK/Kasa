import React from "react";
import { useParams } from "react-router-dom";
import Rentals from "../datas/Rentals";

// Importer les composants
import Error from "../pages/Error";
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

    if (!Rental) return <Error />;

    return (
        <section className="rental-container">
            <Carrousel />

            <div className="rental-title">
                <h1>{Rental.title}</h1>
                <h2>{Rental.location}</h2>
            </div>

            <div className="rental-host">
                <h2 className="host-name">{Rental.host.name}</h2>
                <img
                    className="host-picture"
                    src={Rental.host.picture}
                    alt="Photo du propriétaire"
                />
            </div>

            <div className="rental-tags">
                <Tags tags={Rental.tags} />
            </div>

            <div className="rental-rating">
                <Rate value={Rental.rating} />
            </div>

            <div className="rental-details">
                <Collapse
                    className="details"
                    title="Description"
                    text={Rental.description}
                />
                {/* Vérifier si affichage liste fonctionne */}
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
