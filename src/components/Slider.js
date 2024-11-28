import { useRef } from "react";
import Image from "next/image";

export default function Slider() {
  const sliderRef = useRef(null);

  const handleWheel = (e) => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: e.deltaX, // Use deltaX to scroll horizontally
        behavior: "smooth",
      });
    }
  };

  const handleNext = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: 520, // Width of one card + gap
        behavior: "smooth",
      });
    }
  };

  return (
    <div
      className="h-96 pt-10 bg-gray-100 flex items-center justify-center"
      onWheel={handleWheel} // Attach the wheel handler
    >
      <div className="relative w-[90%] overflow-hidden">
        {/* Slider */}
        <div
          ref={sliderRef}
          className="flex space-x-5 overflow-hidden scroll-smooth"
          style={{ width: "100%" }}
        >
          {/* 15 Cards */}
          {Array.from({ length: 15 }).map((_, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-full sm:w-[500px] h-[280px] bg-white shadow-lg rounded-lg"
            >
              <div className="relative w-full h-40">
                <Image
                  src="/monkey-demon-banner.jpg" // Replace with your image path
                  alt={`Card ${index + 1}`}
                  fill
                  className="object-cover rounded-t-lg"
                />
              </div>
              <div className="p-4">
                <h2 className="text-base sm:text-lg font-bold text-gray-800">
                  Black Legend: Monkey Demon
                </h2>
                <p className="text-gray-600 text-xs sm:text-sm mt-1">
                  Journey to the West
                </p>
                <button className="mt-1 bg-orange-500 text-white w-full py-2 rounded-md font-medium hover:bg-orange-600 text-sm sm:text-base">
                  DOWNLOAD
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Next Button */}
        <button
          onClick={handleNext}
          className="absolute top-1/2 -translate-y-1/2 right-4 bg-orange-500 text-white p-3 rounded-full shadow-md hover:bg-orange-600"
        >
          &rarr;
        </button>
      </div>
    </div>
  );
}
