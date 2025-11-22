import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const Services = () => {
  const services = [
    { title: "General Dentistry", desc: "Routine checkups, cleanings, and comprehensive oral health maintenance." },
    { title: "Root Canal Treatment", desc: "Painless and efficient RCTs to save your natural teeth." },
    { title: "Pediatric Dentistry", desc: "Gentle, fun, and fear-free dental care for your little ones." },
    { title: "Fillings & Restorations", desc: "High-quality aesthetic fillings to restore tooth function and look." },
    { title: "Tooth Reshaping", desc: "Cosmetic contouring to improve the appearance of your smile." },
    { title: "Dental Implants", desc: "Permanent, natural-looking replacements for missing teeth to restore your smile." },
    { title: "Oral Surgery", desc: "Expert surgical care for extractions, implants, and other complex dental procedures." },
    { title: "Teeth Whitening", desc: "Professional whitening treatments for a brighter, more confident smile." },
  ];

  return (
    <section id="services" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20">
          <div className="max-w-2xl">
            <span className="text-clinic-secondary font-medium tracking-widest uppercase text-sm mb-4 block">Our Expertise</span>
            <h2 className="text-4xl lg:text-6xl font-serif font-bold text-slate-900 leading-tight">
              Comprehensive Care <br />
              <span className="text-clinic-primary italic">Tailored to You</span>
            </h2>
          </div>
          <p className="text-slate-600 max-w-md mt-6 md:mt-0 text-lg font-light">
            From routine checkups to complex surgeries, we provide a full spectrum of dental treatments in a calming environment.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 border-t border-l border-slate-200">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="group relative p-10 border-r border-b border-slate-200 hover:bg-clinic-primary transition-colors duration-500 h-full flex flex-col justify-between min-h-[320px]"
            >
              <div className="flex justify-between items-start mb-6">
                <span className="text-4xl font-serif text-slate-200 group-hover:text-white/20 transition-colors">
                  {(index + 1).toString().padStart(2, '0')}
                </span>
                <ArrowUpRight className="text-slate-300 group-hover:text-white transition-colors opacity-0 group-hover:opacity-100" />
              </div>
              
              <div>
                <h3 className="text-2xl font-serif font-bold text-slate-900 mb-4 group-hover:text-white transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-600 leading-relaxed group-hover:text-white/80 transition-colors font-light">
                  {service.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
