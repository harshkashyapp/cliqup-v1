"use client";
import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const plans = ["Starter — ₹9,999/mo", "Growth — ₹24,999/mo", "Dominate — ₹49,999/mo", "Not sure yet"];

const planMap: Record<string, string> = {
  Starter: "Starter — ₹9,999/mo",
  Growth: "Growth — ₹24,999/mo",
  Dominate: "Dominate — ₹49,999/mo",
};

const inputClass =
  "w-full bg-[#0d0d0d] border border-white/10 rounded-xl px-5 py-4 text-sm text-[#FFFFFF] placeholder-[#FFFFFF]/25 outline-none focus:border-purple-500/60 transition-colors duration-200";

// Inner component — reads searchParams safely inside Suspense
function ContactFormInner() {
  const searchParams = useSearchParams();

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({
    businessName: "",
    name: "",
    email: "",
    phone: "",
    plan: "",
  });

  // Auto-fill plan and email from URL params
  useEffect(() => {
    const raw = searchParams.get("plan") ?? "";
    const mapped = planMap[raw] ?? "";
    const email = searchParams.get("email") ?? "";
    setForm((f) => ({
      ...f,
      ...(mapped && { plan: mapped }),
      ...(email && { email }),
    }));
  }, [searchParams]);

  const set = (field: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setForm((f) => ({ ...f, [field]: e.target.value }));

  const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "4289186d-48f1-4be4-bc13-91cefd8a2c03",
          name: form.name,
          email: form.email,
          phone: form.phone,
          business_name: form.businessName,
          interested_plan: form.plan || "Not specified",
        }),
      });
      const data = await res.json();
      if (data.success) {
        setSubmitted(true);
      } else {
        setError("Something went wrong. Please try again.");
      }
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // Left badge shows whatever is currently selected in the dropdown (live reactive)
  const activePlan = form.plan && form.plan !== "Not sure yet" ? form.plan : null;

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 pb-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.12, 1], opacity: [0.12, 0.2, 0.12] }}
          transition={{ duration: 7, repeat: Infinity }}
          className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full"
          style={{ background: "radial-gradient(circle, #8A2BE2 0%, #2563FF 40%, transparent 65%)" }}
        />
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: "linear-gradient(#FFFFFF 1px,transparent 1px),linear-gradient(90deg,#FFFFFF 1px,transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-10 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* ── Left panel ── */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:sticky lg:top-28 pt-12"
          >
            <div className="inline-flex items-center gap-2 border border-white/10 bg-white/5 rounded-full px-4 py-2 text-xs text-[#FFFFFF]/60 mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500" />
              </span>
              Response within 24 hours
            </div>

            <h1 className="font-bebas text-[clamp(3rem,7vw,6.5rem)] leading-[0.9] tracking-wide mb-6">
              LET&apos;S BUILD
              <br />
              <span className="gradient-text">SOMETHING</span>
              <br />
              GREAT.
            </h1>

            <p className="text-[#FFFFFF]/50 font-light leading-relaxed max-w-sm mb-10">
              Tell us about your brand and goals. We&apos;ll put together a custom growth plan and reach out within 24 hours.
            </p>

            <div className="flex flex-col gap-4 mb-10">
              {[
                { icon: "⚡", text: "Fast onboarding — live in days, not weeks" },
                { icon: "🎯", text: "Strategy tailored to your exact goals" },
                { icon: "📈", text: "Average 3× growth in 90 days" },
              ].map((b) => (
                <div key={b.text} className="flex items-center gap-3 text-sm text-[#FFFFFF]/50">
                  <span className="text-base">{b.icon}</span>
                  {b.text}
                </div>
              ))}
            </div>

            {/* Plan badge — reactive to form.plan state */}
            <AnimatePresence mode="wait">
              {activePlan && (
                <motion.div
                  key={activePlan}
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -8, scale: 0.95 }}
                  transition={{ duration: 0.35 }}
                  className="inline-flex items-center gap-3 bg-purple-900/20 border border-purple-500/30 rounded-2xl px-5 py-4"
                >
                  <div className="w-8 h-8 rounded-full gradient-bg flex items-center justify-center text-white text-xs flex-shrink-0">✓</div>
                  <div>
                    <p className="text-xs text-[#FFFFFF]/40 uppercase tracking-wider">Selected Plan</p>
                    <p className="text-sm font-semibold gradient-text">{activePlan}</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* ── Right panel — form ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="pt-12"
          >
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="bg-[#0d0d0d] border border-white/8 rounded-3xl p-12 text-center flex flex-col items-center gap-6"
                >
                  <motion.div
                    animate={{ scale: [1, 1.15, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="w-16 h-16 rounded-full gradient-bg flex items-center justify-center text-white text-2xl shadow-xl shadow-purple-900/40"
                  >
                    ✓
                  </motion.div>
                  <div>
                    <h3 className="font-bebas text-4xl tracking-wide mb-2">YOU&apos;RE ALL SET!</h3>
                    <p className="text-[#FFFFFF]/50 font-light">
                      Thanks, <span className="text-white font-medium">{form.name}</span>! We&apos;ll reach out to{" "}
                      <span className="gradient-text font-medium">{form.businessName}</span> within 24 hours.
                    </p>
                  </div>
                  <Link
                    href="/"
                    className="gradient-bg text-white font-semibold px-8 py-3.5 rounded-full text-sm hover:shadow-lg hover:shadow-purple-900/40 transition-shadow"
                  >
                    ← Back to Home
                  </Link>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  className="bg-[#0d0d0d] border border-white/8 rounded-3xl p-8 sm:p-10 flex flex-col gap-5"
                >
                  <div className="mb-2">
                    <h2 className="font-bebas text-3xl tracking-wide">Get Your Free Growth Audit</h2>
                    <p className="text-[#FFFFFF]/40 text-sm mt-1 font-light">All fields marked * are required.</p>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs uppercase tracking-wider text-[#FFFFFF]/40 font-medium">Business Name *</label>
                    <input
                      type="text"
                      placeholder="e.g. Cliqup Agency"
                      required
                      value={form.businessName}
                      onChange={set("businessName")}
                      className={inputClass}
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs uppercase tracking-wider text-[#FFFFFF]/40 font-medium">Your Name *</label>
                    <input
                      type="text"
                      placeholder="e.g. Rahul Mehra"
                      required
                      value={form.name}
                      onChange={set("name")}
                      className={inputClass}
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs uppercase tracking-wider text-[#FFFFFF]/40 font-medium">Email *</label>
                      <input
                        type="email"
                        placeholder="you@brand.com"
                        required
                        value={form.email}
                        onChange={set("email")}
                        className={inputClass}
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs uppercase tracking-wider text-[#FFFFFF]/40 font-medium">Phone *</label>
                      <input
                        type="tel"
                        placeholder="+91 98765 43210"
                        required
                        value={form.phone}
                        onChange={set("phone")}
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs uppercase tracking-wider text-[#FFFFFF]/40 font-medium">Interested Plan</label>
                    <div className="relative">
                      <select
                        value={form.plan}
                        onChange={set("plan")}
                        className={`${inputClass} appearance-none cursor-pointer pr-10`}
                      >
                        <option value="" disabled>Select a plan…</option>
                        {plans.map((p) => (
                          <option key={p} value={p} className="bg-[#0d0d0d]">{p}</option>
                        ))}
                      </select>
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-[#FFFFFF]/30">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                          <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  <motion.button
                    type="submit"
                    disabled={loading}
                    whileHover={!loading ? { scale: 1.03, boxShadow: "0 0 40px rgba(138,43,226,0.45)" } : {}}
                    whileTap={!loading ? { scale: 0.97 } : {}}
                    className="gradient-bg text-white font-semibold py-4 rounded-xl text-sm shadow-lg shadow-purple-900/30 mt-2 transition-shadow disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {loading ? "Sending…" : "Submit & Get My Free Audit →"}
                  </motion.button>

                  {error && (
                    <p className="text-center text-red-400 text-xs">{error}</p>
                  )}

                  <p className="text-center text-[#FFFFFF]/25 text-xs">
                    No spam. No commitments. Just growth.
                  </p>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Wrap in Suspense here so useSearchParams never throws outside a boundary
export default function ContactForm() {
  return (
    <Suspense fallback={null}>
      <ContactFormInner />
    </Suspense>
  );
}
