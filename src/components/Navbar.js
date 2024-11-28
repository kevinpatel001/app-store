import { useState } from "react";

export default function Navbar() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    alert("Searching for: " + searchTerm); // Placeholder for actual search functionality
  };

  return (
    <nav className="bg-primary p-3 sm:p-5 shadow-lg fixed w-full z-50">
      <div className="container mx-auto flex flex-wrap justify-between items-center">
        <h1 className="text-white text-2xl sm:text-3xl font-bold">AppStore</h1>

        <div className="flex flex-wrap items-center space-y-2 sm:space-y-0 sm:space-x-4 w-full sm:w-auto">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full sm:w-auto p-2 rounded-lg border-2 border-gray-300 text-sm sm:text-base"
            placeholder="Search apps..."
          />
          <button
            onClick={handleSearch}
            className="bg-secondary text-white px-3 py-2 rounded-lg hover:bg-indigo-700 transition duration-300 text-sm sm:text-base"
          >
            Search
          </button>
        </div>
      </div>
    </nav>
  );
}
