"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function ProductHero() {
    return (
        <section className="relative overflow-hidden bg-background px-6 py-20 text-center sm:py-24">

            <div className="mx-auto max-w-3xl">

                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="
                        inline-flex items-center
                        rounded-full border border-primary/20
                        bg-primary/10 px-4 py-2
                        text-sm font-medium text-primary
                    "
                >
                    Modern Business Solutions
                </motion.div>

                {/* Heading */}
                <motion.h1
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.05 }}
                    className="
                        mt-6 text-4xl font-bold tracking-tight text-foreground
                        leading-tight sm:text-5xl
                    "
                >
                    Powerful Software Solutions
                    <br />
                    for Modern Businesses
                </motion.h1>

                {/* Description */}
                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="
                        mx-auto mt-6 max-w-2xl
                        text-base leading-7 text-muted-foreground
                        sm:text-lg
                    "
                >
                    From POS systems to custom-built platforms, we provide everything
                    your business needs to operate, scale, and grow.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.15 }}
                    className="mt-10 flex flex-wrap items-center justify-center gap-4"
                >

                    <Button
                        asChild
                        className="
                            h-12 px-8
                            rounded-xl
                            text-sm font-semibold
                        "
                    >
                        <Link href="#products">
                            Explore Solutions
                        </Link>
                    </Button>

                    <Button
                        asChild
                        variant="outline"
                        className="
                            h-12 px-8
                            rounded-xl
                            text-sm font-semibold
                        "
                    >
                        <Link href="#contact">
                            Contact Sales
                        </Link>
                    </Button>

                </motion.div>

            </div>
        </section>
    );
}