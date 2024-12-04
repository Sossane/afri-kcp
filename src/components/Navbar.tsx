import React from 'react';
import { Menu, X } from 'lucide-react';
import logo from '/partners/logo-afrik.png';
import { Link, useNavigate } from 'react-router-dom';

export default function Navbar() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = React.useState(false);

  const handleNavigation = (path: string) => {
    const id = path.split('#')[1];
    navigate('/');
    
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
      setIsOpen(false);
    }, 100);
  };

  const handleSolutionClick = (path: string) => {
    navigate(path);
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
    setIsOpen(false);
  };
  


  return (
    <nav className="bg-white/80 backdrop-blur-md fixed w-full z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center space-x-3">
            <Link 
              to="/" 
              onClick={() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
                setIsOpen(false);
              }}
            >
              <img 
                src={logo}
                alt="Afri-K Logo" 
                className="h-24 w-auto"
              />
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => handleNavigation('/#about')} 
              className="text-gray-600 hover:text-[rgba(144,36,53,0.898)] font-medium transition-all hover:scale-105"
            >
              À Propos
            </button>
            <div className="relative group">
              <button 
                onClick={() => handleNavigation('/#expertise')} 
                className="text-gray-600 hover:text-[rgba(144,36,53,0.898)] font-medium transition-all hover:scale-105"
              >
                Expertise
              </button>
              <div className="absolute invisible group-hover:visible opacity-0 group-hover:opacity-100 bg-white shadow-lg mt-2 rounded-lg transition-all duration-300 ease-in-out">
                <div className="py-1">
                  <Link 
                    to="/reseaux-solutions" 
                    onClick={() => handleSolutionClick('/reseaux-solutions')}
                    className="block px-4 py-2 text-gray-600 hover:bg-gray-50 hover:text-[rgba(144,36,53,0.898)] transition-colors duration-200"
                  >
                    Solutions Réseaux
                  </Link>
                  <Link 
                    to="/materielles-solutions" 
                    onClick={() => handleSolutionClick('/materielles-solutions')}
                    className="block px-4 py-2 text-gray-600 hover:bg-gray-50 hover:text-[rgba(144,36,53,0.898)] transition-colors duration-200"
                  >
                    Solutions Matérielles
                  </Link>
                  <Link 
                    to="/logicielles-solutions" 
                    onClick={() => handleSolutionClick('/logicielles-solutions')}
                    className="block px-4 py-2 text-gray-600 hover:bg-gray-50 hover:text-[rgba(144,36,53,0.898)] transition-colors duration-200"
                  >
                    Solutions Logicielles
                  </Link>
                </div>
              </div>
            </div>
            <button 
              onClick={() => handleNavigation('/#services')} 
              className="text-gray-600 hover:text-[rgba(144,36,53,0.898)] font-medium transition-all hover:scale-105"
            >
              Services
            </button>
            <a href="#contact" className="text-gray-600 hover:text-[rgba(144,36,53,0.898)] font-medium transition-all hover:scale-105">
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
            <button 
              onClick={() => handleNavigation('/#about')} 
              className="block w-full text-left px-4 py-3 text-gray-600 hover:text-[rgba(144,36,53,0.898)] hover:bg-gray-50 rounded-lg"
            >
              À Propos
            </button>
            <div className="relative group">
              <button 
                onClick={() => handleNavigation('/#expertise')} 
                className="block w-full text-left px-4 py-3 text-gray-600 hover:text-[rgba(144,36,53,0.898)] hover:bg-gray-50 rounded-lg"
              >
                Expertise
              </button>
              <div className="absolute invisible group-hover:visible opacity-0 group-hover:opacity-100 bg-white shadow-lg mt-2 rounded-lg transition-all duration-300 ease-in-out">
                <div className="py-1">
                  <Link 
                    to="/reseaux-solutions" 
                    onClick={() => handleSolutionClick('/reseaux-solutions')}
                    className="block px-4 py-2 text-gray-600 hover:bg-gray-50 hover:text-[rgba(144,36,53,0.898)] transition-colors duration-200"
                  >
                    Solutions Réseaux
                  </Link>
                  <Link 
                    to="/materielles-solutions" 
                    onClick={() => handleSolutionClick('/materielles-solutions')}
                    className="block px-4 py-2 text-gray-600 hover:bg-gray-50 hover:text-[rgba(144,36,53,0.898)] transition-colors duration-200"
                  >
                    Solutions Matérielles
                  </Link>
                  <Link 
                    to="/logicielles-solutions" 
                    onClick={() => handleSolutionClick('/logicielles-solutions')}
                    className="block px-4 py-2 text-gray-600 hover:bg-gray-50 hover:text-[rgba(144,36,53,0.898)] transition-colors duration-200"
                  >
                    Solutions Logicielles
                  </Link>
                </div>
              </div>
            </div>
            <button 
              onClick={() => handleNavigation('/#services')} 
              className="block w-full text-left px-4 py-3 text-gray-600 hover:text-[rgba(144,36,53,0.898)] hover:bg-gray-50 rounded-lg"
            >
              Services
            </button>
            <a href="#contact" className="block px-4 py-3 text-gray-600 hover:text-[rgba(144,36,53,0.898)] hover:bg-gray-50 rounded-lg">
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
