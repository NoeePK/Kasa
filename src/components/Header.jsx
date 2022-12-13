import Navigation from "./Navigation";
import logo from "../assets/logo.svg";

export function Header() {
    return (
        <header>
            <figure className="headerLogo">
                <img
                    className="logo"
                    src={logo}
                    alt="Logo de l'agence Kasa"
                ></img>
            </figure>
            <Navigation />
        </header>
    );
}

export default Header;
