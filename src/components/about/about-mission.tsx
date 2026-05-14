"use client";

import { motion } from "framer-motion";

export default function AboutMission() {
  return (
    <section className="bg-background py-20 text-center md:py-28 lg:py-32">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        
        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
          className="mb-3 text-sm font-semibold uppercase tracking-[0.1em] text-primary"
        >
          Our Mission
        </motion.p>

        {/* Quote */}
        <motion.blockquote
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <p className="text-2xl font-medium leading-snug tracking-tight sm:text-3xl lg:text-[2.625rem] lg:leading-tight">
            <span className="text-balance">
              <span className="text-primary">&ldquo;</span>
              To help businesses operate smarter through modern and reliable
              software solutions.
              <span className="text-primary">&rdquo;</span>
            </span>
          </p>
        </motion.blockquote>
      </div>
    </section>
  );
}