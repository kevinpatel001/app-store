// src/components/Navbar.js
import { useState } from 'react';

export default function Navbar() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    alert('Searching for: ' + searchTerm);  // Placeholder for actual search functionality
  };

  return (
    <nav className="bg-primary p-5 shadow-lg fixed w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-3xl font-bold">AppStore</h1>
        <div className="flex items-center space-x-4">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="p-2 rounded-lg border-2 border-gray-300"
            placeholder="Search apps..."
          />
          <button
            onClick={handleSearch}
            className="bg-secondary text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition duration-300"
          >
            Search
          </button>
        </div>
      </div>
    </nav>
  );
}
