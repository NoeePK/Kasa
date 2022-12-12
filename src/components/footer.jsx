import logo from "../assets/logo-footer.svg";
// Trouver comment mettre le c de copyrights

export function Footer() {
    return (
        <footer>
            <figure className="footerLogo">
                <img className="logo" src={logo} alt="Logo de l'agence Kasa">
                </img>
            </figure>
            <p className="footerCopyrights">
                2020 Kasa. All rights reserved
            </p>
        </footer>
    )
}

export default Footer;