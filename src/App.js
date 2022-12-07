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
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/About">
                        <About />
                    </Route>
                    <Route path="/Lodgings">
                        <Lodgings />
                    </Route>
                    <Route path="*">
                        <Error />
                    </Route>
                    <Route path="/*">
                        <Error />
                    </Route>

                </Routes>
            </main>
            <Footer />
        </div>
    );
}

export default App;