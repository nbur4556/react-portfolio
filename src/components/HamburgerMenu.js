import React from 'react';
import '../stylesheets/hamburger-menu.css';

const HamburgerMenu = () => {
    return (
        <section className="hamburger-menu">
            <div className="hamburger-icon">
                <div></div>
                <div></div>
                <div></div>
            </div>

            <ul className="menulinks">
                <li>Link1</li>
                <li>Link2</li>
            </ul>
        </section>
    )
}

export default HamburgerMenu;