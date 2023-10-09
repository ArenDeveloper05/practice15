import { createSlice } from "@reduxjs/toolkit";
import news1 from "../../Assets/home-latestNews/news1.jpg";
import news2 from "../../Assets/home-latestNews/news2.jpg";
import news3 from "../../Assets/home-latestNews/news-3.jpg";

const initialState={
    latestNewsData: [
        {
            id: 1,
            img: news1,
            date1: "15",
            date2: "JUNE",
            by: "By - John Doe",
            comment: "0 Comments",
            title: "POSSESSION SO COMPARISON INQUIETUDE HE CONVICTION",
            more: "Read More"
        },
        {
            id: 2,
            img: news2,
            date1: "15",
            date2: "JUNE",
            by: "By - John Doe",
            comment: "0 Comments",
            title: "POSSESSION SO COMPARISON INQUIETUDE HE CONVICTION",
            more: "Read More"
        },
        {
            id: 3,
            img: news3,
            date1: "15",
            date2: "JUNE",
            by: "By - John Doe",
            comment: "0 Comments",
            title: "POSSESSION SO COMPARISON INQUIETUDE HE CONVICTION",
            more: "Read More"
        }
    ]
};

const latestNewsSlice = createSlice({
    name: "latestNews",
    initialState,
});

export default latestNewsSlice.reducer;
