import "./SpecialMenu.scss";
import { CONFIG } from "../../../config";
import { filter } from "../../../redux/slices/SpecialMenuSlice";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import Container from "../../common/container/Container";

const SpecialMenu = () => {
  const [active, setActive] = useState(1);
  const data = useSelector((state) => state.specialMenu.filteredMenu);
  const dispatch = useDispatch();

  return (
    <section className="special-menu">
      <Container>
        <div className="special-menu-title">
          <p>Fresh From Pizzon</p>
          <h2>OUR SPECIAL MENU</h2>
          <ul className="special-menu-title-nav">
            {CONFIG.specialMenuConfig.map(({ id, title }) => {
              return (
                <li
                  key={id}
                  onClick={() => {
                    if (id !== active) {
                      dispatch(filter(title.toLowerCase()));
                      setActive(id);
                    }
                  }}
                >
                  <a
                    style={{
                      backgroundColor: active === id ? "orange" : "transparent",
                    }}
                  >
                    {title}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="special-menu-items">
          {data.map(({ id, name, price, text, image }) => {
            return (
              <div className="special-menu-items-item" key={id}>
                <div className="special-menu-items-item-img">
                  <a href="">
                    <img src={image} alt="" />
                  </a>
                </div>
                <a>{name}</a>
                <p>{text}</p>
                <p>${price}0</p>
              </div>
            );
          })}
          {data.length === 0 && <h2>There is Nothing</h2>}
        </div>
      </Container>
    </section>
  );
};

export default SpecialMenu;