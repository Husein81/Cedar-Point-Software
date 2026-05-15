export type PricingPlan = {
  id: string;
  name: string;
  description: string;
  price: string;
  priceSubtitle: string;
  priceClassName?: string;
  features: string[];
  ctaLabel: string;
  ctaHref: string;
  ctaVariant: "default" | "outline";
  highlighted?: boolean;
  badge?: string;
};

export const pricingPlans: PricingPlan[] = [
  {
    id: "starter",
    name: "Starter",
    description:
      "Ideal for small businesses and startups just getting off the ground.",
    price: "$49",
    priceSubtitle: "Starting from / month",
    features: [
      "Basic POS system",
      "Limited inventory tracking",
      "Email support",
    ],
    ctaLabel: "Get Started",
    ctaHref: "/contact",
    ctaVariant: "outline",
  },
  {
    id: "business",
    name: "Business",
    description:
      "Best for growing businesses looking for full control and integration.",
    price: "$129",
    priceSubtitle: "Starting from / month",
    features: [
      "Full POS system functionality",
      "Advanced inventory management",
      "Digital menu support",
      "Priority 24/7 support",
    ],
    ctaLabel: "Get Started",
    ctaHref: "/contact",
    ctaVariant: "default",
    highlighted: true,
    badge: "Most Popular",
  },
  {
    id: "custom",
    name: "Custom",
    description:
      "For advanced needs, complex workflows, and tailored solutions.",
    price: "Custom Pricing",
    priceSubtitle: "Contact for quote",
    priceClassName: "text-[28px] leading-snug pb-1",
    features: [
      "Custom software development",
      "Driver tracking system",
      "Advanced API integrations",
      "Dedicated account manager",
    ],
    ctaLabel: "Contact Us",
    ctaHref: "/contact",
    ctaVariant: "outline",
  },
];
