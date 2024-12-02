import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Expertise from './components/Expertise';
import Services from './components/Services';
import Contact from './components/Contact';
import Partners from './components/Partners';
import ReseauxSolutions from './components/ReseauxSolutions';
import MaterielleSolutions from './components/MaterielleSolutions';
import LogiciellesSolutions from './components/LogiciellesSolutions';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <div className="bg-white">
            <Navbar />
            <main>
              <Hero />
              <About />
              <Expertise />
              <Services />
              <Partners />
              <Contact />
            </main>
            <footer className="bg-gradient-to-r from-[#240428] to-[#b70e1b] text-white">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <p>© 2024 Afri-k Corporation Group. Tous droits réservés.</p>
              </div>
            </footer>
          </div>
        } />
        <Route path="/reseaux-solutions" element={<ReseauxSolutions />} />
        <Route path="/materielles-solutions" element={<MaterielleSolutions />} />
        <Route path="/logicielles-solutions" element={<LogiciellesSolutions />} />
      </Routes>
    </Router>
  );
}

export default App;