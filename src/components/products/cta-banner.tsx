export default function CtaBanner() {
    return (
        <section className="px-6 py-20 sm:py-24">
            <div className="mx-auto max-w-5xl rounded-[32px] bg-gradient-to-br from-[#2563EB] to-[#1D4ED8] px-6 sm:px-8 py-16 sm:py-20 text-center text-white shadow-[0_20px_60px_rgba(37,99,235,0.25)]">

                {/* Heading */}
                <h2 className="mx-auto max-w-[720px] text-[30px] sm:text-[36px] font-bold leading-[38px] sm:leading-[44px] tracking-[-0.72px] opacity-0 translate-y-3 animate-[fadeInUp_0.7s_ease-out_forwards]">
                    Need a custom solution for your business?
                </h2>

                {/* Subheading */}
                <p className="mx-auto mt-4 sm:mt-5 max-w-[620px] text-[16px] sm:text-[18px] leading-[24px] sm:leading-[30px] text-[#DBEAFE] opacity-0 translate-y-3 animate-[fadeInUp_0.7s_ease-out_0.15s_forwards]">
                    We build tailored software systems designed specifically for your
                    workflows, operations, and long-term growth.
                </p>

                {/* Button */}
                <button className="mt-6 sm:mt-8 rounded-[14px] bg-white px-6 py-3 text-[14px] sm:text-[15px] font-semibold text-[#2563EB] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] opacity-0 translate-y-3 animate-[fadeInUp_0.7s_ease-out_0.3s_forwards]">
                    Contact Us
                </button>
            </div>

        </section>
    );
}