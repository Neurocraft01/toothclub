import React from 'react';
import { Gift, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Packages = () => {
  return (
    <section className="py-32 bg-clinic-primary relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-clinic-secondary/10 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-[80px] -translate-x-1/2 translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-clinic-secondary font-medium tracking-widest uppercase text-sm mb-4 block">Exclusive Offers</span>
            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-white mb-6 leading-tight">
              Curated Dental <br/>
              <span className="text-clinic-secondary">Wellness Packages</span>
            </h2>
            <p className="text-lg text-white/80 mb-8 leading-relaxed">
              We believe in transparent, comprehensive care. Our tailored packages for check-ups, cleaning, and treatments are designed to give you the best value without compromising on quality.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="inline-flex items-center justify-center gap-2 bg-clinic-secondary text-clinic-primary px-8 py-4 font-semibold hover:bg-white transition-colors">
                Inquire Now
                <ArrowRight size={20} />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="border border-white/10 bg-white/5 backdrop-blur-sm p-12 relative">
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-clinic-secondary/20 rounded-full blur-xl"></div>
              <Gift className="text-clinic-secondary mb-8" size={48} />
              <h3 className="text-2xl font-serif font-bold text-white mb-4">Family & Individual Plans</h3>
              <ul className="space-y-4 text-white/70 mb-8">
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-clinic-secondary rounded-full"></span>
                  Comprehensive Oral Health Checkups
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-clinic-secondary rounded-full"></span>
                  Preventive Cleaning & Polishing
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-clinic-secondary rounded-full"></span>
                  Root Canal Treatment Packages
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-clinic-secondary rounded-full"></span>
                  Cosmetic Smile Makeovers
                </li>
              </ul>
              <p className="text-sm text-white/50 italic">
                *Custom packages available upon consultation.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Packages;
