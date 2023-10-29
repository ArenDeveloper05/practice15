import Container from "../common/container/Container";
import logo from "../../assets/header-images/header-logo.png";
import Menu from "./menu/Menu";
import Blog from "./blog/Blog";
import Pages from "./pages/Pages";
import { CONFIG } from "../../config";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ROUTER } from "../../router/router";
import ShoppingCardDropdown from "./shopping-card-dropdown/ShoppingCardDropdown";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    // Function to handle the scroll event
    const handleScroll = () => {
      // Check if the scroll position is greater than 0
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    // Add the scroll event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Remove the scroll event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const routes = [
    ROUTER.HOME_PAGE_ROUTE,
    ROUTER.MENU_PAGE_ROUTE,
    ROUTER.BLOG_LEFTSIDE_PAGE_ROUTE,
    ROUTER.RESERVATION_PAGE_ROUTE,
  ];

  return (
    <header className={scrolled ? "fixed" : ""}>
      <Container>
        <div className="row">
          <div
            className="logo"
            onClick={() => {
              navigate(routes[0]);
            }}
          >
            <img src={logo} alt="" />
          </div>
          <ul>
            {CONFIG.headerConfig.map(({ id, title, icon }, i) => {
              return (
                <li
                  key={id}
                  onClick={() => {
                    if (id === 1) navigate("/");
                  }}
                  className={
                    id === 2
                      ? "menu-item"
                      : id === 3
                      ? "blog-item"
                      : id === 5
                      ? "page-item"
                      : id === 7
                      ? "shopping_cart_item"
                      : null
                  }
                >
                  {icon}
                  {icon}
                  {i < routes.length ? (
                    <Link to={routes[i]}>{title}</Link>
                  ) : (
                    title
                  )}
                  {id === 2 ? <Menu path={routes[1]} /> : null}
                  {id === 3 ? <Blog /> : null}
                  {id === 5 ? <Pages /> : null}
                  {id === 7 ? <ShoppingCardDropdown /> : null}
                </li>
              );
            })}
          </ul>
        </div>
      </Container>
    </header>
  );
};

export default Header;
