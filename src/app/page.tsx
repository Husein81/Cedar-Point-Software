import Hero from "@/components/home/hero";
import Solutions from "@/components/home/solutions";
import Industries from "@/components/home/industries";
import Features from "@/components/home/features";
import UseCases from "@/components/home/use-cases";

export default function Home() {
  return (
    <div className="min-h-[calc(100vh-4rem)] flex flex-col">
      <Hero />
      <Solutions />
      <Industries />
      <Features />
      <UseCases />
    </div>
  );
}
