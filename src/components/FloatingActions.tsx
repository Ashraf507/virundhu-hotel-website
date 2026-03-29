import React from 'react';
import { Phone, MessageCircle, MapPin } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-scroll';

export default function FloatingActions() {
  return (
    <div className="floating-btn">
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <Link
          to="contact"
          smooth="easeInOutQuart"
          duration={600}
          className="action-icon bg-blue-500 cursor-pointer"
          title="Open in Maps"
        >
          <MapPin className="w-6 h-6" />
        </Link>
      </motion.div>
      <motion.a
        href="https://wa.me/919042221311?text=Hi,%20I%20would%20like%20to%20order%20from%20your%20restaurant"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="action-icon bg-green-500"
        title="Order on WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
      </motion.a>
      <motion.a
        href="tel:+919042221311"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="action-icon bg-earth-gold"
        title="Call Now"
      >
        <Phone className="w-6 h-6" />
      </motion.a>
    </div>
  );
}
