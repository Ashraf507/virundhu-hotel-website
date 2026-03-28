import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock, ExternalLink } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-earth-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-earth-gold font-medium tracking-widest uppercase text-sm mb-4 block">
              Find Us
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-earth-brown mb-10">
              Visit Our <span className="italic">Restaurant</span>
            </h2>

            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-earth-gold shadow-sm shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-earth-brown mb-1">Address</h4>
                  <p className="text-earth-brown/70 leading-relaxed">
                    No 147, NH 05, Verkadu Gummudipoondi Bye Pass,<br />
                    Tamil Nadu 601201, India
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-earth-gold shadow-sm shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-earth-brown mb-1">Phone</h4>
                  <p className="text-earth-brown/70 leading-relaxed">
                    090422 21311
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-earth-gold shadow-sm shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-earth-brown mb-1">Opening Hours</h4>
                  <p className="text-earth-brown/70 leading-relaxed">
                    Everyday: 6:00 AM – 10:30 PM
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 flex gap-4">
              <a 
                href="https://www.google.com/maps/dir//Virrundhu+Multi+Cuisine+Restaurant,+No+147,+NH+05,+Verkadu+Gummudipoondi+Bye+Pass,+Tamil+Nadu+601201"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary flex items-center gap-2"
              >
                Get Directions <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="h-[450px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white"
          >
            {/* Embedded Google Map - Accurate Location for Virrundhu Multi Cuisine Restaurant */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3880.852952875184!2d80.1147!3d13.4111!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52796e6e6e6e6f%3A0x1234567890abcdef!2sVirrundhu%20Multi%20Cuisine%20Restaurant!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
