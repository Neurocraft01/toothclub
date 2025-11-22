import React from 'react';
import { Phone, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-slate-900 text-slate-300 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 mb-16">
          <div>
            <h2 className="text-3xl font-bold text-white mb-6">Book an Appointment</h2>
            <p className="mb-8 text-slate-400">
              Ready to smile with confidence? Fill out the form and we'll get back to you shortly.
            </p>
            
            <form className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-white focus:outline-none focus:border-teal-500 transition-colors"
                />
                <input 
                  type="tel" 
                  placeholder="Phone Number" 
                  className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-white focus:outline-none focus:border-teal-500 transition-colors"
                />
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <input 
                  type="date" 
                  className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-white focus:outline-none focus:border-teal-500 transition-colors"
                />
                <select className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-white focus:outline-none focus:border-teal-500 transition-colors">
                  <option value="">Preferred Time</option>
                  <option value="morning">Morning</option>
                  <option value="afternoon">Afternoon</option>
                  <option value="evening">Evening</option>
                </select>
              </div>
              <textarea 
                rows="4" 
                placeholder="Message or Concern" 
                className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-white focus:outline-none focus:border-teal-500 transition-colors"
              ></textarea>
              <button 
                type="submit" 
                className="w-full bg-teal-600 hover:bg-teal-700 text-white font-bold py-4 rounded-lg transition-colors"
              >
                Request Appointment
              </button>
            </form>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">The Tooth Club</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <MapPin className="text-teal-500 mt-1" size={20} />
                  <p>
                    Shop No. 6, Raj Aangan - C, Shinde Vasti,<br />
                    Ravet, Pune, Maharashtra 412101
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="text-teal-500" size={20} />
                  <a href="tel:07058388353" className="hover:text-teal-400 transition-colors">070583 88353</a>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-bold text-white mb-4">Follow Us</h4>
              <div className="flex gap-4">
                <a href="#" className="bg-slate-800 p-3 rounded-full hover:bg-teal-600 hover:text-white transition-all">
                  <Facebook size={20} />
                </a>
                <a href="#" className="bg-slate-800 p-3 rounded-full hover:bg-teal-600 hover:text-white transition-all">
                  <Instagram size={20} />
                </a>
                <a href="#" className="bg-slate-800 p-3 rounded-full hover:bg-teal-600 hover:text-white transition-all">
                  <Twitter size={20} />
                </a>
              </div>
            </div>

            <div className="pt-8 border-t border-slate-800">
              <a 
                href="https://maps.app.goo.gl/9GjTR7d6LYtrEXE96" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block border border-slate-600 hover:border-teal-500 text-slate-300 hover:text-teal-400 px-6 py-3 rounded-lg transition-all"
              >
                Get Directions on Google Maps
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 text-center text-slate-500 text-sm">
          <p>&copy; {new Date().getFullYear()} The Tooth Club. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
