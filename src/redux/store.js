import { configureStore } from "@reduxjs/toolkit";
import specialMenuReducer from "./slices/SpecialMenuSlice"
import latestNewsReducer from "../redux/slices/latestNewsSlice";
import ourSpecialityReducer from "./slices/ourSpecialitySlice";

const store = configureStore({
    reducer: {
        ourSpeciality: ourSpecialityReducer,
        latestNews: latestNewsReducer,
        specialMenu: specialMenuReducer
    }
})

export default store;
