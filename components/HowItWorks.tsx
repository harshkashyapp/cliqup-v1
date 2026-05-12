"use client";
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const steps = [
  { num: "01", title: "Discovery Call", desc: "We deep-dive into your business, goals, and competitors to craft the right growth strategy." },
  { num: "02", title: "Strategy & Plan", desc: "Our team builds a customized roadmap covering all channels needed to reach your targets." },
  { num: "03", title: "Execute & Launch", desc: "We move fast. Design, develop, and launch your campaigns with precision and speed." },
  { num: "04", title: "Scale & Dominate", desc: "We monitor, optimize, and scale what works — turning results into market domination." },
];

export default function HowItWorks() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [activeStep, setActiveStep] = useState<number | null>(null);

  return (
    <section ref={ref} className="py-32 bg-[#080808] relative overflow-hidden">
      {/* Animated background line */}
      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-purple-800/20 to-transparent pointer-events-none hidden lg:block" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="text-xs uppercase tracking-[0.2em] gradient-text font-medium mb-3">The Process</p>
          <h2 className="font-bebas text-6xl sm:text-7xl tracking-wide">HOW IT WORKS</h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Steps */}
          <div className="flex flex-col gap-6">
            {steps.map((s, i) => (
              <motion.div
                key={s.num}
                initial={{ opacity: 0, x: -50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                onHoverStart={() => setActiveStep(i)}
                onHoverEnd={() => setActiveStep(null)}
                className={`flex gap-6 p-6 rounded-2xl border transition-all duration-300 cursor-default ${
                  activeStep === i
                    ? "border-purple-500/40 bg-purple-900/10"
                    : "border-white/5 bg-transparent"
                }`}
              >
                <motion.div
                  animate={{ scale: activeStep === i ? 1.1 : 1 }}
                  className="font-bebas text-5xl gradient-text leading-none min-w-[3.5rem] select-none"
                >
                  {s.num}
                </motion.div>
                <div>
                  <h3 className="font-bebas text-2xl tracking-wide mb-1">{s.title}</h3>
                  <motion.p
                    animate={{ color: activeStep === i ? "rgba(245,245,245,0.7)" : "rgba(245,245,245,0.4)" }}
                    transition={{ duration: 0.2 }}
                    className="text-sm leading-relaxed font-light"
                  >
                    {s.desc}
                  </motion.p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* 4× visual */}
          <div className="flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.6 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="relative flex flex-col items-center"
            >
              {/* Spinning outer ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute w-72 h-72 rounded-full border border-dashed border-purple-700/20"
              />
              {/* Pulsing rings */}
              {[1, 2, 3].map((ring) => (
                <motion.div
                  key={ring}
                  animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.05, 0.3] }}
                  transition={{ duration: 2.5, repeat: Infinity, delay: ring * 0.5 }}
                  className="absolute rounded-full border border-purple-500/20"
                  style={{ width: 60 + ring * 70, height: 60 + ring * 70 }}
                />
              ))}

              <motion.div
                animate={{ y: [0, -14, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                className="relative z-10"
              >
                <div style={{ filter: "drop-shadow(0 0 80px rgba(138,43,226,0.6))" }}>
                  <div
                    className="font-bebas select-none gradient-text"
                    style={{ fontSize: "clamp(7rem,16vw,12rem)", lineHeight: 1 }}
                  >
                    4×
                  </div>
                </div>
                <p className="text-center text-[#FFFFFF]/35 text-xs tracking-[0.3em] uppercase mt-1">
                  Average Growth
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
