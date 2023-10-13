import './PageBanner.scss';
import Container from '../container/Container';

const PageBanner = ({background, title, firstDirectionPoint, secondDirectionPoint, thirdDirectionPoint}) => {
  return (
    <section className="banner">
      <div className="banner-background" style={{backgroundImage: `url(${background})`}}></div>
      <Container>
        <div className='banner-direction'>
          <h1>{title}</h1>
          <p>
            <span>{firstDirectionPoint}</span>
            /
            <span>{secondDirectionPoint}</span>
            /
            <span>{thirdDirectionPoint}</span>
          </p>
        </div>
      </Container>
    </section>
  )
}

export default PageBanner
