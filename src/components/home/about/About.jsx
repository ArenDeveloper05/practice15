import './About.scss';
import Container from '../../common/container/Container';
import about_pizzon from '../../../assets/home/about/about-pizzon.png';

const About = () => {
  return (
    <section className='about-pizzon'>
      <Container>
        <div className="about-heading-part">
            <h2>Deilicous Restaurant</h2>
            <h1>ABOUT PIZZON</h1>
            <p>Sit amet consectetur adipisicing elit. Deserunt, ducimus architecto. Laboriosam ipsam nam fugiat, qui debitis perferendis ex illo? Nesciunt aspernatur velit mollitia iste. Pariatur esse dolore beatae sequi.
            Quos facilis voluptatum molestias explicabo, reiciendis amet itaque accusamus et quidem reprehenderit, expedita quibusdam ut iusto mollitia consectetur nostrum totam quis facere repellat veniam atque? Quisquam cupiditate nulla explicabo id?</p>
            <a href="#">VIEW MORE</a>
        </div>
        <div className="about-image">
            <img src={about_pizzon} alt="" />
        </div>
      </Container>
    </section>
  )
}

export default About
