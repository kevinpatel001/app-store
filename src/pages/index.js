// src/pages/index.js
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Slider from '../components/Slider';
import GameList from '../components/AppList';

export default function Home() {
  return (
    <div className="flex flex-col sm:flex-row min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Sidebar */}
      <Sidebar className="sm:hidden"/>

      {/* Main Content */}
      <main className="flex-1 p-4  bg-gray-50 ">
        <Slider />

        <div className="mt-10">
          <h2 className="text-3xl font-bold text-primary mb-4">Popular Apps</h2>
          <GameList />
        </div>
      </main>
    </div>
  );
}
