import Link from "next/link";

const apps = [
  {
    name: "WinZO: Ludo, Carrom, Rummy",
    category: "Casual",
    rating: "3.6",
    link: "/winzo",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Free Fire MAX",
    category: "Action",
    rating: "4.2",
    link: "/free-fire-max",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Ludo King®",
    category: "Board",
    rating: "4.1",
    link: "/ludo-king",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Zupee: Ludo apps Online",
    category: "Board",
    rating: "4.1",
    link: "/zupee",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Traffic Bike Rush Driving City",
    category: "Racing",
    rating: "4.0",
    link: "/traffic-bike",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Rush - Play Ludo app Online",
    category: "Ludo",
    rating: "4.3",
    link: "/rush-ludo",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Indian Bikes Driving 3D",
    category: "Simulation",
    rating: "4.2",
    link: "/indian-bikes",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Car Race 3D: Car Racing",
    category: "Racing",
    rating: "4.1",
    link: "/car-race-3d",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Real Moto Driving Racing World",
    category: "Racing",
    rating: "4.5",
    link: "/real-moto",
    image: "https://via.placeholder.com/150",
  },
];

export default function AppList() {
  return (
    <div className="p-4 sm:p-6 lg:p-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6 md:gap-8">
        {apps.map((app, index) => (
          <Link
            key={index}
            href={{
              pathname: "/AppDetails",
              query: { data: encodeURIComponent(JSON.stringify(app)) },
            }}
            className="group flex flex-col items-center bg-white rounded-lg shadow-lg p-4 sm:p-5 md:p-6 hover:bg-blue-50 transition-all duration-300"
            title={app.name}
          >
            <img
              src={app.image}
              alt={app.name}
              className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 object-cover rounded-md mb-3 sm:mb-4"
            />
            <h3 className="text-sm sm:text-base md:text-lg font-medium text-gray-800 group-hover:text-blue-500 text-center">
              {app.name}
            </h3>
            <p className="text-xs sm:text-sm md:text-base text-gray-500 text-center">
              {app.category}
            </p>
            <span className="text-xs sm:text-sm md:text-base font-bold text-yellow-500">
              {app.rating} ★
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
