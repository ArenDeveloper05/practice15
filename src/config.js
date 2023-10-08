import pizza_1 from "./Assets/Images/home-slider-images/banner-bg-1.png";
import pizza_3 from "./Assets/Images/home-slider-images/pizza-banner-2.png";
import pizza_2 from "./Assets/Images/home-slider-images/pizza-banner-1.png";
import greens_1 from "./Assets/Images/home-slider-images/banner-bg-2.png";
import greens_2 from "./Assets/Images/home-slider-images/banner-bg-3.png";
import greens_3 from "./Assets/Images/home-slider-images/banner-bg-4.png";
import greens_4 from "./Assets/Images/home-slider-images/banner-bg-5.png";
import greens_5 from "./Assets/Images/home-slider-images/pizza-2.png";
import greens_6 from "./Assets/Images/home-slider-images/pizza-10.png";
import tomato_1 from "./Assets/Images/home-slider-images/pizza-1.png";
import tomato_2 from "./Assets/Images/home-slider-images/pizza-5.png";
import tomato_3 from "./Assets/Images/home-slider-images/pizza-8.png";
import onion_1 from "./Assets/Images/home-slider-images/pizza-3.png";
import onion_2 from "./Assets/Images/home-slider-images/pizza-4.png";
import onion_3 from "./Assets/Images/home-slider-images/pizza-6.png";
import onion_4 from "./Assets/Images/home-slider-images/pizza-7.png";
import onion_5 from "./Assets/Images/home-slider-images/pizza-12.png";
import pepper_1 from "./Assets/Images/home-slider-images/pizza-9.png";
import pepper_2 from "./Assets/Images/home-slider-images/pizza-11.png";
import order_plate from "./Assets/Images/home-order-sec-icons/order-1.svg";
import order_truck from "./Assets/Images/home-order-sec-icons/order-2.svg";
import order_pizza from "./Assets/Images/home-order-sec-icons/order-3.svg";

export const CONFIG = {
  home_slider_data: [
    {
      id: 1,
      title: "quality foods",
      desc: "healthy food for healthy body",
      main_image: pizza_1,
      icons: [greens_1, greens_2, greens_3, greens_4],
    },
    {
      id: 2,
      title: "quality foods",
      desc: "healthy food for healthy body",
      main_image: pizza_2,
      icons: [tomato_1, greens_5, onion_1, onion_2, tomato_2, onion_3],
    },
    {
      id: 3,
      title: "quality foods",
      desc: "healthy food for healthy body",
      main_image: pizza_3,
      icons: [onion_4, tomato_3, pepper_1, greens_6, pepper_2, onion_5],
    },
  ],
  home_order_info: [
    {
      id: 1,
      title: "order your food",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eius - Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eius - Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eius -",
      img: order_plate,
    },
    {
      id: 2,
      title: "delivery or pick up",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eius - Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eius - Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eius -",
      img: order_truck,
    },
    {
      id: 3,
      title: "delicious receipe",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eius - Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eius - Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eius -",
      img: order_pizza,
    },
  ],
};
