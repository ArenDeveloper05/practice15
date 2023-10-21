import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useSelector } from 'react-redux';
import {GrClose} from "react-icons/gr";

const PizzaReviewModal = ({activeModal, setActiveModal, id, currentObject}) => {
    const thumbnailsData = useSelector((state) => state.pizzaReview.pizzas);
    const cloneThumbnailsData = [...thumbnailsData];
    let currentThumbnail = cloneThumbnailsData.splice([id - 1], 1);
    cloneThumbnailsData[0] = currentObject;
    
  return (
    <div className='pizza-preview-modal' style={{display: activeModal ? "block" : "none", opacity: activeModal ? "1" : "0"}}>
        <div 
        className='close-modal'
        onClick={() => {
            setActiveModal(false);
        }}
        >
            <GrClose />
        </div>
      <Swiper
        modules={[Navigation]}
        slidesPerView={1}
        navigation
        >
        {
            cloneThumbnailsData.map(({id, img}) => {
                return (
                <SwiperSlide key={id} >
                    <img src={img}/> 
                </SwiperSlide> 
                )
            })
        }
        </Swiper>
    </div>
  )
}

export default PizzaReviewModal
