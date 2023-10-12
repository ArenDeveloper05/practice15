import { useState } from "react";
import { CONFIG } from "../../../config";
import Container from "../../common/container/Container";
import {filter} from "../../../redux/slices/SpecialMenuSlice";

import "../Home.scss";
import { useDispatch, useSelector } from "react-redux";


const SpecialMenu = () => {
    // const [active,setActive] = useState(null)
    const data = useSelector(state => state.specialMenu.filteredMenu)
    const dispatch = useDispatch();
   
 
  return (
    <section className="special-menu">
        <Container>
            <div className="special-menu-title">
                <p>Fresh From Pizzon</p>
                <h2>OUR SPECIAL MENU</h2>
                <ul className="special-menu-title-nav">
                    {CONFIG.specialMenuConfig.map(({ id, title, active }) => {
                        return (
                            <li 
                            key={id}
                            onClick={() => {
                                dispatch(filter(title.toLowerCase()))
                            }}
                             >
                                <a
                                    style={{backgroundColor: active === id? "orange": "transparent"}}
                                >{title}</a>
                            </li>
                        );
                    })}
                </ul>
                {/* <ul className="special-menu-title-nav">
                    <li>
                        <a onClick={() => {
                            dispatch(filteredByAll())
                        }} style={{backgroundColor: active? "orange" : "none"}}>ALL</a>
                    </li>
                    <li>
                        <a onClick={() => {
                            // dispatch(filteredByAll())
                            dispatch(filteredByDrinks())
                        }}>DRINKS</a>
                    </li>
                    <li>
                        <a onClick={() => {
                            // dispatch(filteredByAll())
                            dispatch(filteredBySalads())
                        }}>SALADS</a>
                    </li>
                    <li>
                        <a onClick={() => {
                            // dispatch(filteredByAll())
                            dispatch(filteredByPasta())
                        }}>PASTA</a>
                    </li>
                    <li>
                        <a>BURGERS</a>
                    </li>
                    <li>
                        <a onClick={() => {
                            dispatch(filteredBydesserts())
                        }}>DESERTS</a>
                    </li>
                    <li>
                        <a onClick={() => {
                            dispatch(filteredByPizzas())
                        }}>PIZZAS</a>
                    </li>
                </ul> */}
            </div>
            <div className="special-menu-items">
                {
                data.map(({id, name, price, text, image}) => {
                    return(
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
                    )

                })
                }
            </div>
        </Container>
    </section>
  )
}

export default SpecialMenu