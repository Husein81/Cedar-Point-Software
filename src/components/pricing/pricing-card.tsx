"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { Icon } from "@/components/icon";
import { cn } from "@/lib/utils";
import type { PricingPlan } from "@/lib/pricing/plans";

type PricingCardProps = {
  plan: PricingPlan;
};

export default function PricingCard({ plan }: PricingCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      whileHover={{
        y: -4,
        transition: {
          duration: 0.2,
        },
      }}
      className={cn(
        "relative flex flex-col overflow-visible rounded-3xl border bg-card",
        "px-8 py-10",
        "transition-all duration-300 ease-out",

        // base card
        "border-border",
        "hover:border-primary-muted",
        "hover:-translate-y-1",

        // featured card
        plan.highlighted && [
          "z-10",
          "border-primary",
          "bg-background",
          "lg:-translate-y-3",
          "lg:scale-[1.03]",
          "shadow-xl shadow-primary-soft",
        ],
      )}
    >
      {plan.badge && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.3 }}
          className="absolute left-1/2 top-0 z-20 -translate-x-1/2 -translate-y-[55%]"
        >
          <span
            className={cn(
              "inline-flex items-center rounded-full",
              "border border-primary-subtle bg-primary",
              "px-3 py-1",
              "text-[11px] font-semibold uppercase tracking-[0.16em]",
              "text-primary-foreground",
            )}
          >
            {plan.badge}
          </span>
        </motion.div>
      )}

      <div className="flex h-full flex-col">
        {/* Header */}
        <div>
          <h2 className="text-2xl font-semibold tracking-tight text-foreground">
            {plan.name}
          </h2>

          <p className="mt-3 min-h-[48px] text-sm leading-6 text-muted-foreground">
            {plan.description}
          </p>
        </div>

        {/* Price */}
        <div className="mt-8">
          <div className="flex items-end gap-1">
            <motion.p
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.15, duration: 0.3 }}
              className={cn(
                "text-5xl font-bold tracking-tight text-foreground",
                plan.priceClassName,
              )}
            >
              {plan.price}
            </motion.p>
          </div>

          <p className="mt-2 text-sm text-muted-foreground">
            {plan.priceSubtitle}
          </p>
        </div>

        {/* Features */}
        <ul
          className="mt-8 flex flex-1 flex-col gap-4"
          aria-label={`${plan.name} plan features`}
        >
          {plan.features.map((feature, index) => (
            <motion.li
              key={feature}
              initial={{ opacity: 0, x: -6 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                delay: index * 0.05,
                duration: 0.25,
              }}
              className="flex items-start gap-3 text-sm leading-6 text-foreground"
            >
              <Icon
                name="Check"
                size={16}
                className={cn(
                  "mt-1 shrink-0",
                  plan.highlighted ? "text-primary" : "text-muted-foreground",
                )}
              />

              <span>{feature}</span>
            </motion.li>
          ))}
        </ul>

        {/* CTA */}
        <motion.div whileTap={{ scale: 0.98 }}>
          <Button
            asChild
            variant={plan.highlighted ? "default" : plan.ctaVariant}
            className={cn(
              "mt-10 h-11 w-full rounded-xl text-sm font-medium",
              "transition-all duration-200",

              plan.highlighted
                ? "bg-primary text-primary-foreground hover:opacity-90"
                : "hover:border-primary-medium hover:bg-accent",
            )}
          >
            <Link href={plan.ctaHref}>{plan.ctaLabel}</Link>
          </Button>
        </motion.div>
      </div>
    </motion.article>
  );
}
