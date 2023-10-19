import React, { useState } from "react";
import PageBanner from "../common/page-banner/PageBanner";
import bannerBg from "./../../assets/reservation/bannerBg.jpg";
import Container from "../common/container/Container";
import "./Reservation.scss";
import { AiOutlineDown } from "react-icons/ai";

const Reservation = () => {
  const [down, setDown] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const time = [
    { id: 1, title: "Hour" },
    { id: 2, title: "minute" },
    { id: 3, title: "second" },
  ];
  const people = [
    { id: 1, title: "1" },
    { id: 2, title: "2" },
    { id: 3, title: "3" },
  ];
  return (
    <div>
      <PageBanner
        background={bannerBg}
        title={"Reservation"}
        firstDirectionPoint={"Home"}
        secondDirectionPoint={"Reservation"}
      />
      <section
        className="reservation
      "
      >
        <Container>
          <div className="book-table">
            <p>Make Online Reservation</p>
            <span>BOOK A TABLE</span>
            <div className="book-table-inputs">
              {/* left inputs */}
              <div className="book-table-inputs-left">
                <div
                  className="book-table-inputs-left-visibale"
                  style={{
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    setDown((prev) => !prev);
                  }}
                >
                  <p>{!selectedItem ? "Hour" : `${selectedItem}`}</p>
                  <AiOutlineDown
                    style={{
                      animation: down
                        ? "rotate180 0.3s linear"
                        : "rotate00 0.3s linear",
                      transform: down ? "rotate(180deg)" : "rotate(0deg)",
                    }}
                  />
                </div>
                <div
                  className="book-table-inputs-left"
                  style={{
                    display: down ? "block" : "none",
                    animation: down
                      ? "show 0.5s ease-in-out"
                      : "hide 0.5s ease-in-out ",
                  }}
                >
                  {time.map(({ id, title }) => {
                    return (
                      <div
                        className="book-table-inputs-left-hidden-first"
                        key={id}
                        onClick={() => {
                          setDown(() => setDown(!down));
                          setSelectedItem(title);
                        }}
                      >
                        {title}
                      </div>
                    );
                  })}
                </div>
                <input type="text" placeholder="Pick a Date" /> <br />
                <input type="text" placeholder="Name" />
              </div>
              {/* right inputs */}
              <div className="book-table-inputs-right">
                <div
                  className="book-table-inputs-right-visible"
                  style={{ cursor: "pointer" }}
                >
                  <p>Number of people</p>
                  <AiOutlineDown
                    style={{
                      animation: down
                        ? "rotate180 0.3s linear"
                        : "rotate00 0.3s linear",
                      transform: down ? "rotate(180deg)" : "rotate(0deg)",
                    }}
                  />
                </div>
                <input type="text" placeholder="Phone Number" /> <br />
                <input type="phone" placeholder="Email Address" />
              </div>
            </div>
            <input
              type="text"
              className="book-table-coments"
              placeholder="Coments"
            />{" "}
            <br />
            <button>BOOK A TABLE</button>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Reservation;
