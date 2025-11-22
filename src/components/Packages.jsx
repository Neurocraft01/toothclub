import React from 'react';
import { Gift } from 'lucide-react';

const Packages = () => {
  return (
    <section className="py-16 bg-teal-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-full mb-6 backdrop-blur-sm">
          <Gift size={32} />
        </div>
        <h2 className="text-3xl lg:text-4xl font-bold mb-6">Healthcare Packages</h2>
        <p className="text-xl text-teal-50 max-w-2xl mx-auto mb-8">
          We offer various dental packages tailored to your needs and budget, including check-ups, cleaning, and RCT packages.
        </p>
        <p className="text-teal-100 font-medium">
          Contact us for detailed pricing and package information.
        </p>
      </div>
    </section>
  );
};

export default Packages;
