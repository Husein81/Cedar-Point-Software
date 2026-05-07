import React from "react";
import { CreditCard, Boxes, BookOpen, Navigation, Code2 } from "lucide-react";
import { Icon } from "../icon";
import { solutions } from "./config";

export default function Solutions() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 mb-4">
            Our Solutions
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Comprehensive tools designed to streamline your operations, improve
            customer experience, and boost your bottom line.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((item, index) => (
            <div
              key={index}
              className="p-8 bg-white border border-slate-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="size-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <Icon name={item.icon} className="size-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                {item.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
