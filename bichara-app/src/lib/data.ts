export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  category: string;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Minimalist Leather Backpack",
    price: 129.0,
    description:
      "A sleek, durable leather backpack perfect for daily commute or weekend getaways. Features a laptop compartment and premium brass hardware.",
    image:
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&q=80&w=800",
    category: "Accessories",
  },
  {
    id: "2",
    name: "Ceramic Pour-Over Set",
    price: 45.0,
    description:
      "Handcrafted ceramic pour-over coffee maker. Elegant design that ensures perfect extraction for your morning brew.",
    image:
      "https://images.unsplash.com/photo-1517080319572-1596e1ae310d?auto=format&fit=crop&q=80&w=800",
    category: "Home",
  },
  {
    id: "3",
    name: "Wireless Noise-Canceling Headphones",
    price: 299.0,
    description:
      "Immersive sound quality with active noise cancellation. 30-hour battery life and premium comfort for long listening sessions.",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=800",
    category: "Electronics",
  },
  {
    id: "4",
    name: "Modern Desk Lamp",
    price: 89.0,
    description:
      "Adjustable LED desk lamp with touch controls and warm/cool light settings. Minimalist design fits any workspace.",
    image:
      "https://images.unsplash.com/photo-1507473888900-52e1ad2d6903?auto=format&fit=crop&q=80&w=800",
    category: "Home",
  },
  {
    id: "5",
    name: "Analog Classic Watch",
    price: 199.0,
    description:
      "Timeless analog watch with a genuine leather strap and stainless steel case. Water-resistant and reliable movement.",
    image:
      "https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&q=80&w=800",
    category: "Accessories",
  },
  {
    id: "6",
    name: "Mechanical Keyboard",
    price: 159.0,
    description:
      "Tactile mechanical switch keyboard with customizable RGB lighting and premium aluminum frame.",
    image:
      "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?auto=format&fit=crop&q=80&w=800",
    category: "Electronics",
  },
  {
    id: "7",
    name: "Linen bedding set",
    price: 220.0,
    description:
      "Breathable and soft 100% linen bedding set in a neutral stone color. Includes duvet cover and two pillowcases.",
    image:
      "https://images.unsplash.com/photo-1629032355262-d75d68d0980f?auto=format&fit=crop&q=80&w=800",
    category: "Home",
  },
  {
    id: "8",
    name: "Sustainable Water Bottle",
    price: 35.0,
    description:
      "Double-walled vacuum insulated stainless steel water bottle. Keeps drinks cold for 24 hours or hot for 12.",
    image:
      "https://images.unsplash.com/photo-1602143407151-011141920038?auto=format&fit=crop&q=80&w=800",
    category: "Accessories",
  },
];
