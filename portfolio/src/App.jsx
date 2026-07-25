import React from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import AboutMe from './sections/AboutMe';
import TechnicalProficiency from './sections/TechnicalProficiency';
import ContactMe from './sections/ContactMe';
import Footer from './sections/Footer';

const App = () => {
  return (
    <div className="bg-[#FFFCF8] min-h-screen text-slate-800 font-sans">
      <Navbar />
      <Hero />
      <AboutMe />
      <TechnicalProficiency />
      <ContactMe />
      <Footer />
    </div>
  );
};

export default App;