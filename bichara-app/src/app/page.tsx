import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-64px)] py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-5xl font-extrabold text-gray-900 mb-6">
        Welcome to Bichara App!
      </h1>
      <p className="mt-3 text-xl text-gray-600 mb-8 max-w-md text-center">
        Your one-stop shop for everything you need. Start exploring our amazing products.
      </p>
      <Link href="/products" className="px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10">
        Shop Now
      </Link>
    </div>
  );
}