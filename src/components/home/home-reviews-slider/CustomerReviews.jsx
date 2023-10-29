import React from "react";
import Container from "../../common/container/Container";
import "./CustomerReviews.scss";
import { useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y, Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import { ReviewsSlide } from "./ReviewsSlide";
import customer_top_picture from '../../../assets/pattern/customer-top-bg.png';
import customer_bottom_picture from '../../../assets/pattern/customer-bottom-bg.png'

export const CustomerReviews = () => {
  const reviews = useSelector((state) => state.reviews.reviews);
  console.log(reviews);
  return (
    <section className="customerReviews">
      <div className="customerReviews-top-picture">
        <img src={customer_top_picture} />
      </div>
      <Container>
        <div className="customerReviews-title">
          <p>What Say Our Clients</p>
          <h1>CUSTOMER REVIEWS</h1>
        </div>
          <div className="cusomerReviews-slider">
            <Swiper
              modules={[Navigation, A11y, Autoplay, Pagination]}
              // direction="vertical"
              space={50}
              slidesPerView={1}
              grabCursor
              pagination={{ clickable: true }}
              allowTouchMove={true}
              loop={true}
              autoplay={{
                delay: 3000,
              }}
            >
            {reviews.map(({ id, text, name, speciality, img }) => {
              return (
                <SwiperSlide key={id}>
                  <ReviewsSlide
                    id={id}
                    img={img}
                    name={name}
                    speciality={speciality}
                    text={text}
                  ></ReviewsSlide>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </Container>
      <div className="customerReviews-bottom-picture">
        <img src={customer_bottom_picture} />
      </div>
    </section>
  );
};
