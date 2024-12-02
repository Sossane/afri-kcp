import React from 'react';
import { Menu, X } from 'lucide-react';
import logo from '/partners/logo-afrik.png';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <nav className="bg-white/80 backdrop-blur-md fixed w-full z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center space-x-3">
            <Link to="/" onClick={scrollToTop}>
              <img 
                src={logo}
                alt="Afri-K Logo" 
                className="h-24 w-auto cursor-pointer"
              />
            </Link>
            
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-gray-600 hover:text-[rgba(144,36,53,0.898)] font-medium transition-all hover:scale-105">
              À Propos
            </a>
            <div className="relative group">
              <button className="text-gray-600 hover:text-[rgba(144,36,53,0.898)] font-medium transition-all hover:scale-105">
                Expertise
              </button>
              <div className="absolute hidden group-hover:block bg-white shadow-lg mt-2 rounded-lg">
                <div className="group-hover:block">
                  <Link to="/reseaux-solutions" className="block px-4 py-2 text-gray-600 hover:bg-gray-50">
                    Solutions Réseaux
                  </Link>
                  <Link to="/materielles-solutions" className="block px-4 py-2 text-gray-600 hover:bg-gray-50">
                    Solutions Matérielles
                  </Link>
                  <Link to="/logicielles-solutions" className="block px-4 py-2 text-gray-600 hover:bg-gray-50">
                    Solutions Logicielles
                  </Link>
                </div>
              </div>
            </div>
            <a href="#services" className="text-gray-600 hover:text-[rgba(144,36,53,0.898)] font-medium transition-all hover:scale-105">
              Services
            </a>
            <a href="#contact" 
               className="bg-gradient-to-r from-[#b70e1b] to-[#240428] text-white px-6 py-3 rounded-full 
                        font-medium hover:shadow-lg hover:shadow-[#b70e1b]/20 transition-all hover:scale-105">
              Contact
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} 
                    className="text-gray-600 hover:text-[rgba(144,36,53,0.898)] transition-colors">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden absolute w-full bg-white/80 backdrop-blur-md border-b border-gray-100">
          <div className="px-4 pt-2 pb-3 space-y-2">
            <a href="#about" className="block px-4 py-3 text-gray-600 hover:text-[rgba(144,36,53,0.898)] hover:bg-gray-50 rounded-lg">
              À Propos
            </a>
            <div className="relative group">
              <a href="/expertise" className="block px-4 py-3 text-gray-600 hover:text-[rgba(144,36,53,0.898)] hover:bg-gray-50 rounded-lg">
                Expertise
              </a>
              <div className="absolute hidden group-hover:block bg-white shadow-lg mt-2 rounded-lg">
                <Link to="/reseaux-solutions" className="block px-4 py-2 text-gray-600 hover:bg-gray-50">
                  Solutions Réseaux
                </Link>
                <Link to="/materielles-solutions" className="block px-4 py-2 text-gray-600 hover:bg-gray-50">
                  Solutions Matérielles
                </Link>
                <Link to="/logicielles-solutions" className="block px-4 py-2 text-gray-600 hover:bg-gray-50">
                  Solutions Logicielles
                </Link>
              </div>
            </div>
            <a href="#services" className="block px-4 py-3 text-gray-600 hover:text-[rgba(144,36,53,0.898)] hover:bg-gray-50 rounded-lg">
              Services
            </a>
            <a href="#contact" className="block px-4 py-3 text-gray-600 hover:text-[rgba(144,36,53,0.898)] hover:bg-gray-50 rounded-lg">
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
