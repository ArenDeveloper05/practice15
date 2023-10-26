import './Error.scss'
import errorImg1 from "../../assets/error-images/error-img1.png"
import errorImg2 from "../../assets/error-images/error-img2.png"
import Container from '../common/container/Container'

const Error = () => {
  return (
    <section className='error'>
        <Container>
            <div className="error-img">
                <img src={errorImg2} alt="" />
                <img src={errorImg1} alt="" />
            </div>
            <h2>Ooops! 404 - Page Not Found</h2>
            <a href="/">BACK TO HOME</a>
        </Container>
    </section>
  )
}

export default Error