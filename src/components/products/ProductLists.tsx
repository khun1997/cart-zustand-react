import { Product } from "../../types/Product";
import ProductCard from "./ProductCard";

interface Props {
  products: Product[];
}

export default function ProductList({ products }: Props) {
  return (
    <>
      <h1 className="text-3xl font-semibold mb-7 justify-center flex items-center ">
        Products
      </h1>
      <div className="grid grid-cols-6 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
}
