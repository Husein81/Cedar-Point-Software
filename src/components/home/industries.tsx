import React from "react";
import { UtensilsCrossed, Coffee, ShoppingBag, Truck } from "lucide-react";
import { industries } from "./config";
import { Icon } from "../icon";

export default function Industries() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 mb-4">
          Built for Your Industry
        </h2>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-16">
          We understand that different businesses have different needs. Our
          software adapts to you.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="bg-white p-10 rounded-xl shadow-sm border border-slate-100 flex flex-col items-center group hover:shadow-md transition-all duration-300"
            >
              <div className="size-16 bg-primary rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Icon name={industry.icon} className="size-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">
                {industry.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
