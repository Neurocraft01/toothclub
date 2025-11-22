import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Team from './components/Team';
import Reviews from './components/Reviews';
import FAQ from './components/FAQ';
import Packages from './components/Packages';
import Location from './components/Location';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import Chatbot from './components/Chatbot';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Gallery />
        <Team />
        <Reviews />
        <Packages />
        <FAQ />
        <Location />
      </main>
      <Footer />
      <WhatsAppButton />
      <Chatbot />
    </div>
  );
}

export default App;
