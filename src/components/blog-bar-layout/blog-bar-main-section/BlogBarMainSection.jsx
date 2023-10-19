import Container from "../../common/container/Container";
import BlogSideBar from "./blog-side-bar/BlogSideBar";
import MainBlog from "./main-blog/MainBlog";

const BlogBarMainSection = ({side}) => {
  return (
    <Container>
      <div
        className="blog-bar-main-section"
        style={{ flexDirection: side === "right" ? "row" : "row-reverse" }}
      >
        <MainBlog />
        <BlogSideBar />
      </div>
    </Container>
  );
};

export default BlogBarMainSection;
