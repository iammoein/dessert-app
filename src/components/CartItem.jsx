export default function CartItem({ item }) {
  return (
    <div className="w-64 relative">
      <picture>
        <source media="(min-width: 1024px)" srcSet={item.image.desktop} />
        <source media="(min-width: 640px)" srcSet={item.image.tablet} />
        <img
          src={item.image.mobile}
          alt={item.name}
          className="w-full rounded-lg"
        />
      </picture>
        <button className="w-48 h-10 absolute bg-rose-50 rounded-full cursor-pointer text-rose-900 font-semibold bottom-18 left-1/2 transform -translate-x-1/2 border border-rose-400 hover:text-myRed hover:border-myRed duration-200">
          Add to cart
        </button>
      <div className="mt-4 mb-8">
        <small className="text-sm text-rose-300 font-light">
          {item.category}
        </small>
        <h2 className="text-rose-900 font-semibold">{item.name}</h2>
        <h4 className="font-light text-myRed">${item.price}</h4>
      </div>
    </div>
  );
}
