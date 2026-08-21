import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import FloatingWhatsApp from "@/app/components/FloatingWhatsApp";

export const metadata = {
  title: "Best Gym in Jagatpura Jaipur | Lifetime Fitness",
  description: "Looking for the best gym in Jagatpura Jaipur? Join Lifetime Fitness for elite trainers, premium equipment, and a luxury workout experience.",
};

export default function JagatpuraLocation() {
  return (
    <main className="bg-black min-h-screen pt-32">
      <Navbar />
      
      <section className="container mx-auto px-6 max-w-4xl py-24 text-center">
        <h1 className="font-heading text-5xl md:text-7xl tracking-widest text-white mb-6 uppercase">
          Best Gym in <span className="text-gold">Jagatpura</span> Jaipur
        </h1>
        <p className="text-white/60 text-lg mb-12 leading-relaxed">
          Experience world-class fitness facilities right in your neighborhood. Our Jagatpura branch is equipped with state-of-the-art machines, free weights, and dedicated functional training zones. 
          Whether your goal is weight loss, muscle building, or overall wellness, our certified trainers are here to guide you.
        </p>

        <div className="glass p-12 rounded-3xl border border-white/10 text-left">
          <h2 className="font-heading text-3xl text-gold mb-6">Location Details</h2>
          <ul className="space-y-4 text-white/80">
            <li><strong>Address:</strong> 123 Fitness Avenue, Jagatpura, Jaipur, Rajasthan 302017</li>
            <li><strong>Phone:</strong> +91 98765 43210</li>
            <li><strong>Hours:</strong> Mon-Fri 5:30 AM - 11:00 PM | Sat-Sun 6:00 AM - 10:00 PM</li>
            <li><strong>Amenities:</strong> Steam Room, Valet Parking, Group Classes, Protein Bar</li>
          </ul>
          
          <div className="mt-10">
            <a href="https://wa.me/placeholder" className="inline-block px-8 py-4 bg-gold text-black font-heading tracking-widest text-lg rounded-full hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all">
              Book a Free Trial in Jagatpura
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
