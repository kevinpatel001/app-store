import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Slider from '../components/Slider'; // Import the Slider component
import GameList from '../components/AppList'; // Import the GameList component
// import AppDetails from '@/components/AppDetails';

export default function Home() {
  return (
    <div>
      <Navbar />
      <Sidebar />
      <main className="ml-64 p-8 bg-gray-50">
       
        <Slider />

        
        <div className="mt-10">
          <h2 className="text-3xl font-bold text-primary mb-4">Popular Apps</h2>
          <GameList />
        </div>
      </main>

      {/* <AppDetails/> */}
    </div>
  );
}
