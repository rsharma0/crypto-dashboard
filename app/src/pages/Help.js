import React from 'react';

export default function Help() {
  return (
    <div className="p-6 bg-gray-900 text-white min-h-screen animate-fade-in">
      <h1 className="text-3xl font-bold mb-4">Help</h1>
      <ul className="list-disc ml-6 space-y-3">
        <li>Use the Home page to view live cryptocurrency prices</li>
        <li>Go to the Portfolio page to add coins and amounts</li>
        <li>Your portfolio is saved automatically to the database</li>
        <li>The About page explains the tools and libraries used</li>
      </ul>
    </div>
  );
}
