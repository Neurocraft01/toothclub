import React from 'react';
import { MapPin, Clock, Phone, Mail } from 'lucide-react';

const Location = () => {
  return (
    <section id="location" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <span className="text-clinic-primary/60 font-medium tracking-widest uppercase text-sm mb-4 block">Find Us</span>
            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-clinic-primary mb-12">
              Visit Our Clinic
            </h2>
            
            <div className="space-y-12">
              <div className="flex gap-6 group">
                <div className="flex-shrink-0 w-14 h-14 border border-clinic-primary/10 flex items-center justify-center text-clinic-secondary group-hover:bg-clinic-primary group-hover:text-white transition-colors duration-300">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-serif font-bold text-clinic-primary mb-3">Location</h3>
                  <p className="text-clinic-primary/70 leading-relaxed text-lg">
                    Shop No. 6, Raj Aangan - C, Shinde Vasti, Ravet,<br />
                    Pune, Pimpri-Chinchwad, Maharashtra 412101
                  </p>
                  <a 
                    href="https://goo.gl/maps/..." 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block mt-4 text-clinic-secondary font-medium border-b border-clinic-secondary/30 hover:border-clinic-secondary transition-colors"
                  >
                    Get Directions
                  </a>
                </div>
              </div>

              <div className="flex gap-6 group">
                <div className="flex-shrink-0 w-14 h-14 border border-clinic-primary/10 flex items-center justify-center text-clinic-secondary group-hover:bg-clinic-primary group-hover:text-white transition-colors duration-300">
                  <Clock size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-serif font-bold text-clinic-primary mb-3">Opening Hours</h3>
                  <div className="space-y-2 text-clinic-primary/70 text-lg">
                    <div className="flex justify-between w-full max-w-xs border-b border-dashed border-clinic-primary/10 pb-1">
                      <span className="font-medium text-clinic-primary">Mon – Sat</span>
                      <span>10:00 am – 1:30 pm</span>
                    </div>
                    <div className="flex justify-between w-full max-w-xs border-b border-dashed border-clinic-primary/10 pb-1">
                      <span className="font-medium text-clinic-primary">Evening</span>
                      <span>5:00 pm – 9:00 pm</span>
                    </div>
                    <div className="flex justify-between w-full max-w-xs border-b border-dashed border-clinic-primary/10 pb-1">
                      <span className="font-medium text-clinic-primary">Sunday</span>
                      <span>10:30 am – 1:30 pm</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex gap-6 group">
                <div className="flex-shrink-0 w-14 h-14 border border-clinic-primary/10 flex items-center justify-center text-clinic-secondary group-hover:bg-clinic-primary group-hover:text-white transition-colors duration-300">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-serif font-bold text-clinic-primary mb-3">Contact</h3>
                  <p className="text-clinic-primary/70 leading-relaxed text-lg mb-2">
                    <a href="tel:07058388353" className="hover:text-clinic-secondary transition-colors">070583 88353</a>
                  </p>
                  <p className="text-clinic-primary/70 leading-relaxed text-lg">
                    <a href="mailto:info@thetoothclub.com" className="hover:text-clinic-secondary transition-colors">info@thetoothclub.com</a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="h-[600px] bg-clinic-bg relative">
            <div className="absolute inset-0 border border-clinic-primary/10 p-2">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3780.273398787878!2d73.7478!3d18.6517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b9e76c8fa255%3A0x831761d71b9d1113!2sThe%20Tooth%20Club!5e0!3m2!1sen!2sin!4v1635756789012!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0, filter: 'grayscale(100%) contrast(1.2) opacity(0.9)' }} 
                allowFullScreen="" 
                loading="lazy"
                title="Clinic Location"
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
