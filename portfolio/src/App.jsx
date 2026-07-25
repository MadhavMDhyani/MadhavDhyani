import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import AboutMe from './sections/AboutMe';
import TechnicalProficiency from './sections/TechnicalProficiency';
import Projects from './sections/Projects';
import ContactMe from './sections/ContactMe';
import Footer from './sections/Footer';

const App = () => {
  return (
    <div className="bg-[#FFFCF8] min-h-screen text-slate-800 font-sans">
      <Navbar />
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