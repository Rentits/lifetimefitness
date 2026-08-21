"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calculator, ArrowRight, Activity, Flame, Calendar } from "lucide-react";

export default function AIMembershipRecommender() {
  const [step, setStep] = useState(1);
  const [isCalculating, setIsCalculating] = useState(false);
  const [result, setResult] = useState<any>(null);

  const [formData, setFormData] = useState({
    height: "",
    weight: "",
    goal: "muscle", // muscle, fat_loss, endurance
    experience: "beginner",
    days: "3",
  });

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    setIsCalculating(true);
    setStep(2);

    // Simulate AI calculation delay
    setTimeout(() => {
      setIsCalculating(false);
      
      // Simple logic for demo
      const weightNum = parseFloat(formData.weight);
      let calories = 2000;
      let split = "Full Body (3x/week)";
      let membership = "Standard";
      
      if (formData.goal === "muscle") {
        calories = weightNum * 2.2 * 16;
        split = formData.days > "3" ? "Push/Pull/Legs" : "Upper/Lower Split";
        membership = "Elite";
      } else if (formData.goal === "fat_loss") {
        calories = weightNum * 2.2 * 12;
        split = "Full Body Circuit + Cardio";
        membership = "Elite";
      }

      setResult({
        calories: Math.round(calories),
        split,
        membership,
      });
      setStep(3);
    }, 2000);
  };

  return (
    <section className="bg-charcoal py-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        <div className="text-center mb-12">
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className="w-16 h-16 bg-gold/10 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-gold/30"
          >
            <Calculator className="text-gold w-8 h-8" />
          </motion.div>
          <h2 className="font-heading text-4xl md:text-5xl tracking-widest text-white mb-4 uppercase">
            AI Physique Calculator
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto text-sm">
            Enter your details to get a personalized calorie target, workout split, and the ideal membership plan for your goals.
          </p>
        </div>

        <div className="glass rounded-3xl p-8 md:p-12 border border-white/10 shadow-2xl overflow-hidden relative min-h-[400px]">
          <AnimatePresence mode="wait">
            {/* STEP 1: INPUT FORM */}
            {step === 1 && (
              <motion.form 
                key="form"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                onSubmit={handleCalculate}
                className="grid grid-cols-1 md:grid-cols-2 gap-8"
              >
                <div className="space-y-6">
                  <div>
                    <label className="block text-xs font-heading tracking-widest text-white/50 uppercase mb-2">Height (cm)</label>
                    <input type="number" required value={formData.height} onChange={e => setFormData({...formData, height: e.target.value})} className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-gold/50 transition-colors" placeholder="175" />
                  </div>
                  <div>
                    <label className="block text-xs font-heading tracking-widest text-white/50 uppercase mb-2">Weight (kg)</label>
                    <input type="number" required value={formData.weight} onChange={e => setFormData({...formData, weight: e.target.value})} className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-gold/50 transition-colors" placeholder="70" />
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <label className="block text-xs font-heading tracking-widest text-white/50 uppercase mb-2">Primary Goal</label>
                    <select value={formData.goal} onChange={e => setFormData({...formData, goal: e.target.value})} className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-gold/50 transition-colors appearance-none">
                      <option value="muscle">Build Muscle</option>
                      <option value="fat_loss">Lose Fat</option>
                      <option value="endurance">Improve Endurance</option>
                    </select>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-heading tracking-widest text-white/50 uppercase mb-2">Experience</label>
                      <select value={formData.experience} onChange={e => setFormData({...formData, experience: e.target.value})} className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-gold/50 transition-colors appearance-none">
                        <option value="beginner">Beginner</option>
                        <option value="intermediate">Intermediate</option>
                        <option value="advanced">Advanced</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-heading tracking-widest text-white/50 uppercase mb-2">Days / Week</label>
                      <select value={formData.days} onChange={e => setFormData({...formData, days: e.target.value})} className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-gold/50 transition-colors appearance-none">
                        <option value="3">3 Days</option>
                        <option value="4">4 Days</option>
                        <option value="5">5+ Days</option>
                      </select>
                    </div>
                  </div>
                </div>
                
                <div className="md:col-span-2 mt-4">
                  <button type="submit" className="w-full bg-gold text-black font-heading tracking-widest text-lg rounded-xl py-4 flex items-center justify-center gap-2 hover:bg-yellow-500 transition-colors">
                    Analyze My Physique <ArrowRight size={20} />
                  </button>
                </div>
              </motion.form>
            )}

            {/* STEP 2: CALCULATING */}
            {step === 2 && (
              <motion.div 
                key="loading"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 flex flex-col items-center justify-center bg-charcoal/50 backdrop-blur-sm z-20"
              >
                <div className="w-16 h-16 border-4 border-white/10 border-t-gold rounded-full animate-spin mb-6" />
                <h3 className="font-heading tracking-widest text-gold text-2xl animate-pulse">Running AI Model...</h3>
                <p className="text-white/50 text-sm mt-2">Optimizing your path to success</p>
              </motion.div>
            )}

            {/* STEP 3: RESULTS */}
            {step === 3 && result && (
              <motion.div 
                key="result"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center h-full"
              >
                <div className="space-y-6">
                  <h3 className="font-heading text-3xl text-white tracking-widest uppercase">Your Blueprint</h3>
                  
                  <div className="glass p-4 rounded-xl flex items-center gap-4">
                    <Flame className="text-gold" />
                    <div>
                      <p className="text-xs text-white/50 uppercase tracking-wider">Target Calories</p>
                      <p className="text-xl font-bold text-white">{result.calories} kcal / day</p>
                    </div>
                  </div>
                  
                  <div className="glass p-4 rounded-xl flex items-center gap-4">
                    <Calendar className="text-gold" />
                    <div>
                      <p className="text-xs text-white/50 uppercase tracking-wider">Workout Split</p>
                      <p className="text-xl font-bold text-white">{result.split}</p>
                    </div>
                  </div>
                  
                  <div className="glass p-4 rounded-xl flex items-center gap-4 border-gold/30 bg-gold/5">
                    <Activity className="text-gold" />
                    <div>
                      <p className="text-xs text-white/50 uppercase tracking-wider">Recommended Plan</p>
                      <p className="text-xl font-bold text-gold">{result.membership} Membership</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col items-center justify-center text-center p-8 border border-white/10 rounded-2xl bg-black/30">
                  <h4 className="font-heading text-2xl text-white mb-4">Ready to start?</h4>
                  <p className="text-white/60 text-sm mb-8">Share these results with our coaches to get started on your customized program immediately.</p>
                  <a href={`https://wa.me/placeholder?text=Hi! I just used the AI Calculator. My target is ${result.calories} calories and I want the ${result.membership} plan.`} className="bg-[#25D366] text-white px-8 py-3 rounded-full font-semibold shadow-[0_0_15px_rgba(37,211,102,0.3)] hover:shadow-[0_0_25px_rgba(37,211,102,0.5)] transition-all flex items-center gap-2 w-full justify-center">
                    Send to WhatsApp
                  </a>
                  <button onClick={() => setStep(1)} className="text-white/40 text-xs mt-6 hover:text-white transition-colors underline">Recalculate</button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
