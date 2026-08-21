"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import clsx from "clsx";

const faqs = [
  {
    q: "How much does a membership cost?",
    a: "Our membership plans start at ₹X,XXX/month. We offer various tiers including Standard, Elite, and Annual Pro to fit your specific needs and goals.",
  },
  {
    q: "Do you offer a free trial?",
    a: "Yes, we offer a 1-day free trial pass for local residents. You can book your trial through WhatsApp or by visiting our front desk.",
  },
  {
    q: "Are personal trainers available?",
    a: "Absolutely. We have a team of certified personal trainers specializing in strength, weight loss, and functional training. Elite members get 2 free sessions per month.",
  },
  {
    q: "What are your opening hours?",
    a: "We are open from 5:30 AM to 11:00 PM on weekdays, and 6:00 AM to 10:00 PM on weekends.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-charcoal py-24">
      <div className="container mx-auto px-6 max-w-3xl">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading text-4xl md:text-5xl tracking-widest text-white mb-4 uppercase"
          >
            Got Questions?
          </motion.h2>
          <div className="w-24 h-1 bg-gold mx-auto" />
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass rounded-xl overflow-hidden"
            >
              <button
                className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              >
                <span className="font-heading tracking-wide text-white text-lg">{faq.q}</span>
                <ChevronDown 
                  className={clsx(
                    "text-gold transition-transform duration-300", 
                    openIndex === idx ? "rotate-180" : ""
                  )} 
                />
              </button>
              
              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-6 pb-5 text-white/60 text-sm leading-relaxed">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
