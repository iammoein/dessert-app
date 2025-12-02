import { useSelector } from "react-redux";
import { getTotalCartPrice } from "../features/cart/cartSlice";

export default function TotalPrice() {

    const totalCartPrice = useSelector(getTotalCartPrice);

  return (
    <div className="flex justify-between">
      <h3 className="text-sm text-rose-500">Order Total</h3>
      <h2 className="text-2xl text-rose-900 font-bold">${totalCartPrice}</h2>
    </div>
  );
}
