import { configureStore } from "@reduxjs/toolkit";
import specialMenuReducer from "./slices/SpecialMenuSlice"

const store = configureStore({
    reducer: {
        specialMenu: specialMenuReducer
    }
})

export default store;