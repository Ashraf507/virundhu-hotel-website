import React from 'react';
import { motion } from 'motion/react';
import { Truck, Utensils, Car } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-earth-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2070&auto=format&fit=crop"
                alt="Restaurant Ambiance"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-earth-brown text-white p-8 rounded-3xl hidden md:block shadow-xl">
              <p className="text-4xl font-serif text-earth-gold mb-1">10+</p>
              <p className="text-sm uppercase tracking-widest font-medium">Years of Excellence</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-earth-gold font-medium tracking-widest uppercase text-sm mb-4 block">
              Our Story
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-earth-brown mb-8 leading-tight">
              A Culinary Landmark on the <span className="italic">NH5 Bypass</span>
            </h2>
            <p className="text-earth-brown/70 text-lg leading-relaxed mb-8">
              Located conveniently at the Verkadu Gummudipoondi Bypass, Virrundhu Multi Cuisine Restaurant has been the preferred stop for highway travelers and local families alike. We pride ourselves on serving authentic South Indian delicacies alongside a wide range of North Indian and Chinese specialties.
            </p>
            <p className="text-earth-brown/70 text-lg leading-relaxed mb-10">
              Whether you're looking for a quick drive-through meal, a relaxed family dinner, or a reliable delivery service, we bring the same passion for flavor to every plate.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="flex flex-col items-center text-center p-4 bg-white rounded-2xl border border-earth-gold/10">
                <Utensils className="w-8 h-8 text-earth-gold mb-3" />
                <h4 className="font-medium text-earth-brown">Dine-In</h4>
              </div>
              <div className="flex flex-col items-center text-center p-4 bg-white rounded-2xl border border-earth-gold/10">
                <Car className="w-8 h-8 text-earth-gold mb-3" />
                <h4 className="font-medium text-earth-brown">Drive-Thru</h4>
              </div>
              <div className="flex flex-col items-center text-center p-4 bg-white rounded-2xl border border-earth-gold/10">
                <Truck className="w-8 h-8 text-earth-gold mb-3" />
                <h4 className="font-medium text-earth-brown">Delivery</h4>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
