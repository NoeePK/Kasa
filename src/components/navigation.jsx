import { Link } from 'react-router-dom';

export function Navigation() {
    return (
        <Nav>
            <Link to="/">Accueil</Link>
            <Link to="/About">A propos</Link>
        </Nav>
    )
}

export default Navigation;