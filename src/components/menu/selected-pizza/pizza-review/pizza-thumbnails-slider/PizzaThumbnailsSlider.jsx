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
import { useParams } from 'react-router-dom';


const PizzaThumbnailsSlider = ({currentObject, setCurrentObject}) => {
    console.log(currentObject);
    const {id} = useParams();
    const data = useSelector((state) => state.pizzaReview.pizzas);
    const [active, setActive] = useState(+id);
    ///
    // const [clicked, setClicked] = useState(false);
    ///
    const handleImageClick = (id) => {
        setActive(id);
    }

/////////
  return (
    <div className="image-slider">
     <Swiper
        modules={[Navigation]}
        slidesPerView={1}
        navigation
     >
        {
            data.map(({id, img}) => {
               return (
                <SwiperSlide 
                key={id} >
                    <img 
                    src={img} 
                    onClick={() => {
                        handleImageClick(id)
                        setCurrentObject({
                            ...currentObject,
                            id: id,
                            img: img
                        });
                    }}
                    style={{opacity: active === id ? "1" : "0.5"}}
                    /> 
                </SwiperSlide> 
               )
            })
        }
        {/* <div 
        className={`swiper-button-next ${clicked ? 'swiper-button-disabled' : ''}`}
        onClick={() => {
            setClicked(true);
        }}
        ></div> */}
     </Swiper>
    </div>
  );
};

export default PizzaThumbnailsSlider;
