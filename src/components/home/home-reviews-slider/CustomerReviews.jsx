import React from "react";
import Container from "../../common/container/Container";
import "./CustomerReviews.scss";
import { useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y, Autoplay,  Pagination,} from "swiper/modules";
import "swiper/css";
import { ReviewsSlide } from "./ReviewsSlide";

export const CustomerReviews = () => {
  const reviews = useSelector((state) => state.reviews.reviews);
  console.log(reviews);
  return (
    <section className="cusomerReviews">
      <Container>
        <div className="cusomerReviews-title">
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
    </section>
  );
};
