// src/pages/top-apps.js
import TopAppList from '@/components/TopAppList';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';



export default function TopApps() {
  return (
    <div>
      <Navbar />
      <Sidebar />
      <main className="sm:ml-64 pt-20 sm:pt-0 p-8 bg-gray-100">
        <h2 className="text-3xl font-bold text-primary mb-8">Top Apps</h2>
       <TopAppList/>
      </main>
    </div>
  );
}
