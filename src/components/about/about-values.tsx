"use client";

import { motion } from "framer-motion";

import { Icon } from "@/components/icon";
import { values } from "@/lib/about";

const VIEWPORT = { once: true, amount: 0.2 };

export default function AboutValues() {
  return (
    <section
      className="bg-page py-20 md:py-28 lg:py-32"
      aria-labelledby="about-values-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={VIEWPORT}
          className="mb-12 text-center md:mb-16"
        >
          <h2
            id="about-values-heading"
            className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-[2.5rem]"
          >
            Our Values
          </h2>
        </motion.div>

        {/* GRID */}
        <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {values.map(({ id, icon, title, description }, index) => (
            <motion.li
              key={id}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.12,
              }}
              viewport={VIEWPORT}
            >
              <article className="flex h-full flex-col gap-5 rounded-xl border border-border bg-card p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                {/* ICON */}
                <motion.div
                  whileHover={{ scale: 1.08 }}
                  transition={{ type: "spring", stiffness: 260, damping: 18 }}
                  className="flex size-14 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary"
                  aria-hidden="true"
                >
                  <Icon name={icon} className="size-7" strokeWidth={1.75} />
                </motion.div>

                {/* CONTENT */}
                <div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {title}
                  </h3>

                  <p className="mt-3 text-[0.9375rem] leading-relaxed text-muted-foreground">
                    {description}
                  </p>
                </div>
              </article>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
