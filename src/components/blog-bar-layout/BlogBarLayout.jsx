import PageBanner from "../common/page-banner/PageBanner";
import "./BlogBarLayout.scss";
import BlogBarBanner from "./blog-bar-banner/BlogBarBanner";
import BlogBarMainSection from "./blog-bar-main-section/BlogBarMainSection";
import background from "../../assets/blog-bars-images/blog-1.jpg";
const BlogBarLayout = ({ side }) => {
  return (
    <div className="blog-bar-layout">
      <PageBanner
        background={background}
        title={"BLOG"}
        firstDirectionPoint={"Home"}
        secondDirectionPoint={"Blog Left Side Bar"}
      />
      <BlogBarMainSection side={side} />
    </div>
  );
};

export default BlogBarLayout;
