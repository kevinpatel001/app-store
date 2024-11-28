export default function AppCard({ app }) {
  return (
    <div className="max-w-xs mx-auto bg-white rounded-lg shadow-lg overflow-hidden sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
      <img
        src={app.image}
        alt={app.name}
        className="w-full h-32 sm:h-40 md:h-48 lg:h-56 xl:h-64 object-cover"
      />
      <div className="p-4">
        <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold">
          {app.name}
        </h3>
        <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-600">
          {app.description}
        </p>
        <button className="mt-4 bg-primary text-white text-sm sm:text-base md:text-lg px-3 py-2 sm:px-4 sm:py-2.5 md:px-5 md:py-3 rounded-lg hover:bg-blue-600">
          Download
        </button>
      </div>
    </div>
  );
}
