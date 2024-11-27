// src/pages/store.js
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import AppCard from '../components/AppCard';
import apps from '../data/apps';

export default function Store() {
  return (
    <div className="flex min-h-screen">
      {/* Fixed Sidebar */}
      <Sidebar />

      <div className="flex-1 ml-64">
        {/* Navbar */}
        <Navbar />

        <main className="p-8 bg-gray-100">
          <h2 className="text-3xl font-bold text-primary text-center mb-8">Featured Apps</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {apps.map(app => (
              <AppCard key={app.id} app={app} />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
