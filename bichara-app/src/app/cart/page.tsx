import { ArrowRight, Minus, Plus, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { products } from "@/lib/data";

export default function CartPage() {
  // Simulate cart with first 2 products
  const cartItems = [
    { product: products[0], quantity: 1 },
    { product: products[1], quantity: 2 },
  ];

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.product.price * item.quantity,
    0,
  );
  const shipping: number = 0;
  const total = subtotal + shipping;

  return (
    <div className="container mx-auto px-4 md:px-6 py-12">
      <h1 className="text-3xl font-bold text-neutral-900 mb-12">
        Shopping Bag
      </h1>

      <div className="grid lg:grid-cols-12 gap-12">
        {/* Cart Items */}
        <div className="lg:col-span-8">
          <div className="space-y-8">
            {cartItems.map(({ product, quantity }) => (
              <div
                key={product.id}
                className="flex gap-6 py-6 border-b border-neutral-100 last:border-0 items-start"
              >
                <div className="relative w-24 h-24 bg-neutral-50 rounded-lg overflow-hidden flex-shrink-0">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="flex-1 flex flex-col sm:flex-row justify-between">
                  <div className="space-y-1">
                    <h3 className="font-semibold text-neutral-900">
                      <Link href={`/products/${product.id}`}>
                        {product.name}
                      </Link>
                    </h3>
                    <p className="text-sm text-neutral-500">
                      {product.category}
                    </p>
                    <p className="font-medium text-neutral-900 sm:hidden mt-2">
                      ${product.price.toFixed(2)}
                    </p>
                  </div>

                  <div className="flex items-center justify-between sm:gap-12 mt-4 sm:mt-0">
                    <div className="flex items-center border border-neutral-200 rounded-lg">
                      <button
                        type="button"
                        className="p-1 hover:bg-neutral-50 text-neutral-500"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="w-8 text-center text-sm font-medium">
                        {quantity}
                      </span>
                      <button
                        type="button"
                        className="p-1 hover:bg-neutral-50 text-neutral-500"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>

                    <div className="text-right hidden sm:block">
                      <p className="font-medium text-neutral-900">
                        ${(product.price * quantity).toFixed(2)}
                      </p>
                    </div>

                    <button
                      type="button"
                      className="text-neutral-400 hover:text-red-500 transition-colors"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <Link href="/products">
              <Button
                variant="ghost"
                className="pl-0 hover:pl-0 text-neutral-600 hover:text-neutral-900"
              >
                <ArrowRight className="w-4 h-4 mr-2 rotate-180" />
                Continue Shopping
              </Button>
            </Link>
          </div>
        </div>

        {/* Summary */}
        <div className="lg:col-span-4">
          <div className="bg-neutral-50 rounded-2xl p-6 lg:p-8 sticky top-24">
            <h2 className="text-lg font-bold text-neutral-900 mb-6">
              Order Summary
            </h2>

            <div className="space-y-4 text-sm">
              <div className="flex justify-between text-neutral-600">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-neutral-600">
                <span>Shipping</span>
                <span>
                  {shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}
                </span>
              </div>
              <div className="pt-4 border-t border-neutral-200 flex justify-between font-bold text-lg text-neutral-900">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>

            <Button size="lg" className="w-full mt-8 rounded-full">
              Checkout
            </Button>

            <p className="text-xs text-neutral-400 text-center mt-4">
              Secure Checkout powered by Stripe
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
