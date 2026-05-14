"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { aboutStats } from "@/lib/about";

export default function AboutWho() {
  return (
    <section className="overflow-hidden bg-background py-14 md:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-10 lg:grid-cols-12">

          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, amount: 0.3 }}
            className="relative lg:col-span-7 lg:-ml-16"
          >
            <div className="relative aspect-[5/4] overflow-hidden rounded-2xl">
              <Image
                src="/about/who-we-are.png"
                alt="Modern workspace"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 60vw, 100vw"
                priority
              />
            </div>
          </motion.div>

          {/* CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, amount: 0.3 }}
            className="
              relative z-10
              lg:col-span-5
              lg:-ml-20
              lg:-mt-10
            "
          >
            <div className="rounded-2xl bg-background/90 p-6 backdrop-blur-sm lg:p-8">

              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                Who We Are
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Building Smart Software for Modern Businesses
              </h2>

              <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
                At Cedar Point Software, we build practical digital tools that
                help restaurants, retail stores, coffee shops, and logistics
                companies operate more efficiently and grow with confidence.
              </p>

              {/* STATS */}
              <dl className="mt-8 border-t border-border/50 pt-6">
                <div className="flex flex-col gap-5 sm:grid sm:grid-cols-3 sm:gap-6">
                  {aboutStats.map((stat) => (
                    <div key={stat.id}>
                      <dd className="text-2xl font-bold text-foreground sm:text-3xl">
                        {stat.value}
                      </dd>

                      <dt className="mt-1 text-sm leading-snug text-muted-foreground">
                        {stat.label}
                      </dt>
                    </div>
                  ))}
                </div>
              </dl>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}