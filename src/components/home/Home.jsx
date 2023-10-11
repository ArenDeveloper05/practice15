import "./Home.scss";
import HomeSlider from "./home-slider/HomeSlider";
import SpecialProducts from "./speciality/special-products/SpecialProducts";

const Home = () => {
  return (
    <div className="home">
      <HomeSlider />
      <SpecialProducts />
      {/* kody grelu eq aystex, baci headeric ev footeric, qani vor nranq gtnvum en Layout-i mej!!!! */}
    </div>
  );
};

export default Home;
