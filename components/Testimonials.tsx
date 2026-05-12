"use client";
import { motion } from "framer-motion";
import TestimonialCard from "./TestimonialCard";

const testimonials = [
  {
    name: "Rahul Mehra",
    role: "Founder",
    company: "NovaTech",
    initials: "RM",
    text: "Cliqup completely transformed our digital presence. Our website traffic tripled in 3 months and our leads are through the roof. Best investment we've ever made.",
  },
  {
    name: "Priya Sharma",
    role: "CMO",
    company: "BrightEdge",
    initials: "PS",
    text: "The team at Cliqup doesn't just execute — they think strategically. Our social media went from 2K to 40K followers in under 6 months. Absolutely phenomenal.",
  },
  {
    name: "Arjun Kapoor",
    role: "CEO",
    company: "VivaBrand",
    initials: "AK",
    text: "From brand identity to paid ads, Cliqup handled everything seamlessly. Our ROAS on Meta ads jumped from 1.8x to 5.2x. These guys know what they're doing.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-32 bg-[#080808] relative overflow-hidden">
      {/* Ambient lighting */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.25, 1], opacity: [0.08, 0.16, 0.08], x: [0, 40, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full"
          style={{ background: "radial-gradient(ellipse, #8A2BE2, transparent 70%)" }}
        />
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.05, 0.1, 0.05], x: [0, -30, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] rounded-full"
          style={{ background: "radial-gradient(ellipse, #2563FF, transparent 70%)" }}
        />
      </div>
      <div className="max-w-7xl mx-auto px-6 sm:px-10 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-xs uppercase tracking-[0.2em] gradient-text font-medium mb-3">Client Love</p>
          <h2 className="font-bebas text-6xl sm:text-7xl tracking-wide">WHAT THEY SAY</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <TestimonialCard key={t.name} {...t} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
