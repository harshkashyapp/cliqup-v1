"use client";
import { motion } from "framer-motion";

const brands = [
  "NovaTech", "BrightEdge", "PulseMart", "ZenithCo", "AuraStudio",
  "NexaFlow", "VivaBrand", "CoreLift", "SwiftBase", "OriginX",
];

export default function TrustedBy() {
  return (
    <section className="py-20 relative overflow-hidden border-y border-white/5">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-6 sm:px-10 mb-10"
      >
        <p className="text-center text-[#FFFFFF]/25 text-xs uppercase tracking-[0.25em]">
          Trusted by fast-growing brands worldwide
        </p>
      </motion.div>

      {/* Fade masks */}
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to right, #050505, transparent)" }} />
        <div className="absolute right-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to left, #050505, transparent)" }} />

        {/* Row 1 — left scroll */}
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
          className="flex gap-16 whitespace-nowrap mb-4"
        >
          {[...brands, ...brands].map((b, i) => (
            <span key={i} className="font-bebas text-2xl text-[#FFFFFF]/15 tracking-widest select-none hover:text-[#FFFFFF]/40 transition-colors cursor-default">
              {b}
            </span>
          ))}
        </motion.div>

        {/* Row 2 — right scroll */}
        <motion.div
          animate={{ x: ["-50%", "0%"] }}
          transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
          className="flex gap-16 whitespace-nowrap"
        >
          {[...brands, ...brands].map((b, i) => (
            <span key={i} className="font-bebas text-xl text-[#FFFFFF]/10 tracking-widest select-none hover:text-[#FFFFFF]/30 transition-colors cursor-default">
              {b}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
