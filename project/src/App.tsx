import { useState, useRef, useEffect } from 'react';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Lightbox from './components/Lightbox';
import Navigation from './components/Navigation';

function App() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [activeSection, setActiveSection] = useState('home');
  const heroRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (section: string) => {
    setActiveSection(section);
    let ref;
    switch (section) {
      case 'gallery':
        ref = galleryRef;
        break;
      case 'about':
        ref = aboutRef;
        break;
      case 'contact':
        ref = contactRef;
        break;
      default:
        ref = heroRef;
    }
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        { ref: heroRef, id: 'home' },
        { ref: galleryRef, id: 'gallery' },
        { ref: aboutRef, id: 'about' },
        { ref: contactRef, id: 'contact' },
      ];

      const current = sections.find((section) => {
        const element = section.ref.current;
        if (!element) return false;
        const rect = element.getBoundingClientRect();
        return rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2;
      });

      if (current) {
        setActiveSection(current.id);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navigation activeSection={activeSection} onNavigate={scrollToSection} />

      <div ref={heroRef}>
        <Hero onNavigate={() => scrollToSection('gallery')} />
      </div>

      <div ref={galleryRef}>
        <Gallery onImageClick={setSelectedImage} />
      </div>

      <div ref={aboutRef}>
        <About />
      </div>

      <div ref={contactRef}>
        <Contact />
      </div>

      {selectedImage !== null && (
        <Lightbox
          imageIndex={selectedImage}
          onClose={() => setSelectedImage(null)}
          onNavigate={setSelectedImage}
        />
      )}

      <Footer />
    </div>
  );
}

export default App;
