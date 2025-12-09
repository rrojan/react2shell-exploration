export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
};

const products: Product[] = [
  {
    id: '1',
    name: 'Cozy Knit Cardigan',
    description: 'A soft and warm cardigan, perfect for chilly evenings.',
    price: 79.99,
    image: '/images/cardigan.webp',
  },
  {
    id: '2',
    name: 'Classic Denim Jeans',
    description: 'Timeless straight-leg jeans with a comfortable fit.',
    price: 59.99,
    image: '/images/jeans.webp',
  },
  {
    id: '3',
    name: 'Elegant Silk Blouse',
    description: 'Luxurious silk blouse with a delicate drape, ideal for any occasion.',
    price: 89.99,
    image: '/images/blouse.webp',
  },
  {
    id: '4',
    name: 'Sporty Running Shoes',
    description: 'Lightweight and breathable shoes designed for optimal performance.',
    price: 120.00,
    image: '/images/shoes.webp',
  },
  {
    id: '5',
    name: 'Minimalist Leather Wallet',
    description: 'Sleek and compact wallet with multiple card slots and a coin pouch.',
    price: 45.00,
    image: '/images/wallet.webp',
  },
  {
    id: '6',
    name: 'Vintage Aviator Sunglasses',
    description: 'Classic aviator style with UV protection, adding a touch of cool to any look.',
    price: 35.50,
    image: '/images/sunglasses.webp',
  },
  {
    id: '7',
    name: 'Boho Print Maxi Dress',
    description: 'Flowy maxi dress with an intricate bohemian print, perfect for summer days.',
    price: 65.00,
    image: '/images/dress.webp',
  },
  {
    id: '8',
    name: 'Smartwatch with Heart Rate Monitor',
    description: 'Track your fitness and stay connected with this feature-rich smartwatch.',
    price: 199.00,
    image: '/images/smartwatch.webp',
  },
  {
    id: '9',
    name: 'Gourmet Coffee Beans (500g)',
    description: 'Premium Arabica beans, freshly roasted for a rich and aromatic brew.',
    price: 25.00,
    image: '/images/coffee.webp',
  },
  {
    id: '10',
    name: 'Wireless Noise-Cancelling Headphones',
    description: 'Immersive audio experience with superior comfort and active noise cancellation.',
    price: 249.00,
    image: '/images/headphones.webp',
  },
];

export default products;