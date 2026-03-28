import React from 'react';
import { motion } from 'motion/react';
import { Star, Users, Coffee, Heart } from 'lucide-react';

const highlights = [
  {
    icon: <Star className="w-8 h-8" />,
    title: "Customer Favorites",
    description: "Our signature Biryanis and Kebabs are loved by thousands of travelers every month."
  },
  {
    icon: <Coffee className="w-8 h-8" />,
    title: "Highway Stop Comfort",
    description: "Perfectly located for a refreshing break with clean facilities and quick service."
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Family Friendly",
    description: "Spacious dining area designed for large groups and families to enjoy together."
  },
  {
    icon: <Heart className="w-8 h-8" />,
    title: "Hygienic Kitchen",
    description: "We maintain the highest standards of cleanliness and food safety in our preparation."
  }
];

export default function Highlights() {
  return (
    <section className="py-24 bg-earth-brown text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-earth-gold/20 rounded-2xl flex items-center justify-center mx-auto mb-6 text-earth-gold">
                {item.icon}
              </div>
              <h3 className="text-xl font-serif mb-4">{item.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
