import React from 'react';
import { X, Calendar, Clock, CheckCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const BookingModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[60]"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed inset-0 m-auto z-[70] w-full max-w-4xl h-[85vh] bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row"
          >
            {/* Sidebar Info */}
            <div className="bg-teal-600 p-8 text-white md:w-1/3 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold mb-2">Book Appointment</h3>
                <p className="text-teal-100 mb-8">Select a time that works for you.</p>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-3">
                    <Clock className="mt-1" size={20} />
                    <div>
                      <p className="font-semibold">Duration</p>
                      <p className="text-sm text-teal-100">30 - 60 Minutes</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Calendar className="mt-1" size={20} />
                    <div>
                      <p className="font-semibold">Availability</p>
                      <p className="text-sm text-teal-100">Mon - Sun</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="mt-1" size={20} />
                    <div>
                      <p className="font-semibold">Confirmation</p>
                      <p className="text-sm text-teal-100">Instant email & SMS</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 pt-8 border-t border-teal-500">
                <p className="text-sm text-teal-100">Need help?</p>
                <p className="font-bold text-lg">070583 88353</p>
              </div>
            </div>

            {/* Calendar Simulation */}
            <div className="flex-1 bg-white p-0 relative">
              <button 
                onClick={onClose}
                className="absolute top-4 right-4 p-2 hover:bg-slate-100 rounded-full transition-colors z-10"
              >
                <X size={24} className="text-slate-500" />
              </button>
              
              {/* This iframe simulates a Google Calendar Appointment Page */}
              {/* In a real app, replace this with your actual Google Calendar Appointment URL */}
              <div className="w-full h-full flex flex-col items-center justify-center text-center p-8">
                <div className="w-full max-w-md space-y-6">
                  <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                    <h4 className="font-bold text-slate-900 mb-4">Select a Date & Time</h4>
                    <div className="grid grid-cols-3 gap-2 mb-4">
                      {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                        <button key={day} className="p-2 text-sm rounded hover:bg-teal-50 hover:text-teal-600 transition-colors">
                          {day}
                        </button>
                      ))}
                    </div>
                    <div className="space-y-2">
                      {['10:00 AM', '11:30 AM', '05:00 PM', '06:30 PM'].map(time => (
                        <button key={time} className="w-full py-2 border border-slate-200 rounded-lg hover:border-teal-500 hover:text-teal-600 transition-all text-sm font-medium">
                          {time}
                        </button>
                      ))}
                    </div>
                  </div>
                  <p className="text-slate-500 text-sm">
                    * This is a demo booking interface. In a real deployment, this would connect to Google Calendar API.
                  </p>
                  <a 
                    href="https://calendar.google.com/calendar/u/0/r" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                  >
                    Open Google Calendar
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default BookingModal;
