import React from 'react';
import { Routes, Route } from "react-router-dom";

// Composants permanents
import Header from "./components/Header";
import Footer from "./components/Footer";

// Différentes pages
import Home from "./pages/Home";
import Error from "./pages/Error";
import About from "./pages/About";
import Lodgings from "./pages/Lodgings";


function App() {
    return (
        <div className="App">
            <Header />
            <main>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route path="/About" element={<About />} />
                    <Route path="/Lodgings" element={<Lodgings />} />
                    <Route path="*"element={<Error />} />
                    <Route path="/*"element={<Error />} />
                </Routes>
            </main>
            <Footer />
        </div>
    );
}

export default App;