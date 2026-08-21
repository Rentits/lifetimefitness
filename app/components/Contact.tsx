"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="bg-black py-24 border-t border-white/5">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading text-4xl md:text-5xl tracking-widest text-white mb-4 uppercase"
          >
            Find Your Zone
          </motion.h2>
          <div className="w-24 h-1 bg-gold mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h3 className="font-heading text-3xl tracking-widest text-gold uppercase mb-6">Contact Us</h3>
            
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center shrink-0 border border-white/10">
                <MapPin className="text-gold" size={20} />
              </div>
              <div>
                <h4 className="text-white font-medium mb-1">Main Club (Demo Address)</h4>
                <p className="text-white/60 text-sm leading-relaxed">
                  123 Fitness Avenue, Jagatpura<br />
                  Jaipur, Rajasthan 302017
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center shrink-0 border border-white/10">
                <Phone className="text-gold" size={20} />
              </div>
              <div>
                <h4 className="text-white font-medium mb-1">Phone</h4>
                <p className="text-white/60 text-sm leading-relaxed">
                  +91 9950550885
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center shrink-0 border border-white/10">
                <Mail className="text-gold" size={20} />
              </div>
              <div>
                <h4 className="text-white font-medium mb-1">Email</h4>
                <p className="text-white/60 text-sm leading-relaxed">
                  lifetimefitnessclubjpr@gmail.com
                </p>
              </div>
            </div>

            <div className="pt-6">
              <a href="https://wa.me/919950550885" className="inline-flex items-center justify-center w-full md:w-auto px-10 py-4 bg-gold text-black font-heading tracking-widest text-lg rounded-full shadow-[0_0_15px_rgba(212,175,55,0.4)] hover:shadow-[0_0_25px_rgba(212,175,55,0.6)] transition-all">
                Chat on WhatsApp
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden glass border border-white/10 min-h-[400px] relative"
          >
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d113911.23306859364!2d75.76011116671043!3d26.845899214734676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db623e8574ab9%3A0x6e2df1c1c1fce72f!2sJagatpura%2C%20Jaipur%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
              className="absolute inset-0 w-full h-full border-0 grayscale opacity-80 mix-blend-luminosity hover:grayscale-0 hover:opacity-100 transition-all duration-500"
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
