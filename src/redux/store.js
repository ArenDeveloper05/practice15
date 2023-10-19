import { configureStore } from "@reduxjs/toolkit";
import specialMenuReducer from "./slices/SpecialMenuSlice";
import latestNewsReducer from "../redux/slices/latestNewsSlice";
import ourSpecialityReducer from "./slices/ourSpecialitySlice";
import pizzaReviewReducer from "./slices/pizzaReviewSlice";
import blogSidesPostsSlice from "./slices/blogSidesPostsSlice.js";
import blogSidesRecentPostsSlice from "./slices/blogSidesRecentPostsSlice";
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
    blogSidesPosts: blogSidesPostsSlice,
    blogSidesRecentPosts: blogSidesRecentPostsSlice,
    bestChef: bestChefReducer,
    reviews: customerReviewsReducer,
    foodMenu: foodMenuReducer,
    blogDetail: blogDetailReducer,
  },
});

export default store;
