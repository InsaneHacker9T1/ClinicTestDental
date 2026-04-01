import React from 'react';
import { motion } from 'motion/react';
import { 
  ChevronRight, 
  Star, 
  CheckCircle2, 
  Zap,
  ShieldCheck,
  Stethoscope,
  ArrowRight,
  Play
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative pt-40 pb-20 lg:pt-56 lg:pb-32 overflow-hidden">
      <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-blue-50/50 rounded-bl-[100px] hidden lg:block" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 font-semibold text-sm mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              Now Accepting New Patients in NYC
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold text-slate-900 leading-[1.1] mb-6">
              Your Smile, <br />
              <span className="text-blue-600">Our Priority</span>
            </h1>
            <p className="text-xl text-slate-600 mb-10 max-w-lg leading-relaxed">
              Experience advanced dental care with modern technology in the heart of New York. We combine expertise with a gentle touch.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/appointment" 
                className="bg-blue-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-700 transition-all shadow-xl shadow-blue-200 text-center"
              >
                Book Appointment
              </Link>
              <Link 
                to="/services" 
                className="bg-white text-slate-900 border border-slate-200 px-8 py-4 rounded-full font-bold text-lg hover:bg-slate-50 transition-all text-center flex items-center justify-center gap-2"
              >
                Our Services <ChevronRight size={20} />
              </Link>
            </div>
            <div className="mt-12 flex items-center gap-6">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <img 
                    key={i}
                    src={`https://picsum.photos/seed/patient${i}/100/100`} 
                    alt="Patient" 
                    className="w-12 h-12 rounded-full border-4 border-white shadow-sm"
                    referrerPolicy="no-referrer"
                  />
                ))}
              </div>
              <div>
                <div className="flex text-yellow-400 mb-1">
                  {[1, 2, 3, 4, 5].map((i) => <Star key={i} size={16} fill="currentColor" />)}
                </div>
                <p className="text-sm text-slate-500 font-medium">Trusted by 2,000+ Happy Patients</p>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=1000" 
                alt="Modern Dental Clinic" 
                className="w-full h-[600px] object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
            <div className="absolute -bottom-6 -left-6 z-20 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 hidden sm:block">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                  <CheckCircle2 size={24} />
                </div>
                <div>
                  <p className="text-sm text-slate-500 font-medium">Success Rate</p>
                  <p className="text-xl font-bold text-slate-900">99.8% Perfect Smiles</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Features = () => {
  const features = [
    {
      title: 'Certified Dentists',
      desc: 'Top-tier board-certified specialists.',
      icon: <ShieldCheck size={24} />,
      color: 'bg-blue-100 text-blue-600'
    },
    {
      title: 'Pain-Free',
      desc: 'Gentle techniques for your comfort.',
      icon: <Zap size={24} />,
      color: 'bg-yellow-100 text-yellow-600'
    },
    {
      title: 'Modern Tech',
      desc: '3D imaging and laser dentistry.',
      icon: <Stethoscope size={24} />,
      color: 'bg-green-100 text-green-600'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <motion.div 
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="p-8 rounded-3xl border border-slate-100 hover:shadow-xl transition-all group"
            >
              <div className={`w-14 h-14 ${f.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                {f.icon}
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-2">{f.title}</h4>
              <p className="text-slate-600">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Gallery = () => {
  const images = [
    "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&q=80&w=800",
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Modern Facility</h2>
          <p className="text-slate-600">A comfortable environment designed for your peace of mind.</p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {images.map((img, i) => (
            <motion.div 
              key={i}
              whileHover={{ scale: 1.02 }}
              className="aspect-square rounded-2xl overflow-hidden shadow-md"
            >
              <img src={img} alt="Clinic" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const reviews = [
    {
      name: 'Sarah Johnson',
      role: 'Patient',
      text: 'The best dental experience I’ve ever had. Dr. Carter and his team are incredibly professional and gentle. My smile has never looked better!',
      rating: 5
    },
    {
      name: 'Mark Thompson',
      role: 'Patient',
      text: 'I was always nervous about dentists, but BrightSmile changed that. The facility is modern and the staff makes you feel right at home.',
      rating: 5
    },
    {
      name: 'Emily Davis',
      role: 'Patient',
      text: 'Invisalign treatment here was a breeze. Clear communication, fair pricing, and amazing results. Highly recommend to anyone in NYC!',
      rating: 5
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-4">Testimonials</h2>
          <h3 className="text-4xl font-bold text-slate-900 mb-6">What Our Patients Say</h3>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="p-8 rounded-[32px] bg-slate-50 border border-slate-100 relative"
            >
              <div className="flex text-yellow-400 mb-6">
                {[...Array(review.rating)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
              </div>
              <p className="text-slate-700 italic mb-8 leading-relaxed">"{review.text}"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold">
                  {review.name[0]}
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">{review.name}</h4>
                  <p className="text-sm text-slate-500">{review.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Gallery />
      <Testimonials />
      <section className="py-24 bg-blue-600 text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Experience the BrightSmile Difference</h2>
              <p className="text-blue-100 text-lg mb-10 leading-relaxed">
                We combine years of clinical experience with the latest dental technology to provide you with the best care possible. Our patient-first approach ensures you feel comfortable and informed every step of the way.
              </p>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="text-blue-300" />
                  <span className="font-medium">Free Initial Consultation</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="text-blue-300" />
                  <span className="font-medium">Emergency Care Available</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="text-blue-300" />
                  <span className="font-medium">All Major Insurance Accepted</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="text-blue-300" />
                  <span className="font-medium">Flexible Payment Plans</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1445527815219-ecbfec67492e?auto=format&fit=crop&q=80&w=1000" 
                alt="Happy Patient" 
                className="rounded-3xl shadow-2xl rotate-2"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-blue-600/10 rounded-3xl" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
