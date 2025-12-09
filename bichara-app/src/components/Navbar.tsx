import Link from 'next/link';

type NavbarProps = {
  cartItemCount: number;
};

export default function Navbar({ cartItemCount }: NavbarProps) {
  return (
    <nav className="bg-gray-800 p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          Bichara App
        </Link>
        <ul className="flex space-x-4">
          <li>
            <Link href="/" className="hover:text-gray-300">
              Home
            </Link>
          </li>
          <li>
            <Link href="/products" className="hover:text-gray-300">
              Products
            </Link>
          </li>
          <li>
            <Link href="/cart" className="hover:text-gray-300 relative">
              Cart ({cartItemCount})
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}