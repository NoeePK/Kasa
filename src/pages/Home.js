import React from "react";
import { Link } from "react-router-dom";

// Importer les composants
import Card from "../components/Card";
import image from "../assets/home-background.png";
import Rentals from "../datas/Rentals";

export function Home() {
    return (
        <section className="home-container">
            <div className="banner-container">
                <h1>Chez vous, partout et ailleurs</h1>
                <img src={image} alt="" className="home-banner" />
            </div>
            <div className="cards-container">
                
            </div>
        </section>
    );
}

export default Home;
