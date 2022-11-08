import { Container } from 'react-bootstrap';
import BannerImg from '../../assets/banner.jpg';
import './Banner.css';

const Banner = () => {
  return (
    <section id='banner' style={{backgroundImage: `url(${BannerImg})`}}>
      <Container>
         <div className="banner-content">
            <h1>A messy kitchen is a sign of happiness.</h1>
            <p>Our best Reviewing recipes including Beef-Samosas, Chicken Curry, Fish Curry and more.</p>
         </div>
      </Container>
    </section>
  )
}

export default Banner