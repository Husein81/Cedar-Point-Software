import Image from "next/image";

export default function MenuDetails() {
    return (
        <main className="bg-[#F8FAFC] text-gray-900">

            {/* HERO */}
            <section className="overflow-hidden">
                <div className="mx-auto flex max-w-[1440px] flex-col items-center gap-14 px-6 py-14 sm:py-16 lg:flex-row lg:gap-16 lg:px-16 lg:py-24">

                    {/* LEFT CONTENT */}
                    <div className="flex-1 text-center lg:text-left">

                        <span className="inline-flex rounded-full bg-blue-100 px-4 py-1 text-sm font-semibold text-[#2563EB]">
                            Digital Menu
                        </span>

                        <h1 className="mt-5 text-4xl font-bold leading-[1.1] tracking-tight text-[#111827] sm:text-5xl lg:max-w-[580px] lg:text-[56px]">
                            Modern Digital Menus for Restaurants & Cafés
                        </h1>

                        <p className="mt-5 text-[16px] leading-7 text-gray-600 sm:text-lg lg:max-w-[520px]">
                            Deliver a seamless ordering experience with QR-based menus.
                        </p>

                        <button className="mt-7 rounded-2xl bg-[#2563EB] px-6 py-4 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition hover:bg-blue-700">
                            Request Demo →
                        </button>

                    </div>

                    {/* RIGHT IMAGE */}
                    <div className="flex flex-1 justify-center lg:justify-end">
                        <div className="relative w-full max-w-[240px] sm:max-w-[300px] lg:max-w-[380px]">

                            <Image
                                src="/product-details/menu/menu.png"
                                alt="Digital Menu Preview"
                                width={420}
                                height={760}
                                className="h-auto w-full rounded-[24px] object-contain shadow-2xl shadow-gray-300/40"
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
                                icon: "/icons/menu/QR.png",
                                title: "QR Code Access",
                                desc: "Customers scan and order instantly.",
                            },
                            {
                                icon: "/icons/menu/pen.png",
                                title: "Easy Menu Updates",
                                desc: "Edit items anytime in seconds.",
                            },
                            {
                                icon: "/icons/menu/mobile.png",
                                title: "Mobile-Friendly Design",
                                desc: "Looks great on every device.",
                            },
                            {
                                icon: "/icons/pos/lightning.png",
                                title: "Real-Time Changes",
                                desc: "Updates appear instantly for guests.",
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
            {/* BIG IMAGE */}
            <section className="py-20 md:py-28">
                <div className="mx-auto max-w-[1440px] px-6 lg:px-16">

                    <div className="mx-auto flex justify-center">
                        <div className="w-full max-w-[900px] lg:max-w-[1000px]">
                            <Image
                                src="/product-details/menu/menu-image.png"
                                alt="Menu Overview"
                                width={1000}
                                height={700}
                                className="h-auto w-full rounded-[24px] sm:rounded-[36px] object-contain shadow-2xl shadow-gray-300/30"
                            />
                        </div>
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
                                    icon: "/icons/menu/restaurant.png",
                                    title: "Restaurants",
                                    desc: "Simplify ordering and reduce wait time",
                                },
                                {
                                    icon: "/icons/menu/coffee.png",
                                    title: "Coffee Shops",
                                    desc: "Quick and modern customer experience",
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
            <section className="px-6 py-16 sm:py-24">
                <div className="mx-auto max-w-5xl rounded-[32px] bg-gradient-to-br from-[#2563EB] to-[#1D4ED8] px-6 sm:px-8 py-14 sm:py-20 text-center text-white shadow-[0_20px_60px_rgba(37,99,235,0.25)]">

                    <h2 className="mx-auto max-w-[720px] text-2xl font-bold leading-tight sm:text-3xl md:text-4xl">
                        Upgrade your customer experience today
                    </h2>

                    <p className="mx-auto mt-4 max-w-[620px] text-sm leading-6 text-[#DBEAFE] sm:text-base sm:leading-7 md:text-lg md:leading-8">
                        Join thousands of restaurants delivering a better dining experience.
                    </p>

                    <button className="mt-6 rounded-[14px] bg-white px-6 py-3 text-sm font-semibold text-[#2563EB] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl sm:mt-8">
                        Contact Us
                    </button>

                </div>
            </section>

        </main>
    );
}