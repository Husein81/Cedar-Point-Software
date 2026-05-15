import { notFound } from "next/navigation";

import ProductDetailView from "@/components/products-details/product-detail-view";

import CustomDetails from "@/components/products-details/custom-details";

import { products } from "@/lib/products";

interface Props {
  params: Promise<{
    id: string;
  }>;
}

export default async function ProductDetailsPage({ params }: Props) {
  const { id } = await params;

  const product = products.find((p) => p.id === id);

  if (!product) {
    notFound();
  }

  if (id === "custom-software-solutions") {
    return <CustomDetails />;
  }

  return <ProductDetailView product={product} />;
}
