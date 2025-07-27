import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Youtube, Headphones, Mail, Atom } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Youtube, href: '#', label: 'YouTube' },
    { icon: Headphones, href: '#', label: 'Spotify' },
    { icon: Mail, href: 'mailto:hello@sciencepalette.com', label: 'Email' },
  ];

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/blog', label: 'Blog' },
    { path: '/videos', label: 'Videos' },
    { path: '/podcast', label: 'Podcast' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <footer className="bg-charcoal text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="p-2 bg-gradient-coral-purple rounded-lg">
                <Atom className="h-6 w-6 text-white" />
              </div>
              <span className="font-poppins font-bold text-xl">
                The Science Palette
              </span>
            </div>
            <p className="text-gray-300 text-sm max-w-md">
              Where curiosity gets colorful. Making science feel like art for curious teenagers everywhere.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="space-y-4">
            <h3 className="font-poppins font-semibold text-lg">Navigate</h3>
            <div className="grid grid-cols-2 gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="font-poppins font-semibold text-lg">Connect</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  className="p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-all duration-200"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 The Science Palette. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm mt-2 md:mt-0">
            Made with 💜 for curious minds
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;