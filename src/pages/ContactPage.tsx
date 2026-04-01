import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Clock, Instagram, Facebook, Twitter, Mail } from 'lucide-react';

const ContactPage = () => {
  return (
    <div className="pt-40 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-4">Contact Us</h2>
          <h1 className="text-5xl font-bold text-slate-900 mb-6">Get in Touch</h1>
          <p className="text-lg text-slate-600">
            Have questions or need to schedule an appointment? We're here to help. Contact us through any of the channels below.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 mb-20">
          <div className="p-10 bg-white rounded-[40px] border border-slate-100 shadow-sm hover:shadow-xl transition-all text-center">
            <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-8">
              <MapPin size={32} />
            </div>
            <h4 className="text-2xl font-bold text-slate-900 mb-4">Our Location</h4>
            <p className="text-slate-600 leading-relaxed">
              123 Fifth Avenue, Suite 400<br />New York, NY 10003
            </p>
          </div>
          <div className="p-10 bg-white rounded-[40px] border border-slate-100 shadow-sm hover:shadow-xl transition-all text-center">
            <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-8">
              <Phone size={32} />
            </div>
            <h4 className="text-2xl font-bold text-slate-900 mb-4">Phone Number</h4>
            <p className="text-slate-600 leading-relaxed">
              (212) 555-0198<br />(212) 555-0199
            </p>
          </div>
          <div className="p-10 bg-white rounded-[40px] border border-slate-100 shadow-sm hover:shadow-xl transition-all text-center">
            <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-8">
              <Mail size={32} />
            </div>
            <h4 className="text-2xl font-bold text-slate-900 mb-4">Email Address</h4>
            <p className="text-slate-600 leading-relaxed">
              hello@brightsmile.com<br />support@brightsmile.com
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="rounded-[40px] overflow-hidden h-[500px] shadow-2xl border-8 border-white">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.119763973046!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1647854321000!5m2!1sen!2sus" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="p-12 lg:p-20 bg-slate-900 rounded-[40px] text-white">
            <h3 className="text-3xl font-bold mb-8">Office Hours</h3>
            <div className="space-y-6">
              <div className="flex justify-between items-center pb-4 border-b border-white/10">
                <span className="text-slate-400">Monday - Friday</span>
                <span className="font-bold">9:00 AM - 6:00 PM</span>
              </div>
              <div className="flex justify-between items-center pb-4 border-b border-white/10">
                <span className="text-slate-400">Saturday</span>
                <span className="font-bold">10:00 AM - 2:00 PM</span>
              </div>
              <div className="flex justify-between items-center pb-4 border-b border-white/10">
                <span className="text-slate-400">Sunday</span>
                <span className="font-bold text-red-400 uppercase tracking-widest text-sm">Closed</span>
              </div>
            </div>
            <div className="mt-12 flex gap-6">
              <a href="#" className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-blue-600 transition-all">
                <Instagram size={24} />
              </a>
              <a href="#" className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-blue-600 transition-all">
                <Facebook size={24} />
              </a>
              <a href="#" className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-blue-600 transition-all">
                <Twitter size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
