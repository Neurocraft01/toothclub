import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const FAQ = () => {
  const faqs = [
    {
      question: "Does The Tooth Club provide 24x7 emergency services?",
      answer: "The Tooth Club is known for providing timely care. Patients can call the clinic to check available emergency services and same-day appointments."
    },
    {
      question: "How can I book an appointment at The Tooth Club?",
      answer: "Patients can book via phone call and may also have online booking options depending on availability. The best way is to call the clinic helpline at 070583 88353 for current booking options."
    },
    {
      question: "Do you treat kids?",
      answer: "Yes! We specialize in pediatric dentistry and are known for our gentle, patient approach with children to ensure they have a positive experience."
    },
    {
      question: "Is the treatment painful?",
      answer: "We focus on painless dentistry using modern techniques and anesthesia to ensure your comfort throughout any procedure, including root canals."
    }
  ];

  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="py-32 bg-clinic-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <span className="text-clinic-primary/60 font-medium tracking-widest uppercase text-sm mb-4 block">Common Questions</span>
            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-clinic-primary mb-6">
              Everything You Need to Know
            </h2>
            <p className="text-lg text-clinic-primary/70 mb-8">
              Can't find the answer you're looking for? Please chat to our friendly team.
            </p>
            <a href="#contact" className="inline-block border-b border-clinic-primary text-clinic-primary pb-1 hover:text-clinic-secondary hover:border-clinic-secondary transition-colors">
              Contact Support
            </a>
          </div>

          <div className="md:col-span-8">
            <div className="space-y-0">
              {faqs.map((faq, index) => (
                <div key={index} className="border-b border-clinic-primary/10">
                  <button
                    className="w-full py-8 text-left flex justify-between items-start group"
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  >
                    <span className={`text-xl font-serif transition-colors ${openIndex === index ? 'text-clinic-secondary' : 'text-clinic-primary group-hover:text-clinic-secondary'}`}>
                      {faq.question}
                    </span>
                    <span className={`ml-4 flex-shrink-0 transition-colors ${openIndex === index ? 'text-clinic-secondary' : 'text-clinic-primary/40 group-hover:text-clinic-secondary'}`}>
                      {openIndex === index ? <Minus size={24} /> : <Plus size={24} />}
                    </span>
                  </button>
                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <p className="pb-8 text-clinic-primary/70 leading-relaxed text-lg">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
