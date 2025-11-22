import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, ArrowUpRight } from 'lucide-react';

const Gallery = () => {
  const images = [
    {
      url: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800",
      title: "Modern Operatory",
      category: "Clinic"
    },
    {
      url: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=800",
      title: "Patient Care",
      category: "Treatment"
    },
    {
      url: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&q=80&w=800",
      title: "Advanced Equipment",
      category: "Technology"
    },
    {
      url: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800",
      title: "Waiting Area",
      category: "Clinic"
    },
    {
      url: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=800",
      title: "Kids Friendly",
      category: "Pediatric"
    },
    {
      url: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&q=80&w=800",
      title: "Happy Smiles",
      category: "Patients"
    }
  ];

  return (
    <section id="gallery" className="py-32 bg-clinic-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div className="max-w-2xl">
            <span className="text-clinic-primary/60 font-medium tracking-widest uppercase text-sm mb-4 block">Visual Tour</span>
            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-clinic-primary mb-6">
              Inside The Tooth Club
            </h2>
            <p className="text-lg text-clinic-primary/70 leading-relaxed">
              A glimpse into our world of precision dentistry and patient comfort. We've designed every corner to be calming, modern, and welcoming.
            </p>
          </div>
          <motion.a 
            href="https://instagram.com" 
            target="_blank" 
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            className="hidden md:flex items-center gap-2 px-6 py-3 bg-clinic-primary text-white rounded-none hover:bg-clinic-primary/90 transition-colors"
          >
            <Instagram size={20} />
            <span>Follow on Instagram</span>
          </motion.a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative overflow-hidden aspect-[4/3] cursor-pointer"
            >
              <img 
                src={image.url} 
                alt={image.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-clinic-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center p-6 text-center">
                <span className="text-clinic-secondary text-sm font-medium tracking-widest uppercase mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">{image.category}</span>
                <h3 className="text-white text-2xl font-serif font-bold mb-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">{image.title}</h3>
                <div className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-150">
                  <ArrowUpRight size={20} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center md:hidden">
          <a 
            href="https://instagram.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-clinic-primary font-semibold hover:text-clinic-primary/80 transition-colors"
          >
            <Instagram size={20} />
            Follow us on Instagram
          </a>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
