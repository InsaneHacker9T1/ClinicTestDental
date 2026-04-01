import React from 'react';
import { motion } from 'motion/react';
import { Zap, ShieldCheck, CheckCircle2, Stethoscope, Star, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServicesPage = () => {
  const services = [
    {
      title: 'Teeth Whitening',
      description: 'Professional-grade whitening for a brighter, more confident smile in just one visit.',
      icon: <Zap className="text-blue-600" size={32} />,
      image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: 'Dental Implants',
      description: 'Permanent, natural-looking solutions for missing teeth using advanced titanium technology.',
      icon: <ShieldCheck className="text-blue-600" size={32} />,
      image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: 'Invisalign',
      description: 'Straighten your teeth discreetly with clear, removable aligners tailored to your smile.',
      icon: <CheckCircle2 className="text-blue-600" size={32} />,
      image: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: 'Root Canal Treatment',
      description: 'Pain-free endodontic therapy to save your natural teeth and relieve discomfort.',
      icon: <Stethoscope className="text-blue-600" size={32} />,
      image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: 'Cosmetic Dentistry',
      description: 'Veneers, bonding, and contouring to create the aesthetic smile you’ve always wanted.',
      icon: <Star className="text-blue-600" size={32} />,
      image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: 'Preventive Care',
      description: 'Regular cleanings and check-ups to maintain your oral health and prevent future issues.',
      icon: <ShieldCheck className="text-blue-600" size={32} />,
      image: "https://images.unsplash.com/photo-1559839734-2b71f173681c?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <div className="pt-40 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-4">Our Services</h2>
          <h1 className="text-5xl font-bold text-slate-900 mb-6">Comprehensive Dental Care</h1>
          <p className="text-lg text-slate-600">
            We offer a wide range of specialized treatments designed to meet all your dental needs under one roof.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-white rounded-[32px] overflow-hidden border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500"
            >
              <div className="h-64 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-8">
                <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  {service.icon}
                </div>
                <h4 className="text-2xl font-bold text-slate-900 mb-4">{service.title}</h4>
                <p className="text-slate-600 leading-relaxed mb-8">{service.description}</p>
                <Link 
                  to="/appointment" 
                  className="inline-flex items-center gap-2 font-bold text-blue-600 group-hover:gap-4 transition-all"
                >
                  Book Now <ChevronRight size={20} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Before & After Section */}
        <div className="mt-32">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-4">Real Results</h2>
            <h3 className="text-4xl font-bold text-slate-900 mb-6">Smile Transformations</h3>
            <p className="text-lg text-slate-600">
              See the life-changing results our patients have experienced through our specialized treatments.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            {[
              { 
                title: 'Full Smile Makeover', 
                desc: 'Complete restoration using porcelain veneers and whitening.',
                before: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&q=80&w=600',
                after: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=600'
              },
              { 
                title: 'Invisalign Treatment', 
                desc: '12-month alignment process for a perfectly straight smile.',
                before: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=600',
                after: 'https://images.unsplash.com/photo-1445527815219-ecbfec67492e?auto=format&fit=crop&q=80&w=600'
              }
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-[40px] p-8 border border-slate-100 shadow-sm">
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="relative rounded-2xl overflow-hidden aspect-square">
                    <img src={item.before} alt="Before" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                    <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-full uppercase">Before</div>
                  </div>
                  <div className="relative rounded-2xl overflow-hidden aspect-square">
                    <img src={item.after} alt="After" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                    <div className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase">After</div>
                  </div>
                </div>
                <h4 className="text-2xl font-bold text-slate-900 mb-2">{item.title}</h4>
                <p className="text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-24 bg-slate-900 rounded-[40px] p-12 lg:p-20 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <div className="absolute top-10 left-10 w-64 h-64 border-4 border-white rounded-full" />
            <div className="absolute bottom-10 right-10 w-96 h-96 border-4 border-white rounded-full" />
          </div>
          <div className="relative z-10 max-w-2xl mx-auto">
            <h3 className="text-4xl font-bold mb-6">Not Sure What You Need?</h3>
            <p className="text-slate-400 text-lg mb-10">
              Schedule a free consultation with Dr. Carter to discuss your oral health and create a personalized treatment plan.
            </p>
            <Link 
              to="/appointment" 
              className="bg-blue-600 text-white px-10 py-5 rounded-full font-bold text-xl hover:bg-blue-700 transition-all shadow-xl shadow-blue-900/20"
            >
              Get a Free Consultation
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
