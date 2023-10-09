import Container from "../common/container/Container";
import logo from "../../Assets/header-images/header-logo.png";
import Menu from "./menu/Menu";
import Blog from "./blog/Blog";
import Pages from "./pages/Pages";
import { CONFIG } from "../../config";
import { useEffect, useState } from "react";
const Header = () => {
  const [scrolled, setScrolled] = useState(false);
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
    window.addEventListener('scroll', handleScroll);

    // Remove the scroll event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={scrolled ? "fixed" : ""}>
      <Container>
       <div className="row">
        <div className="logo">
            <img src={logo} alt="" />
        </div>
        <ul>
            {
              CONFIG.headerConfig.map(({id, title, icon}) => {
                return (
                  <li 
                    className={id === 2 ? "menu-item" : id === 3 ? "blog-item" : id === 5 ? "page-item" : null}
                    key={id}
                  >
                  {icon}
                  {icon}
                  {title}
                  {id === 2 ? <Menu /> : null}
                  {id === 3 ? <Blog /> : null}
                  {id === 5 ? <Pages /> : null}
                </li>
                )
              })
            }
        </ul>
       </div>
      </Container>
    </header>)
};

export default Header;
