import Container from "../common/container/Container";
import PageBanner from "../common/page-banner/PageBanner";
import bannerimg from "../../assets/blog-bars-images/blog-1.jpg";
import "./ShoppingCart.scss";
import ShoppingCartTable from "./shopping-cart-table/ShoppingCartTable";
import { FaAngleLeft } from "react-icons/fa";
import Taxes from "./shopping-cart-table/taxes/Taxes";

const ShoppingCart = () => {
  return (
    <section className="shopping-cart">
      <PageBanner
        background={bannerimg}
        title={"shopping cart"}
        firstDirectionPoint={"Home"}
        secondDirectionPoint={"Shopping Cart"}
      />
      <Container>
        <div className="shopping-cart-cont">
          <div className="shopping-cart-cont-table">
            <ShoppingCartTable />
          </div>
          <div className="shopping-cart-cont-buttons">
            <a href="#" className="button">
              <FaAngleLeft />
              Continue Shopping
            </a>
            <a href="#" className="button">
              Update Cart
            </a>
          </div>
          <Taxes />
          <a href="#" className="button prev">
            Proceed to checkout
          </a>
        </div>
      </Container>
    </section>
  );
};

export default ShoppingCart;
