"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function FloatingWhatsApp() {
  const [ctaText, setCtaText] = useState("Book Free Trial");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      
      // Show after scrolling past 300px
      if (scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      // Very simple scroll-based text change for demo
      // In production, IntersectionObserver on sections is better
      if (scrollY < 1000) {
        setCtaText("Book Free Trial");
      } else if (scrollY >= 1000 && scrollY < 2500) {
        setCtaText("Ask About Pricing");
      } else if (scrollY >= 2500 && scrollY < 4000) {
        setCtaText("Talk to a Trainer");
      } else {
        setCtaText("Chat with Manager");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.a
          initial={{ opacity: 0, y: 50, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 50, scale: 0.8 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="https://wa.me/919950550885"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-[#25D366] text-white px-5 py-3 rounded-full shadow-[0_4px_20px_rgba(37,211,102,0.4)] transition-shadow hover:shadow-[0_4px_25px_rgba(37,211,102,0.6)]"
        >
          {/* SVG for WhatsApp Icon */}
          <svg
            viewBox="0 0 24 24"
            width="24"
            height="24"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
          </svg>
          <span className="font-semibold text-sm tracking-wide hidden sm:block">
            {ctaText}
          </span>
        </motion.a>
      )}
    </AnimatePresence>
  );
}
