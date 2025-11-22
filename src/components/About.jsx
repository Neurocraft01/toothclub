import React from 'react';
import { ShieldCheck, Heart, Smile, Award } from 'lucide-react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-32 bg-clinic-bg overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          
          {/* Image Collage */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative z-10 rounded-tr-[100px] overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800" 
                alt="Clinic Interior" 
                className="w-full h-[500px] object-cover"
              />
            </div>
            <div className="absolute -bottom-12 -right-12 w-2/3 h-2/3 rounded-bl-[80px] overflow-hidden shadow-2xl border-8 border-clinic-bg z-20 hidden md:block">
              <img 
                src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=600" 
                alt="Doctor with Patient" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative Pattern */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-clinic-secondary/20 rounded-full blur-2xl"></div>
          </motion.div>

          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-clinic-secondary font-medium tracking-widest uppercase text-sm mb-4 block">About Us</span>
            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-slate-900 mb-8 leading-tight">
              A Legacy of <br />
              <span className="text-clinic-primary italic">Trust & Comfort</span>
            </h2>
            
            <p className="text-lg text-slate-600 mb-6 font-light leading-relaxed">
              Established in 2021, The Tooth Club has been a pillar of dental excellence in Ravet for over 4 years. We believe that a visit to the dentist should be as comfortable as it is effective.
            </p>
            <p className="text-lg text-slate-600 mb-10 font-light leading-relaxed">
              Our clinic combines state-of-the-art technology with a warm, family-friendly atmosphere. Whether it's a routine checkup or a complex implant procedure, our team is dedicated to your smile.
            </p>

            <div className="grid grid-cols-2 gap-8">
              <div className="flex flex-col gap-2">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md text-clinic-primary mb-2">
                  <ShieldCheck size={24} />
                </div>
                <h4 className="font-serif font-bold text-lg text-slate-900">Trusted Expertise</h4>
                <p className="text-sm text-slate-500">4+ Years of Excellence</p>
              </div>
              <div className="flex flex-col gap-2">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md text-clinic-primary mb-2">
                  <Heart size={24} />
                </div>
                <h4 className="font-serif font-bold text-lg text-slate-900">Patient Centric</h4>
                <p className="text-sm text-slate-500">Comfort First Approach</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
