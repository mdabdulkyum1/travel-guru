import Navbar from "../components/Navbar/Navbar"
import BookingForm from "../components/shared/BookingForm/BookingForm";
import ReuseAbleHero from './../components/shared/ReuseAbleHero/ReuseAbleHero';

function Booking() {
  return (
    <div>
        <Navbar></Navbar>
        <ReuseAbleHero>
           <BookingForm></BookingForm>
        </ReuseAbleHero>
    </div>
  )
}

export default Booking