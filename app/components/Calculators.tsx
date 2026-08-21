"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Activity, Flame, Dumbbell } from "lucide-react";
import clsx from "clsx";

type CalcType = "BMI" | "BMR" | "1RM";

export default function Calculators() {
  const [activeTab, setActiveTab] = useState<CalcType>("BMI");

  // BMI State
  const [bmiHeight, setBmiHeight] = useState("");
  const [bmiWeight, setBmiWeight] = useState("");
  const [bmiResult, setBmiResult] = useState<{ value: string; category: string } | null>(null);

  // BMR State
  const [bmrAge, setBmrAge] = useState("");
  const [bmrGender, setBmrGender] = useState<"male" | "female">("male");
  const [bmrHeight, setBmrHeight] = useState("");
  const [bmrWeight, setBmrWeight] = useState("");
  const [bmrActivity, setBmrActivity] = useState("1.2");
  const [bmrResult, setBmrResult] = useState<{ bmr: string; tdee: string } | null>(null);

  // 1RM State
  const [ormWeight, setOrmWeight] = useState("");
  const [ormReps, setOrmReps] = useState("");
  const [ormResult, setOrmResult] = useState<string | null>(null);

  const calculateBMI = (e: React.FormEvent) => {
    e.preventDefault();
    const h = parseFloat(bmiHeight) / 100;
    const w = parseFloat(bmiWeight);
    if (h > 0 && w > 0) {
      const bmi = (w / (h * h)).toFixed(1);
      let category = "";
      if (Number(bmi) < 18.5) category = "Underweight";
      else if (Number(bmi) < 24.9) category = "Normal weight";
      else if (Number(bmi) < 29.9) category = "Overweight";
      else category = "Obese";
      setBmiResult({ value: bmi, category });
    }
  };

  const calculateBMR = (e: React.FormEvent) => {
    e.preventDefault();
    const w = parseFloat(bmrWeight);
    const h = parseFloat(bmrHeight);
    const a = parseFloat(bmrAge);
    if (w > 0 && h > 0 && a > 0) {
      // Mifflin-St Jeor Equation
      let bmr = 10 * w + 6.25 * h - 5 * a;
      bmr += bmrGender === "male" ? 5 : -161;
      const tdee = bmr * parseFloat(bmrActivity);
      setBmrResult({
        bmr: bmr.toFixed(0),
        tdee: tdee.toFixed(0),
      });
    }
  };

  const calculate1RM = (e: React.FormEvent) => {
    e.preventDefault();
    const w = parseFloat(ormWeight);
    const r = parseFloat(ormReps);
    if (w > 0 && r > 0) {
      // Epley formula
      const max = w * (1 + r / 30);
      setOrmResult(max.toFixed(1));
    }
  };

  return (
    <section className="bg-charcoal py-24 border-y border-white/5">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading text-4xl md:text-5xl tracking-widest text-white mb-4 uppercase"
          >
            Fitness <span className="text-gold">Calculators</span>
          </motion.h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-6" />
          <p className="text-white/60 max-w-2xl mx-auto text-sm">
            Track your progress and optimize your training with our suite of free fitness calculators.
          </p>
        </div>

        <div className="glass rounded-3xl border border-white/10 overflow-hidden">
          {/* Tabs */}
          <div className="flex border-b border-white/10">
            {[
              { id: "BMI", icon: Activity, label: "BMI" },
              { id: "BMR", icon: Flame, label: "Macros / TDEE" },
              { id: "1RM", icon: Dumbbell, label: "One-Rep Max" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as CalcType)}
                className={clsx(
                  "flex-1 flex flex-col md:flex-row items-center justify-center gap-2 py-6 px-4 transition-colors font-heading tracking-widest",
                  activeTab === tab.id
                    ? "bg-gold text-black"
                    : "bg-transparent text-white hover:bg-white/5"
                )}
              >
                <tab.icon size={20} />
                <span>{tab.label}</span>
              </button>
            ))}
          </div>

          <div className="p-8 md:p-12">
            <AnimatePresence mode="wait">
              {activeTab === "BMI" && (
                <motion.div
                  key="BMI"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                      <h3 className="font-heading text-3xl text-white mb-2">BMI Calculator</h3>
                      <p className="text-white/60 text-sm mb-8">
                        Body Mass Index (BMI) is a measure of body fat based on height and weight.
                      </p>
                      <form onSubmit={calculateBMI} className="space-y-4">
                        <div>
                          <label className="block text-white/80 text-xs mb-2">Height (cm)</label>
                          <input type="number" value={bmiHeight} onChange={(e) => setBmiHeight(e.target.value)} placeholder="e.g. 175" className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-gold transition-colors" required />
                        </div>
                        <div>
                          <label className="block text-white/80 text-xs mb-2">Weight (kg)</label>
                          <input type="number" value={bmiWeight} onChange={(e) => setBmiWeight(e.target.value)} placeholder="e.g. 70" className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-gold transition-colors" required />
                        </div>
                        <button type="submit" className="w-full bg-gold text-black font-bold py-4 rounded-xl mt-4 hover:shadow-[0_0_15px_rgba(212,175,55,0.4)] transition-all">
                          Calculate BMI
                        </button>
                      </form>
                    </div>
                    <div className="flex items-center justify-center">
                      {bmiResult ? (
                        <div className="text-center p-8 bg-black/50 rounded-2xl border border-gold w-full">
                          <p className="text-white/60 text-sm mb-2">Your BMI is</p>
                          <p className="text-6xl font-heading text-gold mb-4">{bmiResult.value}</p>
                          <div className="inline-block px-4 py-1 rounded-full bg-white/10 text-white font-medium">
                            {bmiResult.category}
                          </div>
                        </div>
                      ) : (
                        <div className="text-center p-8 border border-white/5 border-dashed rounded-2xl w-full text-white/20">
                          <Activity size={48} className="mx-auto mb-4" />
                          <p>Enter your details to see your result</p>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === "BMR" && (
                <motion.div
                  key="BMR"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                      <h3 className="font-heading text-3xl text-white mb-2">Calorie Calculator</h3>
                      <p className="text-white/60 text-sm mb-8">
                        Calculate your Basal Metabolic Rate (BMR) and Total Daily Energy Expenditure (TDEE).
                      </p>
                      <form onSubmit={calculateBMR} className="space-y-4">
                        <div className="flex gap-4">
                          <div className="flex-1">
                            <label className="block text-white/80 text-xs mb-2">Age</label>
                            <input type="number" value={bmrAge} onChange={(e) => setBmrAge(e.target.value)} placeholder="e.g. 25" className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-gold transition-colors" required />
                          </div>
                          <div className="flex-1">
                            <label className="block text-white/80 text-xs mb-2">Gender</label>
                            <select value={bmrGender} onChange={(e) => setBmrGender(e.target.value as "male" | "female")} className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-gold transition-colors">
                              <option value="male">Male</option>
                              <option value="female">Female</option>
                            </select>
                          </div>
                        </div>
                        <div className="flex gap-4">
                          <div className="flex-1">
                            <label className="block text-white/80 text-xs mb-2">Height (cm)</label>
                            <input type="number" value={bmrHeight} onChange={(e) => setBmrHeight(e.target.value)} placeholder="e.g. 175" className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-gold transition-colors" required />
                          </div>
                          <div className="flex-1">
                            <label className="block text-white/80 text-xs mb-2">Weight (kg)</label>
                            <input type="number" value={bmrWeight} onChange={(e) => setBmrWeight(e.target.value)} placeholder="e.g. 70" className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-gold transition-colors" required />
                          </div>
                        </div>
                        <div>
                          <label className="block text-white/80 text-xs mb-2">Activity Level</label>
                          <select value={bmrActivity} onChange={(e) => setBmrActivity(e.target.value)} className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-gold transition-colors">
                            <option value="1.2">Sedentary (Little/No Exercise)</option>
                            <option value="1.375">Lightly Active (1-3 days/week)</option>
                            <option value="1.55">Moderately Active (3-5 days/week)</option>
                            <option value="1.725">Very Active (6-7 days/week)</option>
                          </select>
                        </div>
                        <button type="submit" className="w-full bg-gold text-black font-bold py-4 rounded-xl mt-4 hover:shadow-[0_0_15px_rgba(212,175,55,0.4)] transition-all">
                          Calculate TDEE
                        </button>
                      </form>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-4">
                      {bmrResult ? (
                        <>
                          <div className="text-center p-6 bg-black/50 rounded-2xl border border-white/10 w-full">
                            <p className="text-white/60 text-sm mb-1">Resting Calories (BMR)</p>
                            <p className="text-4xl font-heading text-white">{bmrResult.bmr} <span className="text-sm font-sans text-white/40">kcal/day</span></p>
                          </div>
                          <div className="text-center p-6 bg-gold/10 rounded-2xl border border-gold w-full">
                            <p className="text-white/80 text-sm mb-1">Maintenance Calories (TDEE)</p>
                            <p className="text-5xl font-heading text-gold">{bmrResult.tdee} <span className="text-sm font-sans text-gold/60">kcal/day</span></p>
                          </div>
                        </>
                      ) : (
                        <div className="text-center p-8 border border-white/5 border-dashed rounded-2xl w-full h-full min-h-[200px] flex flex-col justify-center text-white/20">
                          <Flame size={48} className="mx-auto mb-4" />
                          <p>Enter your details to see your result</p>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === "1RM" && (
                <motion.div
                  key="1RM"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                      <h3 className="font-heading text-3xl text-white mb-2">One-Rep Max (1RM)</h3>
                      <p className="text-white/60 text-sm mb-8">
                        Estimate your absolute maximum lifting weight for a single repetition.
                      </p>
                      <form onSubmit={calculate1RM} className="space-y-4">
                        <div>
                          <label className="block text-white/80 text-xs mb-2">Weight Lifted (kg/lbs)</label>
                          <input type="number" value={ormWeight} onChange={(e) => setOrmWeight(e.target.value)} placeholder="e.g. 100" className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-gold transition-colors" required />
                        </div>
                        <div>
                          <label className="block text-white/80 text-xs mb-2">Repetitions Performed</label>
                          <input type="number" value={ormReps} onChange={(e) => setOrmReps(e.target.value)} placeholder="e.g. 5" className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-gold transition-colors" required />
                        </div>
                        <button type="submit" className="w-full bg-gold text-black font-bold py-4 rounded-xl mt-4 hover:shadow-[0_0_15px_rgba(212,175,55,0.4)] transition-all">
                          Calculate 1RM
                        </button>
                      </form>
                    </div>
                    <div className="flex items-center justify-center">
                      {ormResult ? (
                        <div className="text-center p-8 bg-black/50 rounded-2xl border border-gold w-full">
                          <p className="text-white/60 text-sm mb-2">Estimated 1 Rep Max</p>
                          <p className="text-6xl font-heading text-gold mb-4">{ormResult}</p>
                          <p className="text-white/40 text-xs">Based on the Epley formula</p>
                        </div>
                      ) : (
                        <div className="text-center p-8 border border-white/5 border-dashed rounded-2xl w-full text-white/20">
                          <Dumbbell size={48} className="mx-auto mb-4" />
                          <p>Enter your details to see your result</p>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
