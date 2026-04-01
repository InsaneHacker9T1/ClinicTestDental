import React from 'react';
import { motion } from 'motion/react';
import { Camera, Heart, Star, Award } from 'lucide-react';

const GalleryPage = () => {
  const categories = ['All', 'Clinic', 'Equipment', 'Results', 'Team'];
  const [activeCategory, setActiveCategory] = React.useState('All');

  const images = [
    {
      url: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800",
      category: 'Clinic',
      title: 'Modern Reception'
    },
    {
      url: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=800",
      category: 'Equipment',
      title: 'Advanced 3D Imaging'
    },
    {
      url: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=800",
      category: 'Results',
      title: 'Teeth Whitening Result'
    },
    {
      url: "https://images.unsplash.com/photo-1559839734-2b71f173681c?auto=format&fit=crop&q=80&w=800",
      category: 'Team',
      title: 'Our Specialists'
    },
    {
      url: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800",
      category: 'Equipment',
      title: 'Sterilization Room'
    },
    {
      url: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&q=80&w=800",
      category: 'Clinic',
      title: 'Patient Lounge'
    },
    {
      url: "https://images.unsplash.com/photo-1445527815219-ecbfec67492e?auto=format&fit=crop&q=80&w=800",
      category: 'Results',
      title: 'Smile Transformation'
    },
    {
      url: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800",
      category: 'Clinic',
      title: 'Consultation Room'
    }
  ];

  const filteredImages = activeCategory === 'All' 
    ? images 
    : images.filter(img => img.category === activeCategory);

  return (
    <div className="pt-40 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-4">Our Gallery</h2>
          <h1 className="text-5xl font-bold text-slate-900 mb-6">A Glimpse of Excellence</h1>
          <p className="text-lg text-slate-600">
            Explore our state-of-the-art facility and see the real results we've achieved for our patients.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-8 py-3 rounded-full font-bold transition-all ${
                activeCategory === cat 
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-200' 
                : 'bg-white text-slate-600 border border-slate-100 hover:bg-slate-50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredImages.map((img, i) => (
            <motion.div
              layout
              key={img.url}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="group relative aspect-square rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all"
            >
              <img 
                src={img.url} 
                alt={img.title} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
                <p className="text-white font-bold text-lg">{img.title}</p>
                <p className="text-blue-300 text-sm">{img.category}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-24 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { label: 'Happy Patients', value: '5,000+', icon: <Heart className="text-red-500" /> },
            { label: 'Years Experience', value: '15+', icon: <Award className="text-blue-500" /> },
            { label: 'Expert Doctors', value: '12', icon: <Star className="text-yellow-500" /> },
            { label: 'Modern Rooms', value: '24', icon: <Camera className="text-green-500" /> }
          ].map((stat, i) => (
            <div key={i} className="bg-white p-8 rounded-[32px] border border-slate-100 text-center shadow-sm">
              <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center mx-auto mb-4">
                {stat.icon}
              </div>
              <p className="text-3xl font-bold text-slate-900 mb-1">{stat.value}</p>
              <p className="text-sm text-slate-500 font-medium uppercase tracking-wider">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GalleryPage;
