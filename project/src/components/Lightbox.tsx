import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useEffect } from 'react';
import { artworks } from '../data/artworks';

interface LightboxProps {
  imageIndex: number;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export default function Lightbox({ imageIndex, onClose, onNavigate }: LightboxProps) {
  const currentArtwork = artworks[imageIndex];
  const isFirst = imageIndex === 0;
  const isLast = imageIndex === artworks.length - 1;

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft' && !isFirst) {
        onNavigate(imageIndex - 1);
      } else if (e.key === 'ArrowRight' && !isLast) {
        onNavigate(imageIndex + 1);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [imageIndex, isFirst, isLast, onClose, onNavigate]);

  return (
    <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center">
      <button
        onClick={onClose}
        className="absolute top-6 right-6 p-2 text-white hover:bg-white/10 rounded-full transition-colors z-10"
      >
        <X size={32} />
      </button>

      {!isFirst && (
        <button
          onClick={() => onNavigate(imageIndex - 1)}
          className="absolute left-6 p-2 text-white hover:bg-white/10 rounded-full transition-colors z-10"
        >
          <ChevronLeft size={40} />
        </button>
      )}

      {!isLast && (
        <button
          onClick={() => onNavigate(imageIndex + 1)}
          className="absolute right-6 p-2 text-white hover:bg-white/10 rounded-full transition-colors z-10"
        >
          <ChevronRight size={40} />
        </button>
      )}

      <div className="max-w-7xl max-h-[90vh] mx-auto px-6 flex flex-col items-center">
        <img
          src={currentArtwork.image}
          alt={currentArtwork.title}
          className="max-w-full max-h-[75vh] object-contain rounded-lg"
        />

        <div className="mt-8 text-center text-white max-w-2xl">
          <h3 className="text-2xl font-light mb-2">{currentArtwork.title}</h3>
          <p className="text-gray-300 font-light mb-1">{currentArtwork.medium}</p>
          <p className="text-gray-400 text-sm">{currentArtwork.year}</p>
          {currentArtwork.description && (
            <p className="text-gray-300 font-light mt-4 leading-relaxed">
              {currentArtwork.description}
            </p>
          )}
        </div>

        <div className="mt-6 text-gray-400 text-sm">
          {imageIndex + 1} / {artworks.length}
        </div>
      </div>
    </div>
  );
}
