"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

export default function GoogleReviewShowcase() {
  return (
    <section className="bg-charcoal py-24 border-y border-white/5 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-gold/5 blur-[120px] rounded-full -translate-y-1/2 pointer-events-none" />
      
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-8">
          <div>
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="font-heading text-4xl md:text-5xl tracking-widest text-white mb-4 uppercase"
            >
              Real <span className="text-gold">Results</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-white/60 max-w-xl text-lg"
            >
              See what our members have to say about their experience at Lifetime Fitness.
            </motion.p>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 bg-white/5 px-6 py-4 rounded-2xl border border-white/10"
          >
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-white">4.9</span>
              <div className="flex text-gold">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} fill="currentColor" />
                ))}
              </div>
            </div>
            <div className="w-px h-10 bg-white/10 mx-2" />
            <div className="flex flex-col">
              <span className="text-white/80 text-sm font-medium">Based on</span>
              <span className="text-white/40 text-xs">200+ Reviews</span>
            </div>
          </motion.div>
        </div>

        {/* Placeholder for live Google Reviews Widget */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="w-full min-h-[400px] glass rounded-3xl border border-white/10 flex flex-col items-center justify-center p-12 text-center"
        >
          <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-6">
            <svg viewBox="0 0 24 24" width="24" height="24" xmlns="http://www.w3.org/2000/svg">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
          </div>
          <h3 className="font-heading text-3xl tracking-widest text-gold mb-3 uppercase">Live Google Reviews Integration</h3>
          <p className="text-white/60 max-w-lg mx-auto">
            This space is reserved for a dynamic widget that automatically pulls and displays the latest 5-star reviews directly from the Lifetime Fitness Google Business Profile.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
