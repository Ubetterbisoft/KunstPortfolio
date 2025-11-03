import { ArrowDown } from 'lucide-react';

interface HeroProps {
  onNavigate: () => void;
}

export default function Hero({ onNavigate }: HeroProps) {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <h1 className="text-5xl md:text-7xl font-light tracking-tight leading-tight">
          Kunst die
          <br />
          <span className="italic font-serif">berührt</span>
        </h1>

        <p className="text-gray-600 text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed">
          Zeitgenössische Kunstwerke zwischen Tradition und Moderne.
          Entdecken Sie die einzigartige Perspektive von Max Mustermann.
        </p>

        <button
          onClick={onNavigate}
          className="inline-flex items-center gap-2 px-8 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition-colors group"
        >
          <span className="text-sm tracking-wide">Galerie entdecken</span>
          <ArrowDown size={18} className="group-hover:translate-y-1 transition-transform" />
        </button>

        <div className="pt-12 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
          <div>
            <div className="text-3xl md:text-4xl font-light mb-2">12+</div>
            <div className="text-sm text-gray-500 tracking-wide">Jahre Erfahrung</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-light mb-2">150+</div>
            <div className="text-sm text-gray-500 tracking-wide">Projekte</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-light mb-2">8+</div>
            <div className="text-sm text-gray-500 tracking-wide">Ausstellungen</div>
          </div>
        </div>
      </div>
    </section>
  );
}
