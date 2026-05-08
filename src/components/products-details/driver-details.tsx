import Image from "next/image";

export default function DriverDetails() {
    return (
        <main className="bg-[#F8FAFC] text-gray-900">

            {/* HERO */}
            <section className="overflow-hidden">
                <div className="mx-auto flex max-w-[1440px] flex-col items-center gap-14 px-6 py-14 sm:py-16 lg:flex-row lg:gap-16 lg:px-16 lg:py-24">

                    {/* LEFT CONTENT */}
                    <div className="flex-1 text-center lg:text-left">

                        <span className="inline-flex rounded-full bg-blue-100 px-4 py-1 text-sm font-semibold text-[#2563EB]">
                            Driver Tracking System
                        </span>

                        <h1 className="mt-5 text-4xl font-bold leading-[1.1] tracking-tight text-[#111827] sm:text-5xl lg:max-w-[580px] lg:text-[56px]">
                            Real-Time Driver Tracking for Smarter Deliveries
                        </h1>

                        <p className="mt-5 text-[16px] leading-7 text-gray-600 sm:text-lg lg:max-w-[520px]">
                            Track your drivers and deliveries with live updates and accuracy.
                        </p>

                        <button className="mt-7 rounded-2xl bg-[#2563EB] px-6 py-4 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition hover:bg-blue-700">
                            Request Demo →
                        </button>

                    </div>

                    {/* RIGHT IMAGE */}
                    <div className="flex flex-1 justify-center lg:justify-end">
                        <div className="relative w-full max-w-[420px] sm:max-w-[520px] lg:max-w-[620px]">

                            <Image
                                src="/product-details/driver/driver-hero.png"
                                alt="Driver Tracking Dashboard"
                                width={1200}
                                height={900}
                                className="h-auto w-full rounded-[24px] sm:rounded-[32px] object-contain shadow-2xl shadow-gray-300/40"
                                priority
                            />

                        </div>
                    </div>

                </div>
            </section>

            {/* FEATURES */}
            <section className="bg-white py-20 md:py-28">
                <div className="mx-auto max-w-[1440px] px-6 lg:px-16">

                    <div className="text-center">
                        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">
                            Key Features
                        </h2>
                    </div>

                    <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">

                        {[
                            {
                                icon: "/icons/pos/location.png",
                                title: "Live Tracking",
                                desc: "See exactly where your drivers are on the map in real time.",
                            },
                            {
                                icon: "/icons/driver/status.png",
                                title: "Delivery Status Updates",
                                desc: "Automatically log every step from dispatch to final drop- off.",
                            },
                            {
                                icon: "/icons/driver/route.png",
                                title: "Route Optimization",
                                desc: "Find the fastest paths to save time, fuel, and money.",
                            },
                            {
                                icon: "/icons/driver/bell.png",
                                title: "Real-Time Notifications",
                                desc: "Keep customers informed with automated SMS and alerts.",
                            },
                        ].map((feature, index) => (
                            <div
                                key={index}
                                className="rounded-3xl border border-gray-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl"
                            >
                                <div className="flex h-[48px] w-[48px] items-center justify-center rounded-xl">
                                    <Image
                                        src={feature.icon}
                                        alt={feature.title}
                                        width={48}
                                        height={48}
                                        className="object-contain"
                                    />
                                </div>

                                <h3 className="mt-4 text-[18px] font-semibold text-[#0A0A0A]">
                                    {feature.title}
                                </h3>

                                <p className="mt-2 text-[16px] leading-[26px] text-[#525252]">
                                    {feature.desc}
                                </p>
                            </div>
                        ))}

                    </div>
                </div>
            </section>

            {/* BIG IMAGE */}
            <section className="py-20 md:py-28">
                <div className="mx-auto max-w-[1440px] px-6 lg:px-16">
                    <div className="mx-auto max-w-[1150px]">
                        <Image
                            src="/product-details/driver/driver-overview.png"
                            alt="Driver Tracking Dashboard"
                            width={1600}
                            height={1100}
                            className="w-full rounded-[24px] sm:rounded-[36px] shadow-2xl shadow-gray-300/30"
                        />
                    </div>
                </div>
            </section>

            {/* WHO IT'S FOR */}
            <section className="bg-white py-20 md:py-28">
                <div className="mx-auto max-w-[1200px] px-6">

                    <div className="text-center">
                        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">
                            Who It&apos;s For
                        </h2>
                    </div>

                    <div className="mt-12 flex justify-center">
                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">

                            {[
                                {
                                    icon: "/icons/driver/restaurant.png",
                                    title: "Restaurants",
                                    desc: "Track deliveries in real time to ensure food arrives hot and on schedule.",
                                },
                                {
                                    icon: "/icons/driver/logistic.png",
                                    title: "Logistics Companies",
                                    desc: "Optimize driver routes and operations for entire fleets smoothly.",
                                },
                            ].map((item, index) => (
                                <div
                                    key={index}
                                    className="w-full max-w-[420px] rounded-3xl border border-gray-200 bg-white p-6 transition duration-300 hover:border-blue-200 hover:shadow-xl"
                                >
                                    <div className="flex h-[48px] w-[48px] items-center justify-center rounded-xl">
                                        <Image
                                            src={item.icon}
                                            alt={item.title}
                                            width={48}
                                            height={48}
                                            className="object-contain"
                                        />
                                    </div>

                                    <h3 className="mt-4 text-[18px] font-semibold text-[#0A0A0A]">
                                        {item.title}
                                    </h3>

                                    <p className="mt-2 text-[16px] leading-[26px] text-[#525252]">
                                        {item.desc}
                                    </p>
                                </div>
                            ))}

                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            {/* CTA */}
            <section className="px-6 py-16 sm:py-24">
                <div className="mx-auto max-w-5xl rounded-[32px] bg-gradient-to-br from-[#2563EB] to-[#1D4ED8] px-6 py-14 text-center text-white shadow-[0_20px_60px_rgba(37,99,235,0.25)] sm:px-8 sm:py-20">

                    <h2 className="mx-auto max-w-[760px] text-2xl font-bold leading-tight sm:text-3xl md:text-4xl">
                        Deliver Faster, Smarter, and With Full Visibility
                    </h2>

                    <p className="mx-auto mt-4 max-w-[650px] text-sm leading-6 text-[#DBEAFE] sm:text-base sm:leading-7 md:text-lg md:leading-8">
                        Empower your team with real-time driver tracking, optimized routes,
                        and instant delivery updates that improve efficiency and customer satisfaction.
                    </p>

                    <button className="mt-6 rounded-[14px] bg-white px-6 py-3 text-sm font-semibold text-[#2563EB] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl sm:mt-8">
                        Schedule a Demo
                    </button>

                </div>
            </section>

        </main>
    );
}