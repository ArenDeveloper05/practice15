import { createSlice } from "@reduxjs/toolkit";
import customer1 from "../../assets/home-reviews/customer1.png";
import customer2 from "../../assets/home-reviews/customer2.jpg";
import customer3 from "../../assets/home-reviews/customer3.jpg";


const initialState = {
  reviews: [
    {
        id: 1,
        text: "The one day when the lady met this fellow and they knew it was much more than a hunch the first mate and his Skipper too will do their comforta",
        name: "JOHN DOE",
        speciality: "- designer",
        img: customer1,
        
      },
      {
        id: 2,
        text: "The one day when the lady met this fellow and they knew it was much more than a hunch the first mate and his Skipper too will do their comforta",
        name: "JOHN DOE",
        speciality: "- designer",
        img: customer2,
        
      },
      {
        id: 3,
        text: "The one day when the lady met this fellow and they knew it was much more than a hunch the first mate and his Skipper too will do their comforta",
        name: "JOHN DOE",
        speciality: "- designer",
        img: customer3,
        
      },
      
  ],
};

const customerReviewsSlice = createSlice({
  name: "reviews",
  initialState,
});

export default customerReviewsSlice.reducer;