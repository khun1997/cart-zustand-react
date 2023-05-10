import CartItem from "./CartItem";
import useCartStore from "../../stores/useCartStore";

function Cart() {
  const cart = useCartStore((state) => state.cart);

  let total = 0;
  if (cart) {
    total = cart.reduce(
      (acc, product) => acc + product.price * (product.quantity as number),
      0
    );
  }

  return (
    <section>
      <div className="flex justify-center items-center">
        <h3 className="text-2xl font-bold mb-4 ">Shopping Cart</h3>
      </div>
      <ul className="">
        {cart?.map((product) => (
          <CartItem key={product.id} product={product} />
        ))}
      </ul>
      <div className="flex justify-between items-center mt-4">
        <span className="text-lg font-bold">Total Amount :</span>
        <span className="text-xl font-bold text-red-700">
          $ {total.toFixed(2)}
        </span>
      </div>
    </section>
  );
}

export default Cart;
