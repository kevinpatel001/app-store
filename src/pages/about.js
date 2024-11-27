// src/pages/about.js
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

export default function About() {
  return (
    <div>
      <Navbar />
      <Sidebar />
      <main className="ml-64 p-8 bg-gray-50">
        <h2 className="text-3xl font-bold text-primary mb-8">About Us</h2>
        <p>Learn more about our App Store and its mission.</p>
      </main>
    </div>
  );
}
