"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const stats = [
  { value: "200+", label: "Clients" },
  { value: "98%", label: "Satisfaction" },
  { value: "4×", label: "Growth" },
  { value: "5★", label: "Rating" },
];

const words = [
  { text: "CLICK.", style: "solid" },
  { text: "BUILD.", style: "gradient" },
  { text: "GROW.", style: "outline" },
  { text: "DOMINATE.", style: "solid" },
];

function SplitWord({ text, style, delay }: { text: string; style: string; delay: number }) {
  const letters = text.split("");
  return (
    <span className="block overflow-hidden">
      <motion.span
        className={`block${style === "gradient" ? " gradient-text" : ""}`}
        initial={{ y: "110%" }}
        animate={{ y: "0%" }}
        transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
        style={
          style === "outline"
            ? { WebkitTextStroke: "2px #FFFFFF", color: "transparent" }
            : {}
        }
      >
        {letters.map((l, i) => (
          <motion.span
            key={i}
            className="inline-block"
            initial={{ opacity: 0, rotateX: -90 }}
            animate={{ opacity: 1, rotateX: 0 }}
            transition={{ duration: 0.5, delay: delay + 0.05 + i * 0.03, ease: "easeOut" }}
          >
            {l === " " ? " " : l}
          </motion.span>
        ))}
      </motion.span>
    </span>
  );
}

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-16">
      {/* Parallax background layer */}
      <motion.div style={{ y }} className="absolute inset-0 pointer-events-none">
        {/* Main glow orb */}
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full"
          style={{ background: "radial-gradient(circle, #8A2BE2 0%, #2563FF 40%, transparent 65%)" }}
        />
        {/* Secondary orbs */}
        <motion.div
          animate={{ x: [0, 60, 0], y: [0, -30, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 right-10 w-72 h-72 rounded-full opacity-25"
          style={{ background: "radial-gradient(circle, #2563FF, transparent)" }}
        />
        <motion.div
          animate={{ x: [0, -40, 0], y: [0, 40, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-20 left-10 w-56 h-56 rounded-full opacity-20"
          style={{ background: "radial-gradient(circle, #8A2BE2, transparent)" }}
        />
        {/* Floating particles */}
        {[3,5,2,4,3,6,2,5,3,4,2,5].map((size, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: size,
              height: size,
              left: `${10 + (i * 7.5)}%`,
              top: `${15 + (i % 4) * 20}%`,
              background: i % 2 === 0 ? "#8A2BE2" : "#2563FF",
              opacity: 0.3,
            }}
            animate={{
              y: [0, -30 - i * 3, 0],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.3,
            }}
          />
        ))}
        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: "linear-gradient(#FFFFFF 1px,transparent 1px),linear-gradient(90deg,#FFFFFF 1px,transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </motion.div>

      {/* Content with parallax fade */}
      <motion.div style={{ opacity }} className="max-w-7xl mx-auto px-6 sm:px-10 py-32 relative z-10 w-full">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "backOut" }}
          className="flex justify-center mb-10"
        >
          <div className="inline-flex items-center gap-2 border border-white/10 bg-white/5 backdrop-blur-sm rounded-full px-5 py-2.5 text-sm text-[#FFFFFF]/70">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500" />
            </span>
            Only 5 Client Slots Open This Month
          </div>
        </motion.div>

        {/* Heading — letter-by-letter animation */}
        <div className="text-center perspective-[800px]">
          <h1 className="font-bebas text-[clamp(3.5rem,10vw,9rem)] leading-[0.88] tracking-wide">
            {words.map((w, i) => (
              <SplitWord key={w.text} text={w.text} style={w.style} delay={0.15 + i * 0.2} />
            ))}
          </h1>
        </div>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.05 }}
          className="text-center text-[#FFFFFF]/55 font-light text-lg max-w-xl mx-auto mt-8"
        >
          One click with Cliqup and everything changes — we design, build, and scale your entire digital presence until your market is yours.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mt-10"
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.06, boxShadow: "0 0 40px rgba(138,43,226,0.5)" }}
            whileTap={{ scale: 0.96 }}
            className="gradient-bg text-white font-semibold px-9 py-4 rounded-full text-center shadow-lg shadow-purple-900/40 transition-shadow"
          >
            Start Growing Now
          </motion.a>
          <motion.a
            href="#services"
            whileHover={{ scale: 1.06, borderColor: "rgba(255,255,255,0.5)", backgroundColor: "rgba(255,255,255,0.06)" }}
            whileTap={{ scale: 0.96 }}
            className="border border-white/20 text-white font-semibold px-9 py-4 rounded-full text-center transition-all duration-200"
          >
            Explore Services
          </motion.a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="mt-20 grid grid-cols-2 sm:grid-cols-4 gap-8 border-t border-white/10 pt-10"
        >
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.3 + i * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="text-center cursor-default"
            >
              <div className="font-bebas text-5xl gradient-text">{s.value}</div>
              <div className="text-[#FFFFFF]/45 text-sm mt-1 tracking-wide">{s.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[#FFFFFF]/25 text-[10px] tracking-[0.25em] uppercase">Scroll</span>
        <motion.div
          animate={{ scaleY: [0, 1, 0], opacity: [0, 1, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-10 origin-top rounded-full gradient-bg"
        />
      </motion.div>
    </section>
  );
}
