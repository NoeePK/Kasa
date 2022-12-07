import logo from "../assets/logo-footer.svg";
// Trouver comment mettre le c de copyrights

export function Footer() {
    return (
        <Footer>
            <Figure className="footerLogo">
                <img className="logo" src={logo} alt="Logo de l'agence Kasa">
                </img>
            </Figure>
            <p className="footerCopyrights">
                2020 Kasa. All rights reserved
            </p>
        </Footer>
    )
}

export default Footer;