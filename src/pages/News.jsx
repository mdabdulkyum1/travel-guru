
import Navbar from "../components/Navbar/Navbar"
import ReuseAbleHero from "../components/shared/ReuseAbleHero/ReuseAbleHero"


function News() {
  return (
    <div>
        <Navbar></Navbar>
        <ReuseAbleHero>
            <div className="">
                <h1 className="text-4xl text-yellow-500">News</h1>
            </div>
        </ReuseAbleHero>
    </div>
  )
}

export default News