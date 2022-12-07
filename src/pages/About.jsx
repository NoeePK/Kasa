// Import Banner
// Refactoriser : utiliser map pour le contenu des collapse ?

export function About() {
    return (
        // Banner 
        <section className="about-container">
            <article className="about-articles">
                <h3 className="about-titles">
                    Fiabilité
                </h3>
                <p>
                    Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.
                </p>
            </article>
            <article className="about-articles">
                <h3 className="about-titles">
                    Respect
                </h3>
                <p>
                    La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de pertubation du voisinage entraînera une exclusion de notre plateforme.
                </p>
            </article>
            <article className="about-articles">
                <h3 className="about-titles">
                    Service
                </h3>
                <p>
                    Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.
                </p>
            </article>
            <article className="about-articles">
                <h3 className="about-titles">
                    Sécurité
                </h3>
                <p>
                    La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.
                </p>
            </article>
        </section>
    )
}