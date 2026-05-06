import Link from "next/link";
import { Hammer, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[65vh] py-24 px-4 text-center">
      <div className="relative mb-8">
        <div className="absolute inset-0 bg-primary/10 rounded-full blur-2xl animate-pulse" />
        <div className="relative bg-white p-6 rounded-2xl border border-slate-200 shadow-xl">
          <Hammer className="size-12 text-primary animate-bounce" />
        </div>
      </div>

      <h1 className="text-4xl font-bold text-slate-900 mb-4">
        Under Construction
      </h1>
      <p className="text-lg text-slate-600 mb-10 max-w-md">
        We're working hard to bring you something amazing. This page is
        currently being built and will be ready soon!
      </p>

      <div className="flex flex-col sm:flex-row gap-4">
        <Button asChild size="lg" className="px-8 font-semibold">
          <Link href="/">
            <ArrowLeft className="mr-2 size-4" />
            Back to Home
          </Link>
        </Button>
      </div>
    </div>
  );
}
