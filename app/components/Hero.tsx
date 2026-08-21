"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Background Image with Parallax effect simulation */}
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 10, ease: "linear", repeat: Infinity, repeatType: "reverse" }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black z-10" />
        <img
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop"
          alt="Premium Gym Interior"
          className="w-full h-full object-cover object-center opacity-60"
        />
      </motion.div>

      <div className="relative z-10 container mx-auto px-6 text-center mt-20">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-heading text-6xl md:text-8xl lg:text-9xl text-white tracking-wider mb-4 leading-none drop-shadow-2xl"
        >
          TRANSFORM YOUR <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-yellow-600">BODY</span>
          <br /> ELEVATE YOUR LIFESTYLE
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-body text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10"
        >
          Experience the pinnacle of fitness in Jaipur with elite trainers, state-of-the-art equipment, and a community driven by excellence.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <a
            href="https://wa.me/919950550885"
            className="px-10 py-4 bg-gold text-black font-heading tracking-widest text-xl rounded-full shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:shadow-[0_0_30px_rgba(212,175,55,0.7)] hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto text-center"
          >
            Join Today
          </a>
          <a
            href="#membership"
            className="px-10 py-4 bg-transparent border border-white/30 text-white font-heading tracking-widest text-xl rounded-full hover:bg-white/10 hover:border-white transition-all duration-300 w-full sm:w-auto text-center"
          >
            Book Free Trial
          </a>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
      >
        <span className="text-white/40 text-xs tracking-widest uppercase">Scroll</span>
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-[1px] h-12 bg-gradient-to-b from-gold to-transparent"
        />
      </motion.div>
    </section>
  );
}
