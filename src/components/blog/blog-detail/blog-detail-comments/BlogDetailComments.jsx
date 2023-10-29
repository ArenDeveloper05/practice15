import { useSelector } from "react-redux";
import { FaReply } from "react-icons/fa";
import "./BlogDetailComments.scss";

const BlogDetailComments = () => {
  const data = useSelector((state) => state.blogDetail.blogDetail);
  return (
    <div className="blog-detail-comments">
      <div className="blog-detail-comments-see">
        <h3>Comments</h3>
        {data.map(({ id, img, title, text, link }) => {
          return (
            <div className="blog-detail-comments-see-item" key={id}>
              <div className="blog-detail-comments-see-item-img">
                <img src={img} alt="" />
              </div>
              <div className="blog-detail-comments-see-item-text">
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
                  <a href="#">
                    <FaReply />
                    {link}
                  </a>
              </div>
            </div>
          );
        })}
      </div>
      <div className="blog-detail-comments-leave">
        <h2>LEAVE YOUR COMMENTS</h2>
        <form className="blog-detail-comments-leave-form">
          <div className="blog-detail-comments-leave-form-input">
            <input type="text" placeholder="Name" />
          </div>
          <div className="blog-detail-comments-leave-form-input">
            <input type="email" placeholder="Email" />
          </div>
          <div className="blog-detail-comments-leave-form-input">
            <input type="subject" placeholder="Subject" />
          </div>
          <div className="blog-detail-comments-leave-form-area">
            <textarea placeholder="Write Your Comment"></textarea>
          </div>
          <input
            type="submit"
            value="Post Comment"
            className="blog-detail-comments-leave-form-submit"
          />
        </form>
      </div>
    </div>
  );
};
export default BlogDetailComments;
