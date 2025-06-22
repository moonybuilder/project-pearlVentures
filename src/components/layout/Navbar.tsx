import React, { useState, useEffect } from 'react';
import { Menu, X, Compass } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#" className="flex items-center gap-2">
          <Compass size={28} className="text-emerald-600" />
          <span className={`font-bold text-xl ${isScrolled ? 'text-gray-800' : 'text-white'}`}>
            Pearl Ventures
          </span>
        </a>
        
        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-8">
          {['Destinations', 'Tours', 'Experiences', 'About', 'Contact'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className={`font-medium ${
                isScrolled ? 'text-gray-700 hover:text-emerald-600' : 'text-white hover:text-emerald-200'
              } transition-colors`}
            >
              {item}
            </a>
          ))}
        </nav>
        
        <div className="hidden md:flex gap-4">
          <button className={`font-medium ${
            isScrolled ? 'text-gray-700 hover:text-emerald-600' : 'text-white hover:text-emerald-200'
          } transition-colors`}>
            Login
          </button>
          <button className="bg-emerald-600 hover:bg-emerald-700 text-white py-2 px-6 rounded-full font-medium transition-colors">
            Sign Up
          </button>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <X size={24} className={isScrolled ? 'text-gray-800' : 'text-white'} />
          ) : (
            <Menu size={24} className={isScrolled ? 'text-gray-800' : 'text-white'} />
          )}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-xl absolute top-full left-0 right-0 p-4 flex flex-col gap-4">
          {['Destinations', 'Tours', 'Experiences', 'About', 'Contact'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className="font-medium text-gray-700 hover:text-emerald-600 transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              {item}
            </a>
          ))}
          <div className="flex flex-col gap-2 pt-2 border-t border-gray-100">
            <button className="font-medium text-gray-700 hover:text-emerald-600 transition-colors py-2">
              Login
            </button>
            <button className="bg-emerald-600 hover:bg-emerald-700 text-white py-3 px-6 rounded-full font-medium transition-colors">
              Sign Up
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;