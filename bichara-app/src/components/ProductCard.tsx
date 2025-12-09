import { ShoppingBag } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/lib/data";
import { Button } from "./ui/Button";

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="group relative flex flex-col bg-white rounded-xl overflow-hidden border border-neutral-100 shadow-sm hover:shadow-lg hover:border-neutral-200 transition-all duration-300">
      <Link
        href={`/products/${product.id}`}
        className="block relative aspect-square overflow-hidden bg-neutral-50"
      >
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </Link>
      <div className="p-4 flex flex-col flex-grow">
        <div className="mb-2">
          <p className="text-xs font-medium text-neutral-500 mb-1 tracking-wide uppercase">
            {product.category}
          </p>
          <Link href={`/products/${product.id}`} className="block">
            <h3 className="text-lg font-semibold text-neutral-900 leading-tight group-hover:text-blue-600 transition-colors">
              {product.name}
            </h3>
          </Link>
        </div>

        <div className="mt-auto flex items-center justify-between pt-4">
          <span className="text-xl font-bold text-neutral-900">
            ${product.price.toFixed(2)}
          </span>
          <Button
            size="sm"
            variant="secondary"
            className="rounded-full shadow-none hover:shadow-md transition-shadow"
          >
            <ShoppingBag className="w-4 h-4 mr-2" />
            Add
          </Button>
        </div>
      </div>
    </div>
  );
};
