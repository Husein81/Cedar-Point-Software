"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 12,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const,
    },
  },
};

export default function PricingFlexible() {
  return (
    <section
      className="bg-muted px-6 py-20 text-center lg:py-[80px]"
      aria-labelledby="pricing-flexible-heading"
    >
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="mx-auto flex max-w-[600px] flex-col items-center gap-6"
      >
        {/* TITLE */}
        <motion.h2
          id="pricing-flexible-heading"
          variants={itemVariants}
          className="text-3xl font-bold tracking-tight text-foreground"
        >
          Need Something More Flexible?
        </motion.h2>

        {/* TEXT */}
        <motion.p
          variants={itemVariants}
          className="text-lg leading-relaxed text-muted-foreground"
        >
          We build custom solutions tailored to your specific business
          requirements. Let&apos;s discuss how we can adapt our software to
          perfectly fit your workflow.
        </motion.p>

        {/* BUTTON */}
        <motion.div variants={itemVariants}>
          <Button
            asChild
            className="h-12 rounded-md px-6 text-[15px] font-medium"
          >
            <Link href="/contact">Request a Quote</Link>
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
