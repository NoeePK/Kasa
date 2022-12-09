import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Style applicable à toute l'application
import "./styles/compiled/index.css";

// Composants permanents
import Header from "./components/Header";
import Footer from "./components/Footer";

// Différentes pages
import Home from "./pages/Home";
import Error from "./pages/Error";
import About from "./pages/About";
import Rental from "./pages/Rental";

function App() {
    return (
        <div className="App-container">
            <Header />
            {/* <Router> */}
            {/* <div> */}
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route path="/About" element={<About />} />
                    <Route path="/Rental/:id" element={<Rental />} />
                    <Route path="*" element={<Error />} />
                </Routes>
            {/* </div> */}
            {/* </Router> */}
            <Footer />
        </div>
    );
}

export default App;
