import React, { useEffect, useState } from 'react';

export default function Home() {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd');
      const data = await res.json();
      setCoins(data.slice(0, 10)); // Top 10 coins
    }

    fetchData();
  }, []);

  return (
    <div className="p-6 bg-gray-900 text-white min-h-screen animate-fade-in">
      <h1 className="text-3xl font-bold mb-6">Live Crypto Prices</h1>
      <ul className="grid gap-4">
        {coins.map((coin) => (
          <li key={coin.id} className="bg-gray-800 p-4 rounded-md shadow-md hover:bg-gray-700 transition">
            <div className="flex items-center gap-4">
              <img src={coin.image} alt={coin.name} className="w-6 h-6" />
              <span className="font-semibold">{coin.name}</span>
              <span className="ml-auto text-green-400">${coin.current_price.toLocaleString()}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
