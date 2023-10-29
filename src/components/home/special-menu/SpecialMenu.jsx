import "./SpecialMenu.scss";
import { CONFIG } from "../../../config";
import { filter } from "../../../redux/slices/SpecialMenuSlice";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import Container from "../../common/container/Container";
import topImg from "../../../assets/Images/home-order-sec-icons/menu-top-bg.png";

import top from '../../../assets/pattern/menu-top-bg.png';
import bottom from '../../../assets/pattern/menu-bottom-bg.png';

const SpecialMenu = () => {
  const [active, setActive] = useState(1);
  const data = useSelector((state) => state.specialMenu.filteredMenu);
  const dispatch = useDispatch();

  return (
    <section className="special-menu">
      <div className="menu-top-picture">
       <img src={top}/>
      </div>
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
        <div className="special-menu-top-img">
          <img src={topImg} alt="menu-top" className="top-bottom-imgs"/>
        </div>
      </Container>
      <div className="menu-bottom-picture">
        <img src={bottom}/>
      </div>
    </section>
  );
};

export default SpecialMenu;
