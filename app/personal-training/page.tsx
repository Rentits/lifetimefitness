import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import FloatingWhatsApp from "@/app/components/FloatingWhatsApp";
import Trainers from "@/app/components/Trainers";

export const metadata = {
  title: "Personal Training | Lifetime Fitness Jaipur",
  description: "Achieve your fitness goals faster with our elite personal trainers in Jaipur.",
};

export default function PersonalTrainingPage() {
  return (
    <main className="bg-black min-h-screen pt-32">
      <Navbar />
      
      <section className="container mx-auto px-6 max-w-4xl py-24 text-center">
        <h1 className="font-heading text-5xl md:text-7xl tracking-widest text-white mb-6 uppercase">
          Elite <span className="text-gold">Personal Training</span>
        </h1>
        <p className="text-white/60 text-lg mb-12 leading-relaxed">
          Unlock your true potential with Jaipur's top fitness professionals. Our certified personal trainers create customized programs based on your unique goals, body type, and schedule.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 text-left">
          <div className="glass p-8 rounded-2xl border border-gold/20">
            <h3 className="font-heading text-2xl text-gold mb-3">Custom Plans</h3>
            <p className="text-white/70 text-sm">Tailored workout and nutrition strategies designed specifically for you.</p>
          </div>
          <div className="glass p-8 rounded-2xl border border-gold/20">
            <h3 className="font-heading text-2xl text-gold mb-3">Accountability</h3>
            <p className="text-white/70 text-sm">Weekly check-ins and form correction to ensure you stay on track safely.</p>
          </div>
          <div className="glass p-8 rounded-2xl border border-gold/20">
            <h3 className="font-heading text-2xl text-gold mb-3">Faster Results</h3>
            <p className="text-white/70 text-sm">Maximize your time in the gym with science-backed training protocols.</p>
          </div>
        </div>

        <a href="https://wa.me/placeholder?text=Hi! I am interested in Personal Training." className="inline-block px-10 py-5 bg-gold text-black font-heading tracking-widest text-xl rounded-full hover:shadow-[0_0_25px_rgba(212,175,55,0.6)] transition-all">
          Consult a Trainer Today
        </a>
      </section>

      <div className="-mt-16">
        <Trainers />
      </div>

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
