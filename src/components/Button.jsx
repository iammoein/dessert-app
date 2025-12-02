export default function Button({ children, onClick }) {
  return (
    <button
      className="w-full p-4 bg-myRed rounded-full text-rose-100 hover:bg-[hsl(14,86%,32%)]
          hover:text-rose-50 cursor-pointer transition duration-200 font-bold"
      onClick={onClick}
    >
      {children}
    </button>
  );
}
