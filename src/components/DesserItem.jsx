import { useDispatch } from "react-redux";
import { addItem } from "../features/cart/cartSlice";

export default function Dessertdessert({ dessert }) {
  const { id, name, category, price } = dessert;

  const dispatch = useDispatch();

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
    <div className="w-64 relative">
      <picture>
        <source media="(min-width: 1024px)" srcSet={dessert.image.desktop} />
        <source media="(min-width: 640px)" srcSet={dessert.image.tablet} />
        <img
          src={dessert.image.mobile}
          alt={dessert.name}
          className="w-full rounded-lg"
        />
      </picture>
      <button onClick={handleAddToCart} className="w-48 h-10 absolute bg-rose-50 rounded-full cursor-pointer text-rose-900 font-semibold bottom-18 left-1/2 transform -translate-x-1/2 border border-rose-400 hover:text-myRed hover:border-myRed duration-200">
        Add to cart
      </button>
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
