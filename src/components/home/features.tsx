"use client";

import { motion } from "framer-motion";
import { Icon } from "../icon";
import { features } from "./config";

export default function Features() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 mb-4">
            Why Choose Cedar Point?
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            We combine industry expertise with cutting-edge technology to
            deliver unparalleled value.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, x: -20 },
                show: { opacity: 1, x: 0, transition: { duration: 0.6 } },
              }}
              className="flex flex-col items-start"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
                className="size-10 bg-primary/10 rounded-lg flex items-center justify-center mb-6"
              >
                <Icon name={feature.icon} className="size-5 text-primary" />
              </motion.div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
