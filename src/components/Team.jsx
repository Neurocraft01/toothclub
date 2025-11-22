import React from 'react';

const Team = () => {
  return (
    <section id="doctors" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Meet Our Doctors</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Experienced professionals dedicated to your smile.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <div className="bg-slate-50 rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
            <div className="h-64 bg-teal-100 flex items-center justify-center">
               {/* Placeholder for Doctor Image */}
               <span className="text-teal-800 font-medium text-lg">Dr. Chaitanya</span>
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Dr. Chaitanya</h3>
              <p className="text-teal-600 font-medium mb-4">Pediatric & General Dentist</p>
              <p className="text-slate-600 leading-relaxed">
                Known for his patience with kids, Dr. Chaitanya explains every step calmly and provides genuine, professional advice. He ensures a comfortable experience for all ages.
              </p>
            </div>
          </div>

          <div className="bg-slate-50 rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
            <div className="h-64 bg-blue-100 flex items-center justify-center">
               {/* Placeholder for Doctor Image */}
               <span className="text-blue-800 font-medium text-lg">Dr. Saily</span>
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Dr. Saily</h3>
              <p className="text-teal-600 font-medium mb-4">Restorative Dentist</p>
              <p className="text-slate-600 leading-relaxed">
                Specializing in smooth and painless root canals and fillings. Dr. Saily is professional, caring, and dedicated to efficient, high-quality treatments.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
