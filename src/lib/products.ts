export interface ProductFeature {
  icon: string;
  title: string;
  desc: string;
}

export interface ProductAudience {
  icon: string;
  title: string;
  desc: string;
}

export interface ProductDetails {
  heroBadge: string;
  heroTitle: string;
  heroDescription: string;
  heroImage: string;

  features: ProductFeature[];

  bigImage: string;

  audience: ProductAudience[];

  ctaTitle: string;
  ctaDescription: string;
  ctaButton: string;
}

export interface Product {
  id: string;
  title: string;
  description: string;
  image: string;

  features: string[];

  details?: ProductDetails;
}

export const products: Product[] = [
  {
    id: "pos-system",
    title: "POS System",
    description: "Works seamlessly for both retail and restaurants.",
    image: "/products/pos.png",

    features: [
      "Sales tracking & reporting in real-time",
      "Multi-device support",
      "Payment processor integration",
    ],

    details: {
      heroBadge: "POS System",

      heroTitle: "Simple and Powerful POS for Retail & Restaurants",

      heroDescription:
        "Streamline your operations, manage inventory, and serve customers faster with our all-in-one point of sale platform.",

      heroImage: "/product-details/pos/pos-hero.png",

      features: [
        {
          icon: "Zap",
          title: "Lightning Fast Checkout",
          desc: "Process transactions in seconds to keep lines moving.",
        },
        {
          icon: "Package",
          title: "Inventory Sync",
          desc: "Real-time stock updates across all locations.",
        },
        {
          icon: "TrendingUp",
          title: "Detailed Analytics",
          desc: "Understand your sales trends with reports.",
        },
        {
          icon: "Store",
          title: "Multi-Location Support",
          desc: "Manage multiple stores from one dashboard.",
        },
      ],

      bigImage: "/product-details/pos/pos-order-panel.png",

      audience: [
        {
          icon: "Utensils",
          title: "Restaurants",
          desc: "Manage tables and send kitchen orders instantly.",
        },
        {
          icon: "ShoppingBag",
          title: "Retail Stores",
          desc: "Track inventory and process returns easily.",
        },
      ],

      ctaTitle: "Ready to get started?",

      ctaDescription: "Transform your business with a modern POS platform.",

      ctaButton: "Contact Us",
    },
  },

  {
    id: "inventory-management-system",
    title: "Inventory Management System",
    description: "Take control of your stock across multiple locations.",
    image: "/products/inventory.png",

    features: [
      "Real-time stock tracking",
      "Low stock alerts",
      "Forecasting & analytics",
    ],

    details: {
      heroBadge: "Inventory Management System",

      heroTitle: "Smart Inventory Management for Modern Businesses",

      heroDescription:
        "Track, manage, and optimize your stock in real time with ease.",

      heroImage: "/product-details/inventory/hero.png",

      features: [
        {
          icon: "Clock",
          title: "Real-Time Tracking",
          desc: "Live stock updates across all channels.",
        },
        {
          icon: "Bell",
          title: "Low Stock Alerts",
          desc: "Get notified before you run out.",
        },
        {
          icon: "TrendingUp",
          title: "Reports & Analytics",
          desc: "Clear insights into your inventory health.",
        },
        {
          icon: "Store",
          title: "Multi-Location Support",
          desc: "Manage multiple stores from a single centralized dashboard.",
        },
      ],

      bigImage: "/product-details/inventory/inventory-overview.png",

      audience: [
        {
          icon: "Store",
          title: "Retail Stores",
          desc: "Manage stock efficiently across locations.",
        },
        {
          icon: "Warehouse",
          title: "Warehouses",
          desc: "Track inventory and reduce errors.",
        },
      ],

      ctaTitle: "Optimize Your Inventory",

      ctaDescription: "Reduce waste and improve operational efficiency.",

      ctaButton: "Contact Us",
    },
  },

  {
    id: "digital-menu",
    title: "Digital Menu",
    description:
      "Perfect for restaurants and coffee shops. Create stunning, interactive digital menus that customers can access instantly from their phones.",
    image: "/products/menu.png",

    features: [
      "Instant access via secure QR codes",
      "Easy, real-time updates for pricing and items",
      "Modern, branded UI optimized for mobile",
    ],

    details: {
      heroBadge: "Digital Menu",

      heroTitle: "Modern Digital Menus for Restaurants & Cafés",

      heroDescription:
        "Deliver a seamless ordering experience with QR-based menus.",

      heroImage: "/product-details/menu/menu.png",

      features: [
        {
          icon: "QrCode",
          title: "QR Code Access",
          desc: "Customers scan and order instantly.",
        },
        {
          icon: "Pencil",
          title: "Easy Menu Updates",
          desc: "Edit items anytime in seconds.",
        },
        {
          icon: "Smartphone",
          title: "Mobile-Friendly Design",
          desc: "Looks great on every device.",
        },
        {
          icon: "Zap",
          title: "Real-Time Changes",
          desc: "Updates appear instantly for guests.",
        },
      ],

      bigImage: "/product-details/menu/menu-image.png",

      audience: [
        {
          icon: "Utensils",
          title: "Restaurants",
          desc: "Simplify ordering and reduce wait time",
        },
        {
          icon: "Coffee",
          title: "Coffee Shops",
          desc: "Quick and modern customer experience",
        },
      ],

      ctaTitle: "Upgrade your customer experience today",

      ctaDescription:
        "Join thousands of restaurants delivering a better dining experience.",

      ctaButton: "Contact Us",
    },
  },

  {
    id: "driver-tracking-system",
    title: "Driver Tracking System",
    description: "Monitor fleets and optimize deliveries.",
    image: "/products/driver.png",

    features: [
      "Live GPS tracking",
      "Route optimization",
      "Delivery notifications",
    ],

    details: {
      heroBadge: "Driver Tracking System",

      heroTitle: "Real-Time Driver Tracking for Smarter Deliveries",

      heroDescription:
        "Track your drivers and deliveries with live updates and accuracy.",

      heroImage: "/product-details/driver/driver-hero.png",

      features: [
        {
          icon: "MapPin",
          title: "Live Tracking",
          desc: "See exactly where your drivers are on the map in real time.",
        },
        {
          icon: "PackageCheck",
          title: "Delivery Status Updates",
          desc: "Automatically log every step from dispatch to final drop-off.",
        },
        {
          icon: "Route",
          title: "Route Optimization",
          desc: "Find the fastest paths to save time, fuel, and money.",
        },
        {
          icon: "Bell",
          title: "Real-Time Notifications",
          desc: "Keep customers informed with automated SMS and alerts.",
        },
      ],

      bigImage: "/product-details/driver/driver-overview.png",

      audience: [
        {
          icon: "UtensilsCrossed",
          title: "Restaurants",
          desc: "Track deliveries in real time to ensure food arrives hot and on schedule.",
        },
        {
          icon: "Truck",
          title: "Logistics Companies",
          desc: "Optimize driver routes and operations for entire fleets smoothly.",
        },
      ],

      ctaTitle: "Deliver Faster, Smarter, and With Full Visibility",

      ctaDescription:
        "Empower your team with real-time driver tracking, optimized routes, and instant delivery updates that improve efficiency and customer satisfaction.",

      ctaButton: "Contact Us",
    },
  },

  {
    id: "custom-software-solutions",
    title: "Custom Software Solutions",
    description: "Custom platforms tailored to your workflows.",
    image: "/products/custom.png",

    features: [
      "Custom workflows",
      "Scalable architecture",
      "Tailored features",
    ],
  },
];
