import { createSlice } from "@reduxjs/toolkit";
import recent_post_1 from "../../assets/blog-bars-images/recent-1.jpg";
import recent_post_2 from "../../assets/blog-bars-images/recent-2.jpg";
import recent_post_3 from "../../assets/blog-bars-images/recent-3.jpg";



const initialState = [
    {
        id: 1,
        date: {
            day: 1,
            month: 9,
            year: 2020
        },
        img: recent_post_1,
        title: "Possession so comparison inquietu"
    }
    ,
    {
        id: 2,
        date: {
            day: 1,
            month: 9,
            year: 2020
        },
        img: recent_post_2,
        title: "OFFERS MADE SPECIALLY FOR KIDS"
    }
    ,
    {
        id: 3,
        date: {
            day: 1,
            month: 9,
            year: 2020
        },
        img: recent_post_3,
        title: "OUR WONDERFULLY PIZZA NEW TASTES"
    },
]
const blogSidesRecentPostsSlice = createSlice({
    name: "blogSidesRecentPosts",
    initialState,
})

export default blogSidesRecentPostsSlice.reducer;
export const selectRecentPosts = (state) => state.blogSidesRecentPosts;