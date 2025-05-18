import React, { useState, useEffect } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function Portfolio() {
  const [coin, setCoin] = useState('');
  const [amount, setAmount] = useState('');
  const [portfolio, setPortfolio] = useState([]);

  const fetchPortfolio = async () => {
    try {
      const res = await fetch('https://crypto-api-8sbj.onrender.com/api/portfolio');
      const data = await res.json();
      setPortfolio(data);
    } catch (err) {
      console.error('Error loading portfolio:', err);
    }
  };

  useEffect(() => {
    fetchPortfolio();
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      await fetch('https://crypto-api-8sbj.onrender.com/api/portfolio/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ coin, amount }),
      });

      // Always refresh the portfolio after submitting
      await fetchPortfolio();
    } catch (err) {
      console.error('Insert failed:', err);
    }

    setCoin('');
    setAmount('');
  }

  const chartData = {
    labels: portfolio.map((entry) => entry.coin),
    datasets: [
      {
        label: 'Amount',
        data: portfolio.map((entry) => parseFloat(entry.amount)),
        backgroundColor: 'rgba(54, 162, 235, 0.6)',
        borderRadius: 5,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Your Portfolio by Coin',
      },
    },
  };

  return (
    <div className="p-6 bg-gray-900 text-white min-h-screen animate-fade-in">
      <h1 className="text-3xl font-bold mb-6">My Portfolio</h1>

      <form onSubmit={handleSubmit} className="mb-8 flex gap-4">
        <input
          value={coin}
          onChange={(e) => setCoin(e.target.value)}
          placeholder="Coin name (e.g. Bitcoin)"
          className="p-2 rounded bg-gray-800 text-white"
        />
        <input
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Amount"
          type="number"
          className="p-2 rounded bg-gray-800 text-white"
        />
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded"
        >
          Add
        </button>
      </form>

      <ul className="space-y-3">
        {portfolio.length === 0 ? (
          <li className="text-gray-400 italic">No entries yet.</li>
        ) : (
          portfolio.map((entry, i) => (
            <li key={i} className="bg-gray-800 p-4 rounded-md">
              <span className="font-semibold">{entry.coin}</span> – {entry.amount}
            </li>
          ))
        )}
      </ul>

      {portfolio.length > 0 && (
        <div className="bg-white p-6 rounded shadow mt-10">
          <h2 className="text-black text-xl font-semibold mb-4">Portfolio Chart</h2>
          <Bar data={chartData} options={chartOptions} />
        </div>
      )}
    </div>
  );
}
