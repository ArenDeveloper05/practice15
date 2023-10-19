import React from "react";
import Container from "../../common/container/Container";
import "./BestChef.scss";
import { useSelector } from "react-redux";
// import bg from "../../../assets/home-bestChef/chef-bottom-bg.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y, Autoplay } from "swiper/modules";
import "swiper/css";
import { BestChefSlide } from "./BestChefSlide";

export const BestChef = () => {
  const chefs = useSelector((state) => state.bestChef.chefsData);

  return (
    <section className="bestChef">
      {/* <div className="bestChef-bg">
        <img src={bg} alt="" />
      </div>
      <div className="bestChef-bg-2">
        <img src={bg} alt="" className="bestChef-bg-bottom" />
      </div> */}
      <Container>
        <div className="bestChef-title">
          <p>Meet our experts</p>
          <span>OUR BEST CHEF</span>
        </div>
        <div className="bestChef-slider">
          <Swiper
            modules={[Navigation, A11y, Autoplay]}
            space={50}
            slidesPerView={4}
            navigation
            grabCursor
            loop={true}
            autoplay={{
              delay: 3000,
            }}
            onSwiper={(swiper) => console.log(swiper)}
          >
            {chefs.map(({ id, img, name, speciality }) => {
              return (
                <SwiperSlide key={id}>
                  <BestChefSlide
                    id={id}
                    img={img}
                    name={name}
                    speciality={speciality}
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </Container>
    </section>
  );
};
