"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

export default function GoogleReviewShowcase() {
  return (
    <section id="reviews" className="bg-black py-24 border-y border-white/5">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          
          <div className="flex-1 text-center md:text-left">
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="font-heading text-4xl md:text-5xl tracking-widest text-white mb-4 uppercase"
            >
              Trusted by Jaipur
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-white/60 mb-8"
            >
              This is a Google Reviews integration preview. When connected to the live API, this section will automatically pull and display real 5-star reviews from the Lifetime Fitness Jaipur Google Business Profile.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <a href="#" className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 transition-colors text-sm text-white">
                <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="Google Logo" className="w-4 h-4" />
                View on Google
              </a>
            </motion.div>
          </div>

          <div className="flex-1 w-full">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="glass p-8 rounded-2xl relative border-l-4 border-gold shadow-xl"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-charcoal rounded-full flex items-center justify-center text-lg font-bold text-white">
                    S
                  </div>
                  <div>
                    <h4 className="text-white font-medium">[Demo Member Name]</h4>
                    <p className="text-xs text-white/50">Local Guide</p>
                  </div>
                </div>
                <div className="flex gap-1 text-gold">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} size={16} fill="currentColor" />
                  ))}
                </div>
              </div>
              <p className="text-white/80 text-sm leading-relaxed italic mb-4">
                "Placeholder for a real 5-star review from Google Business Profile. E.g., 'Best gym in Jaipur! The trainers are excellent and the equipment is top-notch. Highly recommend the Elite membership.'"
              </p>
              <p className="text-xs text-white/40">2 weeks ago</p>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
