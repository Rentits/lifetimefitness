import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import FloatingWhatsApp from "@/app/components/FloatingWhatsApp";

export const metadata = {
  title: "Best Gym in Malviya Nagar Jaipur | Lifetime Fitness",
  description: "Looking for the best gym in Malviya Nagar Jaipur? Join Lifetime Fitness for elite trainers, premium equipment, and a luxury workout experience.",
};

export default function MalviyaNagarLocation() {
  return (
    <main className="bg-black min-h-screen pt-32">
      <Navbar />
      
      <section className="container mx-auto px-6 max-w-4xl py-24 text-center">
        <h1 className="font-heading text-5xl md:text-7xl tracking-widest text-white mb-6 uppercase">
          Best Gym in <span className="text-gold">Malviya Nagar</span> Jaipur
        </h1>
        <p className="text-white/60 text-lg mb-12 leading-relaxed">
          Discover a premium fitness oasis in the heart of Malviya Nagar. This exclusive branch offers specialized personal training, cutting-edge cardio equipment, and luxury locker rooms. Join a community of fitness enthusiasts dedicated to excellence.
        </p>

        <div className="glass p-12 rounded-3xl border border-white/10 text-left">
          <h2 className="font-heading text-3xl text-gold mb-6">Location Details</h2>
          <ul className="space-y-4 text-white/80">
            <li><strong>Address:</strong> 456 Elite Road, Malviya Nagar, Jaipur, Rajasthan 302017</li>
            <li><strong>Phone:</strong> +91 9950550885</li>
            <li><strong>Hours:</strong> Mon-Fri 5:30 AM - 11:00 PM | Sat-Sun 6:00 AM - 10:00 PM</li>
            <li><strong>Amenities:</strong> Recovery Zone, Yoga Studio, Indoor Cycling, Smoothies</li>
          </ul>
          
          <div className="mt-10">
            <a href="https://wa.me/919950550885" className="inline-block px-8 py-4 bg-gold text-black font-heading tracking-widest text-lg rounded-full hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all">
              Book a Free Trial in Malviya Nagar
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
