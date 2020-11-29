import { Link } from 'react-router-dom';

// Assets
import '../stylesheets/header.css';
import resume from '../assets/web-dev-resume.pdf';

const Header = () => {
    return (
        <nav>
            <Link to="/"><h1>Nick Burt</h1></Link>
            <ul>
                <Link to="/portfolio"><li>Portfolio</li></Link>
                <Link to="/contact"><li>Contact</li></Link>

                <a href={resume} target="_blank" rel="noreferrer"><li>Resume</li></a>
            </ul>
        </nav>
    );
}

export default Header;