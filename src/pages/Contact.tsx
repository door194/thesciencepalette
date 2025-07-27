import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, MapPin, Phone, MessageCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
    setFormData({ name: '', email: '', message: '' });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      description: 'hello@sciencepalette.com',
      action: 'Send us your questions, ideas, or just say hi!',
    },
    {
      icon: MessageCircle,
      title: 'Social Media',
      description: '@sciencepalette',
      action: 'Follow us for daily science facts and behind-the-scenes content',
    },
    {
      icon: Phone,
      title: 'Collaboration',
      description: 'Want to collaborate?',
      action: 'We love working with young scientists and educators',
    },
  ];

  return (
    <div className="pt-24 min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-cobalt/10 to-coral/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            className="font-poppins font-bold text-5xl sm:text-6xl text-charcoal mb-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Get in{' '}
            <span className="bg-gradient-coral-purple bg-clip-text text-transparent">
              Touch
            </span>
          </motion.h1>
          
          <motion.p
            className="text-xl text-gray-600 mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Have a question? Want to collaborate? Or just want to share your love for science? We'd love to hear from you!
          </motion.p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            className="bg-white rounded-2xl shadow-xl p-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-poppins font-bold text-3xl text-charcoal mb-6">
              Send us a message
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Your name, brave explorer?
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-coral focus:border-transparent transition-colors duration-200"
                  placeholder="Enter your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  How shall we reply?
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-coral focus:border-transparent transition-colors duration-200"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  What's on your curious mind?
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-coral focus:border-transparent transition-colors duration-200 resize-none"
                  placeholder="Tell us your thoughts, questions, or ideas..."
                />
              </div>
              
              <motion.button
                type="submit"
                className="w-full px-8 py-4 bg-gradient-coral-purple text-white rounded-full font-semibold hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={isSubmitted}
              >
                {isSubmitted ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Message Sent! ✈️
                  </>
                ) : (
                  <>
                    <Send className="h-5 w-5" />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
            
            {isSubmitted && (
              <motion.div
                className="mt-4 p-4 bg-green-100 border border-green-200 rounded-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <p className="text-green-800 font-medium">
                  🎉 Thanks for reaching out! We'll get back to you within 24 hours.
                </p>
              </motion.div>
            )}
          </motion.div>

          {/* Contact Information */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div>
              <h2 className="font-poppins font-bold text-3xl text-charcoal mb-6">
                Other ways to connect
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                We're always excited to connect with fellow science enthusiasts, educators, and curious minds. Choose the way that works best for you!
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-gradient-coral-purple rounded-xl">
                      <info.icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-poppins font-semibold text-lg text-charcoal mb-1">
                        {info.title}
                      </h3>
                      <p className="font-medium text-coral mb-2">
                        {info.description}
                      </p>
                      <p className="text-gray-600 text-sm">
                        {info.action}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Map placeholder */}
            <motion.div
              className="bg-gradient-to-br from-mint/20 to-cobalt/20 rounded-2xl p-8 text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <MapPin className="h-12 w-12 text-cobalt mx-auto mb-4" />
              <h3 className="font-poppins font-semibold text-lg text-charcoal mb-2">
                Based Everywhere
              </h3>
              <p className="text-gray-600">
                We're a global community of science lovers, working remotely to bring you the best content from around the world.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="font-poppins font-bold text-4xl text-charcoal mb-6">
              Quick Answers
            </h2>
            <p className="text-xl text-gray-600">
              Common questions from our curious community
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                question: 'Can I suggest a topic?',
                answer: 'Absolutely! We love topic suggestions from our community. Send us your ideas and we might feature them in our next post or video.',
              },
              {
                question: 'Do you accept guest posts?',
                answer: 'Yes! If you\'re a young scientist or educator with an amazing story to share, we\'d love to hear from you.',
              },
              {
                question: 'How often do you post?',
                answer: 'We publish new blog posts twice a week, release podcast episodes bi-weekly, and share videos regularly on our social channels.',
              },
              {
                question: 'Can I use your content for education?',
                answer: 'Teachers and educators are welcome to use our content for educational purposes. Just make sure to credit us and link back to our site.',
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg"
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

export default Contact;