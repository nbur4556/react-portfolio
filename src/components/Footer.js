import React from 'react';

// Assets
import '../stylesheets/navbars.css';

const Footer = () => {
    return (
        <section className="navbar footer">
            <ul>
                <a className="pagelink" href="https://github.com/nbur4556" target="_blank" rel="noreferrer"><li>Github</li></a>
                <a className="pagelink" href="https://www.linkedin.com/in/nick-burt/" target="_blank" rel="noreferrer"><li>LinkedIn</li></a>
            </ul>
        </section>
    );
}

export default Footer;