import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Filter } from 'lucide-react';

const Videos = () => {
  const [selectedFilter, setSelectedFilter] = useState('All');

  const filters = ['All', 'Biology', 'Physics', 'Chemistry', 'Random'];

  const videos = [
    {
      id: 1,
      title: 'Why Octopuses Have Blue Blood',
      thumbnail: 'https://images.pexels.com/photos/3046639/pexels-photo-3046639.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      duration: '0:45',
      category: 'Biology',
      badge: '🧠 Mind = Blown',
      views: '2.1M',
    },
    {
      id: 2,
      title: 'How Soap Destroys Viruses',
      thumbnail: 'https://images.pexels.com/photos/4465831/pexels-photo-4465831.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      duration: '1:20',
      category: 'Chemistry',
      badge: '🧠 Mind = Blown',
      views: '1.8M',
    },
    {
      id: 3,
      title: 'The Physics of Skateboarding',
      thumbnail: 'https://images.pexels.com/photos/416978/pexels-photo-416978.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      duration: '0:58',
      category: 'Physics',
      badge: '🤯 Physics Fun',
      views: '3.2M',
    },
    {
      id: 4,
      title: 'Why Flamingos Are Pink',
      thumbnail: 'https://images.pexels.com/photos/133037/pexels-photo-133037.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      duration: '0:52',
      category: 'Biology',
      badge: '🦩 Nature Facts',
      views: '1.5M',
    },
    {
      id: 5,
      title: 'How Glow Sticks Work',
      thumbnail: 'https://images.pexels.com/photos/1061640/pexels-photo-1061640.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      duration: '1:15',
      category: 'Chemistry',
      badge: '✨ Chemical Magic',
      views: '2.7M',
    },
    {
      id: 6,
      title: 'Why Pizza Boxes Are Square',
      thumbnail: 'https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      duration: '0:38',
      category: 'Random',
      badge: '🍕 Random Science',
      views: '4.1M',
    },
    {
      id: 7,
      title: 'The Science of Hiccups',
      thumbnail: 'https://images.pexels.com/photos/3771115/pexels-photo-3771115.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      duration: '1:05',
      category: 'Biology',
      badge: '😤 Body Science',
      views: '1.9M',
    },
    {
      id: 8,
      title: 'How Magnets Really Work',
      thumbnail: 'https://images.pexels.com/photos/7876050/pexels-photo-7876050.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      duration: '1:32',
      category: 'Physics',
      badge: '🧲 Magnetic Mystery',
      views: '2.3M',
    },
    {
      id: 9,
      title: 'Why Onions Make You Cry',
      thumbnail: 'https://images.pexels.com/photos/1618543/pexels-photo-1618543.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      duration: '0:48',
      category: 'Chemistry',
      badge: '😭 Chemistry Facts',
      views: '1.6M',
    },
  ];

  const filteredVideos = selectedFilter === 'All' 
    ? videos 
    : videos.filter(video => video.category === selectedFilter);

  return (
    <div className="pt-24 min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-deep-purple/10 to-coral/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            className="font-poppins font-bold text-5xl sm:text-6xl text-charcoal mb-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Science in{' '}
            <span className="bg-gradient-cobalt-mint bg-clip-text text-transparent">
              Shorts
            </span>
          </motion.h1>
          
          <motion.p
            className="text-xl text-gray-600 mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Amazing science facts in bite-sized, visually stunning videos
          </motion.p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-12 bg-white sticky top-16 z-30 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <Filter className="h-5 w-5 text-gray-400" />
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setSelectedFilter(filter)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                  selectedFilter === filter
                    ? 'bg-gradient-cobalt-mint text-white shadow-lg'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Videos Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredVideos.map((video, index) => (
              <motion.div
                key={video.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center">
                      <Play className="h-6 w-6 text-charcoal ml-1" />
                    </div>
                  </div>
                  
                  {/* Duration Badge */}
                  <div className="absolute bottom-4 right-4 px-2 py-1 bg-black/70 text-white text-sm rounded">
                    {video.duration}
                  </div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-cobalt text-white text-sm font-medium rounded-full">
                      {video.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="font-poppins font-bold text-lg text-charcoal mb-3 group-hover:text-cobalt transition-colors duration-200">
                    {video.title}
                  </h3>
                  
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 bg-gradient-to-r from-mint/20 to-coral/20 text-charcoal text-sm font-medium rounded-full">
                      {video.badge}
                    </span>
                    <span className="text-sm text-gray-500">
                      {video.views} views
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Load More Button */}
      <section className="py-16 bg-gray-50">
        <div className="text-center">
          <motion.button
            className="px-8 py-4 bg-gradient-purple-cobalt text-white rounded-full font-semibold hover:shadow-lg transition-all duration-200"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Load More Mind-Blowing Videos
          </motion.button>
        </div>
      </section>

      {/* YouTube Integration CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="font-poppins font-bold text-4xl text-charcoal mb-6">
              Want to see these on YouTube?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Subscribe to our channel for the latest science shorts and behind-the-scenes content!
            </p>
            <button className="px-8 py-4 bg-red-600 text-white rounded-full font-semibold hover:bg-red-700 transition-colors duration-200 hover:scale-105 transform">
              Subscribe on YouTube
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Videos;