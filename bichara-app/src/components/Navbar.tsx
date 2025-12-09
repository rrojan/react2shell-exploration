import { Menu, Search, ShoppingBag } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/Button";

export const Navbar = () => {
	return (
		<nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-neutral-100">
			<div className="container mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
				{/* Logo */}
				<Link href="/" className="flex items-center gap-2 group">
					<div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center group-hover:bg-neutral-800 transition-colors">
						<span className="text-white font-bold text-lg">B</span>
					</div>
					<span className="text-xl font-bold tracking-tight text-neutral-900">
						Biralo Store
					</span>
				</Link>

				{/* Desktop Nav */}
				<div className="hidden md:flex items-center gap-8">
					<Link
						href="/"
						className="text-sm font-medium text-neutral-600 hover:text-neutral-900 transition-colors"
					>
						Home
					</Link>
					<Link
						href="/products"
						className="text-sm font-medium text-neutral-600 hover:text-neutral-900 transition-colors"
					>
						Shop
					</Link>
					<Link
						href="/about"
						className="text-sm font-medium text-neutral-600 hover:text-neutral-900 transition-colors"
					>
						About
					</Link>
				</div>

				{/* Actions */}
				<div className="flex items-center gap-2">
					<Button variant="ghost" size="icon" className="hidden md:flex">
						<Search className="w-5 h-5" />
					</Button>
					<Link href="/cart">
						<Button variant="ghost" size="icon" className="relative">
							<ShoppingBag className="w-5 h-5" />
							<span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
						</Button>
					</Link>
					<Button variant="ghost" size="icon" className="md:hidden">
						<Menu className="w-5 h-5" />
					</Button>
				</div>
			</div>
		</nav>
	);
};
