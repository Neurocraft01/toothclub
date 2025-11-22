import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, User, Bot } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { type: 'bot', text: 'Hi there! Welcome to The Tooth Club. How can I help you today?' }
  ]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = { type: 'user', text: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');

    // Simple rule-based logic
    setTimeout(() => {
      let botResponse = { type: 'bot', text: "I'm not sure about that. Please call us at 070583 88353." };
      const lowerInput = input.toLowerCase();

      if (lowerInput.includes('appointment') || lowerInput.includes('book')) {
        botResponse.text = "You can book an appointment by clicking the 'Book Appointment' button or calling us directly!";
      } else if (lowerInput.includes('time') || lowerInput.includes('open')) {
        botResponse.text = "We are open Mon-Sat: 10am-1:30pm, 5pm-9pm and Sun: 10:30am-1:30pm.";
      } else if (lowerInput.includes('price') || lowerInput.includes('cost')) {
        botResponse.text = "Our pricing varies by treatment. We offer affordable packages. Please visit us for a consultation.";
      } else if (lowerInput.includes('location') || lowerInput.includes('where')) {
        botResponse.text = "We are located at Shop No. 6, Raj Aangan - C, Shinde Vasti, Ravet, Pune.";
      } else if (lowerInput.includes('hello') || lowerInput.includes('hi')) {
        botResponse.text = "Hello! How can I assist you with your dental needs?";
      }

      setMessages(prev => [...prev, botResponse]);
    }, 1000);
  };

  return (
    <>
      <motion.button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-24 right-6 z-40 bg-clinic-primary text-white p-4 rounded-full shadow-xl hover:bg-clinic-primary/90 transition-colors ${isOpen ? 'hidden' : 'flex'}`}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
      >
        <MessageSquare size={28} />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-24 right-6 z-50 w-80 sm:w-96 bg-white shadow-2xl border border-clinic-primary/10 overflow-hidden flex flex-col max-h-[500px]"
          >
            {/* Header */}
            <div className="bg-clinic-primary p-4 flex justify-between items-center text-white">
              <div className="flex items-center gap-3">
                <div className="bg-white/10 p-2 rounded-full">
                  <Bot size={20} />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-sm tracking-wide">Tooth Club Assistant</h3>
                  <p className="text-xs text-white/60">Online</p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="hover:bg-white/10 p-1 rounded transition-colors">
                <X size={20} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 p-4 overflow-y-auto bg-clinic-bg space-y-4 h-80">
              {messages.map((msg, index) => (
                <div key={index} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[80%] p-3 text-sm leading-relaxed ${
                    msg.type === 'user' 
                      ? 'bg-clinic-secondary text-clinic-primary rounded-t-xl rounded-bl-xl font-medium' 
                      : 'bg-white text-clinic-primary shadow-sm border border-clinic-primary/5 rounded-t-xl rounded-br-xl'
                  }`}>
                    {msg.text}
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-3 bg-white border-t border-clinic-primary/10 flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Type a message..."
                className="flex-1 px-4 py-2 bg-clinic-bg border border-transparent focus:border-clinic-secondary/50 rounded-none text-sm focus:outline-none transition-colors text-clinic-primary placeholder-clinic-primary/40"
              />
              <button 
                onClick={handleSend}
                className="bg-clinic-primary text-white p-2 hover:bg-clinic-primary/90 transition-colors"
              >
                <Send size={18} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chatbot;
