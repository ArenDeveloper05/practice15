import "./Home.scss";
import SpecialMenu from "./special-menu/SpecialMenu"
import { Booking } from "./home-section-booking/Booking";
import { LatestNews } from "./home-latest-news/LatestNews";
import HomeOrderSection from "./home-order-section/HomeOrderSection";
import HomeSlider from "./home-slider/HomeSlider";
import SpecialProducts from "./speciality/special-products/SpecialProducts";
import { BestChef } from "./home-best-chef-slider/BestChef";
import {CustomerReviews} from '../home/home-reviews-slider/CustomerReviews';
import PizzonIntro from '../home/pizzon-intro/PizzonIntro';


const Home = () => {
  return (
    <div className="home">
      <HomeSlider />
      <HomeOrderSection />
      <SpecialProducts />
      <SpecialMenu />
      <Booking/>
      <BestChef/>
      <LatestNews />
      <CustomerReviews/>
      <PizzonIntro />
      {/* kody grelu eq aystex, baci headeric ev footeric, qani vor nranq gtnvum en Layout-i mej!!!! */}
    </div>
  );
};

export default Home;
