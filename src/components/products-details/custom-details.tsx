import Image from "next/image";

export default function CustomDetails() {
    return (
        <main className="bg-[#F8FAFC] text-gray-900">

            {/* HERO */}
            <section className="overflow-hidden">
                <div className="mx-auto flex max-w-[1440px] flex-col items-center gap-14 px-6 py-14 sm:py-16 lg:flex-row lg:gap-16 lg:px-16 lg:py-24">

                    {/* LEFT CONTENT */}
                    <div className="flex-1 text-center lg:text-left">

                        <span className="inline-flex rounded-full bg-blue-100 px-4 py-1 text-sm font-semibold text-[#2563EB]">
                            Custom Software Solutions
                        </span>

                        <h1 className="mt-5 text-4xl font-bold leading-[1.1] tracking-tight text-[#111827] sm:text-5xl lg:max-w-[580px] lg:text-[56px]">
                            Built Specifically for Your Business Needs
                        </h1>

                        <p className="mt-5 text-[16px] leading-7 text-gray-600 sm:text-lg lg:max-w-[520px]">
                            We design and develop tailored software to match your workflows.
                        </p>

                        <button className="mt-7 rounded-2xl bg-[#2563EB] px-6 py-4 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition hover:bg-blue-700">
                            Contact Us →
                        </button>

                    </div>

                    {/* RIGHT IMAGE */}
                    <div className="flex flex-1 justify-center lg:justify-end">
                        <div className="relative w-full max-w-[420px] sm:max-w-[520px] lg:max-w-[620px]">

                            <Image
                                src="/product-details/custom/custom-hero.png"
                                alt="Custom Software Solutions"
                                width={1200}
                                height={900}
                                className="h-auto w-full rounded-[24px] sm:rounded-[32px] object-contain shadow-2xl shadow-gray-300/40"
                                priority
                            />

                        </div>
                    </div>

                </div>
            </section>

            {/* INTRO SECTION */}
            <section className="bg-white py-20 md:py-28">
                <div className="mx-auto max-w-4xl px-6 text-center">

                    <span className="text-sm font-semibold uppercase tracking-[2px] text-[#2563EB]">
                        Why Custom Software
                    </span>

                    <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                        Software Tailored Around Your Workflow
                    </h2>

                    <p className="mx-auto mt-8 max-w-[850px] text-base leading-8 text-[#525252] sm:text-lg">
                        Every business is unique, and off-the-shelf software doesn&apos;t
                        always cut it. We specialize in building fully customized digital
                        solutions that align perfectly with your operational workflows,
                        helping you scale faster and work smarter.
                    </p>

                </div>
            </section>

            {/* FEATURES */}
            <section className="py-20 md:py-28">
                <div className="mx-auto max-w-[1440px] px-6 lg:px-16">

                    <div className="text-center">
                        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                            What We Can Build
                        </h2>
                    </div>

                    <div className="mx-auto mt-14 grid max-w-[1150px] grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">

                        {[
                            {
                                icon: "/icons/custom/system.png",
                                title: "Custom Business Systems",
                            },
                            {
                                icon: "/icons/custom/workflow.png",
                                title: "Workflow Automation Tools",
                            },
                            {
                                icon: "/icons/driver/logistic.png",
                                title: "Logistics & Tracking Tools",
                            },
                            {
                                icon: "/icons/custom/security.png",
                                title: "Security & Access Systems",
                            },
                        ].map((feature, index) => (
                            <div
                                key={index}
                                className="rounded-3xl border border-gray-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl"
                            >
                                <div className="flex h-[48px] w-[48px] items-center justify-center rounded-2xl">
                                    <Image
                                        src={feature.icon}
                                        alt={feature.title}
                                        width={48}
                                        height={48}
                                        className="object-contain"
                                    />
                                </div>

                                <h3 className="mt-4 text-[18px] font-semibold leading-7 text-[#0A0A0A]">
                                    {feature.title}
                                </h3>
                            </div>
                        ))}

                    </div>
                </div>
            </section>

            {/* HOW IT WORKS */}
            <section className="bg-[#F1F5F9] py-20 md:py-28">
                <div className="mx-auto max-w-[1200px] px-6">

                    <div className="text-center">
                        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                            How It Works
                        </h2>
                    </div>

                    {/* DESKTOP */}
                    <div className="relative mx-auto mt-20 hidden max-w-[980px] lg:block">

                        {/* LINE */}
                        <div className="absolute left-1/2 top-7 h-[2px] w-[78%] -translate-x-1/2 border-t border-dashed border-[#D4D4D8]" />

                        <div className="grid grid-cols-3 gap-8 text-center">

                            {[
                                {
                                    number: "1",
                                    title: "Understand your needs",
                                    desc: "We begin with a deep dive into your business operations to map out precise requirements.",
                                },
                                {
                                    number: "2",
                                    title: "Design your solution",
                                    desc: "Our team creates interactive wireframes and an architecture plan tailored to your goals.",
                                },
                                {
                                    number: "3",
                                    title: "Build and deliver",
                                    desc: "We develop, rigorously test, and deploy a seamless solution ready to scale with you.",
                                },
                            ].map((step, index) => (
                                <div key={index} className="relative flex flex-col items-center">

                                    <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full bg-[#E9F0FF] text-2xl font-bold text-[#2563EB] shadow-sm">
                                        {step.number}
                                    </div>

                                    <h3 className="mt-8 text-[22px] font-bold leading-tight text-[#111827]">
                                        {step.title}
                                    </h3>

                                    <p className="mt-4 max-w-[260px] text-[16px] leading-7 text-[#667085]">
                                        {step.desc}
                                    </p>

                                </div>
                            ))}

                        </div>
                    </div>

                    {/* MOBILE */}
                    <div className="mt-14 space-y-6 lg:hidden">

                        {[
                            {
                                number: "1",
                                title: "Understand your needs",
                                desc: "We begin with a deep dive into your business operations to map out precise requirements.",
                            },
                            {
                                number: "2",
                                title: "Design your solution",
                                desc: "Our team creates interactive wireframes and an architecture plan tailored to your goals.",
                            },
                            {
                                number: "3",
                                title: "Build and deliver",
                                desc: "We develop, rigorously test, and deploy a seamless solution ready to scale with you.",
                            },
                        ].map((step, index) => (
                            <div
                                key={index}
                                className="rounded-3xl border border-gray-200 bg-white p-8 text-center"
                            >

                                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#EFF6FF] text-2xl font-bold text-[#2563EB]">
                                    {step.number}
                                </div>

                                <h3 className="mt-6 text-2xl font-bold text-[#111827]">
                                    {step.title}
                                </h3>

                                <p className="mt-4 text-[16px] leading-7 text-[#667085]">
                                    {step.desc}
                                </p>

                            </div>
                        ))}

                    </div>

                </div>
            </section>

            {/* CTA */}
            <section className="px-6 py-16 sm:py-24">
                <div className="mx-auto max-w-5xl rounded-[32px] bg-gradient-to-br from-[#2563EB] to-[#1D4ED8] px-6 py-14 text-center text-white shadow-[0_20px_60px_rgba(37,99,235,0.25)] sm:px-8 sm:py-20">

                    <h2 className="mx-auto max-w-[760px] text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
                        Let&apos;s Build Software That Works for You
                    </h2>

                    <p className="mx-auto mt-5 max-w-[620px] text-sm leading-7 text-[#DBEAFE] sm:text-base md:text-lg md:leading-8">
                        Custom software solutions designed to simplify operations and help your business grow faster.
                    </p>

                    <button className="mt-8 rounded-[14px] bg-white px-7 py-4 text-sm font-semibold text-[#2563EB] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl">
                        Start Your Project
                    </button>

                </div>
            </section>
        </main>
    );
}