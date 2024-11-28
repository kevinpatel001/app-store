// src/components/Sidebar.js
import Link from "next/link";
import { useState } from "react";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative ">
      {/* Hamburger Menu Button */}
      <button
        className="sm:hidden mt-20 fixed top-4 left-4 z-50 bg-gray-800 text-white p-2 rounded-md"
        onClick={toggleSidebar}
      >
        {isOpen ? "Close" : "Menu"}
      </button>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full bg-gray-800 text-white transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 sm:translate-x-0 sm:w-64 w-64 z-40`}
      >
        <div className="p-6 text-2xl font-bold">App Store</div>
        <nav className="mt-6">
          <ul className="space-y-4">
            <li>
              <Link
                href="/"
                className="block px-4 py-2 hover:bg-gray-700 rounded"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/games"
                className="block px-4 py-2 hover:bg-gray-700 rounded"
              >
                Games
              </Link>
            </li>
            <li>
              <Link
                href="/top-apps"
                className="block px-4 py-2 hover:bg-gray-700 rounded"
              >
                Top Apps
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="block px-4 py-2 hover:bg-gray-700 rounded"
              >
                About Us
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* Overlay for small screens */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-30 sm:hidden"
          onClick={toggleSidebar}
        ></div>
      )}

      {/* Content Wrapper */}
      <div
        className={`transition-all duration-300 sm:ml-64 ${
          isOpen ? "ml-64" : "ml-0"
        }`}
      >
        {/* The content of the page goes here */}
      </div>
    </div>
  );
}
