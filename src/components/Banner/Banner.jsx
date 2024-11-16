import Navbar from "../Navbar/Navbar";
import BannerSlider from "../shared/BannerSlider";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { PlaceContext } from "../../providers/PlaceProvider";


function Banner() {

  const [data, setData] = useState([]);
  
  const { places, activeIndex } = useContext(PlaceContext);


useEffect(() => {
 const data =  places.find(places=> {
  return places.id === activeIndex;
})
setData(data)
} ,[places, activeIndex])

console.log(activeIndex)

  return (
    <div className="relative">
      <Navbar></Navbar>
      <div className="">
        <div
          className="hero min-h-screen "
          style={{
            backgroundImage: `url(${data?.image})`,
          }}
        >
          <div className="hero-overlay bg-opacity-80"></div>
          <div className="hero-content text-neutral-content">
            <div className="flex">
                
                <div className="w-[40%] space-y-3">
                    <h1 className="uppercase text-6xl font-bold">Cox&apos;s bazar</h1>
                    <p>Cox&apos;s Bazar is a city, fishing port, tourism centre and district headquarters in southeastern Bangladesh. It is famous mostly for its long natural sandy beach, and it ...</p>
                    <Link to="/booking" className="btn bg-yellow-500">Booking</Link>          
                </div>

                <div className="w-[60%]">
                    <BannerSlider></BannerSlider>
                </div>


            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
