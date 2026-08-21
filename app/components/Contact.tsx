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
                  +91 98765 43210
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
                  hello@lifetimefitnessjaipur.demo
                </p>
              </div>
            </div>

            <div className="pt-6">
              <a href="https://wa.me/placeholder" className="inline-flex items-center justify-center w-full md:w-auto px-10 py-4 bg-gold text-black font-heading tracking-widest text-lg rounded-full shadow-[0_0_15px_rgba(212,175,55,0.4)] hover:shadow-[0_0_25px_rgba(212,175,55,0.6)] transition-all">
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
            {/* Placeholder for Google Maps */}
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-charcoal">
              <MapPin size={48} className="text-white/20 mb-4" />
              <p className="text-white/40 font-heading tracking-widest uppercase">Google Maps Integration</p>
              <p className="text-white/30 text-xs mt-2 text-center px-8">A dynamic map will be placed here showcasing the exact location in Jaipur.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
