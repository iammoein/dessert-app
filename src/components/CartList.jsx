import { useEffect, useState } from "react";
import CartItem from "./CartItem";

export default function CartList() {
  const [desserts, setDesserts] = useState([]);

  useEffect(() => {
    async function fetchDesserts() {
      const res = await fetch("http://localhost:5000/desserts");
      const data = await res.json();
      setDesserts(data);
    }

    fetchDesserts();
  }, []);

  return (
    <div className="flex flex-col gap-8">
      <h1 className="font-bold text-4xl">Desserts</h1>

      <ul className="grid grid-cols-3">
        {desserts.map((dessert) => (
          <li key={dessert.id}>
            <CartItem item={dessert} />
          </li>
        ))}
      </ul>
    </div>
  );
}
