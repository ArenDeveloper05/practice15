import "./Booking.scss";
import React, { useState } from "react";
import Container from "../../common/container/Container";
import call from "../../../assets/home-booking/call.png";
import { AiOutlineUp } from "react-icons/ai";
import bottomImg from "../../../assets/Images/home-order-sec-icons/menu-bottom-bg.png";
import topImg from "../../../assets/Images/home-order-sec-icons/menu-top-bg.png";

export const Booking = () => {
  const [down, setDown] = useState(false);
  const persons = [
    { id: 1, title: "Person 5" },
    { id: 2, title: "Person 4" },
    { id: 3, title: "Person 3" },
  ];
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <section className="booking">
      <Container>
        <div className="booking-container-top-img top-bottom-imgs">
          <img src={bottomImg} alt="menu-top" />
        </div>
        <div className="booking-container">
          <div className="booking-left-side">
            <p>Fresh From Pizzon</p>
            <h1>BOOK ONLINE</h1>
            <span>
              Sit amet, consectetur adipiscing elit quisque eget maximus velit,
              non eleifend libero curabitur dapibus mauris sed leo cursus
              aliquetcras suscipit. Sit amet, consectetur adipiscing elit
              quisque eget maximus velit, non eleifend libero curabitur
            </span>
            <div className="booking-left-side-contacts">
              <img src={call} alt="call" />
              <p>+ 91 123 456 789 0</p>
            </div>
          </div>
          <div className="booking-right-side">
            <h1>BOOK A TABLE</h1>
            <div className="booking-right-side-inputs">
              <input type="text" placeholder="Name" />
              <input type="email" placeholder="Email" />
              <div
                className="booking-right-side-inputs-visible"
                style={{
                  border: down ? "1px solid orange" : "1px solid #999999",
                  cursor: "pointer",
                }}
                onClick={() => {
                  setDown((prev) => !prev);
                }}
              >
                <p>{!selectedItem ? "How many persons?" : `${selectedItem}`}</p>
                <AiOutlineUp
                  style={{
                    animation: down
                      ? "rotate0 0.3s linear"
                      : "rotate180 0.3s linear",
                    transform: down ? "rotate(0deg)" : "rotate(180deg)",
                  }}
                />
              </div>
              <div
                className="booking-right-side-inputs-hidden"
                style={{
                  display: down ? "block" : "none",
                  animation: down
                    ? "show 0.5s ease-in-out"
                    : "hide 0.5s ease-in-out ",
                }}
              >
                {persons.map(({ id, title }) => {
                  return (
                    <div
                      className="booking-right-side-inputs-hidden-1"
                      key={id}
                      onClick={() => {
                        setSelectedItem(title);
                        setDown(() => {
                          setDown(!down);
                        });
                      }}
                    >
                      {title}
                    </div>
                  );
                })}
              </div>
              <input type="text" placeholder="Date" className="last-child" />
              <div className="button">
                <button>BOOK NOW</button>
              </div>
            </div>
          </div>
        </div>
        <div className="booking-container-bottom-img top-bottom-imgs">
          <img src={topImg} alt="menu-top" />
        </div>
      </Container>
    </section>
  );
};
