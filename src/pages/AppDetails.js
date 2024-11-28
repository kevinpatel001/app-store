import { useRouter } from "next/router";
import { useEffect } from "react";

const AppDetails = () => {
  const router = useRouter();
  const { data } = router.query;

  const decodedObject = data ? JSON.parse(decodeURIComponent(data)) : null;

  const {
    name = decodedObject?.name ? decodedObject?.name : "No App name",
    appDescription = decodedObject?.appDescription ? decodedObject?.appDescription : "",
    icon = decodedObject?.icon ? decodedObject?.icon : "",
    version = decodedObject?.version ? decodedObject?.version : "0",
    screenshort = decodedObject?.screenshort ? decodedObject?.screenshort : [],
    applink = decodedObject?.applink ? decodedObject?.applink : "No app link",
  } = router.query;



  const handleDownload = () => {
    try {
      const link = document.createElement("a");
      link.href = applink; // Replace with your file URL
      link.download = name; // Specify the file name for download
      link.click();
    } catch (e) {
      console.log("Error ", e);
    }
  };

  useEffect(() => {
    console.log("decodedObject :", decodedObject)
  }, [])

  return (
    <div className="bg-gray-100 min-h-screen p-5 flex justify-center items-center">
      <div className="bg-white w-full sm:max-w-lg md:max-w-4xl p-6 sm:p-8 rounded-3xl shadow-xl space-y-6 sm:space-y-8">
        {/* Header Section */}
        <header className="flex flex-col sm:flex-row items-center mb-6 sm:mb-8">
          <div className="flex-shrink-0">
            <img
              src={icon}
              alt="Icon"
              className="w-20 h-20 sm:w-24 sm:h-24 rounded-lg shadow-md"
            />
          </div>
          <div className="sm:ml-6 mt-4 sm:mt-0 text-center sm:text-left">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-800">{name}</h1>
            <p className="text-gray-600 pt-3 text-sm">App Dev</p>
            <p className="text-gray-600 pt-3 text-sm">Version : {version}</p>
            <div className="text-gray-500 text-sm space-y-1">
              <p>Rated for only 18+</p>
            </div>
          </div>
        </header>

        {/* Install Button */}
        <div className="text-center">
          <button
            onClick={handleDownload}
            className="bg-blue-600 text-white px-8 py-3 
            sm:px-10 sm:py-4 rounded-lg text-lg sm:text-xl font-semibold 
            w-full
            shadow-lg hover:bg-blue-700 hover:shadow-2xl focus:outline-none transition duration-300"
          >
            Install
          </button>
        </div>

        {/* Gallery Section */}
        <section>
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-700 text-center mb-4">Screenshots</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {screenshort.map((data, index) => (
              <img
                key={index}
                src={data}
                alt={`Screenshot ${index + 1}`}
                className="w-full h-32 sm:h-48 rounded-xl object-cover shadow-md transition duration-300 hover:scale-105"
              />
            ))}
          </div>
        </section>

        {/* About Section */}
        <section>
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-700 mb-4">About This App</h2>
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
            {appDescription}
          </p>
        </section>
      </div>
    </div>
  );
};

export default AppDetails;
