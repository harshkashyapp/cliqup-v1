"use client";
import { motion } from "framer-motion";
import PricingCard from "./PricingCard";

const plans = [
  {
    name: "Starter",
    price: "₹9,999",
    period: "per month",
    description: "Perfect for small businesses ready to build their digital foundation.",
    features: [
      "5-page Website Design",
      "Social Media Setup (2 platforms)",
      "Basic SEO Optimization",
      "Monthly Report",
      "Email Support",
    ],
    featured: false,
  },
  {
    name: "Growth",
    price: "₹24,999",
    period: "per month",
    description: "For growing brands that need to accelerate across all channels.",
    features: [
      "10-page Custom Website",
      "Social Media Management (4 platforms)",
      "Full SEO + Content Strategy",
      "Paid Ads Management (₹50K budget)",
      "Brand Identity Kit",
      "Weekly Reports + Strategy Call",
      "Priority Support",
    ],
    featured: true,
  },
  {
    name: "Dominate",
    price: "₹49,999",
    period: "per month",
    description: "Enterprise-level domination for brands that refuse to lose.",
    features: [
      "Unlimited Page Website",
      "Full Social Media Suite (all platforms)",
      "Advanced SEO + Link Building",
      "Paid Ads (unlimited budget management)",
      "Full Brand Identity + Guidelines",
      "Analytics Dashboard",
      "Dedicated Account Manager",
      "24/7 Support",
    ],
    featured: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-32 relative overflow-hidden">
      {/* Ambient lighting */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.18, 1], opacity: [0.09, 0.18, 0.09] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[500px] rounded-full"
          style={{ background: "radial-gradient(ellipse, #2563FF 0%, #8A2BE2 40%, transparent 70%)" }}
        />
        <motion.div
          animate={{ scale: [1, 1.3, 1], opacity: [0.04, 0.09, 0.04], y: [0, -30, 0] }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 3 }}
          className="absolute bottom-0 left-1/4 w-[400px] h-[400px] rounded-full"
          style={{ background: "radial-gradient(circle, #8A2BE2, transparent 70%)" }}
        />
      </div>
      <div className="max-w-7xl mx-auto px-6 sm:px-10 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-xs uppercase tracking-[0.2em] gradient-text font-medium mb-3">Simple Pricing</p>
          <h2 className="font-bebas text-6xl sm:text-7xl tracking-wide">CHOOSE YOUR PLAN</h2>
          <p className="text-[#FFFFFF]/50 max-w-lg mx-auto mt-4 font-light">
            No hidden fees. No long-term lock-ins. Just results.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          {plans.map((p, i) => (
            <PricingCard key={p.name} {...p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
