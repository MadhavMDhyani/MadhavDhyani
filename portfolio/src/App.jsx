import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import AboutMe from './sections/AboutMe';
import TechnicalProficiency from './sections/TechnicalProficiency';
import Projects from './sections/Projects';
import ContactMe from './sections/ContactMe';
import Footer from './sections/Footer';
import { Analytics } from "@vercel/analytics/next"

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      return savedTheme === 'dark';
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <div className="bg-[#FFFCF8] dark:bg-black min-h-screen text-slate-800 dark:text-slate-100 font-sans transition-colors duration-300">
      <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <Hero />
      <AboutMe />
      <TechnicalProficiency />
      <Projects />
      <ContactMe />
      <Footer />
    </div>
  );
};

export default App;