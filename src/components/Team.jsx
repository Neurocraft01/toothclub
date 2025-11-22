import React from 'react';
import { motion } from 'framer-motion';

const Team = () => {
  return (
    <section id="doctors" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <span className="text-clinic-secondary font-medium tracking-widest uppercase text-sm mb-4 block">Our Team</span>
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-slate-900 mb-6">
            Meet the Experts
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto font-light">
            Experienced professionals dedicated to your smile.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Doctor 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group"
          >
            <div className="relative overflow-hidden rounded-2xl mb-8 aspect-[3/4] bg-slate-100">
              <div className="absolute inset-0 bg-clinic-primary/10 group-hover:bg-clinic-primary/0 transition-colors duration-500"></div>
              {/* Placeholder for Doctor Image - Using a professional portrait placeholder */}
              <div className="w-full h-full flex items-center justify-center bg-slate-200 text-slate-400">
                 <span className="font-serif text-2xl">Dr. Chaitanya</span>
              </div>
            </div>
            <div className="text-center">
              <h3 className="text-3xl font-serif font-bold text-slate-900 mb-2">Dr. Chaitanya</h3>
              <p className="text-clinic-primary font-medium tracking-wide uppercase text-sm mb-4">Pediatric & General Dentist</p>
              <p className="text-slate-600 leading-relaxed font-light max-w-sm mx-auto">
                Known for his patience with kids, Dr. Chaitanya explains every step calmly and provides genuine, professional advice.
              </p>
            </div>
          </motion.div>

          {/* Doctor 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="group"
          >
            <div className="relative overflow-hidden rounded-2xl mb-8 aspect-[3/4] bg-slate-100">
              <div className="absolute inset-0 bg-clinic-primary/10 group-hover:bg-clinic-primary/0 transition-colors duration-500"></div>
              {/* Placeholder for Doctor Image */}
              <div className="w-full h-full flex items-center justify-center bg-slate-200 text-slate-400">
                 <span className="font-serif text-2xl">Dr. Saily</span>
              </div>
            </div>
            <div className="text-center">
              <h3 className="text-3xl font-serif font-bold text-slate-900 mb-2">Dr. Saily</h3>
              <p className="text-clinic-primary font-medium tracking-wide uppercase text-sm mb-4">Restorative Dentist</p>
              <p className="text-slate-600 leading-relaxed font-light max-w-sm mx-auto">
                Specializing in smooth and painless root canals and fillings. Dr. Saily is professional, caring, and dedicated to efficient treatments.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Team;
