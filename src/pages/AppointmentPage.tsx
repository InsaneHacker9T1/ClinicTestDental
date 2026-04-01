import React, { useState } from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, Calendar, Phone, Clock, MapPin } from 'lucide-react';

const AppointmentPage = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-40 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-4">Book Your Visit</h2>
            <h1 className="text-5xl font-bold text-slate-900 mb-8 leading-tight">
              Ready for Your <br />New Smile?
            </h1>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed">
              Fill out the form and our patient coordinator will contact you within 24 hours to confirm your visit. We look forward to seeing you!
            </p>
            <div className="space-y-8">
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                  <Phone size={28} />
                </div>
                <div>
                  <p className="text-sm text-slate-500 font-medium">Call Us Directly</p>
                  <p className="text-2xl font-bold text-slate-900">(212) 555-0198</p>
                </div>
              </div>
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                  <Clock size={28} />
                </div>
                <div>
                  <p className="text-sm text-slate-500 font-medium">Working Hours</p>
                  <p className="text-2xl font-bold text-slate-900">Mon - Fri: 9am - 6pm</p>
                </div>
              </div>
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                  <MapPin size={28} />
                </div>
                <div>
                  <p className="text-sm text-slate-500 font-medium">Our Location</p>
                  <p className="text-2xl font-bold text-slate-900">123 Fifth Avenue, NYC</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-white p-10 lg:p-16 rounded-[40px] shadow-2xl border border-slate-100"
          >
            {submitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center text-center py-12"
              >
                <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-8">
                  <CheckCircle2 size={48} />
                </div>
                <h4 className="text-4xl font-bold text-slate-900 mb-4">Request Received!</h4>
                <p className="text-slate-600 text-lg">We'll be in touch shortly to confirm your appointment.</p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="mt-10 bg-blue-600 text-white px-8 py-4 rounded-full font-bold hover:bg-blue-700 transition-all shadow-xl shadow-blue-100"
                >
                  Send another request
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid sm:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">Full Name</label>
                    <input 
                      required
                      type="text" 
                      placeholder="John Doe"
                      className="w-full px-8 py-5 rounded-2xl bg-slate-50 border border-slate-100 focus:border-blue-600 focus:ring-4 focus:ring-blue-100 outline-none transition-all"
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">Phone Number</label>
                    <input 
                      required
                      type="tel" 
                      placeholder="(212) 000-0000"
                      className="w-full px-8 py-5 rounded-2xl bg-slate-50 border border-slate-100 focus:border-blue-600 focus:ring-4 focus:ring-blue-100 outline-none transition-all"
                    />
                  </div>
                </div>
                <div className="space-y-3">
                  <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">Service Interested In</label>
                  <select className="w-full px-8 py-5 rounded-2xl bg-slate-50 border border-slate-100 focus:border-blue-600 focus:ring-4 focus:ring-blue-100 outline-none transition-all appearance-none">
                    <option>Teeth Whitening</option>
                    <option>Dental Implants</option>
                    <option>Invisalign</option>
                    <option>Root Canal</option>
                    <option>Cosmetic Dentistry</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="space-y-3">
                  <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">Preferred Date</label>
                  <input 
                    required
                    type="date" 
                    className="w-full px-8 py-5 rounded-2xl bg-slate-50 border border-slate-100 focus:border-blue-600 focus:ring-4 focus:ring-blue-100 outline-none transition-all"
                  />
                </div>
                <button 
                  type="submit"
                  className="w-full bg-blue-600 text-white py-6 rounded-2xl font-bold text-xl hover:bg-blue-700 transition-all shadow-2xl shadow-blue-100 flex items-center justify-center gap-4"
                >
                  <Calendar size={24} /> Request Appointment
                </button>
                <p className="text-center text-sm text-slate-400">
                  By submitting this form, you agree to our privacy policy.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentPage;
