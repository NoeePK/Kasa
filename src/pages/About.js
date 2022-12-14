import React from "react";

// Importer les composants/contenu
import Collapse from "../components/Collapse";
import image from "../assets/about-background.png";
import AboutContent from "../datas/About.json";

export default function About() {
    return (
        <section className="about-container">
            {/* Bannière */}
            <div className="banner-container">
                <img src={image} alt="Paysage" className="about-banner" />
            </div>

            {/* Contenu */}
            <div className="content-container">
                {AboutContent.map((id, array) => (
                    <article className="collapse-container">
                        <Collapse
                        key={id}
                            className="collapse"
                            title={array.title}
                            text={array.text}
                        />
                    </article>
                ))}
            </div>
        </section>
    );
}
