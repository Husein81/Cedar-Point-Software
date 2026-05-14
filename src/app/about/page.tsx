import type { Metadata } from "next";
import AboutHero from "@/components/about/about-hero";
import AboutMission from "@/components/about/about-mission";
import AboutValues from "@/components/about/about-values";
import AboutWho from "@/components/about/about-who";

export const metadata: Metadata = {
  title: "About Us | Cedar Point Software",
  description:
    "Cedar Point Software builds practical digital tools for restaurants, retail, coffee shops, and logistics—so you can operate smarter and grow with confidence.",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      <AboutHero />
      <AboutWho />
      <AboutValues />
      <AboutMission />
    </div>
  );
}
