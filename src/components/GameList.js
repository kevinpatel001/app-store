  
import Link from "next/link";

const games = [
  {
    name: "WinZO: Ludo, Carrom, Rummy",
    category: "Casual",
    rating: "3.6",
    link: "/winzo",
    image: "https://via.placeholder.com/150", // Replace with the actual image URL
    appDescription: `
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
    `,
    icon: "/icon/icon.png",
    version: "1.0",
    screenshort: ["/image/screenshorts.png", "/image/screenshorts.png", "/image/screenshorts.png"],
    applink: "https://apk-dym.vdmapk.com/data/apkv2/vidmate_v5.2743_20241029102607.apk?pub=com.nemo.vidmate.app.websitevdmofficial",
  },
  {
    name: "Free Fire MAX",
    category: "Action",
    rating: "4.2",
    link: "/free-fire-max",
    image: "https://via.placeholder.com/150",
    appDescription: `
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
    `,
    icon: "https://w7.pngwing.com/pngs/23/300/png-transparent-female-game-character-holding-sword-illustration-garena-rov-mobile-moba-garena-free-fire-gunny-league-of-legends-league-of-legends-game-computer-fictional-character.png",
    version: "1.0",
    screenshort: ["/image/screenshorts.png", "/image/screenshorts.png", "/image/screenshorts.png"],
    applink: "https://apk-dym.vdmapk.com/data/apkv2/vidmate_v5.2743_20241029102607.apk?pub=com.nemo.vidmate.app.websitevdmofficial",
  },
  {
    name: "Ludo King®",
    category: "Board",
    rating: "4.1",
    link: "/ludo-king",
    image: "https://via.placeholder.com/150",
    appDescription: `
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
    `,
    icon: "/icon/icon.png",
    version: "1.0",
    screenshort: ["/image/screenshorts.png", "/image/screenshorts.png", "/image/screenshorts.png"],
    applink: "https://apk-dym.vdmapk.com/data/apkv2/vidmate_v5.2743_20241029102607.apk?pub=com.nemo.vidmate.app.websitevdmofficial",
  },
  {
    name: "Zupee: Ludo apps Online",
    category: "Board",
    rating: "4.1",
    link: "/zupee",
    image: "https://via.placeholder.com/150",
    appDescription: `
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
    `,
    icon: "/icon/icon.png",
    version: "1.0",
    screenshort: ["/image/screenshorts.png", "/image/screenshorts.png", "/image/screenshorts.png"],
    applink: "https://apk-dym.vdmapk.com/data/apkv2/vidmate_v5.2743_20241029102607.apk?pub=com.nemo.vidmate.app.websitevdmofficial",
  },
  {
    name: "Traffic Bike Rush Driving City",
    category: "Racing",
    rating: "4.0",
    link: "/traffic-bike",
    image: "https://via.placeholder.com/150",
    appDescription: `
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
    `,
    icon: "/icon/icon.png",
    version: "1.0",
    screenshort: ["/image/screenshorts.png", "/image/screenshorts.png", "/image/screenshorts.png"],
    applink: "https://apk-dym.vdmapk.com/data/apkv2/vidmate_v5.2743_20241029102607.apk?pub=com.nemo.vidmate.app.websitevdmofficial",
  },
  {
    name: "Rush - Play Ludo app Online",
    category: "Ludo",
    rating: "4.3",
    link: "/rush-ludo",
    image: "https://via.placeholder.com/150",
    appDescription: `
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
    `,
    icon: "/icon/icon.png",
    version: "1.0",
    screenshort: ["/image/screenshorts.png", "/image/screenshorts.png", "/image/screenshorts.png"],
    applink: "https://apk-dym.vdmapk.com/data/apkv2/vidmate_v5.2743_20241029102607.apk?pub=com.nemo.vidmate.app.websitevdmofficial",
  },
  {
    name: "Indian Bikes Driving 3D",
    category: "Simulation",
    rating: "4.2",
    link: "/indian-bikes",
    image: "https://via.placeholder.com/150",
    appDescription: `
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
    `,
    icon: "/icon/icon.png",
    version: "1.0",
    screenshort: ["/image/screenshorts.png", "/image/screenshorts.png", "/image/screenshorts.png"],
    applink: "https://apk-dym.vdmapk.com/data/apkv2/vidmate_v5.2743_20241029102607.apk?pub=com.nemo.vidmate.app.websitevdmofficial",
  },
  {
    name: "Car Race 3D: Car Racing",
    category: "Racing",
    rating: "4.1",
    link: "/car-race-3d",
    image: "https://via.placeholder.com/150",
    appDescription: `
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
    `,
    icon: "/icon/icon.png",
    version: "1.0",
    screenshort: ["/image/screenshorts.png", "/image/screenshorts.png", "/image/screenshorts.png"],
    applink: "https://apk-dym.vdmapk.com/data/apkv2/vidmate_v5.2743_20241029102607.apk?pub=com.nemo.vidmate.app.websitevdmofficial",
  },
  {
    name: "Real Moto Driving Racing World",
    category: "Racing",
    rating: "4.5",
    link: "/real-moto",
    image: "https://via.placeholder.com/150",
    appDescription: `
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
    `,
    icon: "/icon/icon.png",
    version: "1.0",
    screenshort: ["/image/screenshorts.png", "/image/screenshorts.png", "/image/screenshorts.png"],
    applink: "https://apk-dym.vdmapk.com/data/apkv2/vidmate_v5.2743_20241029102607.apk?pub=com.nemo.vidmate.app.websitevdmofficial",
  }
];

export default function GameList() {
  return (
    <div className="p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12">
      <div className="text-5xl sm:text-4xl lg:text-5xl pt-6 sm:pt-8 lg:pt-10 pb-6 sm:pb-8 lg:pb-10 text-center">
        GAME LIST
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
        {games.map((game, index) => (
          <Link
            key={index}
            href={{
              pathname: '/AppDetails',
              query: { data: encodeURIComponent(JSON.stringify(game)) },
            }}
            className="group flex flex-col items-center bg-white rounded-lg shadow-lg p-4 sm:p-5 md:p-6 hover:bg-blue-50 transition-all duration-300"
            title={game.name}
          >
            <img
              src={game.image}
              alt={game.name}
              className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 object-cover rounded-md mb-4"
            />
            <h3 className="text-base sm:text-lg lg:text-xl font-medium text-gray-800 group-hover:text-blue-500">
              {game.name}
            </h3>
            <p className="text-xs sm:text-sm lg:text-base text-gray-500">
              {game.category}
            </p>
            <span className="text-xs sm:text-sm lg:text-base font-bold text-yellow-500">
              {game.rating} ★
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
