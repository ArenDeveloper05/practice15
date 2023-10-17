import { useState } from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from "react-router-dom";
const Pagination = ({ pages }) => {
  const [page, setPage] = useState(1);
  return (
    <div className="main-blog-pagination">
      {pages.map(({ id }) => {
        return (
          <a href={"#"} key={id} className={id === page ? "active" : ""} onClick={() => {
              setPage(id);
            }}>
            {id}
          </a>
        );
      })}
      <Link to={"#"}>
        <FaLongArrowAltRight />
      </Link>
    </div>
  );
};

export default Pagination;
