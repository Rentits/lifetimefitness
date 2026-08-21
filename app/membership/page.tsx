import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import MembershipPlans from "@/app/components/MembershipPlans";
import FloatingWhatsApp from "@/app/components/FloatingWhatsApp";

export const metadata = {
  title: "Membership Plans | Lifetime Fitness Jaipur",
  description: "Explore our premium fitness membership plans. Join Lifetime Fitness Jaipur today and transform your body.",
};

export default function MembershipPage() {
  return (
    <main className="bg-black min-h-screen pt-32">
      <Navbar />
      
      {/* Dedicated Hero for Membership */}
      <section className="container mx-auto px-6 text-center py-16">
        <h1 className="font-heading text-5xl md:text-7xl tracking-widest text-white mb-6 uppercase">
          Choose Your <span className="text-gold">Zone</span>
        </h1>
        <p className="text-white/60 text-lg max-w-2xl mx-auto mb-8">
          Whether you're just starting out or looking for elite personal training, we have a membership plan designed to accelerate your results.
        </p>
      </section>

      {/* Reuse MembershipPlans component */}
      <div className="-mt-16">
        <MembershipPlans />
      </div>

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
