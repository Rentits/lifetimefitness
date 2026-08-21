"use client";

import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";

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
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-gold hover:text-black transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-gold hover:text-black transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
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
              <li><Link href="/#reviews" className="hover:text-gold transition-colors">Testimonials</Link></li>
              <li><Link href="/calculators" className="hover:text-gold transition-colors">Fitness Calculators</Link></li>
              <li><Link href="/#faq" className="hover:text-gold transition-colors">FAQ</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-xl tracking-wider text-white mb-6">Contact</h4>
            <ul className="space-y-4 text-sm text-foreground/60">
              <li className="flex items-center space-x-3 text-white/60">
                <Phone size={16} className="text-gold" />
                <span>+91 9950550885 (Demo)</span>
              </li>
              <li className="flex items-center space-x-3 text-white/60">
                <Mail size={16} className="text-gold" />
                <span>lifetimefitnessclubjpr@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-sm">
            © {new Date().getFullYear()} Lifetime Fitness Jaipur. All rights reserved.
          </p>
          <p className="text-white/30 text-xs text-center md:text-right">
            Website concept created for demonstration purposes.
          </p>
        </div>
      </div>
    </footer>
  );
}
