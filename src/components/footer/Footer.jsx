import { CONFIG } from "../../config";
import Container from "../common/container/Container";
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaTwitter } from 'react-icons/fa'
import "./Footer.scss";


const Footer = () => {
  return <footer className="footer">
    <Container>
    <div className="footer-header">
      {
        CONFIG.footerConfig.footer_header.map(({id, image, title}) => {
          return (
            <h2 key={id}>
              <img src={image} alt="" />
              {title}
            </h2>
          )
        })
      }
    </div>
    <div className="footer-body">
      <div className="first-footer-list">
        <ul >
          {
            CONFIG.footerConfig.first_footer_list.map(({id, title}) => {
              return (
                <li key={id}>{title}</li>
              )
            })
          }
        </ul>
      </div>
      <div className="second-footer-list">
      <ul>
        {
          CONFIG.footerConfig.second_footer_list.first_column.map(({id, title}) => {
            return (
              <li key={id} >{title}</li>
            )
          })
        }
      </ul>
      <ul>
      {
          CONFIG.footerConfig.second_footer_list.second_column.map(({id, title}) => {
            return (
              <li key={id} className={`${ id === 4 ? "closed" : id === 3 ? "everyday" : "" }`}>{title}</li>
            )
          })
        }
      </ul>
      </div>
        <div className="third-footer-list">
        <ul>
        {
          CONFIG.footerConfig.third_footer_list.map(({id, title}) =>{
            return(
              <li key={id}>{title}</li>
            )
          })
        }
      </ul>
        </div>

    </div>
    <div className="copy-text">
      <div>
        <p>
        © Pizzon all Rights Reserved. Designed by 
        <a href="#">TemplatesCoder</a>
        </p>
      </div>
      <div className="footer-icons">
        {/* {
          CONFIG.singlePizzaOrderList.share.map(({id, icon, name}) => {
              return <a key={id} style={{display: id === 1 ? "none" : "block"}}>{icon}{name}</a>
          })
        } */}
        <a href="#"><FaFacebookF /></a>
        <a href="#"><FaTwitter /></a>
        <a href="#"><FaLinkedinIn /></a>
        <a href="#"><FaInstagram/></a>
      </div>
    </div>
    </Container>
  </footer>;

};

export default Footer;
