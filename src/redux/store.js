import { configureStore } from "@reduxjs/toolkit";
import latestNewsReducer from "../redux/slices/latestNewsSlice";
import ourSpecialityReducer from "./slices/ourSpecialitySlice";

const store = configureStore({
  reducer: {
    ourSpeciality: ourSpecialityReducer,
    latestNews: latestNewsReducer,
  },
});
export default store;

