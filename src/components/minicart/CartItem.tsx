import { Product } from "../../types/Product";
import { FaTrash } from "react-icons/fa";
import useCartStore from "../../stores/useCartStore";

type Props = {
  product: Product;
};

const CartItem = ({ product }: Props) => {
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  return (
    <li className="flex justify-between items-center mb-2 shadow-md p-4">
      <div>
        <img
          src={product.image}
          className="w-24 flex justify-center items-center "
        />
        <div className="flex flex-col gap-1">
          <span className="font-bold flex-1 my-1">{product.title}</span>
          <span className="text-gray-600 font-bold">
            {" "}
            Total cost : ${product.price}
          </span>
          <div className="flex justify-between">
            <span className="text-gray-700">Quantity : {product.quantity}</span>
            <button
              title="Remove Item"
              className="text-red-500 hover:text-red-600 ml-4"
              onClick={() => removeFromCart(product)}
            >
              <FaTrash size={18} />
            </button>
          </div>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
