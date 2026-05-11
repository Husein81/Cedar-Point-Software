import Image from "next/image";
import Link from "next/link";

interface ProductProps {
    product: {
        id: string;
        title: string;
        description: string;
        image: string;
        features: string[];
    };
    reverse?: boolean;
    index?: number;
}

export default function ProductSection({
    product,
    reverse,
    index = 0,
}: ProductProps) {
    const bg = index % 2 === 0 ? "bg-[#F1F5F9]" : "bg-[#F7FAFF]";

    return (
        <section
            className={`${bg} border-y border-white/40 py-16 sm:py-20 transition-colors duration-500`}
        >
            <div
                className={`mx-auto flex max-w-6xl flex-col gap-12 px-6 lg:flex-row ${reverse ? "lg:flex-row-reverse" : ""}`}
            >
                {/* TEXT */}
                <div className="flex-1">
                    {/* Product Number */}
                    <span className="text-[13px] font-semibold uppercase tracking-[1.5px] text-[#2563EB]">
                        Product {String(index + 1).padStart(2, "0")}
                    </span>

                    {/* Title */}
                    <h2 className="mt-2 text-[28px] font-bold leading-[36px] tracking-[-0.64px] text-[#0F172A] sm:text-[32px] sm:leading-[42px]">
                        {product.title}
                    </h2>

                    {/* Description */}
                    <p className="mt-3 text-[15px] leading-6 text-[#667085] sm:text-[16px]">
                        {product.description}
                    </p>

                    {/* Features */}
                    <ul className="mt-5 space-y-2.5">
                        {product.features.map((feature) => (
                            <li key={feature} className="flex items-start gap-3">
                                <Image
                                    src="/icons/check-blue.png"
                                    alt="check"
                                    width={18}
                                    height={18}
                                    className="mt-0.5 shrink-0"
                                />

                                <span className="text-[14.5px] leading-6 text-[#344054]">
                                    {feature}
                                </span>
                            </li>
                        ))}
                    </ul>

                    {/* Button */}
                    <Link
                        href={`/products/${product.id}`}
                        className="mt-6 inline-block rounded-[12px] bg-[#2563EB] px-5 py-2.5 text-[14.5px] font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#1D4ED8] hover:shadow-lg"
                    >
                        Learn More
                    </Link>
                </div>

                {/* IMAGE */}
                <div className="flex-1">
                    <div className="overflow-hidden rounded-[24px] shadow-[0_10px_30px_rgba(15,23,42,0.08)] transition-transform duration-500 hover:scale-[1.02]">
                        <Image
                            src={product.image}
                            alt={product.title}
                            width={600}
                            height={420}
                            className="h-auto w-full object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
