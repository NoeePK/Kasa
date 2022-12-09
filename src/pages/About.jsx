import React from "react";

// Importer les composants/contenu
import Collapse from "../components/Collapse";
import image from "../assets/about-background.png";
import { AboutText } from "../datas/About";

export function About() {
    return (
        <section className="about-container">
            {/* Bannière */}
            <div className="banner-container">
                <img src={image} alt="" className="about-banner" />
            </div>
            
            {/* Contenu */}
            <div className="collapse-container">
                    {/*Collapse ici. Ou après ? */}
                    <article className="about-articles">
                        {AboutText.map((titles) => (
                            <h3 className="about-titles">{titles.title}</h3>
                        ))}
                        
                        {AboutText.map((texts) => (
                            <p>{texts.text}</p>
                        ))}
                    </article>
                
            </div>
        </section>
    );
}

export default About;
