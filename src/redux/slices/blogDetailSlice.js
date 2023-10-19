import { createSlice } from "@reduxjs/toolkit";
import comment1 from "../../assets/blog-images/blog-detail/comment-1.jpg";
import comment2 from "../../assets/blog-images/blog-detail/comment-2.jpg";
import comment3 from "../../assets/blog-images/blog-detail/comment-3.jpg";

const initialState = {
  blogDetail: [
    {
      id: 1,
      img: comment1,
      title: "JOHN DOE",
      text: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system.",
      link: "REPLY",
    },
    {
      id: 2,
      img: comment2,
      title: "JOHN DOE",
      text: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system.",
      link: "REPLY",
    },
    {
      id: 3,
      img: comment3,
      title: "JOHN DOE",
      text: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system.",
      link: "REPLY",
    },
  ],
};
const blogDetailSlice = createSlice({
  name: "blogDetail",
  initialState,
});
export default blogDetailSlice.reducer;
