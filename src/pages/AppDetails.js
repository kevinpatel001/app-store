import { useRouter } from "next/router";
import { useEffect } from "react";

const AppDetails = () => {
  const router = useRouter();
  const { data } = router.query;

  // Safely decode and parse the data
  const decodedObject = data
    ? (() => {
        try {
          return JSON.parse(decodeURIComponent(data));
        } catch (e) {
          console.error("Error decoding data:", e);
          return null;
        }
      })()
    : null;

  // Destructure safely with fallbacks
  const {
    name = decodedObject?.name || "Unknown App",
    appDescription = decodedObject?.appDescription || "No description available.",
    icon = decodedObject?.icon || "/placeholder-icon.png",
    version = decodedObject?.version || "1.0",
    screenshort = decodedObject?.screenshort || [],
    applink = decodedObject?.applink || "#",
  } = decodedObject || {};

  // Handle download functionality
  const handleDownload = () => {
    try {
      const link = document.createElement("a");
      link.href = applink;
      link.download = name;
      link.click();
    } catch (e) {
      console.error("Error during download:", e);
    }
  };

  useEffect(() => {
    console.log("Decoded Object:", decodedObject);
  }, [decodedObject]);

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
            <p className="text-gray-600 pt-3 text-sm">Version: {version}</p>
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
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-700 text-center mb-4">
            Screenshots
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {Array.isArray(screenshort) && screenshort.length > 0 ? (
              screenshort.map((data, index) => (
                <img
                  key={index}
                  src={data}
                  alt={`Screenshot ${index + 1}`}
                  className="w-full h-32 sm:h-48 rounded-xl object-cover shadow-md transition duration-300 hover:scale-105"
                />
              ))
            ) : (
              <p className="text-gray-500 text-center col-span-2 sm:col-span-3">
                No screenshots available.
              </p>
            )}
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
