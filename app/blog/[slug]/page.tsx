import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import BlogPostPage from './BlogPostPage'

// Mock blog post data - in real app, this would come from CMS/API
const posts = {
  'traditional-rattan-weaving-techniques-cirebon': {
    id: 1,
    title: 'Traditional Rattan Weaving Techniques from Cirebon',
    slug: 'traditional-rattan-weaving-techniques-cirebon',
    excerpt: 'Discover the ancient art of rattan weaving that has been passed down through generations in Cirebon, West Java.',
    content: `
      <p>The art of rattan weaving in Cirebon, West Java, represents one of Indonesia's most treasured traditional crafts. For centuries, skilled artisans have perfected techniques that transform raw rattan into beautiful, functional furniture pieces that are now sought after worldwide.</p>

      <h2>The History of Cirebon Rattan Craftsmanship</h2>
      <p>Cirebon's relationship with rattan craftsmanship dates back over 300 years. The region's strategic location and abundant natural resources made it an ideal center for developing sophisticated weaving techniques. Local artisans developed unique patterns and methods that distinguished Cirebon rattan work from other Indonesian regions.</p>

      <h2>Traditional Weaving Techniques</h2>
      <p>The traditional weaving process begins with careful selection of rattan canes. Master craftsmen can identify the best quality rattan by touch, examining factors like flexibility, strength, and natural color variations.</p>

      <h3>The Preparation Process</h3>
      <ul>
        <li><strong>Harvesting:</strong> Rattan is harvested at specific times of the year when the canes are at optimal strength</li>
        <li><strong>Cleaning:</strong> Raw rattan is cleaned and stripped of its outer bark</li>
        <li><strong>Sizing:</strong> Canes are sorted by diameter and cut to appropriate lengths</li>
        <li><strong>Treatment:</strong> Natural treatments are applied to prevent insects and increase durability</li>
      </ul>

      <h3>Weaving Patterns</h3>
      <p>Cirebon artisans have developed numerous distinctive weaving patterns, each with its own name and cultural significance:</p>
      
      <ul>
        <li><strong>Anyaman Kepang:</strong> A braided pattern often used for chair seats</li>
        <li><strong>Anyaman Sasak:</strong> A tight weave pattern providing maximum strength</li>
        <li><strong>Anyaman Pandan:</strong> An intricate pattern inspired by pandan leaves</li>
        <li><strong>Anyaman Bilik:</strong> A decorative pattern used for ornamental pieces</li>
      </ul>

      <h2>The Master Craftsman Tradition</h2>
      <p>In Cirebon, the title of master craftsman (Tukang Anyam Ahli) is earned through years of dedicated practice. These masters not only create furniture but also train the next generation, ensuring that traditional techniques are preserved and passed down.</p>

      <h2>Modern Applications of Traditional Techniques</h2>
      <p>Today's Cirebon artisans skillfully blend traditional weaving techniques with contemporary design requirements. This fusion allows them to create furniture that meets international quality standards while maintaining authentic Indonesian character.</p>

      <h2>Preserving the Craft for Future Generations</h2>
      <p>Efforts to preserve these traditional techniques include:</p>
      <ul>
        <li>Formal apprenticeship programs</li>
        <li>Documentation of weaving patterns and techniques</li>
        <li>Integration with modern furniture design education</li>
        <li>Support for artisan communities</li>
      </ul>

      <p>The traditional rattan weaving techniques of Cirebon represent more than just a manufacturing process—they embody centuries of cultural heritage, artistic expression, and sustainable craftsmanship that continues to inspire furniture makers worldwide.</p>
    `,
    image: 'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg',
    category: 'craftsmanship',
    author: {
      name: 'Sari Wijaya',
      avatar: 'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg',
      bio: 'Master craftsperson and cultural heritage expert with over 20 years of experience documenting traditional Indonesian crafts.'
    },
    publishedAt: '2024-01-15',
    readTime: '8 min read',
    tags: ['craftsmanship', 'tradition', 'cirebon', 'weaving', 'heritage'],
    featured: true
  },
  'how-to-clean-maintain-rattan-furniture': {
    id: 2,
    title: 'How to Clean and Maintain Your Rattan Furniture',
    slug: 'how-to-clean-maintain-rattan-furniture',
    excerpt: 'Keep your rattan furniture looking beautiful for years with these expert care tips.',
    content: `
      <p>Proper care and maintenance are essential for preserving the beauty and longevity of your rattan furniture. With the right techniques and regular attention, your rattan pieces can maintain their elegance for decades.</p>

      <h2>Daily Maintenance</h2>
      <p>Regular daily care prevents the buildup of dust and debris that can damage rattan fibers over time.</p>

      <h3>Dusting</h3>
      <ul>
        <li>Use a soft, dry cloth or feather duster daily</li>
        <li>Pay special attention to crevices and woven areas</li>
        <li>Use a soft-bristled brush for intricate weaving patterns</li>
        <li>Vacuum with a brush attachment weekly</li>
      </ul>

      <h2>Deep Cleaning Process</h2>
      <p>Monthly deep cleaning helps maintain the rattan's natural luster and prevents deterioration.</p>

      <h3>Materials Needed</h3>
      <ul>
        <li>Mild soap solution (1 tablespoon dish soap per quart of warm water)</li>
        <li>Soft cloths or sponges</li>
        <li>Soft-bristled brush</li>
        <li>Clean water for rinsing</li>
        <li>Dry towels</li>
      </ul>

      <h3>Step-by-Step Cleaning</h3>
      <ol>
        <li><strong>Remove cushions and accessories</strong></li>
        <li><strong>Dust thoroughly</strong> with a soft brush</li>
        <li><strong>Prepare cleaning solution</strong> with mild soap and warm water</li>
        <li><strong>Clean gently</strong> with a damp cloth, following the grain</li>
        <li><strong>Rinse</strong> with clean, damp cloth</li>
        <li><strong>Dry immediately</strong> with towels</li>
        <li><strong>Air dry completely</strong> before use</li>
      </ol>

      <h2>Protecting Your Investment</h2>
      <p>Prevention is always better than restoration when it comes to rattan furniture care.</p>

      <h3>Environmental Considerations</h3>
      <ul>
        <li><strong>Humidity:</strong> Maintain 40-60% humidity levels</li>
        <li><strong>Temperature:</strong> Avoid extreme temperature changes</li>
        <li><strong>Sunlight:</strong> Protect from direct sunlight to prevent fading</li>
        <li><strong>Ventilation:</strong> Ensure good air circulation</li>
      </ul>

      <h2>Seasonal Care Tips</h2>
      
      <h3>Spring Maintenance</h3>
      <ul>
        <li>Deep clean after winter storage</li>
        <li>Check for any damage from humidity changes</li>
        <li>Apply protective treatments if needed</li>
      </ul>

      <h3>Summer Care</h3>
      <ul>
        <li>Increase cleaning frequency due to higher use</li>
        <li>Protect from excessive heat and UV rays</li>
        <li>Monitor for signs of drying or cracking</li>
      </ul>

      <h3>Fall Preparation</h3>
      <ul>
        <li>Thorough cleaning before storage</li>
        <li>Apply conditioning treatments</li>
        <li>Prepare for indoor storage if necessary</li>
      </ul>

      <h3>Winter Storage</h3>
      <ul>
        <li>Store in climate-controlled environment</li>
        <li>Cover with breathable materials</li>
        <li>Check periodically for moisture or pest issues</li>
      </ul>

      <h2>Common Problems and Solutions</h2>
      
      <h3>Loose Weaving</h3>
      <p>If you notice loose strands, contact a professional for repair. Attempting DIY fixes can often worsen the problem.</p>

      <h3>Stains and Spills</h3>
      <ul>
        <li>Clean immediately to prevent setting</li>
        <li>Blot, don't rub, to avoid spreading</li>
        <li>Use appropriate cleaning solutions for specific stains</li>
      </ul>

      <h3>Fading</h3>
      <p>While some fading is natural, excessive fading can be prevented by:</p>
      <ul>
        <li>Using UV-protective treatments</li>
        <li>Rotating furniture periodically</li>
        <li>Using window treatments to filter sunlight</li>
      </ul>

      <h2>Professional Maintenance</h2>
      <p>Consider professional cleaning and maintenance annually, especially for valuable or antique pieces. Professional services can provide:</p>
      <ul>
        <li>Deep cleaning with specialized equipment</li>
        <li>Structural repairs and re-weaving</li>
        <li>Protective treatments and conditioning</li>
        <li>Assessment of overall condition</li>
      </ul>

      <p>With proper care and maintenance, your rattan furniture will continue to provide beauty and comfort for many years, making it a worthwhile investment in your home's aesthetic and functionality.</p>
    `,
    image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg',
    category: 'care-maintenance',
    author: {
      name: 'Ahmad Furniture Care',
      avatar: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg',
      bio: 'Furniture care specialist with 15 years experience in maintaining and restoring rattan furniture.'
    },
    publishedAt: '2024-01-12',
    readTime: '6 min read',
    tags: ['maintenance', 'care', 'cleaning', 'tips', 'preservation'],
    featured: false
  }
}

const getBlogPost = (slug: string) => {
  return posts[slug as keyof typeof posts]
}

type Props = {
  params: { slug: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getBlogPost(params.slug)

  if (!post) {
    return {
      title: 'Blog Post Not Found',
    }
  }

  return {
    title: `${post.title} | Cirebon Rattan Blog`,
    description: post.excerpt,
    keywords: `${post.tags.join(', ')}, rattan furniture blog, indonesian craftsmanship, furniture care`,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.image],
      type: 'article',
      publishedTime: post.publishedAt,
      authors: [post.author.name],
      locale: 'en_US',
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
  }
}

export async function generateStaticParams() {
  return Object.keys(posts).map((slug) => ({ slug }))
}

export default function BlogPostPageWrapper({ params }: Props) {
  const post = getBlogPost(params.slug)

  if (!post) notFound()
  return <BlogPostPage post={post} />
}