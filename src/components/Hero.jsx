import React, { useState } from 'react';
import { MapPin, Star, Calendar, Phone } from 'lucide-react';
import { motion } from 'framer-motion';
import BookingModal from './BookingModal';

const Hero = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <>
      <section id="home" className="relative bg-gradient-to-br from-teal-50 via-white to-blue-50 pt-20 pb-24 lg:pt-32 lg:pb-32 overflow-hidden">
        {/* Abstract Background Shapes */}
        <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[800px] h-[800px] bg-teal-100/30 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[600px] h-[600px] bg-blue-100/30 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left"
            >
              <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm mb-6 border border-white/50">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>
                <span className="text-sm font-medium text-slate-600">4.8 Rating (22+ Reviews)</span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold text-slate-900 leading-tight mb-6 tracking-tight">
                Gentle, Modern <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-600">Dental Care</span>
              </h1>
              
              <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Experience painless, professional dentistry for your whole family in Ravet. 
                We combine advanced technology with a warm, child-friendly environment.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button 
                  onClick={() => setIsBookingOpen(true)}
                  className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all shadow-lg shadow-teal-600/20 flex items-center justify-center gap-2 hover:-translate-y-1"
                >
                  <Calendar size={20} />
                  Book Appointment
                </button>
                <a 
                  href="tel:07058388353" 
                  className="bg-white/80 backdrop-blur-sm hover:bg-white text-slate-800 border border-white/50 px-8 py-4 rounded-full font-semibold text-lg transition-all flex items-center justify-center gap-2 hover:shadow-lg"
                >
                  <Phone size={20} />
                  070583 88353
                </a>
              </div>

              <div className="mt-8 flex items-center justify-center lg:justify-start gap-2 text-slate-500">
                <MapPin size={18} className="text-teal-600" />
                <span>Ravet, Pune, Maharashtra</span>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-teal-200 to-blue-200 rounded-[2rem] blur-2xl opacity-50 animate-pulse"></div>
              <img 
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800" 
                alt="Modern Dental Clinic" 
                className="relative rounded-[2rem] shadow-2xl w-full object-cover h-[600px] z-10"
              />
              
              {/* Floating Glass Card */}
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="absolute -bottom-10 -left-10 bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-xl max-w-xs z-20 border border-white/50"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <p className="font-bold text-slate-900 text-lg">Open Today</p>
                </div>
                <p className="text-slate-600">10:00 AM – 1:30 PM</p>
                <p className="text-slate-600">5:00 PM – 9:00 PM</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
    </>
  );
};

export default Hero;
