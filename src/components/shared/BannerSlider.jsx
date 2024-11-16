// Import Swiper React components and styles
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { useContext, useState } from "react";
import { PlaceContext } from "../../providers/PlaceProvider";

function BannerSlider() {
const [activeIndex, setActiveIndex] = useState(0);
console.log(activeIndex)
  const { places } = useContext(PlaceContext);
  // console.log(places);



  const handelSlideChange = (swiper) => {
      setActiveIndex(swiper.activeIndex);
      console.log(swiper.activeIndex)
  }

  return (
    <div className="max-w-[1200px] mx-auto">
      {/* Custom navigation buttons */}
      <div className="absolute bottom-10 flex gap-3 ">
        <button className="custom-prev  bg-white text-black p-2 rounded-full">
          <FaAngleLeft size={20} />
        </button>
        <button className="custom-next  bg-white text-black p-2 rounded-full">
          <FaAngleRight size={20} />
        </button>
      </div>
      <Swiper
      onChange={handelSlideChange}
        modules={[Navigation, Pagination]}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        pagination={{ clickable: true }}
        spaceBetween={20}
        slidesPerView={3}
        className="w-full"
      >
        {places.map((place) => (
          <SwiperSlide key={place.id}>
            <div className="relative rounded-lg overflow-hidden">
              <img
                src={place.image}
                alt="Cox's Bazar"
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
