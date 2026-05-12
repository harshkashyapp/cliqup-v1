"use client";
import { motion } from "framer-motion";
import FAQItem from "./FAQItem";

const faqs = [
  {
    question: "How quickly can you start working on my project?",
    answer: "We typically onboard new clients within 2–3 business days. After a discovery call, we'll send you a detailed proposal and project timeline. Most projects kick off within the first week.",
  },
  {
    question: "Do I need to sign a long-term contract?",
    answer: "No long-term lock-ins. All our plans are month-to-month. We believe in earning your business every month through results, not contracts. However, clients who commit to 6+ months get priority pricing.",
  },
  {
    question: "What kind of results can I expect and when?",
    answer: "SEO and organic growth typically show meaningful results in 60–90 days. Paid ads can deliver results within the first week. Website conversions improve almost immediately post-launch. We share transparent weekly reports so you always know what's happening.",
  },
  {
    question: "Will I have a dedicated point of contact?",
    answer: "Yes. Every client gets a dedicated account manager who is your single point of contact. Growth and Dominate plan clients also get a weekly strategy call with a senior strategist.",
  },
  {
    question: "Can I upgrade or change my plan later?",
    answer: "Absolutely. You can upgrade, downgrade, or customize your plan at any time. We'll prorate the difference and adjust your strategy accordingly. Our goal is to grow with you, not lock you in.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="py-32 bg-[#080808]">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-xs uppercase tracking-[0.2em] gradient-text font-medium mb-3">Got Questions?</p>
          <h2 className="font-bebas text-6xl sm:text-7xl tracking-wide">FREQUENTLY ASKED</h2>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((f, i) => (
            <FAQItem key={f.question} {...f} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
