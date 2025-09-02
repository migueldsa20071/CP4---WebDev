import React from "react";
import { ShoppingCart, Leaf, User } from "lucide-react";

function Navbar({ onCartClick }) {
  return (
    <nav className="bg-green-600 text-white px-6 py-4 flex justify-between items-center shadow-md">
      <div className="flex items-center gap-2 text-lg font-bold">
        <Leaf /> EcoShop
      </div>
      <div className="flex gap-6">
        <button onClick={onCartClick} className="flex items-center gap-1 hover:text-gray-200">
          <ShoppingCart /> Carrinho
        </button>
        <button className="hover:text-gray-200">Sobre Nós</button>
        <button className="flex items-center gap-1 hover:text-gray-200">
          <User /> Perfil
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
