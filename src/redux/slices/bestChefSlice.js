import { createSlice } from "@reduxjs/toolkit";
import chef1 from "../../assets/home-bestChef/chef1.jpg";
import chef2 from "../../assets/home-bestChef/chef2.jpg";
import chef3 from "../../assets/home-bestChef/chef3.jpg";
import chef4 from "../../assets/home-bestChef/chef4.jpg";

const initialState = {
  chefsData: [
    {
      id: 1,
      img: chef1,
      name: "JOHN DOE",
      speciality: "sous chef",
    },
    {
      id: 2,
      img: chef2,
      name: "JOHN DOE",
      speciality: "sous chef",
    },
    {
      id: 3,
      img: chef3,
      name: "JOHN DOE",
      speciality: "sous chef",
    },
    {
      id: 4,
      img: chef4,
      name: "JOHN DOE",
      speciality: "sous chef",
    },
    {
      id: 5,
      img: chef1,
      name: "JOHN DOE",
      speciality: "sous chef",
    },
    {
      id: 6,
      img: chef2,
      name: "JOHN DOE",
      speciality: "sous chef",
    },
    {
      id: 7,
      img: chef3,
      name: "JOHN DOE",
      speciality: "sous chef",
    },
    {
      id: 8,
      img: chef4,
      name: "JOHN DOE",
      speciality: "sous chef",
    },
  ],
};
const bestChefSlice = createSlice({
  name: "bestChef",
  initialState,
});

export default bestChefSlice.reducer;