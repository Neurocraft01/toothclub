import React from 'react';
import { Phone, MapPin, Facebook, Instagram, Twitter, ArrowRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-clinic-primary text-white pt-32 pb-10 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <div className="absolute right-0 bottom-0 w-[600px] h-[600px] bg-white rounded-full blur-[150px] translate-x-1/3 translate-y-1/3"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 mb-20">
          <div>
            <span className="text-clinic-secondary font-medium tracking-widest uppercase text-sm mb-4 block">Get in Touch</span>
            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-white mb-8">
              Book Your Appointment
            </h2>
            <p className="mb-12 text-white/60 text-lg leading-relaxed max-w-md">
              Ready to experience dental care reimagined? Fill out the form and our team will contact you to schedule your visit.
            </p>
            
            <form className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="relative">
                  <input 
                    type="text" 
                    placeholder="Your Name" 
                    className="w-full px-0 py-4 bg-transparent border-b border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-clinic-secondary transition-colors"
                  />
                </div>
                <div className="relative">
                  <input 
                    type="tel" 
                    placeholder="Phone Number" 
                    className="w-full px-0 py-4 bg-transparent border-b border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-clinic-secondary transition-colors"
                  />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="relative">
                  <input 
                    type="date" 
                    className="w-full px-0 py-4 bg-transparent border-b border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-clinic-secondary transition-colors"
                  />
                </div>
                <div className="relative">
                  <select className="w-full px-0 py-4 bg-transparent border-b border-white/20 text-white focus:outline-none focus:border-clinic-secondary transition-colors appearance-none">
                    <option value="" className="bg-clinic-primary text-white">Preferred Time</option>
                    <option value="morning" className="bg-clinic-primary text-white">Morning</option>
                    <option value="afternoon" className="bg-clinic-primary text-white">Afternoon</option>
                    <option value="evening" className="bg-clinic-primary text-white">Evening</option>
                  </select>
                </div>
              </div>
              <div className="relative">
                <textarea 
                  rows="2" 
                  placeholder="Message or Concern" 
                  className="w-full px-0 py-4 bg-transparent border-b border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-clinic-secondary transition-colors resize-none"
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="group inline-flex items-center gap-3 bg-clinic-secondary text-clinic-primary font-bold px-8 py-4 hover:bg-white transition-all duration-300"
              >
                Request Appointment
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>

          <div className="lg:pl-12 space-y-12 border-l border-white/10">
            <div>
              <h3 className="text-2xl font-serif font-bold text-white mb-6">The Tooth Club</h3>
              <div className="space-y-6 text-white/70 text-lg">
                <div className="flex items-start gap-4">
                  <MapPin className="text-clinic-secondary mt-1 flex-shrink-0" size={24} />
                  <p>
                    Shop No. 6, Raj Aangan - C, Shinde Vasti,<br />
                    Ravet, Pune, Maharashtra 412101
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="text-clinic-secondary flex-shrink-0" size={24} />
                  <a href="tel:07058388353" className="hover:text-clinic-secondary transition-colors">070583 88353</a>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-bold text-white mb-6 uppercase tracking-widest text-sm">Follow Us</h4>
              <div className="flex gap-4">
                <a href="#" className="w-12 h-12 border border-white/20 flex items-center justify-center text-white hover:bg-clinic-secondary hover:text-clinic-primary hover:border-clinic-secondary transition-all duration-300">
                  <Facebook size={20} />
                </a>
                <a href="#" className="w-12 h-12 border border-white/20 flex items-center justify-center text-white hover:bg-clinic-secondary hover:text-clinic-primary hover:border-clinic-secondary transition-all duration-300">
                  <Instagram size={20} />
                </a>
                <a href="#" className="w-12 h-12 border border-white/20 flex items-center justify-center text-white hover:bg-clinic-secondary hover:text-clinic-primary hover:border-clinic-secondary transition-all duration-300">
                  <Twitter size={20} />
                </a>
              </div>
            </div>

            <div className="pt-8">
              <a 
                href="https://maps.app.goo.gl/9GjTR7d6LYtrEXE96" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block text-clinic-secondary border-b border-clinic-secondary/30 hover:border-clinic-secondary pb-1 transition-all"
              >
                Get Directions on Google Maps
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-white/40 text-sm">
          <p>&copy; {new Date().getFullYear()} The Tooth Club. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
