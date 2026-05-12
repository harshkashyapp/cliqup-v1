"use client";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function CTA() {
  const router = useRouter();
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Pass email as a query param so the contact page can pre-fill it if desired
    router.push(`/contact${email ? `?email=${encodeURIComponent(email)}` : ""}`);
  };

  return (
    <section id="contact" className="py-40 relative overflow-hidden">
      {/* Animated glow */}
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.12, 0.22, 0.12] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at center, #8A2BE2 0%, #2563FF 35%, transparent 65%)" }}
      />
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(#FFFFFF 1px,transparent 1px),linear-gradient(90deg,#FFFFFF 1px,transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xs uppercase tracking-[0.25em] gradient-text font-medium mb-6"
          >
            Let&apos;s Work Together
          </motion.p>

          <h2 className="font-bebas text-[clamp(3rem,9vw,8rem)] leading-none tracking-wide">
            READY TO{" "}
            <motion.span
              animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              className="gradient-text"
              style={{ backgroundSize: "200% 200%" }}
            >
              DOMINATE?
            </motion.span>
          </h2>

          <p className="text-[#FFFFFF]/50 max-w-xl mx-auto mt-6 font-light text-lg">
            Drop your email and we&apos;ll reach out within 24 hours with a custom growth plan for your brand.
          </p>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            onSubmit={handleSubmit}
            className="mt-12 flex flex-col sm:flex-row gap-4 max-w-lg mx-auto"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              required
              className="flex-1 bg-[#0d0d0d] border border-white/10 rounded-full px-6 py-4 text-sm text-[#FFFFFF] placeholder-[#FFFFFF]/25 outline-none focus:border-purple-500/60 transition-colors"
            />
            <motion.button
              type="submit"
              whileHover={{ scale: 1.06, boxShadow: "0 0 30px rgba(138,43,226,0.5)" }}
              whileTap={{ scale: 0.96 }}
              className="gradient-bg text-white font-semibold px-8 py-4 rounded-full shadow-lg shadow-purple-900/40 whitespace-nowrap"
            >
              Get Free Audit →
            </motion.button>
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
}
