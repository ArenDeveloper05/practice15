import "./Home.scss";
import SpecialMenu from "./special-menu/SpecialMenu"
import { Booking } from "./home-section-booking/Booking";
import { LatestNews } from "./home-latest-news/LatestNews";
import HomeOrderSection from "./home-order-section/HomeOrderSection";
import HomeSlider from "./home-slider/HomeSlider";
import SpecialProducts from "./speciality/special-products/SpecialProducts";

const Home = () => {
  return (
    <div className="home">
      <HomeSlider />
      <HomeOrderSection />
      <SpecialProducts />
      <SpecialMenu />
      <Booking/>
      <LatestNews />
      {/* kody grelu eq aystex, baci headeric ev footeric, qani vor nranq gtnvum en Layout-i mej!!!! */}
    </div>
  );
};

export default Home;
