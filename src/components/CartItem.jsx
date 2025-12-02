import { useDispatch } from "react-redux";
import { deleteItem } from "../features/cart/cartSlice";

export default function CartItem({ item }) {
  const totalPrice = item.quantity * item.price;
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
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="10"
          height="10"
          viewBox="0 0 10 10"
          fill="currentColor"
        >
          <path d="M8.375 9.375 5 6 1.625 9.375l-1-1L4 5 .625 1.625l1-1L5 4 8.375.625l1 1L6 5l3.375 3.375-1 1Z" />
        </svg>
      </button>
    </div>
  );
}
