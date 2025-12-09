import Link from 'next/link'

export const Footer = () => {
  return (
    <footer className="bg-neutral-50 border-t border-neutral-100 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-6 h-6 bg-neutral-900 rounded-md flex items-center justify-center">
                <span className="text-white font-bold text-xs">B</span>
              </div>
              <span className="text-lg font-bold tracking-tight text-neutral-900">
                Biralo Store
              </span>
            </Link>
            <p className="text-neutral-500 text-sm leading-relaxed max-w-xs">
              Curated collection of premium goods for the modern lifestyle.
              Quality meets minimalism.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-neutral-900 mb-4">Shop</h4>
            <ul className="space-y-2 text-sm text-neutral-500">
              <li>
                <Link
                  href="/products"
                  className="hover:text-neutral-900 transition-colors"
                >
                  All Products
                </Link>
              </li>
              <li>
                <Link
                  href="/new"
                  className="hover:text-neutral-900 transition-colors"
                >
                  New Arrivals
                </Link>
              </li>
              <li>
                <Link
                  href="/featured"
                  className="hover:text-neutral-900 transition-colors"
                >
                  Featured
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-neutral-900 mb-4">Support</h4>
            <ul className="space-y-2 text-sm text-neutral-500">
              <li>
                <Link
                  href="/faq"
                  className="hover:text-neutral-900 transition-colors"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/shipping"
                  className="hover:text-neutral-900 transition-colors"
                >
                  Shipping & Returns
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-neutral-900 transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-neutral-900 mb-4">Newsletter</h4>
            <p className="text-neutral-500 text-sm mb-4">
              Subscribe to get special offers and updates.
            </p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Email address"
                className="flex-1 bg-white border border-neutral-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent transition-all"
              />
              <button
                type="button"
                className="bg-neutral-900 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-neutral-800 transition-colors"
              >
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="pt-8 border-t border-neutral-200 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-neutral-400">
          <p>
            &copy; {new Date().getFullYear()} Bichara Inc. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/terms" className="hover:text-neutral-600">
              Terms
            </Link>
            <Link href="/privacy" className="hover:text-neutral-600">
              Privacy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
