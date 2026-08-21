"use client";

import { motion } from "framer-motion";
import { Dumbbell, HeartPulse, Apple, Trophy } from "lucide-react";

const features = [
  {
    title: "Certified Coaches",
    desc: "Elite personal trainers dedicated to your goals.",
    icon: <Trophy size={32} className="text-gold" />,
  },
  {
    title: "Premium Equipment",
    desc: "State-of-the-art machines and free weights.",
    icon: <Dumbbell size={32} className="text-gold" />,
  },
  {
    title: "Nutrition Guidance",
    desc: "Personalized meal plans for faster results.",
    icon: <Apple size={32} className="text-gold" />,
  },
  {
    title: "Functional Training",
    desc: "Dedicated zones for HIIT and cross-training.",
    icon: <HeartPulse size={32} className="text-gold" />,
  },
];

export default function Features() {
  return (
    <section className="bg-black py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl tracking-widest text-white mb-4 uppercase">
            Why Choose Us
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="glass p-8 rounded-2xl flex flex-col items-start transition-all hover:shadow-[0_0_30px_rgba(212,175,55,0.15)] group relative overflow-hidden"
            >
              {/* Subtle glow border effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-gold/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-6 border border-white/10 group-hover:border-gold/50 transition-colors">
                {feature.icon}
              </div>
              <h3 className="font-heading text-2xl tracking-wide text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-white/60 leading-relaxed text-sm">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
