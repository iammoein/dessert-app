import CartList from "./components/CartList";
import DessertList from "./components/DessertList";

export default function App() {
  return (
    <main className="bg-rose-100 min-h-screen p-24 grid grid-cols-3 gap-10">
      <DessertList />
      <CartList />
    </main>
  );
}
