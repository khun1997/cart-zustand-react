import { Product } from "../../types/Product";
import { FaTrash } from "react-icons/fa";
import useCartStore from "../../stores/useCartStore";

type Props = {
  product: Product;
};

const CartItem = ({ product }: Props) => {
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  return (
    <li className="flex justify-between items-center gap-4  mb-2 shadow-md p-4">
      <div>
        <img src={product.image} className="w-24 flex justify-center items-center"/>
        <div className="flex flex-col">
          <span className="font-bold flex-1">{product.title}</span>
          <span className="text-gray-600 font-bold">${product.price}</span>
          <span>Quantity: {product.quantity}</span>
        <button
          title="Remove Item"
          className="text-red-500 hover:text-red-600 ml-4"
          onClick={() => removeFromCart(product)}
        >
          <FaTrash size={18} />
        </button>
        </div>
      </div>
   
      
    </li>
  );
};

export default CartItem;
