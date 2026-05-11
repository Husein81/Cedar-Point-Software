"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function CtaBanner() {
    return (
        <section className="px-6 py-20 sm:py-24">
            <motion.div
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="
                    mx-auto max-w-5xl rounded-3xl
                    bg-gradient-to-br from-primary to-primary/80
                    px-6 py-16 text-center text-white
                    shadow-2xl
                    sm:px-8 sm:py-20
                "
            >
                {/* Heading */}
                <motion.h2
                    initial={{ opacity: 0, y: 4 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="
                        mx-auto max-w-3xl
                        text-3xl font-bold leading-tight tracking-tight
                        sm:text-4xl
                    "
                >
                    Need a custom solution for your business?
                </motion.h2>

                {/* Subheading */}
                <motion.p
                    initial={{ opacity: 0, y: 4 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="
                        mx-auto mt-4 max-w-2xl
                        text-base leading-relaxed text-white/80
                        sm:mt-5 sm:text-lg
                    "
                >
                    We build tailored software systems designed specifically for your
                    workflows, operations, and long-term growth.
                </motion.p>

                {/* Button */}
                <motion.div
                    initial={{ opacity: 0, y: 4 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <Link
                        href="/contact"
                        className="
                            mt-6 inline-flex items-center justify-center
                            rounded-xl bg-white px-6 py-3
                            text-sm font-semibold text-primary
                            transition-all duration-300
                            hover:-translate-y-1 hover:shadow-lg
                            active:scale-95
                            sm:mt-8 sm:text-base
                        "
                    >
                        Contact Us
                    </Link>
                </motion.div>
            </motion.div>
        </section>
    );
}