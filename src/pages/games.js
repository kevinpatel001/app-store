import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import GameList from "../components/GameList";

export default function Games() {
  return (
    <div>
      <Navbar />
      <Sidebar />
      <main className="ml-64 p-8 bg-gray-50">
        <h1 className="text-3xl font-bold text-primary mb-4">Games</h1>
        <GameList />
      </main>
    </div>
  );
}
