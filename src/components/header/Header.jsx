import Container from "../common/container/Container";
import logo from "../../Assets/header-images/header-logo.png";
import Menu from "./menu/Menu";
import Blog from "./blog/Blog";
import Pages from "./pages/Pages";
import { CONFIG } from "../../config";
const Header = () => {

  return (
    <header>
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
