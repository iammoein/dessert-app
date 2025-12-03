import { useSelector } from "react-redux";
import CartList from "./components/CartList";
import DessertList from "./components/DessertList";
import CartOverview from "./components/cartoverview_temp.jsx";

export default function App() {
const isOpen = useSelector(state => state.modal.isOpen);
  
  return (
    <main className="bg-rose-100 min-h-screen p-12 grid grid-cols-1 lg:grid-cols-3 gap-10">
      <section className="lg:col-span-2">
        <DessertList />
      </section>

      <aside className="lg:col-span-1">
        <CartList />
      </aside>
      {isOpen && <CartOverview />}
    </main>
  );
}
