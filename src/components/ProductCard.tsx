import React from "react";
import { productType } from "@/types/product";

type productCardType = {
  product: productType
}

const ProductCard = ({ product }: productCardType) => {
  return (
    <div>
      <div className="bg-white p-4 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 transition duration-300 flex flex-col">
        <img
          src={product.img}
          alt={product.name}
          className="w-full h-104 object-cover rounded-lg"
        />
        <h2 className="font-semibold mt-4 text-lg text-slate-600 min-h-[84px]">
          {product.name}
        </h2>
        <p className="mt-2 text-2xl font-bold text-slate-600">₹{product.price}</p>
        <button className="mt-auto w-full bg-slate-900 py-3 text-white rounded-lg hover:bg-slate-700 transition">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
