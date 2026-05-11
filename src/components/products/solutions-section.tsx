import Image from "next/image";
import { solutions } from "@/lib/solutions";

export default function SolutionsSection() {
  return (
    <section className="bg-[#F7FAFF] px-6 py-24">
      <div className="mx-auto max-w-[1180px]">
        {/* Heading */}
        <div className="mx-auto max-w-[760px] text-center">
          <h2 className="text-[36px] font-bold tracking-[-0.72px] text-[#0F172A]">
            Solutions Tailored to Your Business
          </h2>

          <p className="mt-4 text-[18px] leading-[30px] text-[#667085]">
            Our integrated modules combine to form the ultimate operating
            system for your industry.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-16 flex flex-wrap items-stretch justify-center gap-6">
          {solutions.map((solution) => (
            <div
              key={solution.title}
              className="w-[372px] rounded-[24px] border border-[#E5E7EB] bg-white p-8 transition-all duration-300 hover:border-[#2563EB] hover:shadow-[0_10px_30px_rgba(37,99,235,0.08)]"
            >
              {/* Icon */}
              <div className="flex h-[56px] w-[56px] items-center justify-center rounded-[16px]">
                <Image
                  src={solution.icon}
                  alt={solution.title}
                  width={56}
                  height={56}
                />
              </div>

              {/* Title */}
              <h3 className="mt-6 text-[20px] font-semibold leading-[30px] text-[#0F172A]">
                {solution.title}
              </h3>

              {/* Description */}
              <p className="mt-3 text-[15px] leading-[24px] text-[#667085]">
                {solution.description}
              </p>

              {/* Tags */}
              <div className="mt-6 flex flex-wrap gap-2">
                {solution.products.map((product) => (
                  <span
                    key={product}
                    className="flex h-[33.5px] items-center rounded-[12px] border border-[#D0D5DD] bg-[#F9FAFB] px-3 text-[13px] font-medium text-[#344054] transition-colors duration-200 hover:border-[#BFDBFE] hover:bg-[#EFF6FF] hover:text-[#2563EB]"
                  >
                    {product}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
