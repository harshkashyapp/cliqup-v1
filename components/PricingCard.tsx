"use client";
import { motion } from "framer-motion";

interface PricingCardProps {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  featured?: boolean;
  index: number;
}

export default function PricingCard({ name, price, period, description, features, featured = false, index }: PricingCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.65, delay: index * 0.15 }}
      whileHover={{ y: -8, transition: { duration: 0.25 } }}
      className={`relative rounded-2xl p-8 flex flex-col gap-6 h-full ${
        featured
          ? "gradient-bg text-white shadow-2xl shadow-purple-900/50 z-10 scale-[1.03]"
          : "bg-[#0d0d0d] border border-white/8"
      }`}
    >
      {featured && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white text-[#050505] text-xs font-bold px-5 py-1.5 rounded-full shadow-lg"
        >
          ✦ MOST POPULAR
        </motion.div>
      )}

      {/* Shimmer on featured */}
      {featured && (
        <motion.div
          animate={{ x: ["-100%", "200%"] }}
          transition={{ duration: 3, repeat: Infinity, repeatDelay: 2, ease: "easeInOut" }}
          className="absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 pointer-events-none rounded-2xl"
        />
      )}

      <div>
        <div className={`text-xs uppercase tracking-[0.2em] font-medium mb-2 ${featured ? "text-white/70" : "gradient-text"}`}>
          {name}
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.15 + 0.3 }}
          className="font-bebas text-6xl leading-none"
        >
          {price}
        </motion.div>
        <div className={`text-sm mt-1 ${featured ? "text-white/70" : "text-[#FFFFFF]/45"}`}>{period}</div>
        <p className={`text-sm mt-3 font-light ${featured ? "text-white/80" : "text-[#FFFFFF]/50"}`}>{description}</p>
      </div>

      <ul className="flex flex-col gap-3 flex-1">
        {features.map((f, fi) => (
          <motion.li
            key={f}
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 + fi * 0.05 + 0.2 }}
            className="flex items-start gap-3 text-sm"
          >
            <svg className={`w-4 h-4 mt-0.5 flex-shrink-0 ${featured ? "text-white" : "text-purple-400"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            <span className={featured ? "text-white/90" : "text-[#FFFFFF]/65"}>{f}</span>
          </motion.li>
        ))}
      </ul>

      <motion.a
        href={`/contact?plan=${encodeURIComponent(name)}`}
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.97 }}
        className={`block text-center font-semibold py-3.5 rounded-full transition-all duration-200 mt-2 ${
          featured
            ? "bg-white text-[#050505] hover:bg-white/90 shadow-lg"
            : "gradient-bg text-white hover:shadow-lg hover:shadow-purple-900/40"
        }`}
      >
        Get Started
      </motion.a>
    </motion.div>
  );
}
