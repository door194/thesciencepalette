import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Homepage from './pages/Homepage';
import About from './pages/About';
import Blog from './pages/Blog';
import Videos from './pages/Videos';
import Podcast from './pages/Podcast';
import Shop from './pages/Shop';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-light-beige text-charcoal font-inter">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/videos" element={<Videos />} />
            <Route path="/podcast" element={<Podcast />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        <ScrollToTop />
      </div>
    </Router>
  );
}

export default App;