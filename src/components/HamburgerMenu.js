import React, { useState } from 'react';
import '../stylesheets/hamburger-menu.css';
import MainNavLinks from './MainNavLinks';

const HamburgerMenu = () => {
    const [dropdownState, setDropdownState] = useState({
        displayMenuClass: "hide-dropdown"
    });

    // Toggle Class Name to Display/Hide Dropdown Menu
    const displayDropdownMenu = () => {
        (dropdownState.displayMenuClass === "hide-dropdown")
            ? setDropdownState({ displayMenuClass: "show-dropdown" })
            : setDropdownState({ displayMenuClass: "hide-dropdown" });
    }

    return (
        <section className="hamburger-menu" onClick={displayDropdownMenu}>
            <div className="hamburger-icon">
                <div></div>
                <div></div>
                <div></div>
            </div>
            <MainNavLinks setClass={dropdownState.displayMenuClass} />
        </section>
    )
}

export default HamburgerMenu;