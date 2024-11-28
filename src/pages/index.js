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
      <Sidebar className="sm:"/>

      {/* Main Content */}
      <main className=" ">
        <Slider />

        <div className="">
          <h2 className="text-3xl font-bold text-primary mb-4">Popular Apps</h2>
          <Home />
        </div>
      </main>
    </div>
  );
}
