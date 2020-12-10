import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import './stylesheets/main-style.css';

// Pages
import AboutMe from './pages/AboutMe.js';
import Portfolio from './pages/Portfolio.js';
import Contact from './pages/Contact.js';

// Components
import Header from './components/Header.js';
import Footer from './components/Footer.js';

function App() {
  return (
    <article>
      {/* Routing */}
      <BrowserRouter>

        {/* Navigation Bar */}
        <Header />

        {/* Landing Page */}
        <Route exact path="/react-portfolio">
          <AboutMe />
        </Route>
        {/* Portfolio Page */}
        <Route exact path="/react-portfolio/portfolio">
          <Portfolio />
        </Route>
        {/* Contact Page */}
        <Route exact path="/react-portfolio/contact">
          <Contact />
        </Route>

      </BrowserRouter>

      <Footer />
    </article>
  );
}

export default App;
