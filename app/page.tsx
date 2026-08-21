import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SocialProof from "./components/SocialProof";
import Features from "./components/Features";
import LiveGymTour from "./components/LiveGymTour";
import MembershipPlans from "./components/MembershipPlans";
import AIMembershipRecommender from "./components/AIMembershipRecommender";
import Trainers from "./components/Trainers";
import Gallery from "./components/Gallery";
import GoogleReviewShowcase from "./components/GoogleReviewShowcase";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FloatingWhatsApp from "./components/FloatingWhatsApp";

export default function Home() {
  return (
    <main className="bg-black min-h-screen">
      <Loader />
      <Navbar />
      
      <Hero />
      <SocialProof />
      <Features />
      <LiveGymTour />
      <AIMembershipRecommender />
      <MembershipPlans />
      <Trainers />
      <Gallery />
      <GoogleReviewShowcase />
      <FAQ />
      <Contact />

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
