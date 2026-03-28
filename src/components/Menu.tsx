import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../lib/utils';

const categories = [
  { id: 'biryani', name: 'Biryani Specials' },
  { id: 'non-veg', name: 'Non-Veg' },
  { id: 'veg', name: 'Veg Meals' },
  { id: 'tandoor', name: 'Tandoor & Kebabs' },
  { id: 'chinese', name: 'Chinese' },
];

const menuItems = [
  {
    id: 1,
    name: 'Chicken Biryani',
    price: '₹240',
    category: 'biryani',
    description: 'Fragrant basmati rice cooked with tender chicken and aromatic spices.',
    popular: true,
  },
  {
    id: 2,
    name: 'Mutton Dum Biryani',
    price: '₹380',
    category: 'biryani',
    description: 'Slow-cooked mutton with long-grain rice in traditional dum style.',
    popular: true,
  },
  {
    id: 3,
    name: 'Chicken 65',
    price: '₹220',
    category: 'non-veg',
    description: 'Spicy, deep-fried chicken chunks tempered with curry leaves.',
    popular: true,
  },
  {
    id: 4,
    name: 'Afghani Chicken Kebab',
    price: '₹320',
    category: 'tandoor',
    description: 'Creamy and mild chicken kebabs grilled to perfection in tandoor.',
    popular: true,
  },
  {
    id: 5,
    name: 'Paneer Butter Masala',
    price: '₹210',
    category: 'veg',
    description: 'Soft paneer cubes in a rich, creamy tomato-based gravy.',
    popular: true,
  },
  {
    id: 6,
    name: 'Fish Fry (Vanjaram)',
    price: '₹350',
    category: 'non-veg',
    description: 'Tawa fried seer fish with traditional South Indian spices.',
  },
  {
    id: 7,
    name: 'Chicken Fried Rice',
    price: '₹190',
    category: 'chinese',
    description: 'Wok-tossed rice with shredded chicken, egg, and vegetables.',
  },
  {
    id: 8,
    name: 'Gobi Manchurian',
    price: '₹160',
    category: 'chinese',
    description: 'Crispy cauliflower florets tossed in a tangy soy-chili sauce.',
  },
  {
    id: 9,
    name: 'South Indian Veg Meals',
    price: '₹150',
    category: 'veg',
    description: 'Complete thali with rice, sambar, rasam, kootu, poriyal, and curd.',
  },
  {
    id: 10,
    name: 'Tandoori Chicken (Full)',
    price: '₹450',
    category: 'tandoor',
    description: 'Whole chicken marinated in yogurt and spices, roasted in clay oven.',
  },
];

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState('biryani');

  const filteredItems = menuItems.filter(item => item.category === activeCategory);

  return (
    <section id="menu" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-earth-gold font-medium tracking-widest uppercase text-sm mb-4 block">
            Our Menu
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-earth-brown mb-6">
            Explore Our <span className="italic">Delicacies</span>
          </h2>
          <div className="w-24 h-1 bg-earth-gold mx-auto rounded-full" />
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={cn(
                "px-6 py-2 rounded-full text-sm font-medium transition-all",
                activeCategory === cat.id
                  ? "bg-earth-brown text-white shadow-lg"
                  : "bg-earth-cream text-earth-brown hover:bg-earth-gold/20"
              )}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence mode="wait">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="menu-card flex justify-between items-start gap-4"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="text-xl font-serif text-earth-brown">{item.name}</h4>
                    {item.popular && (
                      <span className="text-[10px] uppercase tracking-tighter bg-earth-gold/20 text-earth-gold px-2 py-0.5 rounded-full font-bold">
                        Popular
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-earth-brown/60 leading-relaxed">
                    {item.description}
                  </p>
                </div>
                <div className="text-lg font-bold text-earth-gold">
                  {item.price}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <div className="mt-16 text-center">
          <p className="text-earth-brown/50 italic">Prices are subject to change. Taxes as applicable.</p>
        </div>
      </div>
    </section>
  );
}
