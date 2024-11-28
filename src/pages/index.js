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
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 p-4 sm:p-8 bg-gray-50 sm:ml-64">
        <Slider />

        <div className="mt-10">
          <h2 className="text-3xl font-bold text-primary mb-4">Popular Apps</h2>
          <GameList />
        </div>
      </main>
    </div>
  );
}
