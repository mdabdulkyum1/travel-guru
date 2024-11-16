import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { useContext, useEffect, useRef } from "react";
import { PlaceContext } from "../../providers/PlaceProvider";

function BannerSlider() {
  const { places, activeIndex, setActiveIndex } = useContext(PlaceContext);
  const swiperRef = useRef(null); // Create a reference for the Swiper instance

  // Log the current active index when it changes
  useEffect(() => {
    console.log("Current active slide index:", activeIndex);
  }, [activeIndex]);

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.realIndex);  
  };

  useEffect(() => {
    // Ensure swiper navigation buttons are initialized
    if (swiperRef.current) {
      swiperRef.current.swiper.update(); // Manually trigger swiper update
    }
  }, [places]); // Run once when places data is loaded

  return (
    <div className="max-w-[1200px] mx-auto relative">
      {/* Custom navigation buttons */}
      <div className="absolute bottom-10 flex gap-3 z-10">
        <button className="custom-prev bg-white text-black p-2 rounded-full">
          <FaAngleLeft size={20} />
        </button>
        <button className="custom-next bg-white text-black p-2 rounded-full">
          <FaAngleRight size={20} />
        </button>
      </div>

      <Swiper
        onSlideChange={handleSlideChange} // Correct event for slide change
        modules={[Navigation, Pagination]}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        pagination={{ clickable: true }}
        loop={true}
        spaceBetween={20}
        slidesPerView={3}
        initialSlide={0}  // Start from the first slide
        className="w-full"
        ref={swiperRef} // Attach the swiper instance to the ref
      >
        {places.map((place, index) => (
          <SwiperSlide
            key={place.id}
            className={`relative rounded-lg overflow-hidden transition-all duration-300 ${activeIndex === index ? "border-4 border-yellow-500" : ""}`} // Apply yellow border to active slide
          >
            <div className="relative">
              <img
                src={place.image}
                alt={place.name}
                className="w-full h-[365px] object-cover"
              />
              <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 p-2 text-white font-bold text-center">
                {place.name}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default BannerSlider;
