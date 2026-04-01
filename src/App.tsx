/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { 
  Phone, 
  MapPin, 
  Clock, 
  ChevronRight, 
  Star, 
  Menu, 
  X, 
  Instagram, 
  Facebook, 
  Twitter
} from 'lucide-react';

// Pages
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import AppointmentPage from './pages/AppointmentPage';
import ContactPage from './pages/ContactPage';
import GalleryPage from './pages/GalleryPage';

// --- Components ---

const ReviewBanner = () => {
  const reviews = [
    "\"Best dental experience in NYC!\" — Sarah J.",
    "\"Professional and pain-free treatment.\" — David M.",
    "\"Highly recommend for Invisalign!\" — Emily R.",
    "\"Modern clinic with amazing staff.\" — Michael T.",
    "\"The most gentle dentist I've ever visited.\" — Robert K.",
  ];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % reviews.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [reviews.length]);

  return (
    <div className="fixed top-0 w-full bg-blue-600 text-white h-10 flex items-center justify-center text-sm font-semibold z-[60] px-4 shadow-md">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2"
        >
          <div className="flex text-yellow-300">
            {[...Array(5)].map((_, i) => <Star key={i} size={12} fill="currentColor" />)}
          </div>
          <p className="truncate">{reviews[index]}</p>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed w-full top-10 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">B</span>
            </div>
            <span className="text-2xl font-bold text-slate-900 tracking-tight">BrightSmile</span>
          </Link>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.href} 
                className={`font-medium transition-colors ${isActive(link.href) ? 'text-blue-600' : 'text-slate-600 hover:text-blue-600'}`}
              >
                {link.name}
              </Link>
            ))}
            <Link 
              to="/appointment" 
              className="bg-blue-600 text-white px-6 py-2.5 rounded-full font-semibold hover:bg-blue-700 transition-all shadow-lg shadow-blue-200"
            >
              Book Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-600">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-slate-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  to={link.href} 
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-4 text-lg font-medium rounded-xl ${isActive(link.href) ? 'bg-blue-50 text-blue-600' : 'text-slate-700 hover:bg-slate-50'}`}
                >
                  {link.name}
                </Link>
              ))}
              <Link 
                to="/appointment" 
                onClick={() => setIsOpen(false)}
                className="block w-full text-center bg-blue-600 text-white px-6 py-4 rounded-xl font-bold"
              >
                Book Appointment
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Footer = () => {
  return (
    <footer className="bg-slate-900 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">B</span>
              </div>
              <span className="text-2xl font-bold text-white tracking-tight">BrightSmile</span>
            </div>
            <p className="text-slate-400 leading-relaxed">
              Providing premium dental care with a focus on patient comfort and advanced technology in New York City.
            </p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {[
                { name: 'Home', to: '/' },
                { name: 'About Us', to: '/about' },
                { name: 'Services', to: '/services' },
                { name: 'Gallery', to: '/gallery' },
                { name: 'Appointment', to: '/appointment' },
                { name: 'Contact', to: '/contact' }
              ].map((item) => (
                <li key={item.name}>
                  <Link to={item.to} className="text-slate-400 hover:text-blue-400 transition-colors">{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6">Services</h4>
            <ul className="space-y-4">
              {['Teeth Whitening', 'Dental Implants', 'Invisalign', 'Root Canal', 'Cosmetic Dentistry'].map((item) => (
                <li key={item}>
                  <Link to="/services" className="text-slate-400 hover:text-blue-400 transition-colors">{item}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6">Newsletter</h4>
            <p className="text-slate-400 mb-6">Subscribe to get the latest dental tips and offers.</p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Email address" 
                className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-blue-600 w-full"
              />
              <button className="bg-blue-600 text-white p-3 rounded-xl hover:bg-blue-700 transition-colors">
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
        </div>
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            © 2026 BrightSmile Dental Care. All rights reserved.
          </p>
          <div className="flex gap-8">
            <Link to="/privacy" className="text-slate-500 text-sm hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="text-slate-500 text-sm hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-white font-sans selection:bg-blue-100 selection:text-blue-900">
        <ReviewBanner />
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/appointment" element={<AppointmentPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
