import { Metadata } from "next";
import { notFound } from "next/navigation";
import ProductDetailPage from "./ProductDetailPage";

// Product interface definition
interface Product {
  id: number;
  name: string;
  category: string;
  slug: string;
  price: { min: number; max: number };
  images: string[];
  description: string;
  features: string[];
  specifications: {
    material: string;
    dimensions: {
      table?: { length: number; width: number; height: number };
      chair?: { width: number; depth: number; height: number };
      sofa?: { length: number; width: number; height: number };
      armchair?: { width: number; depth: number; height: number };
      coffeeTable?: { length: number; width: number; height: number };
    };
    weight: string;
    finish: string;
    origin: string;
    warranty: string;
  };
  careInstructions: string[];
  customization: {
    available: boolean;
    options: string[];
  };
  shipping: {
    packaging: string;
    leadTime: string;
    methods: string[];
    insurance: string;
  };
  pricing: {
    retail: { min: number; max: number };
    wholesale: { min: number; max: number };
    bulk: { min: number; max: number };
  };
  rating: number;
  reviews: number;
  inStock: boolean;
  featured: boolean;
  tags: string[];
}

// Mock product data - in real app, this would come from API/database
const products: Record<string, Record<string, Product>> = {
  "dining-sets": {
    "premium-rattan-dining-set": {
      id: 1,
      name: "Premium Rattan Dining Set",
      category: "dining-sets",
      slug: "premium-rattan-dining-set",
      price: { min: 850, max: 1200 },
      images: [
        "https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg",
        "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg",
        "https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg",
        "https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg",
      ],
      description:
        "This premium rattan dining set represents the finest in Indonesian craftsmanship. Handwoven by skilled artisans in Cirebon, each piece showcases traditional techniques passed down through generations. The set includes a spacious dining table and six comfortable chairs, perfect for family gatherings and entertaining guests.",
      features: [
        "6 Chairs Included",
        "Weather Resistant Finish",
        "Custom Cushion Colors Available",
        "FSC Certified Sustainable Rattan",
        "Handwoven Traditional Technique",
        "Easy Assembly Instructions",
      ],
      specifications: {
        material: "Premium Natural Rattan with Teak Wood Frame",
        dimensions: {
          table: { length: 180, width: 90, height: 75 },
          chair: { width: 45, depth: 50, height: 85 },
        },
        weight: "45 kg total",
        finish: "Natural lacquer with UV protection",
        origin: "Cirebon, West Java, Indonesia",
        warranty: "2 years manufacturer warranty",
      },
      careInstructions: [
        "Dust regularly with a soft, dry cloth",
        "Clean spills immediately with damp cloth",
        "Avoid direct sunlight for extended periods",
        "Use furniture polish monthly for best results",
        "Store indoors during extreme weather",
      ],
      customization: {
        available: true,
        options: [
          "Cushion fabric and color selection",
          "Table size modifications",
          "Chair quantity adjustments",
          "Finish color variations",
          "Logo embossing for commercial use",
        ],
      },
      shipping: {
        packaging: "Professional export packaging with protective materials",
        leadTime: "4-6 weeks for standard orders",
        methods: ["Sea freight", "Air freight", "Express shipping"],
        insurance: "Full insurance coverage included",
      },
      pricing: {
        retail: { min: 850, max: 1200 },
        wholesale: { min: 680, max: 960 },
        bulk: { min: 595, max: 840 },
      },
      rating: 4.8,
      reviews: 24,
      inStock: true,
      featured: true,
      tags: ["dining", "premium", "handcrafted", "sustainable", "indonesian"],
    },
  },
  "living-room": {
    "luxury-living-room-suite": {
      id: 2,
      name: "Luxury Living Room Suite",
      category: "living-room",
      slug: "luxury-living-room-suite",
      price: { min: 1200, max: 1800 },
      images: [
        "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg",
        "https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg",
        "https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg",
        "https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg",
      ],
      description:
        "Transform your living space with this luxurious rattan living room suite. Combining comfort with elegance, this complete set includes a three-seater sofa, two matching armchairs, and a beautiful coffee table. Each piece is meticulously crafted using premium Indonesian rattan.",
      features: [
        "3-Seater Sofa Included",
        "2 Matching Armchairs",
        "Coffee Table with Glass Top",
        "Premium Fabric Cushions",
        "Ergonomic Design",
        "Modular Configuration",
      ],
      specifications: {
        material: "Premium Natural Rattan with Mahogany Frame",
        dimensions: {
          sofa: { length: 200, width: 85, height: 80 },
          armchair: { width: 75, depth: 80, height: 80 },
          coffeeTable: { length: 120, width: 60, height: 40 },
        },
        weight: "65 kg total",
        finish: "Natural honey finish with protective coating",
        origin: "Cirebon, West Java, Indonesia",
        warranty: "3 years manufacturer warranty",
      },
      careInstructions: [
        "Vacuum cushions weekly",
        "Rotate cushions regularly for even wear",
        "Clean rattan with mild soap solution",
        "Condition rattan quarterly with appropriate oil",
        "Professional cleaning recommended annually",
      ],
      customization: {
        available: true,
        options: [
          "Fabric selection from premium collection",
          "Cushion firmness preferences",
          "Frame color variations",
          "Additional pieces available",
          "Custom sizing for specific spaces",
        ],
      },
      shipping: {
        packaging: "White glove delivery service available",
        leadTime: "6-8 weeks for custom orders",
        methods: ["Sea freight", "Air freight"],
        insurance: "Comprehensive coverage included",
      },
      pricing: {
        retail: { min: 1200, max: 1800 },
        wholesale: { min: 960, max: 1440 },
        bulk: { min: 840, max: 1260 },
      },
      rating: 4.9,
      reviews: 18,
      inStock: true,
      featured: true,
      tags: ["living-room", "luxury", "complete-set", "comfortable", "elegant"],
    },
  },
};

const getProduct = (category: string, slug: string) => {
  const categoryData = products[category];
  if (!categoryData) return undefined;
  return categoryData[slug];
};

type Props = {
  params: { category: string; slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const product = getProduct(params.category, params.slug);
  if (!product) return { title: "Product Not Found" };

  return {
    title: `${product.name} | Premium Indonesian Rattan Furniture | Cirebon Rattan Craft`,
    description: `${product.description.substring(0, 160)}...`,
    keywords: `${product.tags.join(", ")}, cirebon rattan craft furniture`,
    openGraph: {
      title: `${product.name} - Premium Indonesian Rattan Furniture`,
      description: product.description.substring(0, 200),
      images: [product.images[0]],
      type: "website",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: `${product.name} - Cirebon Rattan Craft`,
      description: product.description.substring(0, 200),
      images: [product.images[0]],
    },
  };
}

export async function generateStaticParams() {
  return [
    ...Object.entries(products).flatMap(([category, items]) =>
      Object.keys(items).map((slug) => ({ category, slug }))
    ),
    { category: "decorative", slug: "decorative-rattan-baskets-set" },
    { category: "outdoor", slug: "outdoor-garden-collection" },
  ];
}

export default function ProductPage({ params }: Props) {
  const product = getProduct(params.category, params.slug);

  if (!product) notFound();
  return <ProductDetailPage product={product} />;
}
