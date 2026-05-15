import { pricingPlans } from "@/lib/pricing/plans";
import PricingCard from "./pricing-card";

export default function PricingGrid() {
  return (
    <section
      className="relative px-6 pb-28 pt-8 lg:pb-36"
      aria-labelledby="pricing-plans-heading"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-background blur-3xl" />
      </div>

      <h2 id="pricing-plans-heading" className="sr-only">
        Pricing plans
      </h2>

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-stretch gap-6 py-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-10">
        {pricingPlans.map((plan) => (
          <PricingCard key={plan.id} plan={plan} />
        ))}
      </div>
    </section>
  );
}
