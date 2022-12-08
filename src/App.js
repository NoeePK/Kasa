import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Composants permanents
import Header from "./components/Header";
import Footer from "./components/Footer";

// Différentes pages
import Home from "./pages/Home";
import Error from "./pages/Error";
import About from "./pages/About";
import Location from "./pages/Location";

// Style
import './styles/compiled/index.css';

function App() {
    return (
        <div className="App-container">
        <Router>
            <Header />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/About" element={<About />} />
                <Route path="/Location" element={<Location />} />
                <Route path="*" element={<Error />} />
                <Route path="/*" element={<Error />} />
            </Routes>
            <Footer />
        </Router>
        </div>
    );
}

export default App;