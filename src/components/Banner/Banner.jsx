import Navbar from "../Navbar/Navbar";
import bannerImg from "../../assets/Rectangle 1.png";
import BannerSlider from "../shared/BannerSlider";
import { Link } from "react-router-dom";


function Banner() {
  return (
    <div className="relative">
      <Navbar></Navbar>
      <div className="">
        <div
          className="hero min-h-screen "
          style={{
            backgroundImage: `url(${bannerImg})`,
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
