export type CTAContent = {
  title: string;
  description?: string;
  buttonText: string;
  buttonHref: string;
};

export const ctaConfigs: Record<string, CTAContent> = {
  "/": {
    title: "Ready to transform your business?",
    description:
      "Join thousands of retail businesses and restaurants that trust Cedar Point Software to power their daily operations.",
    buttonText: "Get Started",
    buttonHref: "/contact",
  },
  "/products": {
    title: "Need a custom solution for your business?",
    description:
      "We build tailored software systems designed specifically for your workflows, operations, and long-term growth.",
    buttonText: "Contact Us",
    buttonHref: "/contact",
  },
};
