import { useSelector } from 'react-redux';
import { Swiper, SwiperSlide } from 'swiper/react';
import Slide from '../../../../home/home-slider/slide/Slide';

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Navigation } from 'swiper/modules';
import { useState } from 'react';


const PizzaThumbnailsSlider = () => {
    const thumbnailsData = useSelector((state) => state.pizzaReview.pizzaThumbnails);
    const [active, setActive] = useState(1);
    const handleImageClick = (id) => {
        setActive(id);
    }
  return (
    <div className="image-slider">
     <Swiper
        modules={[Navigation]}
        slidesPerView={1}
        navigation
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
     >
        {
            thumbnailsData.map(({id, img}) => {
               return (
                <SwiperSlide 
                key={id} >
                    <img 
                    src={img} 
                    onClick={() => {
                        handleImageClick(id)
                    }}
                    style={{opacity: active === id ? "1" : "0.5"}}
                    /> 
                </SwiperSlide> 
               )
            })
        }
     </Swiper>
    </div>
  );
};

export default PizzaThumbnailsSlider;
