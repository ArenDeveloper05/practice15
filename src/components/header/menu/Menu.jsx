import { useNavigate, useParams } from "react-router-dom";
import { CONFIG } from "../../../config";
import Container from "../../common/container/Container";
import { useDispatch } from "react-redux";
import { filter } from "../../../redux/slices/pizzaReviewSlice";

const Menu = ({ path }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <div className="menu-dropdown">
      <Container>
        <div className="pizzas">
          {CONFIG.menuConfig.pizzas.map(({ id, img, name, price }) => {
            return (
              <div
                key={id}
                onClick={() => {
                  navigate(`/menu/${id}`);
                }}
              >
                <img src={img} alt="" />
                <div className="about-pizza">
                  <p>{name}</p>
                  <p className="pizza-price">{price}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="menu-list">
          <ul>
            {CONFIG.menuConfig.menuListConfig.map(({ id, title }) => {
              return (
                <li
                  key={id}
                  onClick={() => {
                    if (id < 3) navigate(path);
                  }}
                >
                  {title}
                </li>
              );
            })}
          </ul>
        </div>
      </Container>
    </div>
  );
};

export default Menu;
