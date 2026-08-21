"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import clsx from "clsx";

type Goal = "Beginner" | "Weight Loss" | "Muscle Gain" | "Personal Training";

const plans = [
  {
    name: "Standard",
    price: "₹X,XXX",
    period: "/month",
    features: ["Access to Cardio Zone", "Access to Free Weights", "Locker Room Access", "1 Fitness Assessment"],
    recommendedFor: ["Beginner"],
  },
  {
    name: "Elite",
    price: "₹X,XXX",
    period: "/month",
    features: ["All Standard Features", "Unlimited Group Classes", "2 PT Sessions / Month", "Premium Sauna Access", "Nutrition Consultation"],
    recommendedFor: ["Weight Loss", "Muscle Gain"],
  },
  {
    name: "Annual Pro",
    price: "₹XX,XXX",
    period: "/year",
    features: ["All Elite Features", "2 Months Free", "Priority Booking", "Guest Pass (2/month)", "Free Lifetime Merch"],
    recommendedFor: ["Personal Training"],
  },
];

const goals: Goal[] = ["Beginner", "Weight Loss", "Muscle Gain", "Personal Training"];

export default function MembershipPlans() {
  const [selectedGoal, setSelectedGoal] = useState<Goal>("Weight Loss");

  return (
    <section id="membership" className="bg-black py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading text-4xl md:text-5xl tracking-widest text-white mb-4 uppercase"
          >
            Membership Plans
          </motion.h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-6" />
          <p className="text-white/60 max-w-2xl mx-auto text-sm mb-10">
            Compare plans based on your fitness goals. Select your primary goal below to see our recommendation.
          </p>

          {/* Compare Membership Plans Calculator */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {goals.map((goal) => (
              <button
                key={goal}
                onClick={() => setSelectedGoal(goal)}
                className={clsx(
                  "px-6 py-2 rounded-full font-heading tracking-widest text-sm transition-all duration-300",
                  selectedGoal === goal 
                    ? "bg-gold text-black shadow-[0_0_15px_rgba(212,175,55,0.4)]" 
                    : "bg-white/10 text-white/60 hover:bg-white/20 hover:text-white"
                )}
              >
                {goal}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-center">
          {plans.map((plan, idx) => {
            const isRecommended = plan.recommendedFor.includes(selectedGoal);
            return (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                whileHover={{ y: -10 }}
                className={clsx(
                  "relative rounded-2xl p-8 flex flex-col transition-all duration-300",
                  isRecommended
                    ? "bg-gradient-to-b from-charcoal to-black border-2 border-gold shadow-[0_0_30px_rgba(212,175,55,0.15)] md:-mt-8 md:mb-8" 
                    : "glass border border-white/10 hover:border-gold/30"
                )}
              >
                {isRecommended && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gold text-black font-heading tracking-widest text-sm px-4 py-1 rounded-full uppercase whitespace-nowrap">
                    Recommended Plan
                  </div>
                )}
                
                <h3 className="font-heading text-3xl tracking-wider text-white mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1 mb-8">
                  <span className="text-4xl font-bold text-gold">{plan.price}</span>
                  <span className="text-white/50 text-sm">{plan.period}</span>
                </div>

                <div className="space-y-4 mb-10 flex-grow">
                  {plan.features.map((feat, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <Check size={18} className="text-gold shrink-0 mt-0.5" />
                      <span className="text-white/80 text-sm">{feat}</span>
                    </div>
                  ))}
                </div>

                <a
                  href={`https://wa.me/919950550885?text=Hi! I am interested in the ${plan.name} plan for ${selectedGoal}.`}
                  className={clsx(
                    "w-full py-4 text-center font-heading tracking-widest text-lg rounded-full transition-all duration-300",
                    isRecommended
                      ? "bg-gold text-black hover:shadow-[0_0_20px_rgba(212,175,55,0.4)]"
                      : "bg-white/5 text-white hover:bg-gold hover:text-black"
                  )}
                >
                  Select Plan
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
