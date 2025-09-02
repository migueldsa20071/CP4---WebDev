import React from "react";
import { X } from "lucide-react";

function CartSidebar({ isOpen, onClose, cart, removeFromCart, updateQuantity, finalizePurchase }) {
  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className={`fixed top-0 right-0 w-80 h-full bg-white shadow-2xl transform transition-transform duration-300 z-50 ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
      <div className="p-4 flex justify-between items-center border-b">
        <h2 className="text-lg font-bold">Seu Carrinho</h2>
        <button onClick={onClose}><X /></button>
      </div>
      <div className="p-4 overflow-y-auto h-[calc(100%-120px)]">
        {cart.length === 0 ? <p className="text-gray-500">Carrinho vazio</p> : cart.map((item) => (
          <div key={item.id} className="flex items-center justify-between mb-4">
            <div>
              <h3 className="font-semibold">{item.name}</h3>
              <p className="text-sm text-gray-600">R$ {(item.price * item.quantity).toFixed(2)}</p>
              <div className="flex items-center gap-2 mt-1">
                <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="px-2 bg-gray-200 rounded">-</button>
                <span>{item.quantity}</span>
                <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="px-2 bg-gray-200 rounded">+</button>
              </div>
            </div>
            <button onClick={() => removeFromCart(item.id)} className="text-red-500">Remover</button>
          </div>
        ))}
      </div>
      <div className="p-4 border-t">
        <p className="font-bold">Total: R$ {total.toFixed(2)}</p>
        <button
          onClick={finalizePurchase}
          disabled={cart.length === 0}
          className="w-full mt-2 bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 disabled:opacity-50"
        >
          Finalizar Compra
        </button>
      </div>
    </div>
  );
}

export default CartSidebar;
