import React from "react";
import PageBanner from "../common/page-banner/PageBanner";
import checkoutBanner from "./../../assets/checkout/checkoutBanner.jpg";
import Container from "../common/container/Container";
import "./Checkout.scss";
import { useSelector } from "react-redux";

const Checkout = () => {
  const data = useSelector((state) => state.pizzaReview.pizza_in_basket);
  console.log(data);
  return (
    <div>
      <PageBanner
        background={checkoutBanner}
        title={"CHECKOUT"}
        firstDirectionPoint={"Home"}
        secondDirectionPoint={"Cart"}
        thirdDirectionPoint={"Checkout"}
      />
      <section>
        <Container>
          <div className="checkout">
            <div className="checkout-billing-details">
              <h3 className="checkout-header">BILLING DETAILS</h3>
              <form>
                <label className="checkout-label">Full name*</label> <br />
                <input type="text" className="checkout-inputs" /> <br />
                <label className="checkout-label">Company name</label> <br />
                <input type="text" className="checkout-inputs" /> <br />
                <label className="checkout-label">Email</label> <br />
                <input type="Email" className="checkout-inputs" /> <br />
                <label className="checkout-label">Phone No*</label> <br />
                <input type="phone" className="checkout-inputs" /> <br />
                <label className="checkout-label">Country</label> <br />
                <input type="text" className="checkout-inputs" /> <br />
                <label className="checkout-label">Address</label> <br />
                <input type="address" className="checkout-inputs" />
                <br />
              </form>
              {/* Post information */}
              <form className="checkout-post-info">
                <div style={{ width: "50%" }}>
                  <label className="checkout-label">Pastcode / Zip*</label>
                  <input type="text" className="checkout-inputs" />
                </div>
                <div style={{ width: "50%" }}>
                  <label className="checkout-label">Town / City*</label>
                  <input type="text" className="checkout-inputs" />
                </div>
              </form>
              <form className="checkout-checkbox">
                <input
                  type="checkbox"
                  style={{ height: "16px", width: "16px" }}
                />
                <label>Create an Account?</label>
              </form>
              <div className="checkout-shopping-details">
                <h3
                  style={{
                    marginBottom: "20px",
                    fontSize: "22px",
                    color: "black",
                  }}
                >
                  SHIPPING DETAILS
                </h3>
                <form className="checkout-checkbox">
                  <input
                    type="checkbox"
                    style={{ height: "16px", width: "16px" }}
                  />
                  <label>Ship to a different address?</label>
                </form>
                <span style={{ fontSize: "17px", color: "black" }}>
                  Order Notes
                </span>
                <div className="checkout-notes ">
                  <p>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words which don't
                    look even slightly believable. If you are going to use a
                  </p>
                </div>
              </div>
            </div>
            <div className="checkout-your-order">
              <h3
                style={{
                  color: "black",
                  fontSize: "22px",
                }}
              >
                YOUR ORDER
              </h3>
              {data.map(({ id, img, name, price, qty }) => {
                return (
                  <div className="checkout-your-order-list">
                    <div className="checkout-your-order-list-image">
                      <img src={img} alt="" />
                    </div>
                    <div>
                      <h4
                        style={{ fontWeight: "600" }}
                        className="checkout-your-order-list-name"
                      >
                        {name}
                      </h4>
                      <p
                        style={{
                          color: "orange",
                          fontWeight: "600",
                          fontSize: "18px",
                          marginBottom: "7px",
                        }}
                      >
                        {price}
                      </p>
                      <span style={{ fontWeight: "500" }}>Qty: {qty}</span>
                    </div>
                  </div>
                );
              })}
              <table className="checkout-your-order-table">
                <tbody>
                  <tr>
                    <td style={{ color: "black", fontWeight: "600" }}>
                      Order Places :
                    </td>
                    <td style={{ color: "black" }}> 17 February 2020</td>
                  </tr>
                  <tr>
                    <td style={{ color: "black", fontWeight: "600" }}>
                      Total :
                    </td>
                    <td
                      style={{
                        color: "orange",
                        fontWeight: "900",
                        fontSize: "18px",
                      }}
                    >
                      $160.00
                    </td>
                  </tr>
                  <tr>
                    <td style={{ color: "black", fontWeight: "600" }}>
                      Payment :
                    </td>
                    <td style={{ color: "black" }}> COD</td>
                  </tr>
                  <tr>
                    <td style={{ color: "black", fontWeight: "600" }}>
                      Order No. :
                    </td>
                    <td style={{ color: "black" }}> #011052</td>
                  </tr>
                </tbody>
              </table>
              <button className="checkout-your-order-placeButton">
                PLACE ORDER
              </button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Checkout;
