import { ArrowLeft, ShoppingBag } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { products } from "@/lib/data";

interface ProductPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params;
  const product = products.find((p) => p.id === id);

  if (!product) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 md:px-6 py-12">
      <Link
        href="/products"
        className="inline-flex items-center text-sm font-medium text-neutral-500 hover:text-neutral-900 mb-8 transition-colors"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Products
      </Link>

      <div className="grid md:grid-cols-2 gap-12 lg:gap-24 items-start">
        {/* Image Gallery */}
        <div className="relative aspect-square bg-neutral-50 rounded-2xl overflow-hidden border border-neutral-100">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </div>

        {/* Product Info */}
        <div className="flex flex-col h-full justify-center">
          <div className="mb-8">
            <p className="text-sm font-bold text-neutral-500 uppercase tracking-wider mb-2">
              {product.category}
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4 tight">
              {product.name}
            </h1>
            <p className="text-2xl font-medium text-neutral-900">
              ${product.price.toFixed(2)}
            </p>
          </div>

          <div className="prose prose-neutral mb-12">
            <p className="text-lg text-neutral-600 leading-relaxed">
              {product.description}
            </p>
            <p className="text-neutral-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-8 border-t border-neutral-100">
            <Button size="lg" className="flex-1 rounded-full text-base">
              <ShoppingBag className="w-5 h-5 mr-2" />
              Add to Cart
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="flex-1 rounded-full text-base"
            >
              Save for Later
            </Button>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-4 text-sm text-neutral-500">
            <div className="flex flex-col gap-1">
              <span className="font-medium text-neutral-900">
                Free Shipping
              </span>
              <span>On orders over $100</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="font-medium text-neutral-900">Returns</span>
              <span>30-day money back</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
