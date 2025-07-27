import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Clock, Tag, Search } from 'lucide-react';

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Weird Facts', 'History of Science', 'Teen Genius', 'Brain Science', 'Physics', 'Biology'];

  const blogPosts = [
    {
      id: 1,
      title: 'Why Do Cats Always Land on Their Feet?',
      excerpt: 'The physics behind feline flexibility and the amazing righting reflex that saves countless kitty lives.',
      image: 'https://images.pexels.com/photos/1404819/pexels-photo-1404819.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      category: 'Weird Facts',
      readTime: '3 min read',
      date: '2 days ago',
    },
    {
      id: 2,
      title: 'The Science of Dreams: What Happens When We Sleep',
      excerpt: 'Dive into the mysterious world of REM sleep and discover why your brain creates the wildest stories while you rest.',
      image: 'https://images.pexels.com/photos/3560159/pexels-photo-3560159.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      category: 'Brain Science',
      readTime: '5 min read',
      date: '1 week ago',
    },
    {
      id: 3,
      title: 'How Black Holes Bend Time and Space',
      excerpt: 'Einstein\'s mind-bending theories explained in a way that will make you question everything you thought you knew about reality.',
      image: 'https://images.pexels.com/photos/73873/star-clusters-rosette-nebula-star-galaxies-73873.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      category: 'Physics',
      readTime: '7 min read',
      date: '2 weeks ago',
    },
    {
      id: 4,
      title: 'Why Music Gives You Chills',
      excerpt: 'The neuroscience behind frisson - that spine-tingling feeling when your favorite song hits just right.',
      image: 'https://images.pexels.com/photos/164938/pexels-photo-164938.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      category: 'Brain Science',
      readTime: '4 min read',
      date: '3 weeks ago',
    },
    {
      id: 5,
      title: 'Marie Curie: The Teen Who Changed Chemistry Forever',
      excerpt: 'How a curious teenager from Poland became the first woman to win a Nobel Prize and paved the way for modern nuclear science.',
      image: 'https://images.pexels.com/photos/8190804/pexels-photo-8190804.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      category: 'Teen Genius',
      readTime: '6 min read',
      date: '1 month ago',
    },
    {
      id: 6,
      title: 'The Immortal Jellyfish That Defies Death',
      excerpt: 'Meet Turritopsis dohrnii, the only known biologically immortal animal that can reverse its aging process.',
      image: 'https://images.pexels.com/photos/1076758/pexels-photo-1076758.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      category: 'Biology',
      readTime: '4 min read',
      date: '1 month ago',
    },
  ];

  const filteredPosts = selectedCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <div className="pt-24 min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-mint/10 to-cobalt/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            className="font-poppins font-bold text-5xl sm:text-6xl text-charcoal mb-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Bite-Sized{' '}
            <span className="bg-gradient-coral-purple bg-clip-text text-transparent">
              Science
            </span>
          </motion.h1>
          
          <motion.p
            className="text-xl text-gray-600 mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Quick, engaging articles that make complex topics feel simple and fun
          </motion.p>

          {/* Search Bar */}
          <motion.div
            className="relative max-w-md mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search curious topics..."
              className="w-full pl-12 pr-4 py-4 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-coral focus:border-transparent"
            />
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 bg-white sticky top-16 z-30 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                  selectedCategory === category
                    ? 'bg-gradient-coral-purple text-white shadow-lg'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <motion.article
                key={post.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-coral text-white text-sm font-medium rounded-full flex items-center">
                      <Tag className="h-3 w-3 mr-1" />
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h2 className="font-poppins font-bold text-xl text-charcoal mb-3 group-hover:text-coral transition-colors duration-200">
                    {post.title}
                  </h2>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {post.readTime}
                    </span>
                    <span>{post.date}</span>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Load More Button */}
      <section className="py-16 bg-gray-50">
        <div className="text-center">
          <motion.button
            className="px-8 py-4 bg-gradient-cobalt-mint text-white rounded-full font-semibold hover:shadow-lg transition-all duration-200 hover:scale-105"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Load More Amazing Science
          </motion.button>
        </div>
      </section>
    </div>
  );
};

export default Blog;