import { BsTelephone } from "react-icons/bs";
import { SlHandbag } from "react-icons/sl";
import pepperoni from "./assets/header-images/menu-list-images/pepperoni.png";
import vegetarian from "./assets/header-images/menu-list-images/vegetarian.png";
import specialty from "./assets/header-images/menu-list-images/specialty.png";
import hamCheese from "./assets/header-images/menu-list-images/hamCheese.png";
import onion from "./assets/header-images/menu-list-images/onion.png";
import margherita from "./assets/header-images/menu-list-images/margherita.png";
import logo from "./assets/header-images/header-logo.png";
import rum_with_soda from "./assets/header-images/menu-list-images/rum-with-soda.png";
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


import {FaHeart, FaEnvelope, FaSignal, FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram} from "react-icons/fa6";
export const CONFIG = {
  specialMenuConfig: [
    { id: 1, title: "ALL", type: "All" },
    { id: 2, title: "DRINKS", type: "drink" },
    { id: 3, title: "SALADS", type: "salad" },
    { id: 4, title: "PASTA", type: "pasta" },
    { id: 5, title: "BURGERS", type: "burger"},
    { id: 6, title: "DESSERTS", type: "dessert" },
    { id: 7, title: "PIZZAS", type: "pizza" },
  ],
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
        name: "Vegetarian",
        price: "$12.99",
      },
      {
        id: 3,
        img: specialty,
        name: "Specialty",
        price: "$12.99",
      },
      {
        id: 4,
        img: hamCheese,
        name: "Ham & Cheese",
        price: "$12.99",
      },
      {
        id: 5,
        img: onion,
        name: "Onion",
        price: "$12.99",
      },
      {
        id: 6,
        img: margherita,
        name: "Margheritapizza",
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
  singlePizzaOrderList: {
    crusts: [
      {
        id: 1,
        crust: "Classic Hand Tossed",
      },
      {
        id: 2,
        crust: "Wheat Thin Crust",
      },
      {
        id: 3,
        crust: "Classic Hand Tossed",
      }
    ],
    crusts_size: [
      {
        id: 1,
        crust: "Medium",
      },
      {
        id: 2,
        crust: "Large",
      },
      {
        id: 3,
        crust: "Regular",
      }
    ],
    compare: [
      {
        id: 1,
        icon: <FaHeart />,
        name: "WishList"
      },
      {
        id: 2,
        icon: <FaSignal />,
        name: "Compare"
      },
      {
        id: 3,
        icon: <FaEnvelope />,
        name: "Email to Friends"
      }
    ],
    share: [
      {
        id: 1,
        icon: null,
        name: "Share This :"
      },
      {
        id: 2,
        icon: <FaFacebookF />,
        name: null
      },
      {
        id: 3,
        icon: <FaTwitter />,
        name: null
      },
      {
        id: 4,
        icon: <FaLinkedinIn />,
        name: null
      },
      {
        id: 5,
        icon: <FaInstagram />,
        name: null
      }
    ]
  },
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
  footerConfig:{
    footer_header:[
      {
        id: 1,
        image: logo,
        title: null
      },
      {
        id: 2,
        image: null,
        title: "OPENING HOURS"
      },
      {
        id: 3,
        image: null,
        title: "USEFUL LINKS"
      },
    ],
    first_footer_list:[
      {
        id: 1,
        title: "20 Carrochan Rd, Balloch, Alexandria G83 8EG, UK 69QJ+2F Alexandria, United Kingdom",
      },
      {
        id: 2,
        title: "PHONE - +91 123 456 789 0, +91 123 456 789 0",
      },
      {
        id: 3,
        title: "EMAIL - info@gmail.com",
      }
    ],
    second_footer_list:{
      first_column: [
        {
          id: 1,
          title:  "Mon - Tues :"
        },
        {
          id: 2,
          title:  "Wednes - Thurs :"
        },
        {
          id: 3,
          title:  "Launch :"
        },
        {
          id: 4,
          title:  "Sunday :"
        }
      ],
      second_column: [
        {
          id: 1,
          title:  "6.00 am - 10.00 pm"
        },
        {
          id: 2,
          title:  "6.00 am - 10.00 pm"
        },
        {
          id: 3,
          title:  "Everyday"
        },
        {
          id: 4,
          title:  "Closed"
        }
      ]
    },
    third_footer_list:[
      {
        id: 1,
        title: "Privacy Policy",
      },
      {
        id: 2,
        title: "Order Tracking",
      },
      {
        id: 3,
        title: "Warranty and Services",
      },
      {
        id: 4,
        title: "About",
      },
      {
        id: 5,
        title: "Contact Us",
      },
      {
        id: 6,
        title: "Wishlist",
      }
    ]
  },
  blog_side_bar_categories: ["decorate", "even", "gallery", "recipe", "restaurant food"],
  blog_side_bar_tags: ["cooking", "food", "pellentesfetque", "restaurant Food", "nulla pellentesque", "cooking"],
  related_products : [
    {
      id: 1,
      img: margherita,
      name: "MARGHERITA PIZZA",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      price: "$20.50"
    },
    {
      id: 2,
      img: rum_with_soda,
      name: "RUM WITH SODA",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      price: "$20.50"
    },
    {
      id: 3,
      img: vegetarian,
      name: "VEGETARIAN",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      price: "$20.50"
    },
    {
      id: 4,
      img: pepperoni,
      name: "PEPPERONI PIZZA",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      price: "$20.50"
    },
  ],
  blogDetailTags: [
    { id: 1, tag: "Planing" },
    { id: 2, tag: "Business" },
    { id: 3, tag: "Fashion" },
    { id: 4, tag: "Consulting" },
  ],
};
