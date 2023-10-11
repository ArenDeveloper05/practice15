import { configureStore } from "@reduxjs/toolkit";
import ourSpecialityReducer from "./slices/ourSpecialitySlice";

const store = configureStore({
  reducer: {
    ourSpeciality: ourSpecialityReducer,
  },
});
export default store;
