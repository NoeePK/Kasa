// Importer les composants
import Banner from "../components/Banner";
import Location from "../components/Rental";

function Home() {
  return (
    <section>
      <div className="banner-container">
        <Banner />
      </div>
      <Location />
    </section>
  );
}

export default Home;