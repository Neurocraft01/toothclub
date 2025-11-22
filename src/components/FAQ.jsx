import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

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

  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-slate-200 rounded-xl overflow-hidden">
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center bg-slate-50 hover:bg-slate-100 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold text-slate-900">{faq.question}</span>
                {openIndex === index ? <ChevronUp className="text-teal-600" /> : <ChevronDown className="text-slate-400" />}
              </button>
              {openIndex === index && (
                <div className="px-6 py-4 bg-white text-slate-600 leading-relaxed border-t border-slate-100">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
