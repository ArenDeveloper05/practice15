import { createSlice } from "@reduxjs/toolkit";
import pepperoni from "../../assets/header-images/menu-list-images/pepperoni.png";
import vegetarian from "../../assets/header-images/menu-list-images/vegetarian.png";
import specialty from "../../assets/header-images/menu-list-images/specialty.png";
import hamCheese from "../../assets/header-images/menu-list-images/hamCheese.png";
import onion from "../../assets/header-images/menu-list-images/onion.png";
import margherita from "../../assets/header-images/menu-list-images/margherita.png";
import { useParams } from "react-router-dom";

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
    filteredPizza: []
}

const pizzaReviewSlice = createSlice({
    name: "pizzaReview",
    initialState,
    reducers: {
        // filter: (state, {payload}) => {
        //     if(payload === "all") {
        //        state.filteredPizza = state.specialMenu 
        //     }else{
        //         const filteredBydesserts = state.specialMenu.filter((item) => item.type === payload)
        //         state.filteredPizza = filteredBydesserts;
        //     }
        // },
        filter: (state, {payload}) => {
            state.filteredPizza = state.pizzas.filter((item) => item.id === payload);
        }
    }
})

export default pizzaReviewSlice.reducer;
export const {filter} = pizzaReviewSlice.actions;