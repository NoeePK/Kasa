import React from "react";
import Banner from "../components/Banner";
import Card from "../components/Card";
import homeBanner from "../assets/home-background.png";

const Home = () => {
    return (
        <section className="home-container">
            <div className="banner-container">
                <Banner
                    source={homeBanner}
                    text="Chez vous, partout et ailleurs"
                />
            </div>
            <div className="cards-container">
                <Card />
            </div>
        </section>
    );
};

export default Home;
