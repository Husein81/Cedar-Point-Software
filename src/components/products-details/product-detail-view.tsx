"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Icon } from "@/components/icon";
import type { Variants } from "framer-motion";
import { Product } from "@/lib/products";

interface Props {
  product: Product;
}

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.08,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

export default function ProductDetailView({ product }: Props) {
  const details = product.details;

  if (!details) return null;

  return (
    <main className="bg-background text-foreground">
      {/* HERO */}
      <section className="overflow-hidden">
        <div className="mx-auto flex max-w-[1440px] flex-col items-center gap-14 px-6 py-14 sm:py-16 lg:flex-row lg:gap-16 lg:px-16 lg:py-24">
          {/* TEXT */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="flex-1 text-center lg:text-left"
          >
            <motion.span
              variants={fadeUp}
              className="inline-flex rounded-full bg-primary/10 px-4 py-1 text-sm font-semibold text-primary"
            >
              {details.heroBadge}
            </motion.span>

            <motion.h1
              variants={fadeUp}
              custom={1}
              className="mt-5 text-4xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-5xl lg:max-w-[580px] lg:text-[56px]"
            >
              {details.heroTitle}
            </motion.h1>

            <motion.p
              variants={fadeUp}
              custom={2}
              className="mt-5 text-[16px] leading-7 text-muted-foreground sm:text-lg lg:max-w-[520px]"
            >
              {details.heroDescription}
            </motion.p>

            <motion.div variants={fadeUp} custom={3} className="mt-7">
              <Link
                href="/contact"
                className="inline-block rounded-2xl bg-primary px-6 py-4 text-sm font-semibold text-primary-foreground shadow-lg transition hover:scale-[1.02] hover:opacity-90 active:scale-[0.98]"
              >
                Request Demo →
              </Link>
            </motion.div>
          </motion.div>

          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: 30 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="flex flex-1 justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-[420px] sm:max-w-[520px] lg:max-w-[620px]">
              <Image
                src={details.heroImage}
                alt={product.title}
                width={1200}
                height={900}
                className="h-auto w-full rounded-[24px] sm:rounded-[32px] object-contain "
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="bg-background py-20 md:py-28">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl text-foreground">
              Key Features
            </h2>
          </motion.div>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {details.features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.6 }}
                whileHover={{ y: -6 }}
                className="rounded-3xl border border-border bg-card p-6 transition shadow-sm hover:border-primary/30 hover:shadow-xl"
              >
                <div className="flex h-[48px] w-[48px] items-center justify-center rounded-[12px] bg-primary/10">
                  <Icon
                    name={feature.icon}
                    size={24}
                    className="text-primary"
                  />
                </div>

                <h3 className="mt-4 text-[18px] font-semibold text-foreground">
                  {feature.title}
                </h3>

                <p className="mt-2 text-[16px] leading-[26px] text-muted-foreground">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* BIG IMAGE */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="py-20 md:py-28 bg-background"
      >
        <div className="mx-auto max-w-[1440px] px-6 lg:px-16">
          <motion.div
            initial={{ scale: 0.98, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-[1150px]"
          >
            <Image
              src={details.bigImage}
              alt={product.title}
              width={1400}
              height={900}
              className="w-full rounded-[24px] sm:rounded-[36px] shadow-2xl shadow-foreground/10 dark:shadow-black/40"
            />
          </motion.div>
        </div>
      </motion.section>

      {/* AUDIENCE */}
      <section className="bg-background py-20 md:py-28">
        <div className="mx-auto max-w-[1200px] px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl text-foreground">
              Who It&apos;s For
            </h2>
          </motion.div>

          <div className="mt-12 flex justify-center">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {details.audience.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  whileHover={{ y: -6 }}
                  className="w-full max-w-[420px] rounded-3xl border border-border bg-card p-6 shadow-sm transition hover:border-primary/30 hover:shadow-xl"
                >
                  <div className="flex h-[48px] w-[48px] items-center justify-center rounded-[12px] bg-primary/10">
                    <Icon name={item.icon} size={24} className="text-primary" />
                  </div>

                  <h3 className="mt-4 text-[18px] font-semibold text-foreground">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-[16px] leading-[26px] text-muted-foreground">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-16 sm:py-24">
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mx-auto max-w-5xl rounded-[32px] bg-primary px-6 sm:px-8 py-14 sm:py-20 text-center text-primary-foreground shadow-2xl shadow-primary/20"
        >
          <h2 className="mx-auto max-w-[720px] text-2xl font-bold leading-tight sm:text-3xl md:text-4xl">
            {details.ctaTitle}
          </h2>

          <p className="mx-auto mt-4 max-w-[620px] text-sm leading-6 text-primary-foreground/80 sm:text-base md:text-lg">
            {details.ctaDescription}
          </p>

          <Link
            href="/contact"
            className="mt-6 inline-block rounded-[14px] bg-background px-6 py-3 text-sm font-semibold text-primary transition hover:scale-[1.02] active:scale-[0.98]"
          >
            {details.ctaButton}
          </Link>
        </motion.div>
      </section>
    </main>
  );
}
