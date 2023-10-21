import { createSlice } from "@reduxjs/toolkit";
// Pizzas
import pepperoni from "../../assets/header-images/menu-list-images/pepperoni.png";
import vegetarian from "../../assets/header-images/menu-list-images/vegetarian.png";
import specialty from "../../assets/header-images/menu-list-images/specialty.png";
import hamCheese from "../../assets/header-images/menu-list-images/hamCheese.png";
import onion from "../../assets/header-images/menu-list-images/onion.png";
import margherita from "../../assets/header-images/menu-list-images/margherita.png";
import olive from "../../assets/header-images/menu-list-images/olive.png";
import pepper from "../../assets/header-images/menu-list-images/pepper.png";
import chicken_meat from "../../assets/header-images/menu-list-images/chicken_meat.png";
import assorti from "../../assets/header-images/menu-list-images/olive.png";

// Pizza Review Comment 
import comment1 from "../../assets/header-images/pizza-review/comment1.jpg";
import comment2 from "../../assets/header-images/pizza-review/comment2.jpg";
import comment3 from "../../assets/header-images/pizza-review/comment3.jpg";

const months = [ 
  "January", "February",  
  "March", "April", "May",  
  "June", "July", "August", 
  "September", "October",  
  "November", "December" 
]; 

let today = new Date();
let dd = today.getDate();
let mm = String(months[today.getMonth()]).substring(0, 3); //January is 0!
let yyyy = today.getFullYear();

today = '(' + dd + ' ' + mm + ' ' + yyyy + ')';

const initialState = {
    pizzas: [
        {
          id: 1,
          img: pepperoni,
          name: "Pepperoni",
          price: "$12.99",
          last_price: "$30.50",
          description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Proin lectus ipsum, gravid: 1, mattis vulputate, tristique ut lectus. Sed et lorem nunc. ipsum primis in faucibus orci luctus et ultricesLorem Ipsum is simply dummy text of the printing and typesetting industry."
        },
        {
          id: 2,
          img: vegetarian,
          name: "Vegetarian",
          price: "$12.99",
          last_price: "$30.50",
          description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Proin lectus ipsum, gravid: 1, mattis vulputate, tristique ut lectus. Sed et lorem nunc. ipsum primis in faucibus orci luctus et ultricesLorem Ipsum is simply dummy text of the printing and typesetting industry."
        },
        {
          id: 3,
          img: specialty,
          name: "Specialty",
          price: "$12.99",
          last_price: "$30.50",
          description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Proin lectus ipsum, gravid: 1, mattis vulputate, tristique ut lectus. Sed et lorem nunc. ipsum primis in faucibus orci luctus et ultricesLorem Ipsum is simply dummy text of the printing and typesetting industry."
        },
        {
          id: 4,
          img: hamCheese,
          name: "Ham & Cheese",
          price: "$12.99",
          last_price: "$30.50",
          description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Proin lectus ipsum, gravid: 1, mattis vulputate, tristique ut lectus. Sed et lorem nunc. ipsum primis in faucibus orci luctus et ultricesLorem Ipsum is simply dummy text of the printing and typesetting industry."
        },
        {
          id: 5,
          img: onion,
          name: "Onion",
          price: "$12.99",
          last_price: "$30.50",
          description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Proin lectus ipsum, gravid: 1, mattis vulputate, tristique ut lectus. Sed et lorem nunc. ipsum primis in faucibus orci luctus et ultricesLorem Ipsum is simply dummy text of the printing and typesetting industry."
        },
        {
          id: 6,
          img: margherita,
          name: "Margheritapizza",
          price: "$12.99",
          last_price: "$30.50",
          description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Proin lectus ipsum, gravida et mattis vulputate, tristique ut lectus. Sed et lorem nunc. ipsum primis in faucibus orci luctus et ultricesLorem Ipsum is simply dummy text of the printing and typesetting industry."
        },
    ],
    pizzaThumbnails: [
      {
        id: 1,
        img: onion
      },
      {
        id: 2,
        img: onion
      },
      {
        id: 3,
        img: olive
      },
      {
        id: 4,
        img: pepper
      },
      {
        id: 5,
        img: chicken_meat
      },
      {
        id: 6,
        img: assorti
      }
    ],
    pizza_reviews : [
      {
        id: 1,
        img: comment1,
        name: "John Doe",
        description: "Lorem ipsum dolor sit amet adipiscing elit labore dolore that sed do eiusmod tempor labore dolore that magna aliqua. Ut enim ad minim veniam, exercitation.",
        reply_button: "Reply",
        date: today
      },
      {
        id: 2,
        img: comment2,
        name: "John Doe",
        description: "Lorem ipsum dolor sit amet adipiscing elit labore dolore that sed do eiusmod tempor labore dolore that magna aliqua. Ut enim ad minim veniam, exercitation.",
        reply_button: "Reply",
        date: today
      },
      {
        id: 3,
        img: comment3,
        name: "John Doe",
        description: "Lorem ipsum dolor sit amet adipiscing elit labore dolore that sed do eiusmod tempor labore dolore that magna aliqua. Ut enim ad minim veniam, exercitation.",
        reply_button: "Reply",
        date: today
      },
    ],
    pizza_in_basket: [
      {
        id: 1,
        img: margherita,
        name: 'Margherita Pizza',
        price: '$14.99',
        qty: 1
      },
      {
        id: 2,
        img: specialty,
        name: 'Greek Pizza',
        price: '$14.99',
        qty: 1
      }
    ],
    filteredPizza: []
}

const pizzaReviewSlice = createSlice({
    name: "pizzaReview",
    initialState,
    reducers: {
        filter: (state, {payload}) => {
            state.filteredPizza = state.pizzas.filter((item) => item.id === payload);
        }
    }
})

export default pizzaReviewSlice.reducer;
export const {filter} = pizzaReviewSlice.actions;