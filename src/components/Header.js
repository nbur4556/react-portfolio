import { Link } from 'react-router-dom';
import '../stylesheets/header.css';

const Header = () => {
    return (
        <nav>
            <Link to="/"><h1>Nick Burt</h1></Link>
            <ul>
                <Link to="/portfolio"><li>Portfolio</li></Link>
                <Link to="/contact"><li>Contact</li></Link>
                <a href="/"><li>Resume</li></a>
            </ul>
        </nav>
    );
}

export default Header;