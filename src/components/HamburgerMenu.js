import React, { useState } from 'react';
import '../stylesheets/hamburger-menu.css';

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
                <li>Link1</li>
                <li>Link2</li>
            </ul>
        </section>
    )
}

export default HamburgerMenu;