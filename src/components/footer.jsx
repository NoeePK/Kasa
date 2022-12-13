import logo from "../assets/logo-footer.svg";
// Vérifier si c de copyrights apparait bien

export function Footer() {
    return (
        <footer>
            <figure className="footerLogo">
                <img
                    className="logo"
                    src={logo}
                    alt="Logo de l'agence Kasa"
                ></img>
            </figure>
            <p className="footerCopyrights">© 2020 Kasa. All rights reserved</p>
        </footer>
    );
}

export default Footer;
