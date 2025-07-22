import { useEffect, useState } from 'react';
import axios from 'axios';

interface Item {
  id: number;
  name: string;
}

const ItemList = () => {
  const [items, setItems] = useState<Item[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    axios.get('http://localhost:5000/api/items')
      .then(response => setItems(response.data))
      .catch(err => setError('Error al obtener los elementos'));
  }, []);

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4 bg-red-300 rounded ">Lista de Elementos</h2>
      {error && <p className="text-red-500">{error}</p>}
      <ul className="space-y-2">
        {items.map(item => (
          <li key={item.id} className="p-2 bg-gray-300 rounded">
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;