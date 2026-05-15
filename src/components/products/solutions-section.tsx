"use client";

import { motion } from "framer-motion";
import { solutions } from "@/lib/solutions";
import { Icon } from "@/components/icon";

export default function SolutionsSection() {
  return (
    <section className="bg-slate-50 px-6 py-24 overflow-hidden">
      <div className="mx-auto max-w-7xl">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-[760px] text-center"
        >
          <h2 className="text-[36px] font-bold tracking-[-0.72px] text-slate-900">
            Solutions Tailored to Your Business
          </h2>

          <p className="mt-4 text-[18px] leading-[30px] text-slate-600">
            Our integrated modules combine to form the ultimate operating system
            for your industry.
          </p>
        </motion.div>

        {/* CARDS */}
        <div className="mt-16 flex flex-wrap justify-center gap-6">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.6,
                delay: index * 0.12,
                ease: "easeOut",
              }}
              whileHover={{ y: -6 }}
              className="w-[372px] rounded-[24px] border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:border-primary hover:shadow-xl"
            >
              {/* ICON */}
              <div className="flex h-[56px] w-[56px] items-center justify-center rounded-[16px] bg-primary/10">
                <Icon name={solution.icon} size={26} className="text-primary" />
              </div>

              {/* TITLE */}
              <h3 className="mt-6 text-[20px] font-semibold leading-[30px] text-slate-900">
                {solution.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="mt-3 text-[15px] leading-[24px] text-slate-600">
                {solution.description}
              </p>

              {/* TAGS */}
              <div className="mt-6 flex flex-wrap gap-2">
                {solution.products.map((product, i) => (
                  <motion.span
                    key={product}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.05 }}
                    className="flex h-[33px] items-center rounded-[12px] border border-slate-200 bg-slate-50 px-3 text-[13px] font-medium text-slate-700 transition-colors duration-200 hover:border-primary/30 hover:bg-primary/5 hover:text-primary"
                  >
                    {product}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
