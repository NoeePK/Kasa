import { Link } from 'react-router-dom';

export function Navigation() {
    return (
        <nav>
            <Link to="/">Accueil</Link>
            <Link to="/About">A propos</Link>
        </nav>
    )
}

export default Navigation;