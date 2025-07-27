import React from 'react';
import { motion } from 'framer-motion';
import { Download, Star, ShoppingBag } from 'lucide-react';

const Shop = () => {
  const products = [
    {
      id: 1,
      title: 'Science Fact Pack: Weird Biology',
      description: 'A digital collection of 50+ mind-blowing biology facts with stunning illustrations. Perfect for curious minds who love weird science!',
      price: '$4.99',
      image: 'https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      rating: 4.9,
      downloads: '2.1k',
      tags: ['Digital Download', 'Biology', 'Facts'],
    },
    {
      id: 2,
      title: 'Colorful Molecule Posters Set',
      description: 'Beautiful, scientifically accurate posters of famous molecules like DNA, caffeine, and dopamine. High-resolution files ready for printing.',
      price: '$7.99',
      image: 'https://images.pexels.com/photos/256541/pexels-photo-256541.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      rating: 4.8,
      downloads: '1.8k',
      tags: ['Printable', 'Chemistry', 'Art'],
    },
    {
      id: 3,
      title: 'Physics Equations Cheat Sheet',
      description: 'A beautifully designed, comprehensive guide to essential physics equations with explanations and real-world applications.',
      price: '$3.99',
      image: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      rating: 4.7,
      downloads: '3.2k',
      tags: ['Study Guide', 'Physics', 'Reference'],
    },
    {
      id: 4,
      title: 'Periodic Table Art Print',
      description: 'A stunning, modern interpretation of the periodic table designed for young scientists. Perfect for dorm rooms and study spaces.',
      price: '$5.99',
      image: 'https://images.pexels.com/photos/207691/pexels-photo-207691.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      rating: 4.9,
      downloads: '2.7k',
      tags: ['Wall Art', 'Chemistry', 'Decor'],
    },
    {
      id: 5,
      title: 'Astronomy Wonder Pack',
      description: 'Discover the cosmos with this collection of space facts, constellation guides, and breathtaking universe visuals.',
      price: '$6.99',
      image: 'https://images.pexels.com/photos/73873/star-clusters-rosette-nebula-star-galaxies-73873.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      rating: 4.8,
      downloads: '1.9k',
      tags: ['Astronomy', 'Space', 'Educational'],
    },
    {
      id: 6,
      title: 'Lab Safety Sticker Pack',
      description: 'Fun, colorful stickers featuring lab safety reminders and science puns. Perfect for laptops, water bottles, and notebooks.',
      price: '$2.99',
      image: 'https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      rating: 4.6,
      downloads: '4.1k',
      tags: ['Stickers', 'Safety', 'Fun'],
    },
  ];

  return (
    <div className="pt-24 min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-mint/10 to-deep-purple/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            className="font-poppins font-bold text-5xl sm:text-6xl text-charcoal mb-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Science{' '}
            <span className="bg-gradient-coral-purple bg-clip-text text-transparent">
              Shop
            </span>
          </motion.h1>
          
          <motion.p
            className="text-xl text-gray-600 mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Digital downloads and printables to fuel your scientific curiosity
          </motion.p>

          <motion.div
            className="flex justify-center items-center gap-4 text-sm text-gray-500"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="flex items-center gap-1">
              <Download className="h-4 w-4" />
              <span>Instant Download</span>
            </div>
            <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4" />
              <span>High Quality</span>
            </div>
            <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
            <span>Money-Back Guarantee</span>
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group border border-gray-100"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-white/90 text-charcoal text-sm font-semibold rounded-full">
                      {product.price}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="font-poppins font-bold text-xl text-charcoal mb-3 group-hover:text-coral transition-colors duration-200">
                    {product.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                    {product.description}
                  </p>
                  
                  <div className="flex items-center gap-4 mb-4 text-sm">
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="font-medium">{product.rating}</span>
                    </div>
                    <div className="flex items-center gap-1 text-gray-500">
                      <Download className="h-4 w-4" />
                      <span>{product.downloads} downloads</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {product.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <button className="w-full px-6 py-3 bg-gradient-coral-purple text-white rounded-full font-semibold hover:shadow-lg transition-all duration-200 hover:scale-105 flex items-center justify-center gap-2">
                    <ShoppingBag className="h-4 w-4" />
                    Buy Now - {product.price}
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Ko-fi Integration Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="font-poppins font-bold text-4xl text-charcoal mb-6">
              Love what we do?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Support our mission to make science accessible and fun for everyone. Every contribution helps us create more amazing content!
            </p>
            
            <div className="flex justify-center gap-4 flex-wrap">
              <button className="px-8 py-4 bg-gradient-to-r from-orange-400 to-pink-400 text-white rounded-full font-semibold hover:shadow-lg transition-all duration-200 hover:scale-105 flex items-center gap-2">
                ☕ Buy us a coffee
              </button>
              <button className="px-8 py-4 bg-gradient-cobalt-mint text-white rounded-full font-semibold hover:shadow-lg transition-all duration-200 hover:scale-105">
                Become a Supporter
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="font-poppins font-bold text-4xl text-charcoal mb-12 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Frequently Asked Questions
          </motion.h2>

          <div className="space-y-6">
            {[
              {
                question: 'How do I download my purchases?',
                answer: 'After purchase, you\'ll receive an instant download link via email. All files are high-quality PDFs or image files ready for use.',
              },
              {
                question: 'Can I print the digital downloads?',
                answer: 'Absolutely! All our printable products are designed for home printing and include instructions for best results.',
              },
              {
                question: 'What if I\'m not satisfied with my purchase?',
                answer: 'We offer a 30-day money-back guarantee. If you\'re not happy with your purchase, just contact us for a full refund.',
              },
              {
                question: 'Are there discounts for educators?',
                answer: 'Yes! Teachers and educators get 20% off all purchases. Contact us with your educational email for a discount code.',
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 rounded-2xl p-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="font-poppins font-semibold text-lg text-charcoal mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Shop;