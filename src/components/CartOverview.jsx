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
        className="w-full max-w-md bg-rose-50 flex flex-col gap-2 justify-between rounded-t-2xl p-8
             fixed bottom-0 left-0 right-0 
             h-[80vh]   // 80% height
             md:static md:h-auto md:rounded-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-col gap-2">
          <img src={confirmIcon} alt="confirm icon" className="w-10" />
          <h1 className="font-bold text-4xl text-rose-900">Order Confirmed</h1>
          <p className="text-sm text-rose-300">We hope you enjoy your food!</p>
        </div>

        <div
          className="flex flex-col gap-8 p-8 bg-rose-100 rounded-xl 
             overflow-y-auto 
             max-h-[40vh] md:max-h-[50vh]"
        >
          <ul className="flex flex-col gap-4">
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
