import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, Headphones, Clock, Tag } from 'lucide-react';

const Podcast = () => {
  const [playingEpisode, setPlayingEpisode] = useState<number | null>(null);

  const episodes = [
    {
      id: 1,
      title: 'From Teen to MD: My Journey Through Medical School',
      description: 'Join us as we chat with Dr. Sarah Chen about her incredible journey from curious teenager to young doctor, sharing the challenges and triumphs along the way.',
      duration: '42:15',
      date: '2 days ago',
      tags: ['Teen MD Life', 'Career Journey'],
      spotifyUrl: '#',
      summary: 'In this inspiring episode, we dive deep into the world of young medical professionals. Dr. Sarah Chen shares her personal story of how her teenage curiosity about the human body led her to pursue medicine, the challenges she faced in medical school, and her advice for other teens interested in healthcare careers.',
    },
    {
      id: 2,
      title: 'Global Health Heroes: Fighting Disease Worldwide',
      description: 'Discover how young scientists are tackling global health challenges and making a real difference in communities around the world.',
      duration: '38:20',
      date: '1 week ago',
      tags: ['Global Health', 'Youth Impact'],
      spotifyUrl: '#',
      summary: 'This episode highlights young changemakers in global health. We explore innovative solutions being developed by teenagers and young adults to address health disparities, infectious diseases, and healthcare access in underserved communities worldwide.',
    },
    {
      id: 3,
      title: 'The Science of Procrastination (And How to Beat It)',
      description: 'Ever wonder why you put off that science homework? We break down the neuroscience behind procrastination and share science-backed tips to overcome it.',
      duration: '29:45',
      date: '2 weeks ago',
      tags: ['Brain Science', 'Study Tips'],
      spotifyUrl: '#',
      summary: 'A fun and educational dive into the psychology and neuroscience of procrastination. Perfect for students looking to understand why their brains work against them sometimes and practical strategies to improve productivity and learning.',
    },
    {
      id: 4,
      title: 'Climate Change Champions: Teen Activists Making Waves',
      description: 'Meet the inspiring teenagers who are leading the fight against climate change and learn about the science behind their activism.',
      duration: '45:30',
      date: '3 weeks ago',
      tags: ['Climate Science', 'Youth Activism'],
      spotifyUrl: '#',
      summary: 'An empowering conversation with young climate activists who are using science to drive change. We discuss the latest climate research, innovative solutions, and how teenagers can get involved in environmental advocacy.',
    },
    {
      id: 5,
      title: 'The Future of Food: Lab-Grown Meat and Beyond',
      description: 'Explore the cutting-edge science behind alternative proteins and how they might change what we eat in the future.',
      duration: '35:12',
      date: '1 month ago',
      tags: ['Food Science', 'Future Tech'],
      spotifyUrl: '#',
      summary: 'A fascinating look at food technology and how science is revolutionizing what we eat. From lab-grown meat to plant-based alternatives, we explore the innovations that could feed the world sustainably.',
    },
    {
      id: 6,
      title: 'Mental Health and Science: Breaking the Stigma',
      description: 'A thoughtful discussion about mental health from a scientific perspective, featuring young advocates and researchers.',
      duration: '41:18',
      date: '1 month ago',
      tags: ['Mental Health', 'Youth Voices'],
      spotifyUrl: '#',
      summary: 'An important conversation about mental health, combining scientific understanding with personal experiences. We feature young mental health advocates and explore how science is helping us better understand and treat mental health conditions.',
    },
  ];

  const [expandedEpisodes, setExpandedEpisodes] = useState<Set<number>>(new Set());

  const toggleEpisodeSummary = (episodeId: number) => {
    const newExpanded = new Set(expandedEpisodes);
    if (newExpanded.has(episodeId)) {
      newExpanded.delete(episodeId);
    } else {
      newExpanded.add(episodeId);
    }
    setExpandedEpisodes(newExpanded);
  };

  const togglePlay = (episodeId: number) => {
    setPlayingEpisode(playingEpisode === episodeId ? null : episodeId);
  };

  return (
    <div className="pt-24 min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-coral/10 to-deep-purple/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            className="font-poppins font-bold text-5xl sm:text-6xl text-charcoal mb-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Stories Behind the{' '}
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
            Real stories from young scientists, medical students, and curious minds changing the world
          </motion.p>

          {/* Podcast Platforms */}
          <motion.div
            className="flex justify-center items-center gap-6 flex-wrap"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <a
              href="#"
              className="flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded-full font-semibold hover:bg-green-700 transition-colors duration-200 hover:scale-105 transform"
            >
              <Headphones className="h-5 w-5" />
              Listen on Spotify
            </a>
            <a
              href="#"
              className="flex items-center gap-2 px-6 py-3 bg-red-600 text-white rounded-full font-semibold hover:bg-red-700 transition-colors duration-200 hover:scale-105 transform"
            >
              <Play className="h-5 w-5" />
              Watch on YouTube
            </a>
          </motion.div>
        </div>
      </section>

      {/* Featured Episode */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="bg-gradient-to-br from-coral/5 to-deep-purple/5 rounded-3xl p-8 md:p-12"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 bg-gradient-coral-purple rounded-2xl">
                <Headphones className="h-8 w-8 text-white" />
              </div>
              <div>
                <span className="text-coral font-semibold text-sm uppercase tracking-wide">
                  Latest Episode
                </span>
                <h2 className="font-poppins font-bold text-3xl text-charcoal mt-2">
                  {episodes[0].title}
                </h2>
              </div>
            </div>
            
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              {episodes[0].description}
            </p>
            
            <div className="flex items-center gap-6 flex-wrap mb-6">
              <span className="flex items-center text-gray-500">
                <Clock className="h-4 w-4 mr-2" />
                {episodes[0].duration}
              </span>
              <span className="text-gray-500">{episodes[0].date}</span>
              <div className="flex gap-2">
                {episodes[0].tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-coral/10 text-coral text-sm font-medium rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            
            <button
              onClick={() => togglePlay(episodes[0].id)}
              className="flex items-center gap-3 px-8 py-4 bg-gradient-coral-purple text-white rounded-full font-semibold hover:shadow-lg transition-all duration-200 hover:scale-105"
            >
              {playingEpisode === episodes[0].id ? (
                <Pause className="h-5 w-5" />
              ) : (
                <Play className="h-5 w-5" />
              )}
              {playingEpisode === episodes[0].id ? 'Pause' : 'Listen Now'}
            </button>
          </motion.div>
        </div>
      </section>

      {/* Episodes List */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="font-poppins font-bold text-4xl text-charcoal mb-12 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            All Episodes
          </motion.h2>

          <div className="space-y-6">
            {episodes.slice(1).map((episode, index) => (
              <motion.div
                key={episode.id}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex-1">
                    <h3 className="font-poppins font-bold text-xl text-charcoal mb-2">
                      {episode.title}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {episode.description}
                    </p>
                    
                    <div className="flex items-center gap-4 flex-wrap mb-4">
                      <span className="flex items-center text-gray-500 text-sm">
                        <Clock className="h-4 w-4 mr-1" />
                        {episode.duration}
                      </span>
                      <span className="text-gray-500 text-sm">{episode.date}</span>
                      <div className="flex gap-2">
                        {episode.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="px-2 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full flex items-center"
                          >
                            <Tag className="h-3 w-3 mr-1" />
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <button
                    onClick={() => togglePlay(episode.id)}
                    className="flex-shrink-0 w-12 h-12 bg-gradient-coral-purple text-white rounded-full flex items-center justify-center hover:shadow-lg transition-all duration-200 hover:scale-105"
                  >
                    {playingEpisode === episode.id ? (
                      <Pause className="h-5 w-5" />
                    ) : (
                      <Play className="h-5 w-5 ml-0.5" />
                    )}
                  </button>
                </div>
                
                {/* Episode Summary Toggle */}
                <div className="border-t border-gray-100 pt-4">
                  <button
                    onClick={() => toggleEpisodeSummary(episode.id)}
                    className="text-coral font-medium hover:text-coral/80 transition-colors duration-200"
                  >
                    {expandedEpisodes.has(episode.id) ? 'Hide' : 'Show'} Episode Summary
                  </button>
                  
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{
                      height: expandedEpisodes.has(episode.id) ? 'auto' : 0,
                      opacity: expandedEpisodes.has(episode.id) ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="text-gray-600 mt-4 leading-relaxed">
                      {episode.summary}
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Subscribe CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="font-poppins font-bold text-4xl text-charcoal mb-6">
              Never Miss an Episode
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Subscribe to get notified when we release new episodes with amazing young scientists and their stories.
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <button className="px-8 py-4 bg-green-600 text-white rounded-full font-semibold hover:bg-green-700 transition-colors duration-200 hover:scale-105 transform">
                Subscribe on Spotify
              </button>
              <button className="px-8 py-4 bg-orange-600 text-white rounded-full font-semibold hover:bg-orange-700 transition-colors duration-200 hover:scale-105 transform">
                Subscribe on Apple Podcasts
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Podcast;