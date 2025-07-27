import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Video, Headphones, Star, Mail } from 'lucide-react';
import Hero from '../components/Hero';
import FeatureCard from '../components/FeatureCard';

const Homepage = () => {
  const features = [
    {
      icon: BookOpen,
      title: 'Bite-Sized Science',
      description: 'Quick, engaging articles that make complex topics feel simple and fun.',
      buttonText: 'Read',
      gradientClass: 'bg-gradient-coral-purple',
    },
    {
      icon: Video,
      title: 'Science in Shorts',
      description: 'Amazing science facts in short, visually stunning video format.',
      buttonText: 'Watch',
      gradientClass: 'bg-gradient-cobalt-mint',
    },
    {
      icon: Headphones,
      title: 'Stories Behind the Science',
      description: 'Hear real stories from young scientists and discover their journeys.',
      buttonText: 'Listen',
      gradientClass: 'bg-gradient-mint-coral',
    },
  ];

  const featuredPosts = [
    {
      title: 'Why Do Cats Always Land on Their Feet?',
      tag: 'Weird Science',
      image: 'https://images.pexels.com/photos/1404819/pexels-photo-1404819.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
    },
    {
      title: 'The Science of Dreams',
      tag: 'Brain Science',
      image: 'https://images.pexels.com/photos/3560159/pexels-photo-3560159.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
    },
    {
      title: 'How Black Holes Bend Time',
      tag: 'Physics',
      image: 'https://images.pexels.com/photos/73873/star-clusters-rosette-nebula-star-galaxies-73873.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
    },
    {
      title: 'Why Music Gives You Chills',
      tag: 'Neuroscience',
      image: 'https://images.pexels.com/photos/164938/pexels-photo-164938.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
    },
  ];

  const testimonials = [
    {
      text: "I never knew science could be this fun!",
      emoji: "🤩",
    },
    {
      text: "Finally, science that doesn't feel like homework!",
      emoji: "🎉",
    },
    {
      text: "My friends think I'm a science genius now!",
      emoji: "🧠",
    },
  ];

  return (
    <div className="pt-16">
      <Hero />
      
      {/* What We Do Section */}
      <section id="what-we-do" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="font-poppins font-bold text-4xl sm:text-5xl text-charcoal mb-6">
              What We Do
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Three ways to explore the amazing world of science
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                {...feature}
                delay={index * 0.2}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Posts Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="font-poppins font-bold text-4xl sm:text-5xl text-charcoal mb-6">
              Featured Content
            </h2>
            <p className="text-xl text-gray-600">
              Check out our latest science discoveries
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredPosts.map((post, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                viewport={{ once: true }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-coral text-white text-sm font-medium rounded-full">
                      {post.tag}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-poppins font-semibold text-lg text-charcoal group-hover:text-coral transition-colors duration-200">
                    {post.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="font-poppins font-bold text-4xl sm:text-5xl text-charcoal mb-6">
              Why Teens Love This
            </h2>
            <p className="text-xl text-gray-600">
              Real reactions from real curious minds
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-mint/10 to-coral/10 p-8 rounded-2xl text-center"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl mb-4">{testimonial.emoji}</div>
                <p className="text-lg font-medium text-charcoal italic">
                  "{testimonial.text}"
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gradient-to-br from-cobalt/10 to-deep-purple/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-gradient-coral-purple rounded-2xl">
                <Mail className="h-8 w-8 text-white" />
              </div>
            </div>
            <h2 className="font-poppins font-bold text-4xl text-charcoal mb-4">
              Get one cool science fact every week
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Join thousands of curious minds getting their weekly dose of wonder
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email, brave explorer?"
                className="flex-1 px-6 py-4 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-coral focus:border-transparent"
              />
              <button className="px-8 py-4 bg-gradient-coral-purple text-white rounded-full font-semibold hover:shadow-lg transition-all duration-200 hover:scale-105">
                Send me facts!
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;