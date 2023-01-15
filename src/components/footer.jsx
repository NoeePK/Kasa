import logo from "../assets/logo-footer.svg";

const Footer = () => {
    return (
        <footer>
            <figure className="footerLogo">
                <img src={logo} alt="Logo de l'agence Kasa" />
            </figure>
            <p>© 2020 Kasa. All rights reserved</p>
        </footer>
    );
};

export default Footer;
