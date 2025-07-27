import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const scrollToContent = () => {
    document.getElementById('what-we-do')?.scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-cobalt/20 via-mint/20 to-coral/20">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1142950/pexels-photo-1142950.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')] bg-cover bg-center opacity-10"></div>
        
        {/* Floating Elements */}
        <motion.div
          className="absolute top-20 left-10 w-20 h-20 bg-coral/20 rounded-full"
          animate={{ y: [-20, 20, -20] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-32 h-32 bg-cobalt/20 rounded-full"
          animate={{ y: [20, -20, 20] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
        <motion.div
          className="absolute top-1/3 right-10 w-16 h-16 bg-mint/20 rounded-full"
          animate={{ y: [-30, 30, -30] }}
          transition={{ duration: 5, repeat: Infinity }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <motion.h1
          className="font-poppins font-bold text-4xl sm:text-6xl lg:text-7xl text-charcoal mb-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Where curiosity gets{' '}
          <span className="bg-gradient-coral-purple bg-clip-text text-transparent">
            colorful
          </span>
        </motion.h1>

        <motion.p
          className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Making science feel like art for curious teenagers everywhere
        </motion.p>

        <motion.button
          onClick={scrollToContent}
          className="px-8 py-4 bg-gradient-coral-purple text-white rounded-full font-semibold text-lg hover:shadow-xl transition-all duration-300 animate-glow"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Explore Science
        </motion.button>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="h-8 w-8 text-gray-400" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;