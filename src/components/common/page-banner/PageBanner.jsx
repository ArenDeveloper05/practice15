import './PageBanner.scss';
import Container from '../container/Container';

const PageBanner = ({background, title, firstDirectionPoint, secondDirectionPoint, thirdDirectionPoint}) => {
  return (
    <section className="banner">
      <div className="banner-background" id='#top' style={{backgroundImage: `url(${background})`}}></div>
      <Container>
        <div className='banner-direction'>
          <h1>{title}</h1>
          <p>
            <span>{firstDirectionPoint}</span>
            /
            <span>{secondDirectionPoint}</span>
            {thirdDirectionPoint ? '/' : ''}
            {/* <span>{`${thirdDirectionPoint ? thirdDirectionPoint : null}`}</span> */}
            {thirdDirectionPoint ? <span>{thirdDirectionPoint}</span> : null}
          </p>
        </div>
      </Container>
    </section>
  )
}

export default PageBanner
