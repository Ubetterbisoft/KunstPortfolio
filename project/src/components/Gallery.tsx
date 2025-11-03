import { artworks } from '../data/artworks';

interface GalleryProps {
  onImageClick: (index: number) => void;
}

export default function Gallery({ onImageClick }: GalleryProps) {
  return (
    <section className="min-h-screen px-6 py-24 pt-32">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-4">Galerie</h2>
          <p className="text-gray-600 font-light">Eine Auswahl meiner aktuellen Arbeiten</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {artworks.map((artwork, index) => (
            <button
              key={index}
              onClick={() => onImageClick(index)}
              className="group relative aspect-square overflow-hidden bg-gray-100 rounded-lg hover:shadow-2xl transition-all duration-300"
            >
              <img
                src={artwork.image}
                alt={artwork.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-lg font-light mb-1">{artwork.title}</h3>
                  <p className="text-sm text-gray-300">{artwork.medium}</p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
