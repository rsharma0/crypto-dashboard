import React from 'react';

export default function About() {
  return (
    <div className="p-6 bg-gray-900 text-white min-h-screen animate-fade-in">
      <h1 className="text-3xl font-bold mb-4">About This Project</h1>
      <p>This crypto dashboard was built using:</p>
      <ul className="list-disc ml-6 mt-4 space-y-2">
        <li>React for building the user interface</li>
        <li>TailwindCSS for styling and layout</li>
        <li>Supabase to store and retrieve portfolio data</li>
        <li>CoinGecko API for real-time cryptocurrency prices</li>
        <li>Chart.js for visualizing portfolio data</li>
      </ul>
    </div>
  );
}
