import PageBanner from "../../common/page-banner/PageBanner";
import "./BlogDetail.scss";
import blogBanner from "../../../assets/blog-images/blog-detail/blog-5.jpg";
import Container from "../../common/container/Container";
import bg from "../../../assets/blog-images/blog-detail/blog-2.jpg";
import tag from '../../../assets/blog-images/blog-detail/tag.jpg'
import { CONFIG } from "../../../config";
const BlogDetail = () => {
  return (
    <>
      <PageBanner
        background={blogBanner}
        title={"BLOG"}
        firstDirectionPoint={"Home"}
        secondDirectionPoint={"Blog"}
        thirdDirectionPoint={"Blog Detail"}
      />
      <section className="blog-detail">
        <Container>
          <div className="blog-detail-bg">
            <img src={bg} alt="" />
          </div>
          <div className="blog-detail-info">
            <div className="blog-detail-info-head">
              <p>By John Doe</p>
              <p>0 Comments</p>
            </div>
            <p className="blog-detail-info-title">
              POSSESSION SO COMPARISON INQUIETUDE HE CONVICTION
            </p>
            <span>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable. If you are going to use a passage of Lorem
              Ipsum, you need to be sure there isn't anything embarrassing
              hidden in the middle of text. All the Lorem Ipsum generators on
              the Internet tend to repeat predefined chunks as necessary, making
              this the first true generator on the Internet. It uses a
              dictionary of over 200 Latin words, combined with a handfulThere
              are many variations of passages of Lorem Ipsum available, but the
              majority have suffered alteration in some form, by injected
              humour, or randomised words which don't look even slightly
              believable. If you are going to use a passage of Lorem Ipsum, you
              need to be sure there isn't anything embarrassing hidden in the
              middle of text. All the Lorem Ipsum generators on the Internet
              tend to repeat predefined chunks as necessary, making this the
              first true generator on the Internet. It uses a dictionary of over
              200 Latin words, combined with a handful
            </span>
            <div className="blog-detail-info-center">
              <p>
                But I must explain to you how all this mistaken idea of
                denouncing pleasure and praising pain was born and I will give
                you a complete account of the system, and expound the actual
                teachings{" "}
              </p>
            </div>
            <span>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable. If you are going to use a passage of Lorem
              Ipsum, you need to be sure there isn't anything embarrassing
              hidden in the middle of text. All the Lorem Ipsum generators on
              the Internet tend to repeat predefined chunks as necessary, making
              this the first true generator on the Internet. It uses a
              dictionary of over 200 Latin words, combined with a handfulThere
              are many variations of passages of Lorem Ipsum available, but the
              majority have suffered alteration in some form, by injected
              humour, or randomised words which don't look even slightly
              believable. If you are going to use a passage of Lorem Ipsum, you
              need to be sure there isn't anything embarrassing hidden in the
              middle of text. All the Lorem Ipsum generators on the Internet
              tend to repeat predefined chunks as necessary, making this the
              first true generator on the Internet. It uses a dictionary of over
              200 Latin words, combined with a handful
            </span>
            <div className="blog-detail-info-tags">
              <p>Tags:</p>
              {CONFIG.blogDetailTags.map(({id, tag})=>{
                return (
                  <div key={id}>{tag}</div>
                )
              })}
            </div>
            <div className="blog-detail-info-author">
              <img src={tag} alt="" />
              <div>
                <p>JOHN DOE</p>
                <span>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth,</span>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default BlogDetail;
