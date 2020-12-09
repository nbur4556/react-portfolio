import React from 'react';
import { Link } from 'react-router-dom';
import resume from '../assets/web-dev-resume.pdf';

const MainNavLinks = (props) => {
    return (
        <ul className={props.setClass}>
            {/* Links to Pages */}
            <li><Link className="pagelink" to="/portfolio">Portfolio</Link></li>
            <li><Link className="pagelink" to="/contact">Contact</Link></li>

            {/* Link to Resume Opens PDF in New Tab */}
            <li><a className="pagelink" href={resume} target="_blank" rel="noreferrer">Resume</a></li>
        </ul>
    )
}

export default MainNavLinks;