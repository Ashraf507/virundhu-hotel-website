import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Maximize2 } from 'lucide-react';

const images = [
  {
    url: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?q=80&w=2020&auto=format&fit=crop",
    title: "Signature Biryani",
    category: "Food"
  },
  {
    url: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?q=80&w=2070&auto=format&fit=crop",
    title: "Tandoori Platter",
    category: "Food"
  },
  {
    url: "https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=2070&auto=format&fit=crop",
    title: "Our Ambiance",
    category: "Interior"
  },
  {
    url: "https://images.unsplash.com/photo-1626074353765-517a681e40be?q=80&w=2070&auto=format&fit=crop",
    title: "South Indian Thali",
    category: "Food"
  },
  {
    url: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=2072&auto=format&fit=crop",
    title: "Traditional Fish Fry",
    category: "Food"
  },
  {
    url: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop",
    title: "Family Dining Area",
    category: "Interior"
  }
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="gallery" className="py-24 bg-earth-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-earth-gold font-medium tracking-widest uppercase text-sm mb-4 block">
            Visual Feast
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-earth-brown mb-6">
            Our <span className="italic">Gallery</span>
          </h2>
          <div className="w-24 h-1 bg-earth-gold mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative aspect-square rounded-3xl overflow-hidden cursor-pointer shadow-lg"
              onClick={() => setSelectedImage(img.url)}
            >
              <img
                src={img.url}
                alt={img.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-earth-brown/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white p-6">
                <Maximize2 className="w-8 h-8 mb-4 text-earth-gold" />
                <h4 className="text-xl font-serif text-center">{img.title}</h4>
                <p className="text-sm text-white/70 uppercase tracking-widest mt-2">{img.category}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4 md:p-10"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-6 right-6 text-white hover:text-earth-gold transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-10 h-10" />
            </button>
            <motion.img
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              src={selectedImage}
              alt="Full view"
              className="max-w-full max-h-full object-contain rounded-xl"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
