import { BrowserRouter, Route } from 'react-router-dom';

// Pages
import AboutMe from './components/pages/AboutMe.js';
import Portfolio from './components/pages/Portfolio.js';
import Contact from './components/pages/Contact.js';

// Components
import Header from './components/Header.js';

function App() {
  return (
    <article>
      {/* Routing */}
      <BrowserRouter>

        {/* Navigation Bar */}
        <Header />

        {/* Landing Page */}
        <Route exact path="/">
          <AboutMe />
        </Route>
        {/* Portfolio Page */}
        <Route exact path="/portfolio">
          <Portfolio />
        </Route>
        {/* Contact Page */}
        <Route exact path="/contact">
          <Contact />
        </Route>

      </BrowserRouter>
    </article>
  );
}

export default App;
