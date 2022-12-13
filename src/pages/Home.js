import React from "react";

// Importer les composants
import Card from "../components/Card";
import image from "../assets/home-background.png";

export function Home() {
    return (
        <section className="home-container">
            <div className="banner-container">
                <h1>Chez vous, partout et ailleurs</h1>
                <img src={image} alt="" className="home-banner" />
            </div>
            <div className="cards-container">
                <Card />
            </div>
        </section>
    );
}

export default Home;
