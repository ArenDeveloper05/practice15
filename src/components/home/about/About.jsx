import './About.scss';
import Container from '../../common/container/Container';
import about_pizzon from '../../../assets/home/about/about-pizzon.png';
import { useState } from 'react';
import { useEffect } from 'react';

const About = () => {
    
    const [scrolled, setScrolled] = useState(false);
    useEffect(() => {
      // Function to handle the scroll event
      const handleScroll = () => {
        // Check if the scroll position is greater than 0
        if (window.scrollY > 5500) {
          setScrolled(true);
        } else {
          setScrolled(false);
        }
      };
  
      // Add the scroll event listener when the component mounts
      window.addEventListener("scroll", handleScroll);
  
      // Remove the scroll event listener when the component unmounts
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);

  return (
    <section className='about-pizzon'>
      <Container>
        <div className={`about-heading-part ${scrolled ? 'fadeInLeft' : ''}`}>
            <h2>Deilicous Restaurant</h2>
            <h1>ABOUT PIZZON</h1>
            <p>Sit amet consectetur adipisicing elit. Deserunt, ducimus architecto. Laboriosam ipsam nam fugiat, qui debitis perferendis ex illo? Nesciunt aspernatur velit mollitia iste. Pariatur esse dolore beatae sequi.
            Quos facilis voluptatum molestias explicabo, reiciendis amet itaque accusamus et quidem reprehenderit, expedita quibusdam ut iusto mollitia consectetur nostrum totam quis facere repellat veniam atque? Quisquam cupiditate nulla explicabo id?</p>
            <a href="#">VIEW MORE</a>
        </div>
        <div className={`about-image ${scrolled ? 'fadeInRight' : ''}`}>
            <img src={about_pizzon} alt="" />
        </div>
      </Container>
    </section>
  )
}

export default About
