import React, { useState } from 'react';
import { MapPin, Star, Calendar, Phone, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import BookingModal from './BookingModal';

const Hero = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <>
      <section id="home" className="relative min-h-screen flex items-center bg-clinic-bg overflow-hidden pt-20">
        {/* Background Elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-clinic-primary/5 hidden lg:block rounded-l-[100px]"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-clinic-secondary/10 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Text Content */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="lg:col-span-6 text-center lg:text-left"
            >
              <div className="inline-flex items-center gap-3 mb-8">
                <span className="h-px w-8 bg-clinic-secondary"></span>
                <span className="text-clinic-secondary font-medium tracking-widest uppercase text-sm">Est. 2021</span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-serif font-bold text-slate-900 leading-[1.1] mb-6">
                Redefining <br />
                <span className="italic text-clinic-primary">Dental Excellence</span> <br />
                in Ravet.
              </h1>
              
              <p className="text-lg text-slate-600 mb-10 max-w-lg mx-auto lg:mx-0 leading-relaxed font-light">
                Experience a new standard of dental care where advanced technology meets compassionate treatment. Your smile deserves the best.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start items-center">
                <button 
                  onClick={() => setIsBookingOpen(true)}
                  className="group bg-clinic-primary text-white px-8 py-4 rounded-full font-medium text-lg transition-all hover:bg-teal-900 flex items-center gap-3"
                >
                  Book Appointment
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
                <div className="flex items-center gap-2 text-slate-500">
                  <div className="flex text-clinic-secondary">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} fill="currentColor" />
                    ))}
                  </div>
                  <span className="text-sm font-medium">4.8 (22+ Reviews)</span>
                </div>
              </div>
            </motion.div>
            
            {/* Image Content */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="lg:col-span-6 relative"
            >
              <div className="relative z-10 rounded-t-[200px] rounded-b-[40px] overflow-hidden shadow-2xl border-4 border-white">
                <img 
                  src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=800" 
                  alt="Modern Dental Clinic" 
                  className="w-full h-[600px] object-cover"
                />
                
                {/* Floating Card */}
                <div className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-slate-100">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-xs text-slate-500 uppercase tracking-wider mb-1">Location</p>
                      <div className="flex items-center gap-2 text-slate-900 font-medium">
                        <MapPin size={16} className="text-clinic-primary" />
                        Ravet, Pune
                      </div>
                    </div>
                    <div className="h-8 w-px bg-slate-200"></div>
                    <div>
                      <p className="text-xs text-slate-500 uppercase tracking-wider mb-1">Status</p>
                      <div className="flex items-center gap-2 text-green-600 font-medium">
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                        </span>
                        Open Now
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Circle */}
              <div className="absolute -top-12 -right-12 w-32 h-32 border border-clinic-secondary/30 rounded-full z-0"></div>
              <div className="absolute top-1/2 -right-4 w-8 h-8 bg-clinic-secondary rounded-full z-20"></div>
            </motion.div>
          </div>
        </div>
      </section>

      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
    </>
  );
};

export default Hero;
