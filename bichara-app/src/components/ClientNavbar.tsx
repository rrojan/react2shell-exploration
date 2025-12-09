'use client';

import { useCart } from '../context/CartContext';
import Navbar from './Navbar';

export default function ClientNavbar() {
  const { getCartItemCount } = useCart();
  const cartItemCount = getCartItemCount();

  return <Navbar cartItemCount={cartItemCount} />;
}