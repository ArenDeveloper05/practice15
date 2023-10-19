import "./MainBlog.scss";
import { useSelector } from "react-redux";
import Blog from "./blog/Blog";
import Pagination from "./blog/pagination/Pagination";

const MainBlog = () => {
  const blogSidesData = useSelector((state) => {
    return state.blogSidesPosts;
  });

  console.log(blogSidesData);
  return (
    <div className="main-blog">
      {blogSidesData.map(({ id, img, author, title, comments, desc }) => (
        <Blog
          key={id}
          img={img}
          desc={desc}
          title={title}
          author={author}
          comments={comments}
        />
      ))}
      <Pagination pages={blogSidesData} />
    </div>
  );
};

export default MainBlog;
