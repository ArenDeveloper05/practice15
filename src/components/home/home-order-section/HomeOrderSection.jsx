import { CONFIG } from "../../../config";
import Container from "../../common/container/Container";
import "./HomeOrderSection.scss";
import OrderItem from "./order-item/OrderItem";
import top from "../../../assets/Images/home-slider-images/order-top.png";
import bottom from '../../../assets/pattern/order-bottom.png';
// import bottom from "../../../assets/Images/home-order-sec-icons/order-bottom.png";

const HomeOrderSection = () => {
  const { home_order_info } = CONFIG;
  return (
    <section className="home-order-section">
      <div className="home-order-section-top-img top-bottom-imgs">
        <img src={top} alt="img" className="home-order-section-top" />
      </div>
      <Container>
        <div className="home-order-section-items">
          {home_order_info.map(({ id, title, content, img }) => {
            return (
              <OrderItem key={id} title={title} content={content} img={img} />
            );
          })}
        </div>
      </Container>
      <div className="home-order-section-bottom-img top-bottom-imgs">
        <img src={bottom} alt="img" className="home-order-section-bottom" />
      </div>
    </section>
  )
}

export default HomeOrderSection;
