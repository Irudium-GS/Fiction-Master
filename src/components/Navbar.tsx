import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';
import logo from './Assets/Logo.png';
import CartIcon from './CartIcon';
import WUC from "../pages/WorkUnderConstruction";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    // { name: 'Download', path: '/Download' },
    { name: 'Download', path: '/WorkUnderConstruction' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      // className={`fixed w-full z-50 transition-all duration-300 ${
      //   scrolled ? 'bg-black/80 backdrop-blur-sm' : 'bg-transparent'
      // }`}
      className={`fixed w-full z-50 transition-all duration-300 ${
        location.pathname === '/' ? (scrolled ? 'bg-black/80 backdrop-blur-sm' : 'bg-transparent') : 'bg-black/90 backdrop-blur-sm'
      }`}
      
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src={logo} alt="Fiction Master" className="h-7 w-auto sm:w-auto sm:h-7 lg:w-auto lg:h-10" />
            <h3 className="text-base sm:text-lg lg:text-3xl font-extrabold text-gray-300 pl-4">Fiction Master</h3>
          </Link>

          {/* Desktop Navigation (with Cart & Login button) */}
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-lg font-medium transition-colors duration-200 ${
                  location.pathname === link.path
                    ? 'text-red-500'
                    : 'text-gray-300 hover:text-red-400'
                }`}
              >
                {link.name}
              </Link>
            ))}
            
            {/* Cart Icon */}
            {/* <CartIcon /> */}
            
            {/* Login Button (Visible only in Desktop) */}
            {/* <Link
              to="/login"
              className="px-4 py-2 bg-red-600 font-semibold text-white rounded-md hover:bg-red-700 transition-colors tracking-wide">
              Login
            </Link> */}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            {/* <CartIcon /> */}
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-300 hover:text-red-400">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div> 
        </div>

        {/* Mobile Menu (Login button removed) */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-black/95 backdrop-blur-sm"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`block px-3 py-2 rounded-md text-base font-medium ${
                    location.pathname === link.path
                      ? 'text-red-500 bg-gray-900'
                      : 'text-gray-300 hover:text-red-400 hover:bg-gray-800'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;