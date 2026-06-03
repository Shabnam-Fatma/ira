import React from "react";

const ProductCard = ({ props }) => {
  return (
    <div>
      <div
        key={props.id}
        className="bg-white p-4 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 transition duration-300 flex flex-col"
      >
        <img
          src={props.img}
          alt={"Yamaha CLP765GP Digital Grand Piano"}
          className="w-full h-104 object-cover rounded-lg"
        />
        <h2 className="font-semibold mt-4 text-lg text-slate-600 min-h-[84px]">
          {props.name}
        </h2>
        <p className="mt-2 text-2xl font-bold text-slate-600">₹{props.price}</p>
        <button className="mt-auto w-full bg-slate-900 py-3 text-white rounded-lg hover:bg-slate-700 transition">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
