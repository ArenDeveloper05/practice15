import { useSelector } from "react-redux";
import { CONFIG } from "../../../../config";
import "./BlogSideBar.scss";
import { BiSearch } from "react-icons/bi";
import { selectRecentPosts } from "../../../../redux/slices/blogSidesRecentPostsSlice";
import RecentPost from "./recent-post/RecentPost";

const BlogSideBar = () => {
  const recentPosts = useSelector(selectRecentPosts);
  const categories = CONFIG.blog_side_bar_categories;
  const tags = CONFIG.blog_side_bar_tags;

  return (
    <div className="blog-side-bar">
      <div className="blog-side-bar-search">
        <input type="text" placeholder="Search..." />
        <BiSearch />
      </div>
      <div className="blog-side-bar-categories">
        <h1>Categories</h1>
        <ul>
          {categories.map((title, i) => (
            <li key={i}>{title}</li>
          ))}
        </ul>
      </div>
      <div className="blog-side-bar-recent-posts">
        <h1>Recent Posts</h1>
        <div className="blog-side-bar-recent-posts-container">
          {recentPosts.map(({ id, date, img, title }) => {
            return <RecentPost id={id} date={date} img={img} title={title} key={id}/>;
          })}
        </div>
      </div>
      <div className="blog-side-bar-tags">
        <h1>Tags</h1>
        <div className="blog-side-bar-tags-container">
          {tags.map((tag, i) => (
            <a href="#" key={i}>
              {tag}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogSideBar;
