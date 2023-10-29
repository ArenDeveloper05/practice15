import React from "react";

import { useSelector } from "react-redux";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y, Autoplay } from "swiper/modules";

import { BestChefSlide } from "./BestChefSlide";
import Container from "../../common/container/Container";

import top from '../../../assets/pattern/chef-top-bg.png';
import bottom from '../../../assets/pattern/chef-bottom-bg.png';

import "./BestChef.scss";
import "swiper/css";


export const BestChef = () => {
  const chefs = useSelector((state) => state.bestChef.chefsData);

  return (
    <section className="bestChef">
      <div className="bestChef-top-picture">
        <img src={top} alt="" />
      </div>
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
      <div className="bestChef-bottom-picture">
        <img src={bottom} />
      </div>
    </section>
  );
};
