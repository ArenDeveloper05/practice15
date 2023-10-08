import "./Home.scss";
import { LatestNews } from "./home-latest-news/LatestNews";
import HomeOrderSection from "./home-order-section/HomeOrderSection";
import HomeSlider from "./home-slider/HomeSlider";

const Home = () => {
  return (
    <div className="home">
      <HomeSlider />
      <HomeOrderSection />
      <LatestNews/>
      {/* kody grelu eq aystex, baci headeric ev footeric, qani vor nranq gtnvum en Layout-i mej!!!! */}
    </div>
  );
};

export default Home;
