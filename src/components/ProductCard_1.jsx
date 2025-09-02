import React from "react";

function ProductCard({ product, addToCart }) {
  return (
    <div className="bg-white shadow rounded-2xl p-4 flex flex-col justify-between">
      <div>
        <img src={product.image} alt={product.name} className="w-full h-40 object-cover rounded-lg mb-3" />
        <h2 className="text-lg font-semibold">{product.name}</h2>
        <p className="text-sm text-gray-600">{product.description}</p>
        <p className="text-green-700 font-bold mt-2">R$ {product.price.toFixed(2)}</p>
        <div className="mt-2">
          <span className="text-sm font-medium">Tamanhos:</span>
          <div className="flex gap-2 mt-1">
            {product.sizes.map((s) => (
              <span key={s} className="bg-gray-200 px-2 py-1 rounded text-xs">{s}</span>
            ))}
          </div>
        </div>
      </div>
      <button
        onClick={() => addToCart(product)}
        className="mt-4 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
      >
        Adicionar
      </button>
    </div>
  );
}

export default ProductCard;
