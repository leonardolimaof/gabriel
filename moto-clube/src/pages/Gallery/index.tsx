import { useState } from 'react';
import { IMAGES } from '../../constants/images';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-secondary">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-5xl font-black text-accent text-center mb-16 tracking-wider">GALERIA</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {IMAGES.gallery.map((image, index) => (
            <div 
              key={index}
              className="group relative bg-secondary-dark/50 backdrop-blur-md rounded-3xl shadow-2xl overflow-hidden transform hover:scale-[1.02] transition duration-500 cursor-pointer border border-primary/20 hover:border-primary/40"
              onClick={() => setSelectedImage(image)}
            >
              <div className="aspect-w-4 aspect-h-3">
                <img
                  src={image}
                  alt={`Galeria ${index + 1}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition duration-500">
                <h3 className="text-lg font-bold tracking-wider">ENCONTRO {index + 1}</h3>
                <p className="text-accent-medium">Clique para ampliar</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal de visualização */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-5xl mx-4">
            <img 
              src={selectedImage} 
              alt="Imagem ampliada" 
              className="rounded-3xl shadow-2xl max-h-[80vh] w-auto"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-accent-medium hover:text-primary transition duration-300"
            >
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery; 