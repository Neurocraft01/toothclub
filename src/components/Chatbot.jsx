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
        className={`fixed bottom-24 right-6 z-40 bg-teal-600 text-white p-4 rounded-full shadow-lg hover:bg-teal-700 transition-colors ${isOpen ? 'hidden' : 'flex'}`}
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
            className="fixed bottom-24 right-6 z-50 w-80 sm:w-96 bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden flex flex-col max-h-[500px]"
          >
            {/* Header */}
            <div className="bg-teal-600 p-4 flex justify-between items-center text-white">
              <div className="flex items-center gap-2">
                <div className="bg-white/20 p-1.5 rounded-full">
                  <Bot size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-sm">Tooth Club Assistant</h3>
                  <p className="text-xs text-teal-100">Online</p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="hover:bg-white/20 p-1 rounded transition-colors">
                <X size={20} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 p-4 overflow-y-auto bg-slate-50 space-y-4 h-80">
              {messages.map((msg, index) => (
                <div key={index} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                    msg.type === 'user' 
                      ? 'bg-teal-600 text-white rounded-br-none' 
                      : 'bg-white text-slate-700 shadow-sm border border-slate-100 rounded-bl-none'
                  }`}>
                    {msg.text}
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-3 bg-white border-t border-slate-100 flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Type a message..."
                className="flex-1 px-4 py-2 bg-slate-100 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
              <button 
                onClick={handleSend}
                className="bg-teal-600 text-white p-2 rounded-full hover:bg-teal-700 transition-colors"
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
