"use client";
import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

export default function ServiceCard({ icon, title, description, index }: ServiceCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useSpring(useTransform(mouseY, [-80, 80], [12, -12]), { stiffness: 200, damping: 20 });
  const rotateY = useSpring(useTransform(mouseX, [-80, 80], [-12, 12]), { stiffness: 200, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set(e.clientX - rect.left - rect.width / 2);
    mouseY.set(e.clientY - rect.top - rect.height / 2);
  };
  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    setHovered(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      style={{ perspective: 800, transformStyle: "preserve-3d" }}
    >
      <motion.div
        ref={ref}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={handleMouseLeave}
        className="group relative bg-[#0d0d0d] border border-white/8 rounded-2xl p-8 overflow-hidden cursor-default h-full"
      >
        {/* Gradient top border reveal */}
        <motion.div
          animate={{ scaleX: hovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="absolute top-0 left-0 right-0 h-[2px] gradient-bg origin-left"
        />

        {/* Inner glow on hover */}
        <motion.div
          animate={{ opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.4 }}
          className="absolute inset-0 rounded-2xl pointer-events-none"
          style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(138,43,226,0.12) 0%, transparent 70%)" }}
        />

        {/* Icon */}
        <motion.div
          style={{ translateZ: 30 }}
          className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center mb-5 text-white shadow-lg shadow-purple-900/30"
        >
          {icon}
        </motion.div>

        <motion.h3 style={{ translateZ: 20 }} className="font-bebas text-2xl tracking-wide mb-2 text-[#FFFFFF]">
          {title}
        </motion.h3>
        <p className="text-[#FFFFFF]/50 text-sm leading-relaxed font-light">{description}</p>

        {/* Arrow on hover */}
        <motion.div
          animate={{ opacity: hovered ? 1 : 0, x: hovered ? 0 : -10 }}
          transition={{ duration: 0.2 }}
          className="mt-5 flex items-center gap-2 text-xs gradient-text font-medium tracking-wide"
        >
          Learn more
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth={2}>
            <path d="M2 6h8M6 2l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
