import CartItem from "./CartItem";

export default function CardList() {
  const fakeCart = [
    {
      name: "Salted Caramel Brownie",
      quantity:1,
      category: "Brownie",
      price: 4.5,
    },
  ];
  return (
    <div className="col-span-1 bg-rose-50 p-4 rounded-2xl">
      <h2 className="font-bold text-myRed text-2xl mb-8">Your Cart(7)</h2>

      <ul className="flex gap-2">
        {fakeCart.map((item) => (
          <CartItem item={item} />
        ))}
      </ul>
    </div>
  );
}
