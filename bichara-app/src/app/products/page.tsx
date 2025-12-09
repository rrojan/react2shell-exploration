import { ProductCard } from '@/components/ProductCard'
import { products } from '@/lib/data'

export default function ProductsPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-12">
      <header className="mb-12">
        <h1 className="text-3xl font-bold text-neutral-900 mb-4">
          All Products
        </h1>
        <p className="text-neutral-500 max-w-2xl">
          Browse our complete collection of premium goods. Carefully curated for
          quality and aesthetics.
        </p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}
