import PageBanner from "../common/page-banner/PageBanner";
import banner from "../../assets/banner/menu-banner-1.png";
import { Booking } from "../home/home-section-booking/Booking";
import { CONFIG } from "../../config";
import Container from "../common/container/Container";
import "./Menu.scss";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BestChef } from "../home/home-best-chef-slider/BestChef";
import { setFilteredMenu } from "../../redux/slices/foodMenuSlice";

const Menu = () => {
  const [state, setState] = useState(CONFIG.specialMenuConfig[0].id);
  const globalMenu = useSelector((state) => state.foodMenu);
  const dispatch = useDispatch();

  return (
    <>
      <PageBanner
        background={banner}
        title={"Food Menu"}
        firstDirectionPoint={"Home"}
        secondDirectionPoint={"Menu 1"}
      />
      <section className="foodMenu">
        <Container>
          <div className="foodMenu-nav">
            <div className="foodMenu-nav-buttons">
              {CONFIG.specialMenuConfig.map(({ id, title, type }) => {
                return (
                  <div
                    key={id}
                    onClick={() => {
                      if (state !== id) {
                        setState(id);
                        dispatch(setFilteredMenu(type));
                      }
                    }}
                    style={
                      state === id
                        ? {
                            backgroundColor: "#fd9d3e",
                            color: "white",
                          }
                        : {
                            backgroundColor: "transparent",
                            color: "black",
                          }
                    }
                  >
                    {title}
                  </div>
                );
              })}
            </div>
          </div>
          <div className="foodMenu-list">
            {(state === 1 ? globalMenu.menu : globalMenu.filteredMenu).map(
              ({
                id,
                name,
                description,
                order,
                img,
                ingredient1,
                ingredient2,
                ingredient3,
              }) => {
                return (
                  <div className="foodMenu-list-item" key={id}>
                    <div className="foodMenu-list-item-img">
                      <img src={img} alt="" />
                    </div>
                    <div className="foodMenu-list-item-des">
                      <p>{name}</p>
                      <div>
                        <span>{ingredient1}</span> / <span>{ingredient2}</span>{" "}
                        / <span>{ingredient3}</span>
                      </div>
                      <span>{description}</span>
                      <a href="">{order}</a>
                    </div>
                  </div>
                );
              }
            )}
          </div>
        </Container>
      </section>
      <BestChef />
      <Booking />
    </>
  );
};

export default Menu;
