"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "../icon";

interface ProductProps {
    product: {
        id: string;
        title: string;
        description: string;
        image: string;
        features: string[];
    };
    reverse?: boolean;
    index?: number;
}

export default function ProductSection({
    product,
    reverse,
    index = 0,
}: ProductProps) {
    const bg = index % 2 === 0 ? "bg-slate-50" : "bg-white";

    return (
        <section id="products" className={`py-24 overflow-hidden ${bg}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div
                    className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-24 ${
                        reverse ? "lg:flex-row-reverse" : ""
                    }`}
                >

                    {/* TEXT */}
                    <motion.div
                        initial={{ opacity: 0, x: reverse ? 50 : -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        className="flex-1 w-full max-w-xl"
                    >

                        {/* PRODUCT NUMBER */}
                        <span className="text-xs font-bold text-primary uppercase tracking-widest mb-4 block">
                            Product {String(index + 1).padStart(2, "0")}
                        </span>

                        {/* TITLE */}
                        <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 mb-6">
                            {product.title}
                        </h2>

                        {/* DESCRIPTION */}
                        <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                            {product.description}
                        </p>

                        {/* FEATURES */}
                        <ul className="space-y-4">
                            {product.features.map((feature, i) => (
                                <motion.li
                                    key={feature}
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.3 + i * 0.1 }}
                                    className="flex items-center gap-3 text-slate-700 font-medium"
                                >
                                    {/* ICON CHECK */}
                                    <Icon
                                        name="CircleCheck"
                                        className="size-5 text-primary shrink-0"
                                    />

                                    <span className="text-[15px] leading-6 text-slate-700">
                                        {feature}
                                    </span>
                                </motion.li>
                            ))}
                        </ul>

                        {/* BUTTON */}
                        <Link
                            href={`/products/${product.id}`}
                            className="mt-8 inline-flex items-center justify-center rounded-[14px] bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:-translate-y-0.5 hover:opacity-90 hover:shadow-lg"
                        >
                            Learn More
                        </Link>

                    </motion.div>

                    {/* IMAGE */}
                    <motion.div
                        initial={{
                            opacity: 0,
                            scale: 0.92,
                            rotate: reverse ? -2 : 2,
                        }}
                        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="flex-1 w-full"
                    >
                        <div className="relative overflow-hidden rounded-3xl shadow-2xl shadow-slate-200 border border-slate-200 group">

                            <Image
                                src={product.image}
                                alt={product.title}
                                width={600}
                                height={420}
                                className="h-auto w-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />

                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}