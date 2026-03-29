import React from 'react';
import { motion } from 'motion/react';
import { MapPin, ChevronRight } from 'lucide-react';
import { Link } from 'react-scroll';

export default function Hero() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1589302168068-964664d93dc0?q=80&w=1974&auto=format&fit=crop"
          alt="Biryani Background"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-earth-gold font-medium tracking-[0.3em] uppercase text-sm mb-4 block">
            Welcome to South Indian Hospitality
          </span>
          <h1 className="text-5xl md:text-8xl text-white font-serif mb-6 leading-tight">
            Virrundhu <br />
            <span className="italic text-earth-gold">Multi Cuisine</span>
          </h1>
          <p className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
            A Feast Worth the Journey. Experience authentic flavors and warm hospitality at the heart of Gummidipoondi.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="menu"
              smooth="easeInOutQuart"
              duration={600}
              className="btn-primary flex items-center gap-2 cursor-pointer w-full sm:w-auto justify-center"
            >
              View Menu <ChevronRight className="w-4 h-4" />
            </Link>
            <Link
              to="contact"
              smooth="easeInOutQuart"
              duration={600}
              className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-3 rounded-full font-medium hover:bg-white hover:text-earth-brown transition-all flex items-center gap-2 w-full sm:w-auto justify-center cursor-pointer"
            >
              <MapPin className="w-4 h-4" /> Get Directions
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-white/50 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}
