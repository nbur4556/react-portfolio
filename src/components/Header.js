import { Link } from 'react-router-dom';

// Assets
import '../stylesheets/header.css';
import resume from '../assets/web-dev-resume.pdf';

const Header = () => {
    return (
        <nav>
            <Link className="pagelink" to="/"><h1>Nick Burt</h1></Link>
            <ul>
                <Link className="pagelink" to="/portfolio"><li>Portfolio</li></Link>
                <Link className="pagelink" to="/contact"><li>Contact</li></Link>

                <a className="pagelink" href={resume} target="_blank" rel="noreferrer"><li>Resume</li></a>
            </ul>
        </nav>
    );
}

export default Header;