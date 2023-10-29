import React, { useEffect, useState } from "react";
import "./About.scss";
import { BiPlay } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai"

import VideoPlayer from "./VideoPlayer"; // Import your VideoPlayer component
import aboutImg from "../../assets/about/about-1.jpg";
import storyImg from "../../assets/about/story.png";
import videoImg from "../../assets/about/about-video-img.jpg";
import about_banner_picture from '../../assets/about/about_banner.jpg';

import PageBanner from '../common/page-banner/PageBanner';
import { CustomerReviews } from "../home/home-reviews-slider/CustomerReviews";
import { Booking } from "../home/home-section-booking/Booking";

const About = () => {
  const [showVideo, setShowVideo] = useState(false);

  
//   useEffect(() => {
//     const body = document.querySelector('body');
//     if (showVideo) {
//         body.classList.add('darken-page');
//     } else {
//         body.classList.remove('darken-page');
//     }
// }, [showVideo]);

const [scrolled, setScrolled] = useState(false);
const [scrolledStory, setScrolledStory] = useState(false);
const [scrollVideo, setScrollVideo] = useState(false);
    useEffect(() => {
      // Function to handle the scroll event
      const handleScroll = () => {
        // debugger;
        // Check if the scroll position is greater than 0
        if (window.scrollY > 0 && scrolled === true) {
          return
        } else {
          setScrolled(true);
        }
        if(window.scrollY > 500) {
            if(scrolledStory === true) {
                return
            } else {
                setScrolledStory(true);
            }
        }
        if(window.scrollY > 1100) {
            if(scrollVideo === true) {
                return
            } else {
                setScrollVideo(true);
            }
        }
      }
      // Add the scroll event listener when the component mounts
      window.addEventListener("scroll", handleScroll);
      
      // Remove the scroll event listener when the component unmounts
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);


  return (
    <section className="about-page">  
    <PageBanner 
        background={about_banner_picture}
        title='ABOUT US'
        firstDirectionPoint='Home'
        secondDirectionPoint='About Us'
      />
    <div className="darken-page" style={{display: showVideo?"block":"none"}}></div>

    <div className="about">
        <div className='about-pizzon'>
            <div className='about-img'>
                <img src={aboutImg} alt="" />
            </div>
            <div className={`about-pizzon-text ${scrolled ? 'fadeInRight' : ''}`}>
                <span>Delicious Restaurant</span>
                <h2>ABOUT PIZZON</h2>
                <p>Sit amet, consectetur adipiscing elit quisque eget maximus velit, non eleifend libero curabitur dapibus mauris sed leo cursus aliquetcras suscipit. Sit amet, consectetur adipiscing elit quisque eget maximus velit, non eleifend libero curabitur Sit amet, consectetur adipiscing elit quisque eget maximus velit, non eleifend libero curabitur dapibus mauris sed leo cursus aliquetcras suscipit. Sit amet.</p>
            </div>
        </div>
        <div className='story' >
            <span className={`${scrolledStory ? 'fadeUp' : ''}`}>Discover</span>
            <h2 className={`${scrolledStory ? 'fadeUp' : ''}`}>OUR STORY</h2>
            <div className={`${scrolledStory ? 'fadeUp' : ''}`}>
                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful</p>
                <img src={storyImg} alt="" />
            </div>
        </div>
        <div className="experience">
            <div 
            className={`experience-image ${scrollVideo ? 'fadeInLeft' : ''}`}
            onClick={() => {
                setShowVideo(true)
            }}
            >
                <img src={videoImg} alt="" />
                <div className="video-play">
                    <BiPlay className="vector-right"/>
                </div>
            </div>
            <div className={`experience-text ${scrollVideo ? 'fadeInRight' : ''}`}>
                <span>Modern Cuisine</span>
                <h2>EXPERIENCE</h2>
                <p>Sit amet, consectetur adipiscing elit quisque eget maximus velit, non eleifend libero curabitur dapibus mauris sed leo cursus aliquetcras suscipit. Sit amet, consectetur adipiscing elit quisque eget maximus velit, non eleifend libero curabitur Sit amet, consectetur adipiscing elit quisque eget maximus velit, non eleifend libero curabitur dapibus mauris sed leo cursus aliquetcras suscipit. Sit amet.</p>
            </div>
            {showVideo?(
            <div className="youtube-video-bg">
                <AiOutlineClose className="video-close" onClick={() => {
                    setShowVideo(false)
                }}/>
                <VideoPlayer className="youtube-video"/>
            </div>
            ):""}
        </div>
    </div>
    <CustomerReviews />
    <Booking />
    </section>
  )
}

export default About