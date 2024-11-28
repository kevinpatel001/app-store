import Slider from "@/components/Slider";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

import Home from "@/components/HomeList";
import AppList from "@/components/AppList";

export default function home() {
  return (
    <div>
      <Navbar />
      <Sidebar />
      <main className="sm:ml-64 pt-28 sm:pt-0 p-8 bg-gray-50">
        <h1 className="text-3xl font-bold text-primary mb-4">Home</h1>
        <Slider/>
       
        <AppList/>
        
        
        
      </main>
    </div>
  );
}
