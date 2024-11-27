export default function AppCard({ app }) {
  return (
    <div className="max-w-xs mx-auto bg-white rounded-lg shadow-lg overflow-hidden sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
      <img 
        src={app.image} 
        alt={app.name} 
        className="w-full h-48 object-cover" 
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{app.name}</h3>
        <p className="text-sm text-gray-600">{app.description}</p>
        <button className="mt-4 bg-primary text-white px-4 py-2 rounded-lg hover:bg-blue-600">
          Download
        </button>
      </div>
    </div>
  );
}
