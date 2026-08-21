"use client";

import Link from "next/link";
import { Instagram, Facebook, Twitter, MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-charcoal pt-20 pb-10 border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center space-x-2 mb-6">
              <span className="font-heading text-4xl text-gold">LIFETIME</span>
              <span className="font-heading text-4xl text-foreground">FITNESS</span>
            </Link>
            <p className="text-foreground/60 text-sm leading-relaxed mb-8">
              Premium fitness experience in Jaipur. Transform your body and elevate your lifestyle with elite trainers, state-of-the-art equipment, and a luxury environment.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-gold hover:text-black transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-gold hover:text-black transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-gold hover:text-black transition-colors">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-heading text-xl tracking-wider text-white mb-6">Locations</h4>
            <ul className="space-y-4 text-sm text-foreground/60">
              <li>
                <Link href="/locations/jagatpura" className="hover:text-gold transition-colors flex items-start gap-2">
                  <MapPin size={16} className="shrink-0 mt-0.5" />
                  <span>Jagatpura Branch<br/>(Demo Address, Jaipur)</span>
                </Link>
              </li>
              <li>
                <Link href="/locations/malviya-nagar" className="hover:text-gold transition-colors flex items-start gap-2">
                  <MapPin size={16} className="shrink-0 mt-0.5" />
                  <span>Malviya Nagar Branch<br/>(Demo Address, Jaipur)</span>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-xl tracking-wider text-white mb-6">Quick Links</h4>
            <ul className="space-y-3 text-sm text-foreground/60">
              <li><Link href="#facilities" className="hover:text-gold transition-colors">Facilities</Link></li>
              <li><Link href="#trainers" className="hover:text-gold transition-colors">Elite Trainers</Link></li>
              <li><Link href="#membership" className="hover:text-gold transition-colors">Membership Plans</Link></li>
              <li><Link href="#reviews" className="hover:text-gold transition-colors">Testimonials</Link></li>
              <li><Link href="#faq" className="hover:text-gold transition-colors">FAQ</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-xl tracking-wider text-white mb-6">Contact</h4>
            <ul className="space-y-4 text-sm text-foreground/60">
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-gold" />
                <span>+91 98765 43210 (Demo)</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-gold" />
                <span>hello@lifetimefitnessjaipur.demo</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-xs text-foreground/40 mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Lifetime Fitness Jaipur. All rights reserved.
          </p>
          <p className="text-xs text-foreground/40 font-mono tracking-widest uppercase">
            Website concept created for demonstration purposes.
          </p>
        </div>
      </div>
    </footer>
  );
}
