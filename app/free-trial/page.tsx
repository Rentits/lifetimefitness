import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import FloatingWhatsApp from "@/app/components/FloatingWhatsApp";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "Claim Your Free Trial | Lifetime Fitness Jaipur",
  description: "Experience Lifetime Fitness Jaipur for free. Claim your 1-day guest pass today.",
};

export default function FreeTrialPage() {
  return (
    <main className="bg-black min-h-screen pt-32">
      <Navbar />
      
      <section className="container mx-auto px-6 max-w-4xl py-24 text-center">
        <h1 className="font-heading text-5xl md:text-7xl tracking-widest text-white mb-6 uppercase">
          Claim Your <span className="text-gold">Free Trial</span>
        </h1>
        <p className="text-white/60 text-lg mb-12 max-w-2xl mx-auto leading-relaxed">
          See for yourself why Lifetime Fitness is the top-rated gym in Jaipur. Claim your 1-day VIP guest pass and experience our premium equipment, luxury amenities, and vibrant community.
        </p>

        <div className="glass p-8 md:p-16 rounded-3xl border border-white/10 text-center max-w-2xl mx-auto shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-gold/10 blur-[80px] rounded-full pointer-events-none" />
          
          <h2 className="font-heading text-4xl text-white tracking-widest mb-8">What's Included?</h2>
          
          <ul className="space-y-6 text-left mb-12 inline-block">
            <li className="flex items-center gap-4 text-white/80">
              <CheckCircle2 className="text-gold w-6 h-6 shrink-0" />
              <span className="text-lg">Full access to cardio & strength zones</span>
            </li>
            <li className="flex items-center gap-4 text-white/80">
              <CheckCircle2 className="text-gold w-6 h-6 shrink-0" />
              <span className="text-lg">One complimentary group fitness class</span>
            </li>
            <li className="flex items-center gap-4 text-white/80">
              <CheckCircle2 className="text-gold w-6 h-6 shrink-0" />
              <span className="text-lg">Luxury locker room & sauna access</span>
            </li>
            <li className="flex items-center gap-4 text-white/80">
              <CheckCircle2 className="text-gold w-6 h-6 shrink-0" />
              <span className="text-lg">Free body composition analysis</span>
            </li>
          </ul>
          
          <div className="pt-4 border-t border-white/10">
            <p className="text-white/50 text-sm mb-6">Click below to message us directly on WhatsApp to activate your pass instantly.</p>
            <a href="https://wa.me/placeholder?text=Hi! I would like to claim my 1-day free trial pass." className="inline-flex items-center justify-center gap-3 w-full sm:w-auto px-10 py-5 bg-[#25D366] text-white font-bold tracking-wide text-lg rounded-full shadow-[0_0_20px_rgba(37,211,102,0.4)] hover:shadow-[0_0_30px_rgba(37,211,102,0.6)] transition-all transform hover:-translate-y-1">
              Activate Pass via WhatsApp <ArrowRight size={20} />
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
