import React from "react";

// Importer les composants
import Banner from "../components/Banner";
import Rental from "../components/Rental";

export function Home() {
  return (
    <section>
      <div className="banner-container">
        <Banner />
      </div>
      <Rental />
    </section>
  );
}

export default Home;