"use client";

import { motion } from "framer-motion";
import { Icon } from "../icon";
import { industries } from "./config";

export default function Industries() {
  return (
    <section className="py-24 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl lg:text-4xl font-extrabold text-slate-900 mb-4"
        >
          Built for Your Industry
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-lg text-slate-600 max-w-2xl mx-auto mb-16"
        >
          We understand that different businesses have different needs. Our
          software adapts to you.
        </motion.p>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, scale: 0.9 },
                show: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
              }}
              whileHover={{ 
                y: -10, 
                backgroundColor: "rgba(255, 255, 255, 1)",
                transition: { duration: 0.3 } 
              }}
              className="bg-white p-10 rounded-xl shadow-sm border border-slate-100 flex flex-col items-center group transition-all duration-300"
            >
              <div className="size-16 bg-primary rounded-full flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform duration-300">
                <Icon name={industry.icon} className="size-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">
                {industry.name}
              </h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
