export default function CartOverviewItem({ item }) {
  return (
    <li className="flex justify-between items-center pb-4 border-b border-b-rose-300">
      <div className="flex gap-4">
        <img
          src={item.thumbnail}
          className="w-12 h-12 rounded-xl"
          alt="dessert thumbnail"
        />
        <div className="flex flex-col justify-between">
          <h3 className="text-sm font-semibold text-rose-900">{item.name}</h3>
          <div className="flex gap-2.5">
            <small className="text-myRed">{item.quantity}x</small>
            <small className="text-rose-400 font-medium">$@{item.price}</small>
          </div>
        </div>
      </div>

      <h3 className="text-rose-500 font-medium">${item.totalPrice}</h3>
    </li>
  );
}
