"use client";

interface StructuredDataProps {
  type: "organization" | "product" | "article" | "breadcrumb";
  data: any;
}

export default function StructuredData({ type, data }: StructuredDataProps) {
  const generateStructuredData = () => {
    const baseUrl = "https://cirebonrattan.com";

    switch (type) {
      case "organization":
        return {
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Cirebon Rattan Exports",
          description:
            "Premium handcrafted rattan furniture manufacturer and exporter from Cirebon, Indonesia",
          url: baseUrl,
          logo: `${baseUrl}/logo.png`,
          image: `${baseUrl}/og-image.jpg`,
          foundingDate: "1998",
          founder: {
            "@type": "Person",
            name: "Ryan Aprianto",
          },
          address: {
            "@type": "PostalAddress",
            streetAddress: "Jl. Raya Industri No. 123",
            addressLocality: "Cirebon",
            addressRegion: "West Java",
            postalCode: "45122",
            addressCountry: "Indonesia",
          },
          contactPoint: {
            "@type": "ContactPoint",
            telephone: "+62-231-123-4567",
            contactType: "customer service",
            availableLanguage: ["English", "Indonesian"],
            areaServed: "Worldwide",
          },
          sameAs: [
            "https://www.facebook.com/cirebonrattan",
            "https://www.instagram.com/cirebonrattan",
            "https://www.linkedin.com/company/cirebonrattan",
          ],
          makesOffer: {
            "@type": "Offer",
            itemOffered: {
              "@type": "Product",
              name: "Handcrafted Rattan Furniture",
              category: "Furniture",
            },
          },
        };

      case "product":
        return {
          "@context": "https://schema.org",
          "@type": "Product",
          name: data.name,
          description: data.description,
          image: data.images || [data.image],
          brand: {
            "@type": "Brand",
            name: "Cirebon Rattan",
          },
          manufacturer: {
            "@type": "Organization",
            name: "Cirebon Rattan Exports",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Cirebon",
              addressRegion: "West Java",
              addressCountry: "Indonesia",
            },
          },
          material: "Rattan",
          category: data.category,
          offers: {
            "@type": "Offer",
            price: data.price?.min || data.price,
            priceCurrency: "USD",
            availability: data.inStock
              ? "https://schema.org/InStock"
              : "https://schema.org/OutOfStock",
            seller: {
              "@type": "Organization",
              name: "Cirebon Rattan Exports",
            },
            priceValidUntil: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000)
              .toISOString()
              .split("T")[0],
          },
          aggregateRating: data.rating
            ? {
                "@type": "AggregateRating",
                ratingValue: data.rating,
                reviewCount: data.reviews || 0,
                bestRating: 5,
                worstRating: 1,
              }
            : undefined,
          additionalProperty: data.features?.map((feature: string) => ({
            "@type": "PropertyValue",
            name: "Feature",
            value: feature,
          })),
        };

      case "article":
        return {
          "@context": "https://schema.org",
          "@type": "Article",
          headline: data.title,
          description: data.excerpt || data.description,
          image: data.image,
          author: {
            "@type": "Person",
            name: data.author?.name || "Cirebon Rattan Team",
            description: data.author?.bio,
          },
          publisher: {
            "@type": "Organization",
            name: "Cirebon Rattan Exports",
            logo: {
              "@type": "ImageObject",
              url: `${baseUrl}/logo.png`,
            },
          },
          datePublished: data.publishedAt,
          dateModified: data.updatedAt || data.publishedAt,
          mainEntityOfPage: {
            "@type": "WebPage",
            "@id": `${baseUrl}/blog/${data.slug}`,
          },
          keywords: data.tags?.join(", "),
          articleSection: data.category,
          wordCount: data.wordCount || 1000,
        };

      case "breadcrumb":
        return {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: data.map((item: any, index: number) => ({
            "@type": "ListItem",
            position: index + 1,
            name: item.name,
            item: `${baseUrl}${item.url}`,
          })),
        };

      default:
        return null;
    }
  };

  const structuredData = generateStructuredData();

  if (!structuredData) return null;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData),
      }}
    />
  );
}
