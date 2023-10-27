import { useState, useEffect } from "react";
import {FaAngleUp} from "react-icons/fa6";
import { Link } from "react-router-dom";

const FadeUp = () => {
    const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    // Function to handle the scroll event
    const handleScroll = () => {
      // Check if the scroll position is greater than 0
      if (window.scrollY > 0 && scrolled === true) {
        return
      } else {
        setScrolled(true);
      }
    };

    // Add the scroll event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Remove the scroll event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const fadeUpDivStyle = {
    visibility: scrolled ? 'visible' : 'hidden',
    opacity: scrolled ? '1' : '0'
  };

  return (
    <div className='fade-up' style={fadeUpDivStyle}>
        <a href='#top'>
          <FaAngleUp />
        </a >
    </div>
  )
}

export default FadeUp
