import React from "react";
import { useParams } from "react-router-dom";
import Rentals from "../datas/Rentals";

import Error from "../pages/Error";
import Carrousel from "../components/Carrousel";
import Rate from "../components/Rate";
import Tags from "../components/Tags";
import Collapse from "../components/Collapse";

const Rental = () => {
    // Récupérer id dans URL
    const params = useParams();
    // Récupérer logement associé à l'id
    const Rental = Rentals.find((rental) => rental.id === params.id);

    // SI l'id ne correspond à rien, ALORS page d'erreur
    if (!Rental) return <Error />;

    return (
        <main>
            <section className="carrousel-container" key={Rental.id}>
                <Carrousel
                    source={Rental.pictures}
                    slidesNumber={Rental.pictures.length}
                />
            </section>
            <section className="rental-container">
                <div className="rental-title">
                    <h1>{Rental.title}</h1>
                    <h2>{Rental.location}</h2>
                    <Tags tags={Rental.tags} />
                </div>
                <div className="rental-host">
                    <div className="host">
                        <h2>{Rental.host.name}</h2>
                        <img src={Rental.host.picture} alt="Propriétaire" />
                    </div>

                    <Rate value={Rental.rating} />
                </div>
            </section>

            <section className="rental-collapses">
                <Collapse title="Description" text={Rental.description} />
                <Collapse
                    title="Équipements"
                    text=<ul>
                        {Rental.equipments.map((equipment) => (
                            <li key={equipment}>{equipment}</li>
                        ))}
                    </ul>
                />
            </section>
        </main>
    );
};

export default Rental;
