import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Assets
import '../stylesheets/hamburger-menu.css';
import resume from '../assets/web-dev-resume.pdf';

const HamburgerMenu = () => {
    const [dropdownState, setDropdownState] = useState({
        displayMenuClass: "hide-dropdown"
    });

    const displayDropdownMenu = () => {
        (dropdownState.displayMenuClass === "hide-dropdown") ? setDropdownState({ displayMenuClass: "show-dropdown" }) : setDropdownState({ displayMenuClass: "hide-dropdown" })
    }

    return (
        <section className="hamburger-menu" onClick={displayDropdownMenu}>
            <div className="hamburger-icon">
                <div></div>
                <div></div>
                <div></div>
            </div>

            <ul className={dropdownState.displayMenuClass}>
                <Link className="pagelink" to="/portfolio"><li>Portfolio</li></Link>
                <Link className="pagelink" to="/contact"><li>Contact</li></Link>

                {/* Link to Resume Opens PDF in New Tab */}
                <a className="pagelink" href={resume} target="_blank" rel="noreferrer"><li>Resume</li></a>
            </ul>
        </section>
    )
}

export default HamburgerMenu;