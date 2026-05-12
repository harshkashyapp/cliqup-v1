"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const links = {
  Company: ["About", "Careers", "Blog", "Press"],
  Services: ["Website Design", "App Development", "SEO", "Paid Ads"],
  Legal: ["Privacy Policy", "Terms of Service", "Cookie Policy"],
};

export default function Footer() {
  return (
    <footer className="bg-[#080808] border-t border-white/5 pt-20 pb-10 relative overflow-hidden">
      {/* Ambient glow */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.06, 0.12, 0.06] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(ellipse, #8A2BE2, transparent 70%)" }}
      />
      <div className="max-w-7xl mx-auto px-6 sm:px-10 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="mb-4">
              <Image src="/Untitled design (2).png" alt="Cliqup" width={140} height={46} className="object-contain" style={{ mixBlendMode: "screen" }} />
            </div>
            <p className="text-[#FFFFFF]/40 text-sm leading-relaxed font-light max-w-xs">
              A digital growth agency that helps ambitious brands click, grow, and dominate their markets through strategy, design, and execution.
            </p>
            {/* Social icons */}
            <div className="flex gap-4 mt-6">
              {["Twitter", "Instagram", "LinkedIn"].map((s) => (
                <a
                  key={s}
                  href="#"
                  aria-label={s}
                  className="w-9 h-9 rounded-full bg-white/5 border border-white/8 flex items-center justify-center text-[#FFFFFF]/50 hover:text-white hover:border-purple-500 transition-all duration-200"
                >
                  {s === "Twitter" && (
                    <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  )}
                  {s === "Instagram" && (
                    <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                      <rect x="2" y="2" width="20" height="20" rx="5" />
                      <circle cx="12" cy="12" r="4" />
                      <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
                    </svg>
                  )}
                  {s === "LinkedIn" && (
                    <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                  )}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(links).map(([group, items]) => (
            <div key={group}>
              <h4 className="font-bebas text-base tracking-widest text-[#FFFFFF]/60 mb-4">{group}</h4>
              <ul className="flex flex-col gap-2.5">
                {items.map((item) => (
                  <li key={item}>
                    <a href="#" className="text-sm text-[#FFFFFF]/40 hover:text-white transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[#FFFFFF]/30 text-xs">
            © {new Date().getFullYear()} Cliqup. All rights reserved.
          </p>
          <p className="text-[#FFFFFF]/20 text-xs">
            Built with ❤️ to help brands dominate.
          </p>
        </div>
      </div>
    </footer>
  );
}
