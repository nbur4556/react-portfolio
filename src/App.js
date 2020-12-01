import { BrowserRouter, Route } from 'react-router-dom';

// Pages
import AboutMe from './pages/AboutMe.js.js';
import Portfolio from './pages/Portfolio.js';
import Contact from './pages/Contact.js.js';

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
