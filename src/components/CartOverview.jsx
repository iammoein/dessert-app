import { useDispatch, useSelector } from "react-redux";
import { getCart, cleanCart } from "../features/cart/cartSlice";
import Button from "./Button";
import confirmIcon from "../assets/images/icon-order-confirmed.svg";
import CartOverviewItem from "./CartOverviewItem";
import TotalPrice from "./TotalPrice";
import { closeModal } from "../features/modal/modalSlice";

export default function CartOverview() {
  const cart = useSelector(getCart);
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.modal.isOpen);

  function handleNewOrder() {
    dispatch(closeModal());
    dispatch(cleanCart());
  }

  if (!isOpen) return;

  return (
    <div
      className="fixed inset-0 bg-black/40 backdrop-blur-xs flex items-center justify-center z-50"
      onClick={() => dispatch(closeModal())}
    >
      <div
        className="w-128 h-128 bg-rose-50 flex flex-col gap-2 justify-between rounded-xl p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-col gap-2">
          <img src={confirmIcon} alt="confirm icon" className="w-10" />
          <h1 className="font-bold text-4xl text-rose-900">Order Confirmed</h1>
          <p className="text-sm text-rose-300">We hope you enjoy your food!</p>
        </div>

        <div className="flex flex-col gap-8 p-8 bg-rose-100 rounded-xl">
          <ul>
            {cart.map((item) => (
              <CartOverviewItem item={item} />
            ))}
          </ul>
          <TotalPrice />
        </div>

        <Button onClick={() => handleNewOrder()}>Start New Order</Button>
      </div>
    </div>
  );
}
