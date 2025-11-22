import React from 'react';
import { Star, Quote } from 'lucide-react';
import { motion } from 'framer-motion';

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
    <section id="reviews" className="py-32 bg-clinic-primary text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute right-0 top-0 w-[500px] h-[500px] bg-white rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute left-0 bottom-0 w-[300px] h-[300px] bg-clinic-secondary rounded-full blur-[80px] -translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div>
            <span className="text-clinic-secondary font-medium tracking-widest uppercase text-sm mb-4 block">Testimonials</span>
            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-white mb-4">
              Stories of Smiles
            </h2>
          </div>
          <div className="flex items-center gap-4 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/10">
            <div className="flex text-clinic-secondary">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={20} fill="currentColor" />
              ))}
            </div>
            <span className="text-xl font-bold text-white">4.8/5</span>
            <span className="text-white/60 text-sm">(22 Ratings)</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {reviews.map((review, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-md p-10 rounded-none border border-white/10 hover:bg-white/10 transition-colors relative group"
            >
              <Quote className="absolute top-8 right-8 text-clinic-secondary/20 group-hover:text-clinic-secondary/40 transition-colors" size={64} />
              <div className="flex text-clinic-secondary mb-6">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              <p className="text-white/90 text-xl font-serif italic mb-8 leading-relaxed relative z-10">"{review.text}"</p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-clinic-secondary rounded-full flex items-center justify-center text-clinic-primary font-bold">
                  {review.author[0]}
                </div>
                <p className="text-white font-medium tracking-wide uppercase text-sm">{review.author}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
