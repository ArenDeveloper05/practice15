import { createSlice } from "@reduxjs/toolkit";
import speciality1 from "./../../assets/home/speciality/speciality1.jpg";
import speciality2 from "./../../assets/home/speciality/speciality2.jpg";
import speciality3 from "./../../assets/home/speciality/speciality3.jpg";

const initialState = {
  ourSpectalityData: [
    {
      id: 1,
      src: speciality1,
      type: "MEXICAN GREEN WAVE",
    },
    {
      id: 2,
      src: speciality2,
      type: "DOUBLE CHEESE PIZZA",
    },
    {
      id: 3,
      src: speciality3,
      type: "MARGHERITA PIZZA",
    },
  ],
};

const ourSpecialitySlice = createSlice({
  name: "ourSpeciality",
  initialState,
  redusers: {},
});

export default ourSpecialitySlice.reducer;
