"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { pricingFaqs } from "@/lib/pricing/faqs";
import { Icon } from "@/components/icon";

const faqIcon = "MessageCircle";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 14 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut" as const },
  },
};

export default function PricingFaq() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section
      className="relative overflow-hidden bg-background px-6 py-24 lg:py-[100px]"
      aria-labelledby="pricing-faq-heading"
    >
      <div className="mx-auto max-w-[980px]">
        {/* HEADER */}
        <header className="mx-auto mb-16 max-w-[720px] text-center">
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="
              inline-flex items-center
              rounded-full border border-primary
              bg-background
              px-4 py-2
              text-sm font-medium text-primary
            "
          >
            Support & Answers
          </motion.div>

          <h2 className="mt-5 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Frequently Asked Questions
          </h2>

          <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Everything you need to know about our services, pricing, and
            process.
          </p>
        </header>

        {/* FAQ LIST */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col gap-4"
        >
          {pricingFaqs.map((faq, index) => {
            const isActive = activeIndex === index;

            return (
              <motion.article
                key={faq.question}
                variants={itemVariants}
                layout
                className={`group cursor-pointer overflow-hidden rounded-2xl border bg-card transition-all duration-300 ${
                  isActive
                    ? "border-primary"
                    : "border-border hover:border-primary hover:bg-muted"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  aria-expanded={isActive}
                  className="flex w-full items-center gap-4 px-5 py-5 text-left sm:px-6"
                >
                  {/* ICON */}
                  <div
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border transition-all duration-300 ${
                      isActive
                        ? "border-primary bg-primary text-primary-foreground"
                        : "border-border bg-muted text-muted-foreground group-hover:border-primary group-hover:bg-muted"
                    }`}
                  >
                    <Icon name={faqIcon} size={16} />
                  </div>

                  {/* QUESTION + ANSWER */}
                  <div className="flex-1">
                    <h3 className="text-base font-semibold leading-relaxed text-foreground sm:text-lg">
                      {faq.question}
                    </h3>

                    <AnimatePresence initial={false}>
                      {isActive && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{
                            duration: 0.25,
                            ease: "easeInOut",
                          }}
                          className="overflow-hidden"
                        >
                          <p className="pt-4 text-base leading-relaxed text-muted-foreground">
                            {faq.answer}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* CHEVRON */}
                  <motion.div
                    animate={{ rotate: isActive ? 180 : 0 }}
                    transition={{ duration: 0.25 }}
                    className="shrink-0 text-muted-foreground"
                  >
                    <Icon name="ChevronDown" size={18} />
                  </motion.div>
                </button>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
