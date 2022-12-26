import React from "react";

// Importer les composants/contenu
import Banner from "../components/Banner";
import Collapse from "../components/Collapse";
import aboutBanner from "../assets/about-background.png";
import AboutContent from "../datas/About.json";

export default function About() {
    return (
        <section className="about-container">
            <div className="banner-container">
                <Banner source={aboutBanner} text={""} />
            </div>
            <div className="content-container">
                {AboutContent.map((array) => (
                    <Collapse
                        className="collapse-container"
                        title={array.title}
                        text={array.text}
                    />
                ))}
            </div>
        </section>
    );
}
