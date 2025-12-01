import CartList from "./components/CartList";
import DessertList from "./components/DessertList";

export default function App() {
  return (
   <main className="bg-rose-100 min-h-screen p-12 grid grid-cols-3 gap-10">
  <section className="col-span-2">
    <DessertList />
  </section>

  <aside className="col-span-1">
    <CartList />
  </aside>
</main>

  );
}
