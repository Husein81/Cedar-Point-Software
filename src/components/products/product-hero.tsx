import Link from "next/dist/client/link";

export default function ProductHero() {
    return (
        <section className="px-6 py-20 sm:py-24 text-center">
            <div className="mx-auto max-w-[600px]">
                {/* Heading */}
                <h1 className="text-[34px] font-bold leading-[44px] tracking-[-1px] text-[#111827] sm:text-[40px] sm:leading-[61.6px] sm:tracking-[-1.12px]">
                    Powerful Software Solutions <br />
                    for Modern Businesses
                </h1>

                {/* Description */}
                <p className="mt-5 text-[15px] leading-7 text-[#667085] sm:mt-6 sm:text-[16px]">
                    From POS systems to custom-built platforms, we provide everything
                    your business needs to operate, scale, and grow.
                </p>

                {/* CTA Buttons */}
                <div className="mt-8 flex flex-row items-center justify-center gap-3 sm:mt-10 sm:gap-4">
                    <Link
                        href="#products"
                        className="inline-flex h-[48px] items-center justify-center rounded-[14px] bg-[#2563EB] px-5 text-[14px] font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#1D4ED8] hover:shadow-lg sm:px-6 sm:text-[15px]"
                    >
                        Explore Solutions
                    </Link>
                    <Link
                        href="#contact"
                        className="inline-flex h-[48px] items-center justify-center rounded-[14px] border border-[#D1D5DB] bg-white px-5 text-[14px] font-semibold text-[#111827] transition-all duration-300 hover:border-[#2563EB] hover:text-[#2563EB] hover:shadow-md sm:px-6 sm:text-[15px]"
                    >
                        Contact Sales
                    </Link>
                </div>
            </div>
        </section>
    );
}
