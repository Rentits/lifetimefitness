"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const hotspots = [
  { id: 1, x: 25, y: 40, label: "Strength Zone", desc: "Premium free weights and racks." },
  { id: 2, x: 70, y: 30, label: "Cardio Area", desc: "State-of-the-art treadmills with views." },
  { id: 3, x: 50, y: 70, label: "Functional Training", desc: "Turf area for HIIT and agility." },
  { id: 4, x: 85, y: 65, label: "Luxury Lockers", desc: "Premium amenities and steam room." },
];

export default function LiveGymTour() {
  const [activeSpot, setActiveSpot] = useState<number | null>(null);

  return (
    <section id="facilities" className="bg-charcoal py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 mb-12 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading text-4xl md:text-5xl tracking-widest text-white mb-4 uppercase"
        >
          Explore The Club
        </motion.h2>
        <div className="w-24 h-1 bg-gold mx-auto" />
      </div>

      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-2xl overflow-hidden aspect-video border border-white/10 shadow-2xl"
        >
          {/* Main background image for the tour */}
          <img
            src="https://images.unsplash.com/photo-1576678927484-cc907957088c?q=80&w=1974&auto=format&fit=crop"
            alt="Gym Tour"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/20" />

          {/* Hotspots */}
          {hotspots.map((spot) => (
            <div
              key={spot.id}
              className="absolute group z-10"
              style={{ left: `${spot.x}%`, top: `${spot.y}%` }}
              onMouseEnter={() => setActiveSpot(spot.id)}
              onMouseLeave={() => setActiveSpot(null)}
            >
              {/* Hotspot Ring */}
              <motion.div
                animate={{ scale: [1, 1.5, 1], opacity: [0.7, 0, 0.7] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute -inset-4 bg-gold rounded-full opacity-20 pointer-events-none"
              />
              <div className="relative w-6 h-6 bg-gold rounded-full border-2 border-white shadow-[0_0_15px_rgba(212,175,55,0.8)] flex items-center justify-center cursor-pointer transition-transform hover:scale-125">
                <div className="w-2 h-2 bg-white rounded-full" />
              </div>

              {/* Tooltip */}
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.9 }}
                animate={{ 
                  opacity: activeSpot === spot.id ? 1 : 0, 
                  y: activeSpot === spot.id ? 0 : 10,
                  scale: activeSpot === spot.id ? 1 : 0.9,
                  pointerEvents: activeSpot === spot.id ? "auto" : "none"
                }}
                className="absolute top-10 left-1/2 -translate-x-1/2 w-48 glass p-4 rounded-xl text-center shadow-xl"
              >
                <h4 className="font-heading tracking-wide text-gold mb-1">{spot.label}</h4>
                <p className="text-xs text-white/80">{spot.desc}</p>
              </motion.div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
