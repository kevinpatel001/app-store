import Link from "next/link";

export default function Sidebar() {
  return (
    <div className="fixed top-0 left-0 w-64 h-full bg-gray-800 text-white">
      <div className="p-6 text-2xl font-bold">App Store</div>
      <nav className="mt-6">
        <ul className="space-y-4">
          <li>
            <Link href="/" className="block px-4 py-2 hover:bg-gray-700 rounded">Home
            </Link>
          </li>
          <li>
            <Link href="/games" className="block px-4 py-2 hover:bg-gray-700 rounded">Games
            </Link>
          </li>
          <li>
            <Link href="/top-apps" className="block px-4 py-2 hover:bg-gray-700 rounded">Top Apps
            </Link>
          </li>
          <li>
            <Link href="/about" className="block px-4 py-2 hover:bg-gray-700 rounded">About Us
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
