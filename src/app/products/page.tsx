import ProductHero from "@/components/products/product-hero";
import ProductSection from "@/components/products/product-section";
import SolutionsSection from "@/components/products/solutions-section";

import { products } from "@/lib/products";

export default function ProductsPage() {
  return (
    <main className="bg-page">
      <ProductHero />

      <div className="space-y-24 py-20">
        {products.map((product, index) => (
          <ProductSection
            key={product.title}
            product={product}
            index={index}
            reverse={index % 2 !== 0}
          />
        ))}
      </div>

      <SolutionsSection />
    </main>
  );
}