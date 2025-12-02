import { useEffect, useState } from "react";
import DessertItem from "./DesserItem";

export default function DessertList() {
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
      <h1 className="font-bold text-4xl text-rose-900">Desserts</h1>

      <ul className="grid grid-cols-1 gap-x-12 gap-y-4 md:grid-cols-2 lg:grid-cols-3">
        {desserts.map((dessert) => (
          <li key={dessert.id}>
            <DessertItem dessert={dessert} />
          </li>
        ))}
      </ul>
    </div>
  );
}
