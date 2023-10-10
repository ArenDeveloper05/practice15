import { BsTelephone } from "react-icons/bs";
import { SlHandbag } from "react-icons/sl";
import pepperoni from "./assets/header-images/menu-list-images/pepperoni.png";
import vegetarian from "./assets/header-images/menu-list-images/vegetarian.png";
import specialty from "./assets/header-images/menu-list-images/specialty.png";
import hamCheese from "./assets/header-images/menu-list-images/hamCheese.png";
import onion from "./assets/header-images/menu-list-images/onion.png";
import margherita from "./assets/header-images/menu-list-images/margherita.png";
// const CONFIG = {

// }
// export default CONFIG;

import pizza_1 from "./assets/Images/home-slider-images/banner-bg-1.png";
import pizza_3 from "./assets/Images/home-slider-images/pizza-banner-2.png";
import pizza_2 from "./assets/Images/home-slider-images/pizza-banner-1.png";
import greens_1 from "./assets/Images/home-slider-images/banner-bg-2.png";
import greens_2 from "./assets/Images/home-slider-images/banner-bg-3.png";
import greens_3 from "./assets/Images/home-slider-images/banner-bg-4.png";
import greens_4 from "./assets/Images/home-slider-images/banner-bg-5.png";
import greens_5 from "./assets/Images/home-slider-images/pizza-2.png";
import greens_6 from "./assets/Images/home-slider-images/pizza-10.png";
import tomato_1 from "./assets/Images/home-slider-images/pizza-1.png";
import tomato_2 from "./assets/Images/home-slider-images/pizza-5.png";
import tomato_3 from "./assets/Images/home-slider-images/pizza-8.png";
import onion_1 from "./assets/Images/home-slider-images/pizza-3.png";
import onion_2 from "./assets/Images/home-slider-images/pizza-4.png";
import onion_3 from "./assets/Images/home-slider-images/pizza-6.png";
import onion_4 from "./assets/Images/home-slider-images/pizza-7.png";
import onion_5 from "./assets/Images/home-slider-images/pizza-12.png";
import pepper_1 from "./assets/Images/home-slider-images/pizza-9.png";
import pepper_2 from "./assets/Images/home-slider-images/pizza-11.png";
import order_plate from "./assets/Images/home-order-sec-icons/order-1.svg";
import order_truck from "./assets/Images/home-order-sec-icons/order-2.svg";
import order_pizza from "./assets/Images/home-order-sec-icons/order-3.svg";

export const CONFIG = {
  headerConfig: [
    {
      id: 1,
      title: "HOME",
      icon: null,
    },
    {
      id: 2,
      title: "MENU",
      icon: null,
    },
    {
      id: 3,
      title: "BLOG",
      icon: null,
    },
    {
      id: 4,
      title: "RESERVATION",
      icon: null,
    },
    {
      id: 5,
      title: "PAGES",
      icon: null,
    },
    {
      id: 6,
      title: "+91 123 456 789",
      icon: <BsTelephone />,
    },
    {
      id: 7,
      title: "0 items - $0.00",
      icon: <SlHandbag />,
    },
    {
      id: 8,
      title: "ORDER ONLINE",
      icon: null,
    },
  ],
  menuConfig: {
    pizzas: [
      {
        id: 1,
        img: pepperoni,
        name: "Pepperoni",
        price: "$12.99",
      },
      {
        id: 2,
        img: vegetarian,
        name: "Pepperoni",
        price: "$12.99",
      },
      {
        id: 3,
        img: specialty,
        name: "Pepperoni",
        price: "$12.99",
      },
      {
        id: 4,
        img: hamCheese,
        name: "Pepperoni",
        price: "$12.99",
      },
      {
        id: 5,
        img: onion,
        name: "Pepperoni",
        price: "$12.99",
      },
      {
        id: 6,
        img: margherita,
        name: "Pepperoni",
        price: "$12.99",
      },
    ],
    menuListConfig: [
      {
        id: 1,
        title: "Menu list",
      },
      {
        id: 2,
        title: "Menu grid",
      },
      {
        id: 3,
        title: "Special Pizza",
      },
      {
        id: 4,
        title: "All pizza",
      },
    ],
  },
  blogListConfig: [
    {
      id: 1,
      title: "Blog Leftside",
    },
    {
      id: 2,
      title: "Blog Rightside",
    },
    {
      id: 3,
      title: "Blog Detail",
    },
  ],
  pagesListConfig: [
    {
      id: 1,
      title: "About Us",
    },
    {
      id: 2,
      title: "Contact",
    },
    {
      id: 3,
      title: "Shop Grid",
    },
    {
      id: 4,
      title: "404",
    },
  ],
  selectedDishes: [
    {
      id: 1,
      title: "M",
    },
    {
      id: 2,
      title: "Contact",
    },
  ],
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
// >>>>>>> 0703f4f41286e2a5ff0065b1904ec0d28b670c0a
