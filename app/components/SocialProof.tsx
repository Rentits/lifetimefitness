"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

// Simple counter hook for demo purposes
const useCounter = (end: number, duration: number = 2) => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    let start = 0;
    const increment = end / (duration * 60);
    const timer = setInterval(() => {
      start += increment;
      if (start > end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 1000 / 60);
    return () => clearInterval(timer);
  }, [end, duration]);
  
  return count;
};

function StatItem({ value, label, suffix = "+" }: { value: number, label: string, suffix?: string }) {
  const count = useCounter(value, 2.5);
  
  return (
    <div className="flex flex-col items-center justify-center p-6 glass rounded-2xl">
      <h3 className="font-heading text-5xl md:text-6xl text-gold mb-2">
        {count}{suffix}
      </h3>
      <p className="font-body text-sm tracking-widest text-white/70 uppercase">
        {label}
      </p>
    </div>
  );
}

export default function SocialProof() {
  return (
    <section className="bg-charcoal py-20 relative z-20 -mt-4">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-5xl mx-auto">
          <StatItem value={1000} label="Members" />
          <StatItem value={40} label="Machines" />
          <StatItem value={15} label="Trainers" />
          <StatItem value={4.9} label="Rating" suffix="" />
        </div>
      </div>
    </section>
  );
}
