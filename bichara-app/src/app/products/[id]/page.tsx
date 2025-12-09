'use client';

import { useParams } from 'next/navigation';
import Image from 'next/image';
import products from '../../../data/products';
import { useCart } from '../../../context/CartContext';

export default function ProductDetailPage() {
  const params = useParams();
  const { id } = params;
  const { addToCart } = useCart();

  const product = products.find((p) => p.id === id);

  if (!product) {
    return <div className="text-center text-xl mt-8">Product not found.</div>;
  }

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <div className="container mx-auto p-4 flex flex-col md:flex-row gap-8 mt-8">
      <div className="md:w-1/2 relative h-96">
        <Image
          src={product.image}
          alt={product.name}
          layout="fill"
          objectFit="contain"
          className="rounded-lg shadow-md"
        />
      </div>
      <div className="md:w-1/2">
        <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
        <p className="text-gray-700 text-lg mb-6">{product.description}</p>
        <p className="text-5xl font-extrabold text-blue-600 mb-6">${product.price.toFixed(2)}</p>
        <button
          onClick={handleAddToCart}
          className="w-full bg-blue-600 text-white px-6 py-3 rounded-md text-xl font-semibold hover:bg-blue-700 transition-colors"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}