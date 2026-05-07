import React from "react";
import { Wrench, Zap, TrendingUp, ShieldCheck } from "lucide-react";
import { features } from "./config";
import { Icon } from "../icon";

export default function Features() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 mb-4">
            Why Choose Cedar Point?
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            We combine industry expertise with cutting-edge technology to
            deliver unparalleled value.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-start">
              <div className="size-10 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <Icon name={feature.icon} className="size-5 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
