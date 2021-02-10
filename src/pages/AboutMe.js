import React from 'react';

// Assets
import '../stylesheets/about-me.css';
import '../stylesheets/about-me-responsive.css'
import profPicPng from '../assets/images/prof-pic.png';
import profPicWebp from '../assets/images/prof-pic.webp';

// Components
import TextBox from '../components/TextBox.js';

const AboutMe = () => {
    return (
        <section className="about-page">
            <h1>Hi, I'm Nick, and I am a Full Stack Web Developer.</h1>

            <div className="image-container">
                <div className="accent-box"></div>
                <picture>
                    <source srcset={profPicWebp} />
                    <img src={profPicPng} alt="My profile" />
                </picture>

            </div>

            <TextBox className="message">
                <p>I am a full stack developer based in Austin Texas. I have a passion in creating beautiful and responsive web applications,
                    powered by scalable web servers and databases.</p>
                <p>My skill range includes HTML + CSS + Javascript, React, NodeJS w/ Express, jQuerry, MySQL, and MongoDB.</p>
                <p>I look forward to working with you!</p>
            </TextBox>
        </section>
    );
}

export default AboutMe;