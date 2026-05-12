"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const metrics = [
  { raw: 200, suffix: "+", label: "Brands Scaled", prefix: "" },
  { raw: 5000, suffix: "K+", label: "Impressions Delivered", prefix: "" },
  { raw: 340, suffix: "%", label: "Traffic Increase", prefix: "" },
  { raw: 98, suffix: "%", label: "Retention Rate", prefix: "" },
];

function Counter({ to, suffix, prefix, inView }: { to: number; suffix: string; prefix: string; inView: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1800;
    const step = 16;
    const increment = to / (duration / step);
    const timer = setInterval(() => {
      start += increment;
      if (start >= to) { setCount(to); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, step);
    return () => clearInterval(timer);
  }, [inView, to]);

  return <>{prefix}{count}{suffix}</>;
}

export default function Results() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="results" ref={ref} className="py-32 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ opacity: [0.04, 0.1, 0.04] }}
          transition={{ duration: 5, repeat: Infinity }}
          className="absolute inset-0"
          style={{ background: "radial-gradient(ellipse at 50% 50%, #8A2BE2 0%, transparent 60%)" }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-xs uppercase tracking-[0.2em] gradient-text font-medium mb-3">Proven Results</p>
          <h2 className="font-bebas text-6xl sm:text-7xl tracking-wide">NUMBERS THAT SPEAK</h2>
          <p className="text-[#FFFFFF]/50 max-w-lg mx-auto mt-4 font-light">
            Real results for real businesses. These aren&apos;t vanity metrics — they&apos;re proof.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 40, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              whileHover={{ scale: 1.04, borderColor: "rgba(138,43,226,0.4)" }}
              className="bg-[#0d0d0d] border border-white/8 rounded-2xl p-8 text-center relative overflow-hidden transition-colors duration-300"
            >
              {/* Shine sweep on hover */}
              <motion.div
                initial={{ x: "-100%" }}
                whileHover={{ x: "200%" }}
                transition={{ duration: 0.5 }}
                className="absolute inset-y-0 w-1/2 bg-gradient-to-r from-transparent via-white/4 to-transparent skew-x-12 pointer-events-none"
              />
              <div className="font-bebas text-6xl gradient-text leading-none">
                <Counter to={m.raw} suffix={m.suffix} prefix={m.prefix} inView={inView} />
              </div>
              <div className="text-[#FFFFFF]/50 text-sm mt-2 tracking-wide">{m.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
