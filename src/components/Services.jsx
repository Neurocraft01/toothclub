import React from 'react';
import { motion } from 'framer-motion';

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
    { title: "Emergency Care", desc: "Prompt attention for dental emergencies. Call us immediately." },
  ];

  return (
    <section id="services" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white to-transparent"></div>
      <div className="absolute -left-20 top-40 w-64 h-64 bg-teal-100/40 rounded-full blur-3xl"></div>
      <div className="absolute -right-20 bottom-40 w-64 h-64 bg-blue-100/40 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl lg:text-5xl font-bold text-slate-900 mb-4"
          >
            Our Services
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-600 max-w-2xl mx-auto"
          >
            Comprehensive dental solutions tailored to your needs.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-slate-100 group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-teal-50 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-150"></div>
              <div className="h-2 w-12 bg-teal-500 rounded-full mb-6 group-hover:w-20 transition-all relative z-10"></div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 relative z-10">{service.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed relative z-10">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
