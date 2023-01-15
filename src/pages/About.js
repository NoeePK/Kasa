import React from "react";
import Banner from "../components/Banner";
import Collapse from "../components/Collapse";
import aboutBanner from "../assets/about-background.png";
import AboutContent from "../datas/About.json";

const About = () => {
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
                        key={array.title}
                    />
                ))}
            </div>
        </section>
    );
};

export default About;
