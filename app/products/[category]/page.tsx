import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import CategoryPage from './CategoryPage'

const categories = {
  'living-room': {
    name: 'Living Room Sets',
    description: 'Elegant rattan living room furniture including sofas, chairs, and coffee tables',
    keywords: 'rattan living room furniture, indonesian sofa sets, handcrafted living room'
  },
  'dining-sets': {
    name: 'Dining Sets',
    description: 'Premium rattan dining tables and chairs for elegant dining experiences',
    keywords: 'rattan dining sets, indonesian dining furniture, handcrafted dining tables'
  },
  'bedroom': {
    name: 'Bedroom Furniture',
    description: 'Comfortable and stylish rattan bedroom furniture including beds and storage',
    keywords: 'rattan bedroom furniture, indonesian bed frames, handcrafted bedroom sets'
  },
  'outdoor': {
    name: 'Outdoor Furniture',
    description: 'Weather-resistant rattan outdoor furniture for gardens and patios',
    keywords: 'outdoor rattan furniture, garden furniture indonesia, weather resistant rattan'
  },
  'decorative': {
    name: 'Decorative Items',
    description: 'Beautiful rattan decorative pieces and accessories for home decoration',
    keywords: 'rattan decorative items, indonesian home decor, handwoven baskets'
  }
}

type Props = {
  params: { category: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const category = categories[params.category as keyof typeof categories]
  
  if (!category) {
    return {
      title: 'Category Not Found',
    }
  }

  return {
    title: `${category.name} | Premium Indonesian Rattan Furniture | Cirebon Rattan`,
    description: `${category.description}. Direct from manufacturer in Cirebon, Indonesia. Wholesale pricing available for international buyers.`,
    keywords: `${category.keywords}, cirebon rattan furniture, indonesian furniture export`,
    openGraph: {
      title: `${category.name} - Premium Indonesian Rattan Furniture`,
      description: category.description,
      type: 'website',
      locale: 'en_US',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${category.name} - Cirebon Rattan`,
      description: category.description,
    },
  }
}

export async function generateStaticParams() {
  return Object.keys(categories).map((category) => ({
    category,
  }))
}

export default function CategoryPageWrapper({ params }: Props) {
  const category = categories[params.category as keyof typeof categories]
  
  if (!category) {
    notFound()
  }

  return <CategoryPage category={params.category} categoryData={category} />
}