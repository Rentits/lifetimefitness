"use client";

import { motion } from "framer-motion";

const trainers = [
  {
    name: "[Demo Name 1]",
    specialty: "Strength & Conditioning",
    exp: "8 Years Exp",
    img: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2070&auto=format&fit=crop",
  },
  {
    name: "[Demo Name 2]",
    specialty: "Functional Training",
    exp: "5 Years Exp",
    img: "https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=1974&auto=format&fit=crop",
  },
  {
    name: "[Demo Name 3]",
    specialty: "Yoga & Mobility",
    exp: "10 Years Exp",
    img: "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=2070&auto=format&fit=crop",
  },
];

export default function Trainers() {
  return (
    <section id="trainers" className="bg-black py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading text-4xl md:text-5xl tracking-widest text-white mb-4 uppercase"
          >
            Elite Trainers
          </motion.h2>
          <div className="w-24 h-1 bg-gold mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {trainers.map((trainer, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group relative overflow-hidden rounded-2xl aspect-[3/4]"
            >
              <img
                src={trainer.img}
                alt={trainer.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
              
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="font-heading text-2xl tracking-wider text-gold mb-1">{trainer.name}</h3>
                <p className="text-white font-medium mb-1">{trainer.specialty}</p>
                <p className="text-white/60 text-sm">{trainer.exp}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
