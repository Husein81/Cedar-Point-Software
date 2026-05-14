"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion";

import { Button } from "@/components/ui/button";

const MotionLink = motion.create(Link);

const containerVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 32,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      ease: "easeOut",
      staggerChildren: 0.15,
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

export default function AboutHero() {
  return (
    <section
      className="relative flex min-h-[min(812px,85vh)] items-center justify-center overflow-hidden py-24 text-center text-white md:py-32 lg:py-44"
      aria-labelledby="about-hero-heading"
    >
      {/* Background Image */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <Image
          src="/about/hero.png"
          alt="Diverse team collaborating in a bright, modern office"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      </div>

      {/* Overlay */}
      <div
        className="pointer-events-none absolute inset-0 z-[1] bg-slate-900/75"
        aria-hidden="true"
      />

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center gap-8 px-4 sm:px-6 lg:px-8"
      >
        <motion.h1
          variants={itemVariants}
          id="about-hero-heading"
          className="max-w-3xl text-4xl font-extrabold leading-[1.15] tracking-tight sm:text-5xl lg:text-[3.5rem]"
        >
          Building Software That Helps Businesses Move Smarter
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="max-w-2xl text-lg leading-relaxed text-white/90 sm:text-xl"
        >
          We create practical digital solutions for restaurants, retail stores,
          coffee shops, and logistics companies.
        </motion.p>

        <motion.div variants={itemVariants}>
          <Button
            asChild
            size="lg"
            className="h-auto rounded-md px-9 py-4 text-base font-medium shadow-lg shadow-black/20"
          >
            <MotionLink
              href="/contact"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              Contact Us
            </MotionLink>
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}