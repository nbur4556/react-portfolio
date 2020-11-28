import '../stylesheets/header.css';

const Header = () => {
    return (
        <nav>
            <a href="/"><h1>Nick Burt</h1></a>
            <ul>
                <a href="/"><li>Portfolio</li></a>
                <a href="/"><li>Contact</li></a>
                <a href="/"><li>Resume</li></a>
            </ul>
        </nav>);
}

export default Header;