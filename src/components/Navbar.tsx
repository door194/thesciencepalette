import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Atom } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/blog', label: 'Blog' },
    { path: '/videos', label: 'Videos' },
    { path: '/podcast', label: 'Podcast' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <motion.nav 
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="p-2 bg-gradient-coral-purple rounded-lg group-hover:scale-110 transition-transform duration-200">
              <Atom className="h-6 w-6 text-white" />
            </div>
            <span className="font-poppins font-bold text-xl text-charcoal">
              The Science Palette
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative px-3 py-2 text-sm font-medium transition-colors duration-200 hover:text-coral group ${
                  location.pathname === link.path ? 'text-coral' : 'text-charcoal'
                }`}
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-coral transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
            <Link
              to="/blog"
              className="px-6 py-2 bg-gradient-coral-purple text-white rounded-full font-medium hover:shadow-lg hover:scale-105 transition-all duration-200 animate-glow"
            >
              Start Exploring
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden bg-white border-t border-gray-100"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="px-4 py-4 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`block px-3 py-2 rounded-lg text-base font-medium transition-colors duration-200 ${
                    location.pathname === link.path 
                      ? 'text-coral bg-coral/10' 
                      : 'text-charcoal hover:text-coral hover:bg-gray-50'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/blog"
                className="block px-3 py-2 mt-4 bg-gradient-coral-purple text-white rounded-lg text-center font-medium"
              >
                Start Exploring
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;