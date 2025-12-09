import Link from "next/link";
import { ProductCard } from "@/components/ProductCard";
import { Button } from "@/components/ui/Button";
import { products } from "@/lib/data";

export default function Home() {
  const featuredProducts = products.slice(0, 4);

  return (
    <div className="space-y-16 pb-16">
      {/* Hero Section */}
      <section className="relative bg-neutral-100 py-32 px-4 text-center overflow-hidden">
        <div className="mx-auto max-w-3xl space-y-6 relative z-10">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-neutral-900 leading-tight">
            Elevate Your Everyday <br />
            <span className="text-neutral-500">With Premium Essentials.</span>
          </h1>
          <p className="text-lg md:text-xl text-neutral-600 max-w-2xl mx-auto">
            Discover a curated collection of minimalist, high-quality goods
            designed for the modern lifestyle.
          </p>
          <div className="flex gap-4 justify-center pt-4">
            <Link href="/products">
              <Button
                size="lg"
                className="rounded-full px-8 shadow-lg shadow-neutral-200"
              >
                Shop Now
              </Button>
            </Link>
            <Link href="/about">
              <Button
                size="lg"
                variant="outline"
                className="rounded-full px-8 bg-white"
              >
                Our Story
              </Button>
            </Link>
          </div>
        </div>

        {/* Abstract Background Element */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-white to-transparent rounded-full blur-3xl opacity-60 pointer-events-none"></div>
      </section>

      {/* Featured Collection */}
      <section className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-neutral-900">
            Featured Collection
          </h2>
          <Link href="/products">
            <Button
              variant="ghost"
              className="text-neutral-500 hover:text-neutral-900"
            >
              View All &rarr;
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Newsletter / CTA */}
      <section className="container mx-auto px-4 md:px-6">
        <div className="bg-neutral-900 rounded-3xl p-8 md:p-16 text-center text-white relative overflow-hidden">
          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl font-bold">Join the Movement</h2>
            <p className="text-neutral-300">
              Sign up for our newsletter to receive exclusive offers, early
              access to new releases, and design inspiration.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-white/10 border border-white/20 rounded-full px-6 py-3 text-white placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-white/50 backdrop-blur-sm"
              />
              <Button variant="secondary" className="rounded-full px-8">
                Subscribe
              </Button>
            </form>
          </div>

          {/* Decorative circles */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
        </div>
      </section>
    </div>
  );
}
