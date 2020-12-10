import React from 'react';
import { Link } from 'react-router-dom';

// Assets
import '../stylesheets/navbars.css';
import '../stylesheets/navbars-responsive.css';

// Components
import HamburgerMenu from './HamburgerMenu.js';
import MainNavLinks from './MainNavLinks.js';

const Header = () => {
    return (
        <nav className="navbar">
            <Link className="pagelink" to="/react-portfolio"><h1>Nick Burt</h1></Link>
            <MainNavLinks setClass="groupedlinks" />
            <HamburgerMenu />
        </nav>
    );
}

export default Header;