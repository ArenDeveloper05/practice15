import { configureStore } from "@reduxjs/toolkit";
import specialMenuReducer from "./slices/SpecialMenuSlice"
import latestNewsReducer from "../redux/slices/latestNewsSlice";
import ourSpecialityReducer from "./slices/ourSpecialitySlice";
import pizzaReviewReducer from "./slices/pizzaReviewSlice";

const store = configureStore({
    reducer: {
        ourSpeciality: ourSpecialityReducer,
        latestNews: latestNewsReducer,
        specialMenu: specialMenuReducer,
        pizzaReview: pizzaReviewReducer,
    }
})

export default store;
