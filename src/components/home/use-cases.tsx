import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
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
              <div className="flex-1 w-full max-w-xl">
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
                    <li
                      key={i}
                      className="flex items-center gap-3 text-slate-700 font-medium"
                    >
                      <CheckCircle2 className="size-5 text-primary shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Image */}
              <div className="flex-1 w-full">
                <div className="relative aspect-4/3 rounded-3xl overflow-hidden shadow-2xl shadow-slate-200 border border-slate-200">
                  <Image
                    src={useCase.image}
                    alt={useCase.title}
                    fill
                    sizes="120"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
