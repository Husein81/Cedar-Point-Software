"use client";

import { motion } from "framer-motion";

export default function PricingHero() {
  return (
    <header className="px-6 pb-16 pt-20 text-center sm:pt-24 lg:pt-[100px] lg:pb-[60px]">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mx-auto flex max-w-[680px] flex-col items-center gap-5"
      >
        <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight text-foreground sm:text-5xl">
          Simple, Flexible Pricing
        </h1>
        <p className="text-lg leading-relaxed text-muted-foreground sm:text-xl">
          Choose a plan that fits your business, or request a custom solution
          tailored to your exact needs.
        </p>
      </motion.div>
    </header>
  );
}
