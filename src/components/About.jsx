import React from 'react';
import { ShieldCheck, Heart, Smile } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">About The Tooth Club</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Established in 2021, we have been a pillar in dental healthcare in Ravet for over 4 years.
            We offer specialized treatments including Dental Implants, Oral Surgery, and Pediatric Care.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <ShieldCheck size={40} className="text-teal-600" />,
              title: "Trusted Expertise",
              desc: "With 4+ years of experience and hundreds of happy smiles, we provide high-quality, patient-centric care."
            },
            {
              icon: <Heart size={40} className="text-teal-600" />,
              title: "Comfort First",
              desc: "We specialize in anxiety-free dentistry. Our gentle approach makes us a favorite among families and kids."
            },
            {
              icon: <Smile size={40} className="text-teal-600" />,
              title: "Modern Clinic",
              desc: "Equipped with the latest technology in a clean, calming environment designed for your relaxation."
            }
          ].map((item, index) => (
            <div key={index} className="bg-slate-50 p-8 rounded-2xl hover:shadow-lg transition-shadow text-center">
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
              <p className="text-slate-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
