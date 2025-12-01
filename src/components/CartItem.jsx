import { useDispatch } from "react-redux";
import { deleteItem } from "../features/cart/cartSlice";

export default function CartItem({ item }) {
  const totalPrice = item.quantity * item.price;
  console.log(item);

  const dispatch = useDispatch();

  function handleDeleteItem(id) {
    dispatch(deleteItem(id));
  }

  return (
    <div className="flex justify-between items-center w-full pb-4 border-b border-b-rose-100">
      <div>
        <h3 className="text-sm font-semibold text-rose-500">{item.name}</h3>
        <div className="flex gap-4">
          <small className="text-myRed">{item.quantity}x</small>
          <small className="font-light text-rose-300">@{item.price}</small>
          <small className="text-rose-400 font-medium">${totalPrice}</small>
        </div>
      </div>

      <button
        className="w-4 h-4 flex items-center justify-center rounded-full border border-rose-400 cursor-pointer text-rose-400 hover:text-rose-500 hover:border-rose-500"
        onClick={() => handleDeleteItem(item.id)}
      >
        <span className="text-[15px] leading-none">×</span>
      </button>
    </div>
  );
}
