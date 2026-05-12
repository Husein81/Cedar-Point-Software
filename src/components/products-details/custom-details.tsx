"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { Icon } from "@/components/icon";

const fadeUp: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: (i: number = 0) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.08,
            duration: 0.6,
            ease: "easeOut",
        },
    }),
};

export default function CustomDetails() {
    return (
        <main className="bg-page text-foreground">

            {/* HERO */}
            <section className="overflow-hidden">
                <div className="mx-auto flex max-w-[1440px] flex-col items-center gap-14 px-6 py-14 sm:py-16 lg:flex-row lg:gap-16 lg:px-16 lg:py-24">

                    {/* LEFT CONTENT */}
                    <motion.div
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, margin: "-100px" }}
                        className="flex-1 text-center lg:text-left"
                    >

                        <motion.span
                            variants={fadeUp}
                            className="inline-flex rounded-full bg-primary/10 px-4 py-1 text-sm font-semibold text-primary"
                        >
                            Custom Software Solutions
                        </motion.span>

                        <motion.h1
                            variants={fadeUp}
                            custom={1}
                            className="mt-5 text-4xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-5xl lg:max-w-[580px] lg:text-[56px]"
                        >
                            Built Specifically for Your Business Needs
                        </motion.h1>

                        <motion.p
                            variants={fadeUp}
                            custom={2}
                            className="mt-5 text-[16px] leading-7 text-muted-foreground sm:text-lg lg:max-w-[520px]"
                        >
                            We design and develop tailored software to match your workflows.
                        </motion.p>

                        <motion.div variants={fadeUp} custom={3}>
                            <Link
                                href="/contact"
                                className="mt-7 inline-block rounded-2xl bg-primary px-6 py-4 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition hover:bg-primary/90"
                            >
                                Contact Us →
                            </Link>
                        </motion.div>

                    </motion.div>

                    {/* RIGHT IMAGE */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, x: 30 }}
                        whileInView={{ opacity: 1, scale: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.7 }}
                        className="flex flex-1 justify-center lg:justify-end"
                    >
                        <div className="relative w-full max-w-[420px] sm:max-w-[520px] lg:max-w-[620px]">

                            <Image
                                src="/product-details/custom/custom-hero.png"
                                alt="Custom Software Solutions"
                                width={1200}
                                height={900}
                                className="h-auto w-full rounded-[24px] sm:rounded-[32px] object-contain shadow-2xl shadow-black/10 dark:shadow-black/40"
                                priority
                            />

                        </div>
                    </motion.div>

                </div>
            </section>

            {/* INTRO SECTION */}
            <section className="bg-background py-20 md:py-28">
                <div className="mx-auto max-w-4xl px-6 text-center">

                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-sm font-semibold uppercase tracking-[2px] text-primary"
                    >
                        Why Custom Software
                    </motion.span>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl"
                    >
                        Software Tailored Around Your Workflow
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 25 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mx-auto mt-8 max-w-[850px] text-base leading-8 text-muted-foreground sm:text-lg"
                    >
                        Every business is unique, and off-the-shelf software doesn&apos;t
                        always cut it. We specialize in building fully customized digital
                        solutions that align perfectly with your operational workflows,
                        helping you scale faster and work smarter.
                    </motion.p>

                </div>
            </section>

            {/* FEATURES */}
            <section className="py-20 md:py-28">
                <div className="mx-auto max-w-[1440px] px-6 lg:px-16">

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center"
                    >
                        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                            What We Can Build
                        </h2>
                    </motion.div>

                    <div className="mx-auto mt-14 grid max-w-[1150px] grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">

                        {[
                            { icon: "Building2", title: "Custom Business Systems" },
                            { icon: "Workflow", title: "Workflow Automation Tools" },
                            { icon: "Truck", title: "Logistics & Tracking Tools" },
                            { icon: "ShieldCheck", title: "Security & Access Systems" },
                        ].map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 25 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.08 }}
                                whileHover={{ y: -6 }}
                                className="rounded-3xl border border-border bg-card p-6 transition hover:border-primary/30 hover:shadow-xl"
                            >
                                <div className="flex h-[48px] w-[48px] items-center justify-center rounded-[12px] bg-primary/10">
                                    <Icon name={feature.icon} className="text-primary" size={22} />
                                </div>

                                <h3 className="mt-4 text-[18px] font-semibold text-card-foreground">
                                    {feature.title}
                                </h3>
                            </motion.div>
                        ))}

                    </div>
                </div>
            </section>

            {/* HOW IT WORKS */}
            <section className="py-20 md:py-28">
                <div className="mx-auto max-w-[1200px] px-6">

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center"
                    >
                        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                            How It Works
                        </h2>
                    </motion.div>

                    <div className="relative mx-auto mt-20 hidden max-w-[980px] lg:block">

                        <div className="absolute left-1/2 top-7 z-0 h-[2px] w-[78%] -translate-x-1/2 border-t border-dashed border-border" />

                        <div className="relative z-10 grid grid-cols-3 gap-8 text-center">

                            {[
                                {
                                    number: "1",
                                    title: "Understand your needs",
                                    desc: "We begin with a deep dive into your business operations to map out precise requirements.",
                                },
                                {
                                    number: "2",
                                    title: "Design your solution",
                                    desc: "Our team creates interactive wireframes and an architecture plan tailored to your goals.",
                                },
                                {
                                    number: "3",
                                    title: "Build and deliver",
                                    desc: "We develop, rigorously test, and deploy a seamless solution ready to scale with you.",
                                },
                            ].map((step, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 25 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="relative z-10 flex flex-col items-center bg-transparent"
                                >

                                    <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-2xl font-bold text-primary shadow-sm">
                                        {step.number}
                                    </div>

                                    <h3 className="mt-8 text-[22px] font-bold text-foreground">
                                        {step.title}
                                    </h3>

                                    <p className="mt-4 max-w-[260px] text-[16px] leading-7 text-muted-foreground">
                                        {step.desc}
                                    </p>

                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* MOBILE */}
                    <div className="mt-14 space-y-6 lg:hidden">

                        {[
                            {
                                number: "1",
                                title: "Understand your needs",
                                desc: "We begin with a deep dive into your business operations to map out precise requirements.",
                            },
                            {
                                number: "2",
                                title: "Design your solution",
                                desc: "Our team creates interactive wireframes and an architecture plan tailored to your goals.",
                            },
                            {
                                number: "3",
                                title: "Build and deliver",
                                desc: "We develop, rigorously test, and deploy a seamless solution ready to scale with you.",
                            },
                        ].map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 25 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="rounded-3xl border border-border bg-card p-8 text-center"
                            >

                                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-2xl font-bold text-primary">
                                    {step.number}
                                </div>

                                <h3 className="mt-6 text-2xl font-bold text-foreground">
                                    {step.title}
                                </h3>

                                <p className="mt-4 text-muted-foreground">
                                    {step.desc}
                                </p>

                            </motion.div>
                        ))}

                    </div>

                </div>
            </section>

            {/* CTA */}
            <section className="px-6 py-16 sm:py-24">
                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="mx-auto max-w-5xl rounded-[32px] bg-gradient-to-br from-primary to-primary/90 px-6 py-14 text-center text-primary-foreground shadow-2xl shadow-primary/20 sm:px-8 sm:py-20"
                >

                    <h2 className="mx-auto max-w-[760px] text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
                        Let&apos;s Build Software That Works for You
                    </h2>

                    <p className="mx-auto mt-5 max-w-[620px] text-sm leading-7 text-primary-foreground/80 sm:text-base md:text-lg md:leading-8">
                        Custom software solutions designed to simplify operations and help your business grow faster.
                    </p>

                    <Link
                        href="/contact"
                        className="mt-8 inline-block rounded-[14px] bg-background px-7 py-4 text-sm font-semibold text-primary transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                    >
                        Start Your Project
                    </Link>

                </motion.div>
            </section>

        </main>
    );
}