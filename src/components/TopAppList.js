  
import Link from "next/link";

const apps = [
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
  ,
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

export default function TopAppList() {
  return (

    <div className="p-6">
        <div className="text-5xl pt-10 pb-10 text-center">TOP APP</div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {apps.map((app, index) => (
          <Link key={index} href={{
            pathname: '/AppDetails',
        query: { data: encodeURIComponent(JSON.stringify(app)) },
          }}
              className="group   flex flex-col items-center bg-white rounded-lg shadow-lg p-4 hover:bg-blue-50 transition-all duration-300"
              title={app.name}
            >
              <img
                src={app.image}
                alt={app.name}
                className="w-20 h-20 object-cover rounded-md mb-4"
              />
              <h3 className="text-lg text-red-800 font-medium text-gray-800 group-hover:text-blue-500">
                {app.name}
              </h3>
              <p className="text-sm text-gray-500">{app.category}</p>
              <span className="text-sm font-bold text-yellow-500">
                {app.rating} ★
              </span>
            
          </Link>
        ))}
      </div>
    </div>
  );
}
