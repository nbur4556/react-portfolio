import React from 'react';

// Assets
import '../stylesheets/navbars.css';

const Footer = () => {
    return (
        <section>
            <ul>
                <a className="pagelink" href="/"><li>Github</li></a>
                <a className="pagelink" href="/"><li>LinkedIn</li></a>
            </ul>
        </section>
    );
}

export default Footer;