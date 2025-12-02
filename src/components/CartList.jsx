import { useDispatch, useSelector } from "react-redux";
import {
  getCart,
  getTotalCartQuantity,
} from "../features/cart/cartSlice";
import { openModal } from "../features/modal/modalSlice";

import CartItem from "./CartItem";
import Button from "./Button";
import cakeIcon from "../assets/images/illustration-empty-cart.svg";
import TotalPrice from "./TotalPrice";

export default function CardList() {
  const cart = useSelector(getCart);

  const totalCartQunatity = useSelector(getTotalCartQuantity);

  const dispatch = useDispatch();


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

            <TotalPrice />

         <Button onClick={() => dispatch(openModal())}>Confirm Order</Button>
        </>
      )}
    </div>
  );
}
