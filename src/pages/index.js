// src/pages/index.js
// import HomeList from '@/components/HomeList';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Slider from '../components/Slider';
import AppList from '@/components/AppList';

// import GameList from '../components/AppList';

export default function index() {
  return (
    <div className="flex flex-col sm:flex-row min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main >
        <Slider />

        <div className="">
          <h2 className="text-3xl font-bold text-primary mb-4">Popular Apps</h2>
          <AppList />
        </div>
      </main>
    </div>
  );
}
