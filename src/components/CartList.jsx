import {
  getTotalCartPrice,
  getTotalCartQuantity,
} from "../features/cart/cartSlice";
import cakeIcon from "../assets/images/illustration-empty-cart.svg";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";

export default function CardList() {
  const cart = useSelector((state) => state.cart.cart);

  const totalCartQunatity = useSelector(getTotalCartQuantity);
  const totalCartPrice = useSelector(getTotalCartPrice);

  return (
    <div className=" flex flex-col gap-8 bg-rose-50 px-4 py-8 rounded-2xl self-start">
      <h2 className="font-bold text-myRed text-2xl">
        Your Cart({totalCartQunatity})
      </h2>
      {cart.length === 0 ? (
        <div className="flex flex-col justify-center items-center pb-4">
          <img src={cakeIcon} alt="" />
          <p className="font-medium text-rose-500">
            Your added items will appear here
          </p>
        </div>
      ) : (
        <>
          <ul className="flex flex-col gap-8 ">
            {cart.map((item) => (
              <CartItem item={item} />
            ))}
          </ul>

          <div className="flex justify-between">
            <h3 className="text-sm text-rose-500">Order Total</h3>
            <h2 className="text-2xl text-rose-900 font-bold">${totalCartPrice}</h2>
          </div>

          <button
            className="w-full p-4 bg-myRed rounded-full text-rose-100 hover:bg-[hsl(14,86%,32%)]
          hover:text-rose-50 cursor-pointer transition duration-200 font-bold"
          >
            Confirm Order
          </button>
        </>
      )}
    </div>
  );
}
