import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import FloatingWhatsApp from "@/app/components/FloatingWhatsApp";
import Calculators from "@/app/components/Calculators";

export const metadata = {
  title: "Fitness Calculators | Lifetime Fitness Jaipur",
  description: "Free fitness calculators including BMI, TDEE, and One-Rep Max to help you track your fitness journey at Lifetime Fitness Jaipur.",
};

export default function CalculatorsPage() {
  return (
    <main className="bg-black min-h-screen pt-32">
      <Navbar />
      
      <div className="-mt-24">
        <Calculators />
      </div>

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
