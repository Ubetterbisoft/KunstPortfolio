import { Menu, X } from 'lucide-react';
import { useState } from 'react';

interface NavigationProps {
  activeSection: string;
  onNavigate: (section: string) => void;
}

export default function Navigation({ activeSection, onNavigate }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'gallery', label: 'Galerie' },
    { id: 'about', label: 'Über mich' },
    { id: 'contact', label: 'Kontakt' },
  ];

  const handleNavigate = (section: string) => {
    onNavigate(section);
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <button
            onClick={() => handleNavigate('home')}
            className="text-xl font-light tracking-wider hover:opacity-70 transition-opacity"
          >
            MAX MUSTERMANN
          </button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 hover:bg-gray-50 rounded-lg transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigate(item.id)}
                className={`text-sm tracking-wide transition-colors ${
                  activeSection === item.id
                    ? 'text-black font-medium'
                    : 'text-gray-500 hover:text-black'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigate(item.id)}
                className={`block w-full text-left px-4 py-2 rounded-lg text-sm tracking-wide transition-colors ${
                  activeSection === item.id
                    ? 'bg-gray-100 text-black font-medium'
                    : 'text-gray-500 hover:bg-gray-50 hover:text-black'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
