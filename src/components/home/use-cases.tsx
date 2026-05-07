"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Icon } from "../icon";
import { useCases } from "./config";

export default function UseCases() {
  return (
    <section className="py-24 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-24 lg:gap-32">
          {useCases.map((useCase, index) => (
            <div
              key={index}
              className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-24 ${
                useCase.reverse ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Content */}
              <motion.div
                initial={{ opacity: 0, x: useCase.reverse ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="flex-1 w-full max-w-xl"
              >
                <span className="text-xs font-bold text-primary uppercase tracking-widest mb-4 block">
                  {useCase.badge}
                </span>
                <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 mb-6">
                  {useCase.title}
                </h2>
                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                  {useCase.description}
                </p>
                <ul className="space-y-4">
                  {useCase.features.map((feature, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + i * 0.1 }}
                      className="flex items-center gap-3 text-slate-700 font-medium"
                    >
                      <Icon
                        name="CircleCheck"
                        className="size-5 text-primary shrink-0"
                      />
                      {feature}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              {/* Image */}
              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.9,
                  rotate: useCase.reverse ? -2 : 2,
                }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="flex-1 w-full"
              >
                <div className="relative aspect-4/3 rounded-3xl overflow-hidden shadow-2xl shadow-slate-200 border border-slate-200 group">
                  <Image
                    src={useCase.image}
                    alt={useCase.title}
                    fill
                    loading="eager"
                    sizes={"120"}
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
