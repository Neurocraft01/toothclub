import React from 'react';
import { MapPin, Clock } from 'lucide-react';

const Location = () => {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-8">Visit Us</h2>
            
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center text-teal-600">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Address</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Shop No. 6, Raj Aangan - C, Shinde Vasti, Ravet,<br />
                    Pune, Pimpri-Chinchwad, Maharashtra 412101
                  </p>
                  <p className="text-sm text-slate-500 mt-2">
                    Located in Ravet, Pune – easily accessible from neighbouring areas.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center text-teal-600">
                  <Clock size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Clinic Hours</h3>
                  <div className="space-y-1 text-slate-600">
                    <p><span className="font-medium text-slate-900">Mon – Sat:</span> 10:00 am – 1:30 pm, 5:00 pm – 9:00 pm</p>
                    <p><span className="font-medium text-slate-900">Sunday:</span> 10:30 am – 1:30 pm</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="h-[400px] bg-slate-200 rounded-2xl overflow-hidden shadow-lg">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3780.273398787878!2d73.7478!3d18.6517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b9e76c8fa255%3A0x831761d71b9d1113!2sThe%20Tooth%20Club!5e0!3m2!1sen!2sin!4v1635756789012!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy"
              title="Clinic Location"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
