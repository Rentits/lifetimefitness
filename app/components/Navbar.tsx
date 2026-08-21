"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import clsx from "clsx";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Locations", href: "#locations" },
    { name: "Facilities", href: "#facilities" },
    { name: "Trainers", href: "#trainers" },
    { name: "Reviews", href: "/#reviews" },
    { name: "Calculators", href: "/calculators" },
    { name: "Membership", href: "#membership" },
  ];

  return (
    <header
      className={clsx(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "glass py-4" : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2 z-50">
          <span className="font-heading text-3xl text-gold">LIFETIME</span>
          <span className="font-heading text-3xl text-foreground hidden sm:block">
            FITNESS
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium tracking-wide text-foreground/80 hover:text-gold transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <a
            href="https://wa.me/919950550885"
            className="px-6 py-2.5 bg-gold text-black font-semibold rounded-full hover:shadow-[0_0_15px_rgba(212,175,55,0.4)] transition-all transform hover:-translate-y-0.5 duration-300"
          >
            Join Now
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden z-50 text-foreground"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-0 left-0 w-full h-screen bg-charcoal/95 backdrop-blur-lg flex flex-col items-center justify-center space-y-8 z-40"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-3xl font-heading tracking-widest text-foreground hover:text-gold transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <a
              href="https://wa.me/919950550885"
              className="px-8 py-3 bg-gold text-black font-bold rounded-full mt-4 text-xl"
            >
              Join Now
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
