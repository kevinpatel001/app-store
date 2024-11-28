import { useRef } from "react";
import Image from "next/image";

export default function Slider() {
  const sliderRef = useRef(null);

  const handleWheel = (e) => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: e.deltaY, // Translate vertical scroll to horizontal
        behavior: "smooth",
      });
    }
  };

  const handleNext = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: sliderRef.current.offsetWidth / 2, // Scroll half the slider's width
        behavior: "smooth",
      });
    }
  };

  return (
    <div
      className="h-96 mt-40 mb-16 overflow-hidden flex items-center justify-center bg-gray-100"
      onWheel={handleWheel} // Attach the wheel handler
    >
      <div className="relative w-[95%] max-w-[1200px] overflow-hidden">
        {/* Slider */}
        <div
          ref={sliderRef}
          className="flex space-x-4 overflow-x-auto scroll-smooth no-scrollbar"
        >
          {/* 15 Cards */}
          {Array.from({ length: 15 }).map((_, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[90vw] sm:w-[80vw] md:w-[45vw] lg:w-[30vw] xl:w-[25vw] h-[50vh] bg-white shadow-lg rounded-lg"
            >
              <div className="relative w-full h-1/2">
                <Image
                  src="/" // Replace with your image path
                  alt={`Card ${index + 1}`}
                  fill
                  className="object-cover rounded-t-lg"
                />
              </div>
              <div className="p-3 sm:p-4 md:p-5">
                <h2 className="text-base sm:text-lg md:text-xl font-bold text-gray-800">
                  Black Legend: Monkey Demon
                </h2>
                <p className="text-sm sm:text-base md:text-lg text-gray-600 mt-1">
                  Journey to the West
                </p>
                <button className="mt-3 bg-orange-500 text-white w-full py-2 rounded-md font-medium hover:bg-orange-600">
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
