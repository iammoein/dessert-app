import { useDispatch, useSelector } from "react-redux";
import {
  addItem,
  decreaseItemQuantity,
  increaseItemQuantity,
} from "../features/cart/cartSlice";

export default function DessertItem({ dessert }) {
  const { id, name, category, price } = dessert;

  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cart);

  const cartItem = cartItems.find((item) => item.id === dessert.id);
  const quantity = cartItem ? cartItem.quantity : 0;

  function handleAddToCart() {
    const newItem = {
      id: id,
      name: name,
      category: category,
      quantity: 1,
      price: price,
      totalPrice: price * 1,
    };

    dispatch(addItem(newItem));
  }

  return (
    <div className="w-64 relative ">
      <picture>
        <source media="(min-width: 1024px)" srcSet={dessert.image.desktop} />
        <source media="(min-width: 640px)" srcSet={dessert.image.tablet} />
        <img
          src={dessert.image.mobile}
          alt={dessert.name}
          className={`w-full rounded-lg ${
            quantity ? "border-3 border-myRed" : ""
          }`}
        />
      </picture>
      {!quantity ? (
        <button
          onClick={handleAddToCart}
          className="w-48 h-10 absolute bg-rose-50 rounded-full cursor-pointer text-rose-900 font-semibold bottom-18 left-1/2 transform -translate-x-1/2 border border-rose-400 hover:text-myRed hover:border-myRed duration-200"
        >
          Add to cart
        </button>
      ) : (
        <div className="w-48 h-10 absolute bottom-18 left-1/2 transform -translate-x-1/2 flex items-center justify-between gap-4 bg-myRed text-rose-100 px-4 py-2 rounded-full cursor-pointer">
          <button
            onClick={() => dispatch(decreaseItemQuantity(dessert.id))}
            className="text-2xl cursor-pointer hover:text-rose-300 duration-150"
          >
            −
          </button>

          <span className="text-lg ">{quantity}</span>

          <button
            onClick={() => dispatch(increaseItemQuantity(dessert.id))}
            className="text-2xl cursor-pointer hover:text-rose-300 duration-150"
          >
            +
          </button>
        </div>
      )}
      <div className="mt-4 mb-8">
        <small className="text-sm text-rose-300 font-light">
          {dessert.category}
        </small>
        <h2 className="text-rose-900 font-semibold">{dessert.name}</h2>
        <h4 className="font-light text-myRed">${dessert.price}</h4>
      </div>
    </div>
  );
}
