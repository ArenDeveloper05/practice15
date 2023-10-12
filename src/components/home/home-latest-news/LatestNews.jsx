import "./LatestNews.scss";
import Container from "../../common/container/Container";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

export const LatestNews = () => {
  const newsdata = useSelector((state) => state.latestNews.latestNewsData);
  const navigate = useNavigate();
  return (
    <section className="news">
      <Container>
        <div className="news-title">
          <p>Recent Events</p>
          <h1>LATEST NEWS</h1>
        </div>
        <div className="news-info">
          {newsdata.map(
            ({ id, img, date1, date2, by, comment, title, more }) => {
              return (
                <div
                  className="news-info-details"
                  key={id}
                  onClick={() => {
                    navigate("/blog-details");
                  }}
                >
                  <div className="news-info-details-img">
                    <img src={img} alt="" />
                    <div className="news-info-details-img-date">
                      <span>
                        {date1} <br /> {date2}
                      </span>
                    </div>
                    <div className="bg"></div>
                  </div>
                  <div className="news-info-details-author">
                    <p>{by}</p>
                    <p>{comment}</p>
                  </div>
                  <a href="/blog-detail" className="news-info-details-title">
                    {title}
                  </a>
                  <Link to={"/blog-detail"} className="news-info-details-more">
                    {more}
                  </Link>
                </div>
              );
            }
          )}
        </div>
      </Container>
    </section>
  );
};
