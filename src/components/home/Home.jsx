import "./Home.scss";
import { Booking } from "./home-section-booking/Booking";
import HomeSlider from "./home-slider/HomeSlider";

const Home = () => {
  return (
    <div className="home">
      <HomeSlider />
      <Booking/>
      {/* kody grelu eq aystex, baci headeric ev footeric, qani vor nranq gtnvum en Layout-i mej!!!! */}
    </div>
  );
};

export default Home;
