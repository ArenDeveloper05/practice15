import React from "react";
import Container from "../../../common/container/Container";
import "./../../Home.scss";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const SpecialProducts = () => {
  const ourSpectalityData = useSelector(
    (state) => state.ourSpeciality.ourSpectalityData
  );
  const navigate = useNavigate();
  return (
    <section>
      <Container>
        <div className="products">
          <h4 className="products-header">Fresh From Pizzon</h4>
          <h2
            style={{
              fontSize: "60px",
              fontFamily: "PT Sans Narrow, sans-serif",
              letterSpacing: "2px",
            }}
          >
            OUR SPECIALITY
          </h2>
          <div className="products-items">
            {ourSpectalityData.map(({ id, type, src }) => {
              return (
                <div className="pruducts-items-item" key={id}>
                  <img src={src} alt="Special Products" />
                  <h4 style={{ marginTop: "30px" }}>{type}</h4>
                </div>
              );
            })}
          </div>
          <button className="products-button" onClick={() => navigate("/")}>
            VIEW MORE
          </button>
        </div>
      </Container>
    </section>
  );
};

export default SpecialProducts;
