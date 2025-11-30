import CartItem from "./CartItem";

export default function CardList() {
  const fakeCart = [
    {
      name: "Salted Caramel Brownie",
      quantity: 1,
      category: "Brownie",
      price: 4.5,
    },
  ];
  return (
    <div className=" flex flex-col gap-12 col-span-1 bg-rose-50 p-4 rounded-2xl self-start">
      <h2 className="font-bold text-myRed text-2xl">Your Cart(7)</h2>

      <ul className="flex gap-2">
        {fakeCart.map((item) => (
          <CartItem item={item} />
        ))}
      </ul>

      <button
        className="w-full p-4 bg-myRed rounded-full text-rose-100 hover:bg-[hsl(14,86%,32%)]
 hover:text-rose-50 cursor-pointer transition duration-200 font-bold"
      >
        Confirm Order
      </button>
    </div>
  );
}
