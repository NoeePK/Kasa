import Navigation from "./Navigation";
import logo from "../assets/logo.svg";

export function Header() {
    return (
        <header>
            <img src={logo} alt="Logo de l'agence Kasa" />
            <Navigation />
        </header>
    );
}

export default Header;
