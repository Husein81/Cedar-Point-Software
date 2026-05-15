import type { Metadata } from "next";

import PricingFaq from "@/components/pricing/pricing-faq";
import PricingFlexible from "@/components/pricing/pricing-flexible";
import PricingGrid from "@/components/pricing/pricing-grid";
import PricingHero from "@/components/pricing/pricing-hero";

export const metadata: Metadata = {
  title: "Pricing | Cedar Point Software",
  description:
    "Simple, flexible pricing for POS, inventory, and custom software. Choose a plan that fits your business or request a tailored solution.",
};

export default function PricingPage() {
  return (
    <div className="bg-page">
      <PricingHero />
      <PricingGrid />
      <PricingFlexible />
      <PricingFaq />
    </div>
  );
}
