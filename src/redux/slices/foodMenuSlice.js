import { createSlice } from "@reduxjs/toolkit";
import list1 from "../../assets/menu-images/food-menu/list-13.jpg";
import list2 from "../../assets/menu-images/food-menu/list-2.jpg";
import list3 from "../../assets/menu-images/food-menu/list-12.jpg";
import list4 from "../../assets/menu-images/food-menu/list-11.jpg";
import list5 from "../../assets/menu-images/food-menu/list-10.jpg";
import list6 from "../../assets/menu-images/food-menu/list-6.jpg";
import list7 from "../../assets/menu-images/food-menu/list-14.jpg";
import list8 from "../../assets/menu-images/food-menu/list-8.jpg";
import list9 from "../../assets/menu-images/food-menu/list-15.webp";

const initialState = {
  menu: [
    {
      id: 1,
      name: "STRAWBERRY SHORTCAKE",
      ingredient1: "Strawberries",
      ingredient2: "CREAM",
      ingredient3: null,
      description:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or",
      order: "ORDER NOW",
      img: list1,
      drink: false,
      salad: false,
      pasta: false,
      burger: false,
      dessert: true,
      pizza: false,
    },
    {
      id: 2,
      name: "BARBECUE PIZZA",
      ingredient1: "Chicken",
      ingredient2: "Olive Oil",
      ingredient3: "Salt",
      description:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or",
      order: "ORDER NOW",
      img: list2,
      drink: false,
      salad: false,
      pasta: false,
      burger: false,
      dessert: false,
      pizza: true,
    },
    {
      id: 3,
      name: "STRAWBERRY DAIQUIRI",
      ingredient1: "Lime juice",
      ingredient2: "Strawberries",
      ingredient3: "Light rum",
      description:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or",
      order: "ORDER NOW",
      img: list3,
      drink: true,
      salad: false,
      pasta: false,
      burger: false,
      dessert: false,
      pizza: false,
    },
    {
      id: 4,
      name: "BARBECUE PIZZA",
      ingredient1: "Chicken",
      ingredient2: "Olive Oil",
      ingredient3: "Salt",
      description:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or",
      order: "ORDER NOW",
      img: list4,
      drink: false,
      salad: false,
      pasta: false,
      burger: true,
      dessert: false,
      pizza: false,
    },
    {
      id: 5,
      name: "BARBECUE PIZZA",
      ingredient1: "Chicken",
      ingredient2: "Olive Oil",
      ingredient3: "Salt",
      description:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or",
      order: "ORDER NOW",
      img: list5,
      drink: false,
      salad: false,
      pasta: true,
      burger: false,
      dessert: false,
      pizza: false,
    },
    {
      id: 6,
      name: "BARBECUE PIZZA",
      ingredient1: "Chicken",
      ingredient2: "Olive Oil",
      ingredient3: "Salt",
      description:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or",
      order: "ORDER NOW",
      img: list6,
      drink: false,
      salad: false,
      pasta: false,
      burger: false,
      dessert: false,
      pizza: true,
    },
    {
      id: 7,
      name: "BARBECUE PIZZA",
      ingredient1: "Chicken",
      ingredient2: "Olive Oil",
      ingredient3: "Salt",
      description:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or",
      order: "ORDER NOW",
      img: list7,
      drink: false,
      salad: true,
      pasta: false,
      burger: false,
      dessert: false,
      pizza: false,
    },
    {
      id: 8,
      name: "BARBECUE PIZZA",
      ingredient1: "Chicken",
      ingredient2: "Olive Oil",
      ingredient3: "Salt",
      description:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or",
      order: "ORDER NOW",
      img: list8,
      drink: false,
      salad: false,
      pasta: false,
      burger: false,
      dessert: false,
      pizza: true,
    },
    {
      id: 9,
      name: "BARBECUE PIZZA",
      ingredient1: "Chicken",
      ingredient2: "Olive Oil",
      ingredient3: "Salt",
      description:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or",
      order: "ORDER NOW",
      img: list9,
      drink: false,
      salad: true,
      pasta: false,
      burger: false,
      dessert: false,
      pizza: false,
    },
  ],
  filteredMenu: [],
};
const foodMenuSlice = createSlice({
  name: "foodMenu",
  initialState,
  reducers: {
    setFilteredMenu: (state, action) => {
      const currentCategory = action.payload;
      if (currentCategory === "All") {
        state.filteredMenu = state.menu;
      } else {
        state.filteredMenu = state.menu.filter((item) => item[currentCategory] === true);
      }
    },
  },
});

export const { setFilteredMenu } = foodMenuSlice.actions;
export default foodMenuSlice.reducer;
