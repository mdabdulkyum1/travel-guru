import PropTypes from "prop-types";
import bannerImg from "../../../assets/Rectangle 1.png";



function ReuseAbleHero({ children }) {
  return (
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
            </div>

            <div className="w-[60%]">
              {children}
            </div>


        </div>
      </div>
    </div>
  </div>
  )
}

ReuseAbleHero.propTypes = {
  children: PropTypes.node
}

export default ReuseAbleHero