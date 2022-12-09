// Importer les composants
import Banner from "../components/Banner";
import Collapse from "../components/Collapse";

// Importer les titres et textes
import { AboutText } from "../datas/About";

export function About() {
    return (
        <section className="about-container">
            <Banner />
            {AboutText.map((id) => (
                <article className="about-articles">
                    {AboutText.map((titles) => (
                        <h3 className="about-titles">{titles.title}</h3>
                    ))}
                    {/*Collapse ici ? Ou avant ? */}
                    {AboutText.map((texts) => (
                        <p>{texts.text}</p>
                    ))}

                </article>
            ))}
        </section>
    )
};

export default About;