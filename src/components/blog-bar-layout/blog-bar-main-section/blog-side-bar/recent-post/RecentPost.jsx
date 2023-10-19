import { Link } from "react-router-dom";

const RecentPost = ({ id, date, img, title }) => {

  return (
    <div className="recent-post" key={id}>
      <div className="recent-post-img">
        <Link to={"/blog-detail"}>
          <img src={img} alt="recent-post" />
        </Link>
      </div>
      <div className="recent-post-desc">
        <p>{getFullDate(date)}</p>
        <Link to={"/blog-detail"}>
          <span>{title}</span>
        </Link>
      </div>
    </div>
  );
};

function getFullDate(date) {
  const { day, month, year } = date;
  const fullDate = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(year, month - 1, day));

  return fullDate;
}

export default RecentPost;
