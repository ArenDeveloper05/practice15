import { configureStore } from "@reduxjs/toolkit";
import specialMenuReducer from "./slices/SpecialMenuSlice";
import latestNewsReducer from "../redux/slices/latestNewsSlice";
import ourSpecialityReducer from "./slices/ourSpecialitySlice";
import pizzaReviewReducer from "./slices/pizzaReviewSlice";
import blogSidesPostsReducer from "./slices/blogSidesPostsSlice.js";
import blogSidesRecentPostsReducer from "./slices/blogSidesRecentPostsSlice";
import bestChefReducer from "../redux/slices/bestChefSlice";
import customerReviewsReducer from "../redux/slices/customerReviewsSlice";
import foodMenuReducer from "./slices/foodMenuSlice";
import blogDetailReducer from "./slices/blogDetailSlice";

const store = configureStore({
  reducer: {
    ourSpeciality: ourSpecialityReducer,
    latestNews: latestNewsReducer,
    specialMenu: specialMenuReducer,
    pizzaReview: pizzaReviewReducer,
    blogSidesPosts: blogSidesPostsReducer,
    blogSidesRecentPosts: blogSidesRecentPostsReducer,
    bestChef: bestChefReducer,
    reviews: customerReviewsReducer,
    foodMenu: foodMenuReducer,
    blogDetail: blogDetailReducer,
  },
});

export default store;
