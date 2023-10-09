import { configureStore } from "@reduxjs/toolkit";
import latestNewsReducer from "../redux/slices/latestNewsSlice";
const store = configureStore({
    reducer:{
        latestNews: latestNewsReducer,
    }
})

export default store;