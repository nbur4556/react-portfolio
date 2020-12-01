import React from 'react';

// Assets
import '../stylesheets/about-me.css';
import profPic from '../assets/images/prof-pic.png';

const AboutMe = () => {
    return (
        <section className="about-page">
            <h1>Hi, I'm Nick, and I am a Full Stack Web Developer.</h1>

            <img src={profPic} alt="My profile" />

            <div className="message">
                <p>I am a full stack developer based in Austin Texas. I have a passion in creating beautiful and responsive web applications,
                    powered by scalable web servers and databases.</p>
                <p>My skill range includes HTML + CSS + Javascript, React, NodeJS w/ Express, jQuerry, MySQL, and MongoDB.</p>
                <p>I look forward to working with you!</p>
            </div>
        </section>
    );
}

export default AboutMe;