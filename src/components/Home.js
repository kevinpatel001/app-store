import { useRef } from "react";
import Image from "next/image";

export default function Home() {
  const sliderRef = useRef(null);

  const handleNext = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: 320, // Width of one card + gap for smaller screens
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="relative w-[90%] overflow-hidden">
        {/* Slider */}
        <div
          ref={sliderRef}
          className="flex space-x-4 sm:space-x-6 md:space-x-8 lg:space-x-10 overflow-hidden scroll-smooth"
        >
          {/* 15 Cards */}
          {Array.from({ length: 15 }).map((_, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[250px] sm:w-[300px] md:w-[400px] lg:w-[500px] h-[180px] sm:h-[220px] md:h-[260px] lg:h-[280px] bg-white shadow-lg rounded-lg"
            >
              <div className="relative w-full h-24 sm:h-28 md:h-32 lg:h-40">
                <Image
                  src="/monkey-demon-banner.jpg" // Replace with your image path
                  alt={`Card ${index + 1}`}
                  fill
                  className="object-cover rounded-t-lg"
                />
              </div>
              <div className="p-2 sm:p-3 md:p-4">
                <h2 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-gray-800">
                  Black Legend: Monkey Demon
                </h2>
                <p className="text-xs sm:text-sm md:text-base text-gray-600 mt-1">
                  Journey to the West
                </p>
                <button className="mt-3 sm:mt-4 bg-orange-500 text-white w-full py-1 sm:py-2 rounded-md font-medium hover:bg-orange-600">
                  DOWNLOAD
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Next Button */}
        <button
          onClick={handleNext}
          className="absolute top-1/2 -translate-y-1/2 right-2 sm:right-4 md:right-6 bg-orange-500 text-white p-2 sm:p-3 rounded-full shadow-md hover:bg-orange-600"
        >
          &rarr;
        </button>
      </div>
    </div>
  );
}
