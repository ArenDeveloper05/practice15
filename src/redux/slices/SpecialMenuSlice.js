import { createSlice } from "@reduxjs/toolkit";
import menu1 from "../../assets/menu-images/menu-1.png";
import menu2 from "../../assets/menu-images/menu-2.png";
import menu3 from "../../assets/menu-images/menu-3.png";
import menu4 from "../../assets/menu-images/menu-4.png";
import menu5 from "../../assets/menu-images/menu-5.png";
import menu6 from "../../assets/menu-images/menu-6.png";
import menu7 from "../../assets/menu-images/menu-7.png";
import menu8 from "../../assets/menu-images/menu-8.png";

const initialState = {
    specialMenu: [
        {
            id: 1,
            image: menu1,
            name: "MARGHERITA PIZZA",
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            price: 20.50,
            type: "pizza",
            type2: "all",
            active: 1
        },
        {
            id: 2,
            image: menu2,
            name: "RUM WITH SODA",
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            price: 20.50,
            type: "drinks",
            type2: "all",
            active: 1
        },
        {
            id: 3,
            image: menu3,
            name: "CEASER SALAD",
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            price: 20.50,
            type: "salads",
            type2: "all",
            active: 1
        },
        {
            id: 4,
            image: menu4,
            name: "SEA FOOD PASTA",
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            price: 20.50,
            type: "pasta",
            type2: "all",
            active: 1
        },
        {
            id: 5,
            image: menu5,
            name: "CHOCOLATE COOKIES",
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            price: 20.50,
            type: "desserts",
            type2: "all",
            active: 1
        },
        {
            id: 6,
            image: menu6,
            name: "PEPPERONI PIZZA",
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            price: 20.50,
            type: "pizzas",
            type2: "all",
            active: 1
        },
        {
            id: 7,
            image: menu7,
            name: "BISMARCK PIZZA",
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            price: 20.50,
            type2: "all",
            active: 1
        },
        {
            id: 8,
            image: menu8,
            name: "VALDOSTANA PIZZA",
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            price: 20.50,
            type: "pizza",
            type2: "all",
            active: 1
        }
    ],
    filteredMenu: [{
        id: 1,
        image: menu1,
        name: "MARGHERITA PIZZA",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        price: 20.50,
        type: "pizza",
        type2: "all",
        active: 1
    },
    {
        id: 2,
        image: menu2,
        name: "RUM WITH SODA",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        price: 20.50,
        type: "drinks",
        type2: "all",
        active: 1
    },
    {
        id: 3,
        image: menu3,
        name: "CEASER SALAD",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        price: 20.50,
        type: "salads",
        type2: "all",
        active: 1
    },
    {
        id: 4,
        image: menu4,
        name: "SEA FOOD PASTA",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        price: 20.50,
        type: "pasta",
        type2: "all",
        active: 1
    },
    {
        id: 5,
        image: menu5,
        name: "CHOCOLATE COOKIES",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        price: 20.50,
        type: "desserts",
        type2: "all",
        active: 1
    },
    {
        id: 6,
        image: menu6,
        name: "PEPPERONI PIZZA",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        price: 20.50,
        type: "pizza",
        type2: "all",
        active: 1
    },
    {
        id: 7,
        image: menu7,
        name: "BISMARCK PIZZA",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        price: 20.50,
        type2: "all",
        active: 1
    },
    {
        id: 8,
        image: menu8,
        name: "VALDOSTANA PIZZA",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        price: 20.50,
        type: "pizza",
        type2: "all",
        active: 1
    }]

}
const SpecialMenuSlice = createSlice({
    name: "specialMenu",
    initialState,
    reducers: {
        filter: (state, {payload}) => {
            if(payload === "all") {
               state.filteredMenu = state.specialMenu 
            }else{
                const filteredBydesserts = state.specialMenu.filter((item) => item.type === payload)
                state.filteredMenu = filteredBydesserts;
            }
        },
        
    }
})

export default SpecialMenuSlice.reducer;
export const {filter} = SpecialMenuSlice.actions;
