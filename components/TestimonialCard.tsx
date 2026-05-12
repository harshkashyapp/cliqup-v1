"use client";
import { motion } from "framer-motion";

interface TestimonialCardProps {
  name: string;
  role: string;
  company: string;
  text: string;
  initials: string;
  index: number;
}

export default function TestimonialCard({ name, role, company, text, initials, index }: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.65, delay: index * 0.15 }}
      whileHover={{ y: -6, transition: { duration: 0.25 } }}
      className="bg-[#0d0d0d] border border-white/8 rounded-2xl p-8 flex flex-col gap-5 relative overflow-hidden group"
    >
      {/* Hover glow */}
      <motion.div
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0 rounded-2xl pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 50% 100%, rgba(138,43,226,0.1) 0%, transparent 70%)" }}
      />

      {/* Quote mark */}
      <div className="absolute top-6 right-8 font-bebas text-7xl text-white/4 leading-none select-none">&ldquo;</div>

      {/* Stars */}
      <div className="flex gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <motion.svg
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.15 + i * 0.06 }}
            width="15" height="15" viewBox="0 0 24 24"
          >
            <defs>
              <linearGradient id={`sg-${index}-${i}`} x1="0" y1="0" x2="1" y2="1">
                <stop stopColor="#7C3AED" />
                <stop offset="1" stopColor="#2563FF" />
              </linearGradient>
            </defs>
            <path
              d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
              fill={`url(#sg-${index}-${i})`}
            />
          </motion.svg>
        ))}
      </div>

      <p className="text-[#FFFFFF]/65 text-sm leading-relaxed font-light flex-1 relative z-10">
        &ldquo;{text}&rdquo;
      </p>

      <div className="flex items-center gap-3 mt-2">
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="w-10 h-10 rounded-full gradient-bg flex items-center justify-center text-white font-bold text-sm flex-shrink-0 shadow-md shadow-purple-900/40"
        >
          {initials}
        </motion.div>
        <div>
          <div className="text-sm font-semibold">{name}</div>
          <div className="text-xs text-[#FFFFFF]/35">{role}, {company}</div>
        </div>
      </div>
    </motion.div>
  );
}
