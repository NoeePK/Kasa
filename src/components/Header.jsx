import Navigation from "./Navigation";
import logo from "../assets/logo.svg"

export default function Header() {
    return (
        <Header className="header-container">
            <Figure className="headerLogo">
                <img className="logo" src={logo} alt="Logo de l'agence Kasa">
                </img>
            </Figure>
            <Navigation />
        </Header>
    )
}