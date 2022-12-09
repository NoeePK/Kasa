import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

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
        <Router>
            <Header />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/About" element={<About />} />
                <Route path="/Rental/:id" element={<Rental />} />
                <Route path="*" element={<Error />} />
                <Route path="/*" element={<Error />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
