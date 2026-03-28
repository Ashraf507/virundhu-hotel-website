import React from 'react';
import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

const reviews = [
  {
    name: "Rajesh Kumar",
    role: "Local Guide",
    rating: 5,
    text: "Pleasant staff, tasty and affordable food. The Chicken Biryani is a must-try here. Best stop on the Gummidipoondi bypass.",
    date: "2 weeks ago"
  },
  {
    name: "Ananya Sharma",
    role: "Traveler",
    rating: 4,
    text: "Good for group dining. We stopped here during our road trip to Chennai. Quick service and very clean washrooms.",
    date: "1 month ago"
  },
  {
    name: "Suresh Mani",
    role: "Regular Customer",
    rating: 4,
    text: "Consistent quality over the years. Their Tandoori items are excellent. Perfect for family dinners.",
    date: "3 months ago"
  }
];

export default function Reviews() {
  return (
    <section id="reviews" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-earth-gold font-medium tracking-widest uppercase text-sm mb-4 block">
            Testimonials
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-earth-brown mb-6">
            What Our <span className="italic">Guests Say</span>
          </h2>
          <div className="flex items-center justify-center gap-2 mb-2">
            <span className="text-2xl font-bold text-earth-brown">3.8</span>
            <div className="flex text-earth-gold">
              {[...Array(4)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
              <Star className="w-5 h-5 text-earth-gold/30" />
            </div>
            <span className="text-earth-brown/50 text-sm">(681 reviews)</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-earth-cream p-8 rounded-3xl relative"
            >
              <Quote className="absolute top-6 right-8 w-10 h-10 text-earth-gold/10" />
              <div className="flex text-earth-gold mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-earth-brown/80 italic mb-8 leading-relaxed">
                "{review.text}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-earth-brown rounded-full flex items-center justify-center text-white font-serif text-xl">
                  {review.name[0]}
                </div>
                <div>
                  <h4 className="font-bold text-earth-brown">{review.name}</h4>
                  <p className="text-xs text-earth-brown/50 uppercase tracking-widest">{review.role} • {review.date}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a 
            href="https://www.google.com/maps" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-earth-gold font-medium hover:underline flex items-center justify-center gap-2"
          >
            Read more reviews on Google Maps
          </a>
        </div>
      </div>
    </section>
  );
}
