import { products } from "@/data/product";
import ProductCard from "@/components/ProductCard";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto mb-8 py-10">
      <h1 className="text-5xl font-bold mb-10">Music Store</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6">
        {products.map((product) => (
          <ProductCard props= {product}  />
          
        ))}
      </div>
    </div>
  );
}
