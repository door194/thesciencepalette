import React from 'react';
import { motion } from 'framer-motion';
import { Target, Users, Lightbulb, Heart } from 'lucide-react';

const About = () => {
  const timeline = [
    {
      year: '2024',
      title: 'The Beginning',
      description: 'Launched The Science Palette with a mission to make science accessible and fun for teenagers worldwide.',
      color: 'bg-coral',
    },
    {
      year: '2025',
      title: 'Growing the Palette',
      description: 'Added podcast series and video shorts, reaching thousands of curious minds across the globe.',
      color: 'bg-cobalt',
    },
    {
      year: 'Future',
      title: 'Endless Possibilities',
      description: 'Expanding to interactive experiments, virtual labs, and partnerships with young scientists everywhere.',
      color: 'bg-deep-purple',
    },
  ];

  const values = [
    {
      icon: Target,
      title: 'Curiosity First',
      description: 'Every piece of content starts with a question that makes you go "wait, really?"',
      color: 'text-coral',
    },
    {
      icon: Users,
      title: 'For Teens, By Passion',
      description: 'Created specifically for the teenage mind - no talking down, just real science made accessible.',
      color: 'text-cobalt',
    },
    {
      icon: Lightbulb,
      title: 'Make It Stick',
      description: 'Science facts that you\'ll actually remember and want to share with friends.',
      color: 'text-mint',
    },
    {
      icon: Heart,
      title: 'Science is Beautiful',
      description: 'Treating scientific discoveries like the art they truly are - visual, emotional, and inspiring.',
      color: 'text-deep-purple',
    },
  ];

  return (
    <div className="pt-24 min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-cobalt/10 to-mint/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            className="font-poppins font-bold text-5xl sm:text-6xl text-charcoal mb-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            What is{' '}
            <span className="bg-gradient-coral-purple bg-clip-text text-transparent">
              The Science Palette?
            </span>
          </motion.h1>
          
          <motion.p
            className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            We're on a mission to make science feel like art - colorful, engaging, and absolutely unforgettable.
          </motion.p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="font-poppins font-bold text-4xl text-charcoal mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Science doesn't have to be boring textbooks and complicated formulas. We believe every teenager deserves to experience the wonder, creativity, and pure joy that comes from understanding how our world works.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Through bite-sized articles, engaging videos, and inspiring podcast stories, we're painting science in all its beautiful colors - making it accessible, relatable, and absolutely fascinating.
              </p>
            </motion.div>
            
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img
                src="https://images.pexels.com/photos/256541/pexels-photo-256541.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Students exploring science"
                className="rounded-2xl shadow-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-coral/20 to-cobalt/20 rounded-2xl"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="font-poppins font-bold text-4xl text-charcoal mb-6">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600">
              From idea to impact - here's how we're growing
            </p>
          </motion.div>

          <div className="space-y-8">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                className="flex items-start space-x-6"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className={`flex-shrink-0 w-16 h-16 ${item.color} rounded-full flex items-center justify-center text-white font-poppins font-bold text-lg`}>
                  {item.year}
                </div>
                <div className="flex-1 bg-white p-6 rounded-2xl shadow-lg">
                  <h3 className="font-poppins font-bold text-xl text-charcoal mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="font-poppins font-bold text-4xl text-charcoal mb-6">
              What We Believe
            </h2>
            <p className="text-xl text-gray-600">
              The values that guide everything we create
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <value.icon className={`h-12 w-12 ${value.color} mb-4`} />
                <h3 className="font-poppins font-bold text-xl text-charcoal mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-deep-purple/10 to-coral/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="font-poppins font-bold text-4xl text-charcoal mb-6">
              Ready to add some color to your curiosity?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Join thousands of teens who are discovering that science is anything but boring.
            </p>
            <button className="px-8 py-4 bg-gradient-coral-purple text-white rounded-full font-semibold text-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              Start Exploring
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;