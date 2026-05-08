import { notFound } from "next/navigation";

import POSDetailsPage from "@/components/products-details/pos-details";
import InventoryDetails from "@/components/products-details/inventory-details";
import MenuDetails from "@/components/products-details/menu-details";
import DriverDetails from "@/components/products-details/driver-details";
import CustomDetails from "@/components/products-details/custom-details";

interface Props {
    params: Promise<{
        id: string;
    }>;
}

export default async function ProductDetailsPage({
    params,
}: Props) {
    const { id } = await params;

    switch (id) {
        case "pos-system":
            return <POSDetailsPage />;

        case "inventory-management-system":
            return <InventoryDetails />;

        case "digital-menu":
            return <MenuDetails />;
            

        case "driver-tracking-system":
            return <DriverDetails />;


        case "custom-software-solutions":
            return <CustomDetails />;

        default:
            notFound();
    }
}