import "./Home.scss";
import SpecialMenu from "./special-menu/SpecialMenu"
import HomeSlider from "./home-slider/HomeSlider";

const Home = () => {
  return (
    <div className="home">
      <HomeSlider />
      <SpecialMenu />
      {/* kody grelu eq aystex, baci headeric ev footeric, qani vor nranq gtnvum en Layout-i mej!!!! */}
    </div>
  );
};

export default Home;
