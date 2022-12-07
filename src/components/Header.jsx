import Navigation from "./Navigation";
import logo from "../assets/logo.svg"

export default function Header() {
    return (
        <Header className="header-container">
            <figure className="headerLogo">
                <img className="logo" src={logo} alt="Logo de l'agence Kasa">
                </img>
            </figure>
            <Navigation />
        </Header>
    )
}