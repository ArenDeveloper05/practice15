import { configureStore } from "@reduxjs/toolkit";
import specialMenuReducer from "./slices/SpecialMenuSlice"
import latestNewsReducer from "../redux/slices/latestNewsSlice";
import ourSpecialityReducer from "./slices/ourSpecialitySlice";
import pizzaReviewReducer from "./slices/pizzaReviewSlice";
import bestChefReducer from "../redux/slices/bestChefSlice";
import customerReviewsReducer from "../redux/slices/customerReviewsSlice";
import foodMenuReducer from "./slices/foodMenuSlice";

const store = configureStore({
    reducer: {
        ourSpeciality: ourSpecialityReducer,
        latestNews: latestNewsReducer,
        specialMenu: specialMenuReducer,
        pizzaReview: pizzaReviewReducer,
        bestChef: bestChefReducer,
        reviews: customerReviewsReducer,
        foodMenu: foodMenuReducer,
    }
})

export default store;
