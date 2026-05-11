"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ctaConfigs } from "./config";
import { Activity } from "react";

export default function CTA() {
  const pathname = usePathname();
  const config = ctaConfigs[pathname as keyof typeof ctaConfigs];
  console.log("config", config);
  if (!config || pathname === "/contact") return null;

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          key={pathname}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative bg-primary rounded-3xl overflow-hidden shadow-2xl shadow-primary/20"
        >
          {/* Decorative background elements */}
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 size-96 bg-white/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 size-96 bg-white/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative px-8 py-16 lg:py-20 flex flex-col items-center text-center">
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-extrabold text-white mb-6 leading-tight max-w-2xl">
              {config.title}
            </h2>
            <Activity mode={config.description ? "visible" : "hidden"}>
              <p className="text-primary-foreground/90 text-lg lg:text-xl max-w-2xl mb-10 leading-relaxed">
                {config.description}
              </p>
            </Activity>
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="px-8 h-14 text-lg font-bold rounded-xl shadow-lg bg-white text-primary hover:bg-slate-50 transition-all duration-300 group"
            >
              <Link href={config.buttonHref} className="flex items-center">
                {config.buttonText}
                <ArrowRight className="ml-2 size-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
