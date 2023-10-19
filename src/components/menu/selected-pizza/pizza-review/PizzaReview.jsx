import { useSelector } from "react-redux";
import Container from "../../../common/container/Container";
import "./PizzaReview.scss";
import PizzaReviewForm from "./pizza-order-form/PizzaOrderForm";
import WishList from "./wishlist/WishList";
import PizzaThumbnailsSlider from "./pizza-thumbnails-slider/PizzaThumbnailsSlider";
import { useRef, useState } from "react";
import DescriptionReview from "./description-review/DescriptionReview";
import RelatedProducts from "./related-products/RelatedProducts";

// SWIPER
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import PizzaReviewModal from "./pizza-review-modal/PizzaReviewModal";
const PizzaReview = ({ id }) => {

  //////
const [hoverPosition, setHoverPosition] = useState({ x: 0, y: 0 });
const [showPreview, setShowPreview] = useState(false);
const [activeModal, setActiveModal] = useState(false);

const imageContainerRef = useRef(null);


const handleMouseMove = (e) => {
  const { top, left, width, height } = imageContainerRef.current.getBoundingClientRect();
  const x = (e.clientX - left) / width;
  const y = (e.clientY - top) / height;
  setHoverPosition({ x, y });
  setShowPreview(true);
};

const handleMouseLeave = () => {
  setShowPreview(false);
};

const hoverDivStyle = {
  left: hoverPosition.x - 90,
  top: hoverPosition.y - 90,
  display: showPreview ? 'block' : 'none',
  transform: `translate(${hoverPosition.x * 300}px, ${hoverPosition.y * 300}px)`
};

 //////
  const thumbnailsData = useSelector((state) => state.pizzaReview.pizzaThumbnails);
  const data = useSelector((state) => state.pizzaReview.pizzas);
  const selectedObject = data.find((item) => item.id === Number(id));
  ////
  const magnifiedDivStyle = {
    backgroundImage: `url(${selectedObject.img})`,
    backgroundSize: '130% 130%',
    backgroundPosition: `${(hoverPosition.x * 100) - 30}% ${(hoverPosition.y * 100) - 30}%`,
    opacity: showPreview ? 1 : 0,
    display: showPreview ? "block" : "none"
  };
  

  return (
    <section>
      <Container>
        <section key={id} className="pizza-order">
          <div className="pizza">
            <div 
            className="main-image-square" 
            onMouseLeave={handleMouseLeave} 
            onMouseMove={handleMouseMove} 
            ref={imageContainerRef}
            onClick={() => {
              setActiveModal(true);
            }}
            >
              <div className="hover-square" style={hoverDivStyle}></div>
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
                        <SwiperSlide key={id} >
                          <img src={img}/> 
                        </SwiperSlide> 
                      )
                    })
                }
              </Swiper>
            </div>
            <PizzaThumbnailsSlider />
          </div>
          <div className="pizza-order-list">
            <h1>{selectedObject.name}</h1>
            <p>
              <span className="last-price">{selectedObject.last_price}</span>
              <span>{selectedObject.price}</span>
            </p>
            <p>{selectedObject.description}</p>
            <PizzaReviewForm />
            <WishList />
          </div>
          <div className="preview-div" style={magnifiedDivStyle}></div>
        </section>
        <DescriptionReview />
        <RelatedProducts />
      </Container>
      <PizzaReviewModal activeModal={activeModal} setActiveModal={setActiveModal}/>
    </section>
  );
};

export default PizzaReview;
