import React from 'react';
import { motion } from 'framer-motion';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  buttonText: string;
  gradientClass: string;
  delay?: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon: Icon,
  title,
  description,
  buttonText,
  gradientClass,
  delay = 0,
}) => {
  return (
    <motion.div
      className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -10 }}
      viewport={{ once: true }}
    >
      <div className={`w-16 h-16 ${gradientClass} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
        <Icon className="h-8 w-8 text-white" />
      </div>
      
      <h3 className="font-poppins font-bold text-xl text-charcoal mb-4">
        {title}
      </h3>
      
      <p className="text-gray-600 mb-6 leading-relaxed">
        {description}
      </p>
      
      <button className={`px-6 py-3 ${gradientClass} text-white rounded-full font-semibold hover:shadow-lg transition-all duration-200 hover:scale-105`}>
        {buttonText}
      </button>
    </motion.div>
  );
};

export default FeatureCard;