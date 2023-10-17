import { Link } from "react-router-dom";
import Container from "../../common/container/Container";

const BlogBarBanner = () => {
  return (
    <div className="blog-bar-layout-banner">
      <Container>
        <div className="blog-bar-layout-banner-title">
          <h2>Blog</h2>
          <span>
            <Link to={"/"}>Home</Link> <span className="divider">/</span>
            blog left side bar
          </span>
        </div>
      </Container>
    </div>
  );
};

export default BlogBarBanner;
