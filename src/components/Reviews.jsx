import React from 'react';
import { Star, Quote } from 'lucide-react';

const Reviews = () => {
  const reviews = [
    {
      text: "Doctor was very patient, explained every step, and made my anxious child feel comfortable.",
      author: "Parent",
      rating: 5
    },
    {
      text: "Highly professional and genuine advice about dental care. Super professional, warm, and calming environment.",
      author: "Patient",
      rating: 5
    },
    {
      text: "Clean, modern clinic with well-organized staff. Root canal treatment was painless and smooth.",
      author: "Patient",
      rating: 5
    },
    {
      text: "Perfect for those with dental anxiety – gentle and reassuring. Friendly staff and professional treatment.",
      author: "Patient",
      rating: 5
    }
  ];

  return (
    <section id="reviews" className="py-20 bg-teal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Why Patients Love Us</h2>
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={24} fill="currentColor" />
              ))}
            </div>
            <span className="text-xl font-bold text-slate-900">4.8/5</span>
            <span className="text-slate-500">(22 Ratings)</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {reviews.map((review, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-sm relative">
              <Quote className="absolute top-8 right-8 text-teal-100" size={48} />
              <div className="flex text-yellow-400 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              <p className="text-slate-700 text-lg mb-6 italic relative z-10">"{review.text}"</p>
              <p className="text-slate-500 font-medium">— {review.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
