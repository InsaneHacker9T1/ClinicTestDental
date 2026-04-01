import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, Star, ShieldCheck, Heart, Award } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="pt-40 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-4">About Our Clinic</h2>
            <h1 className="text-5xl font-bold text-slate-900 mb-8 leading-tight">
              Leading the Way in <br />Modern Dentistry
            </h1>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              BrightSmile Dental Care has been a cornerstone of the New York community for over a decade. Founded by Dr. Michael Carter, DDS, our mission is to provide world-class dental care in a comfortable, stress-free environment.
            </p>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed">
              We believe that every patient deserves a personalized approach. Whether you're here for a routine cleaning or a full smile makeover, we use the latest diagnostic tools to ensure the best possible outcomes.
            </p>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-4">
                  <ShieldCheck size={24} />
                </div>
                <h4 className="font-bold text-slate-900 mb-2">Certified Care</h4>
                <p className="text-sm text-slate-600">Board-certified specialists with years of experience.</p>
              </div>
              <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                <div className="w-12 h-12 bg-red-100 text-red-600 rounded-xl flex items-center justify-center mb-4">
                  <Heart size={24} />
                </div>
                <h4 className="font-bold text-slate-900 mb-2">Patient First</h4>
                <p className="text-sm text-slate-600">Your comfort and satisfaction are our top priorities.</p>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img 
              src="https://images.unsplash.com/photo-1559839734-2b71f173681c?auto=format&fit=crop&q=80&w=1000" 
              alt="Dr. Michael Carter" 
              className="rounded-3xl shadow-2xl w-full h-[600px] object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -top-6 -right-6 bg-blue-600 text-white p-8 rounded-2xl shadow-xl">
              <p className="text-4xl font-bold mb-1">10+</p>
              <p className="text-sm font-medium opacity-90 uppercase tracking-wider">Years of <br />Experience</p>
            </div>
          </motion.div>
        </div>

        <div className="bg-slate-900 rounded-[40px] p-12 lg:p-20 text-white">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-blue-400 font-bold tracking-widest uppercase text-sm mb-4">Our Values</h2>
            <h3 className="text-4xl font-bold mb-6">Built on Trust and Excellence</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center text-blue-400 mx-auto mb-6">
                <Award size={32} />
              </div>
              <h4 className="text-xl font-bold mb-4">Excellence</h4>
              <p className="text-slate-400 leading-relaxed">We strive for the highest standards in every procedure we perform.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center text-blue-400 mx-auto mb-6">
                <Star size={32} />
              </div>
              <h4 className="text-xl font-bold mb-4">Integrity</h4>
              <p className="text-slate-400 leading-relaxed">Honest, transparent communication about your dental health and options.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center text-blue-400 mx-auto mb-6">
                <CheckCircle2 size={32} />
              </div>
              <h4 className="text-xl font-bold mb-4">Reliability</h4>
              <p className="text-slate-400 leading-relaxed">Consistent, high-quality care that you can depend on for years to come.</p>
            </div>
          </div>
        </div>

        {/* Meet the Team Section */}
        <div className="mt-24">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-4">Our Team</h2>
            <h3 className="text-4xl font-bold text-slate-900 mb-6">Meet the Specialists</h3>
            <p className="text-lg text-slate-600">
              Our team of dedicated professionals is committed to providing you with the highest level of care.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: 'Dr. Michael Carter', role: 'Chief Dental Officer', img: 'https://images.unsplash.com/photo-1559839734-2b71f173681c?auto=format&fit=crop&q=80&w=600' },
              { name: 'Dr. Sarah Jenkins', role: 'Cosmetic Specialist', img: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=600' },
              { name: 'Dr. David Miller', role: 'Implant Surgeon', img: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=600' },
              { name: 'Dr. Emily Rodriguez', role: 'Orthodontist', img: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=600' }
            ].map((member, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group relative rounded-[32px] overflow-hidden shadow-lg hover:shadow-2xl transition-all"
              >
                <div className="h-80 overflow-hidden">
                  <img src={member.img} alt={member.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" referrerPolicy="no-referrer" />
                </div>
                <div className="p-6 bg-white text-center">
                  <h4 className="text-xl font-bold text-slate-900 mb-1">{member.name}</h4>
                  <p className="text-sm text-blue-600 font-medium uppercase tracking-wider">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
